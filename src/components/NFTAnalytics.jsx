import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale
} from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale
);

const NFTAnalytics = () => {
  const [activeMetric, setActiveMetric] = useState('price');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [showTrendingCollections, setShowTrendingCollections] = useState(true);

  // Données des collections en tendance
  const trendingCollections = [
    {
      id: 1,
      name: "Bored Ape Yacht Club",
      floorPrice: 68.49,
      priceChange: 12.5,
      volume24h: 1205.8,
      volumeChange: 45.2,
      holders: 6287,
      holdersChange: 2.3,
      image: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"
    },
    {
      id: 2,
      name: "CryptoPunks",
      floorPrice: 54.95,
      priceChange: -3.2,
      volume24h: 892.4,
      volumeChange: 28.7,
      holders: 3456,
      holdersChange: 1.5,
      image: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format"
    },
    {
      id: 3,
      name: "Azuki",
      floorPrice: 12.88,
      priceChange: 8.7,
      volume24h: 456.2,
      volumeChange: 15.8,
      holders: 5123,
      holdersChange: 4.2,
      image: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?w=500&auto=format"
    }
  ];

  // Statistiques globales du marché
  const marketStats = {
    totalVolume: "2.5M ETH",
    volumeChange: "+15.8%",
    activeTraders: "124.5K",
    tradersChange: "+8.2%",
    avgTransactionValue: "2.8 ETH",
    transactionChange: "-3.5%",
    totalCollections: "12.8K",
    collectionsChange: "+2.1%"
  };

  // KPIs avancés
  const advancedKPIs = [
    {
      category: "Activité du Marché",
      metrics: [
        {
          icon: "📈",
          label: "Volume Total",
          value: marketStats.totalVolume,
          change: marketStats.volumeChange,
          trend: "up"
        },
        {
          icon: "👥",
          label: "Traders Actifs",
          value: marketStats.activeTraders,
          change: marketStats.tradersChange,
          trend: "up"
        },
        {
          icon: "💰",
          label: "Valeur Moyenne",
          value: marketStats.avgTransactionValue,
          change: marketStats.transactionChange,
          trend: "down"
        },
        {
          icon: "🎨",
          label: "Collections",
          value: marketStats.totalCollections,
          change: marketStats.collectionsChange,
          trend: "up"
        }
      ]
    },
    {
      category: "Analyse Technique",
      metrics: [
        {
          icon: "📊",
          label: "RSI",
          value: "62.5",
          change: "+5.2",
          trend: "neutral"
        },
        {
          icon: "📉",
          label: "Support",
          value: "52.4 ETH",
          change: "Fort",
          trend: "up"
        },
        {
          icon: "📈",
          label: "Résistance",
          value: "75.8 ETH",
          change: "Moyen",
          trend: "neutral"
        },
        {
          icon: "🎯",
          label: "Volatilité",
          value: "28.5%",
          change: "-2.3%",
          trend: "down"
        }
      ]
    },
    {
      category: "Sentiment & Social",
      metrics: [
        {
          icon: "🌟",
          label: "Score Social",
          value: "8.5/10",
          change: "+0.3",
          trend: "up"
        },
        {
          icon: "💬",
          label: "Mentions",
          value: "25.8K",
          change: "+42%",
          trend: "up"
        },
        {
          icon: "👍",
          label: "Sentiment",
          value: "Très Positif",
          change: "+15%",
          trend: "up"
        },
        {
          icon: "🔥",
          label: "Hype Score",
          value: "92/100",
          change: "+8",
          trend: "up"
        }
      ]
    }
  ];

  // Données historiques de prix
  const historicalPriceData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Prix Moyen (ETH)',
        data: [45.2, 52.8, 48.6, 58.9, 75.4, 68.2, 72.5, 85.3, 92.1, 88.4, 95.2, 89.8],
        borderColor: '#6c5ce7',
        backgroundColor: 'rgba(108, 92, 231, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Prix Plancher (ETH)',
        data: [38.5, 42.3, 40.1, 45.6, 58.2, 52.4, 56.8, 65.4, 72.3, 70.1, 75.8, 71.2],
        borderColor: '#00cec9',
        backgroundColor: 'rgba(0, 206, 201, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  // Options communes pour les graphiques
  const commonOptions = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        }
      }
    }
  };

  return (
    <div className="dashboard-container">
      {/* En-tête du Dashboard */}
      <div className="dashboard-header">
        <div className="header-title">
          <h1>NFT Analytics Dashboard</h1>
          <span className="subtitle">Analyses en temps réel du marché NFT</span>
        </div>
        <div className="header-actions">
          <button className="time-range-selector">
            <span className="icon">📅</span>
            Derniers 30 jours
          </button>
          <button className="refresh-button">
            <span className="icon">🔄</span>
            Actualiser
          </button>
        </div>
      </div>

      {/* Section des KPIs */}
      {advancedKPIs.map((section, index) => (
        <div key={index} className="kpi-section">
          <h2 className="section-title">{section.category}</h2>
          <div className="kpi-grid">
            {section.metrics.map((metric, mIndex) => (
              <div key={mIndex} className="kpi-card">
                <div className="kpi-icon">{metric.icon}</div>
                <div className="kpi-content">
                  <h3>{metric.label}</h3>
                  <div className="kpi-value">{metric.value}</div>
                  <div className={`kpi-change ${metric.trend}`}>
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Section des Collections en Tendance */}
      <div className="trending-section">
        <h2 className="section-title">Collections en Tendance</h2>
        <div className="trending-grid">
          {trendingCollections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="collection-image">
                <img src={collection.image} alt={collection.name} />
              </div>
              <div className="collection-info">
                <h3>{collection.name}</h3>
                <div className="collection-stats">
                  <div className="stat">
                    <span className="label">Prix Plancher</span>
                    <span className="value">{collection.floorPrice} ETH</span>
                    <span className={`change ${collection.priceChange > 0 ? 'positive' : 'negative'}`}>
                      {collection.priceChange > 0 ? '+' : ''}{collection.priceChange}%
                    </span>
                  </div>
                  <div className="stat">
                    <span className="label">Volume 24h</span>
                    <span className="value">{collection.volume24h} ETH</span>
                    <span className="change positive">+{collection.volumeChange}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section des Graphiques */}
      <div className="charts-section">
        <div className="chart-row">
          <div className="chart-card main-chart">
            <h3>Évolution des Prix</h3>
            <div className="chart-container">
              <Line data={historicalPriceData} options={commonOptions} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          padding: 2rem;
          color: white;
          min-height: 100vh;
          background: var(--background-dark);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header-title h1 {
          font-size: 2.5rem;
          margin: 0;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .header-actions button {
          padding: 0.8rem 1.5rem;
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-actions button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .kpi-section {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .kpi-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .kpi-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .kpi-icon {
          font-size: 2rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .kpi-content {
          flex: 1;
        }

        .kpi-content h3 {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .kpi-value {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.3rem 0;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .kpi-change {
          font-size: 0.9rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          display: inline-block;
        }

        .kpi-change.up {
          background: rgba(46, 213, 115, 0.2);
          color: #2ed573;
        }

        .kpi-change.down {
          background: rgba(255, 71, 87, 0.2);
          color: #ff4757;
        }

        .kpi-change.neutral {
          background: rgba(255, 195, 18, 0.2);
          color: #ffc312;
        }

        .trending-section {
          margin-bottom: 2rem;
        }

        .trending-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .collection-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .collection-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .collection-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .collection-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .collection-card:hover .collection-image img {
          transform: scale(1.1);
        }

        .collection-info {
          padding: 1.5rem;
        }

        .collection-info h3 {
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .collection-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .stat .label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .stat .value {
          font-size: 1.1rem;
          font-weight: bold;
          color: var(--text-primary);
        }

        .stat .change {
          font-size: 0.9rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          display: inline-block;
        }

        .change.positive {
          background: rgba(46, 213, 115, 0.2);
          color: #2ed573;
        }

        .change.negative {
          background: rgba(255, 71, 87, 0.2);
          color: #ff4757;
        }

        .charts-section {
          margin-top: 2rem;
        }

        .chart-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .chart-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .chart-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .chart-card h3 {
          margin: 0 0 1.5rem 0;
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .chart-container {
          height: 400px;
          position: relative;
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
          }

          .kpi-grid {
            grid-template-columns: 1fr;
          }

          .trending-grid {
            grid-template-columns: 1fr;
          }

          .chart-container {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default NFTAnalytics; 