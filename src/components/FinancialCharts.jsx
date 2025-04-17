import React from 'react';
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
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Options communes pour les graphiques
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000,
    easing: 'easeInOutQuart'
  },
  plugins: {
    legend: {
      labels: {
        color: '#a0a0cc',
        font: {
          family: "'SF Pro Display', sans-serif",
          size: 12
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#a0a0cc'
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#a0a0cc'
      }
    }
  }
};

// Données pour le graphique de prix
const priceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Prix Moyen NFT (ETH)',
      data: [2.4, 2.8, 3.2, 2.9, 3.5, 4.2, 3.8, 4.5, 5.1, 4.8, 5.5, 6.2],
      borderColor: '#6c5ce7',
      backgroundColor: 'rgba(108, 92, 231, 0.1)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Volume des Transactions (x100 ETH)',
      data: [1.8, 2.2, 2.5, 2.3, 2.8, 3.2, 3.0, 3.5, 3.8, 3.6, 4.0, 4.5],
      borderColor: '#00cec9',
      backgroundColor: 'rgba(0, 206, 201, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
};

// Données pour le graphique de distribution
const distributionData = {
  labels: ['0-1 ETH', '1-5 ETH', '5-10 ETH', '10-50 ETH', '50+ ETH'],
  datasets: [
    {
      label: 'Distribution des NFTs par Prix',
      data: [45, 30, 15, 8, 2],
      backgroundColor: [
        'rgba(108, 92, 231, 0.8)',
        'rgba(165, 94, 234, 0.8)',
        'rgba(0, 206, 201, 0.8)',
        'rgba(72, 126, 176, 0.8)',
        'rgba(0, 184, 148, 0.8)'
      ],
      borderWidth: 0
    }
  ]
};

const FinancialCharts = () => {
  return (
    <div className="charts-container">
      <div className="chart-section">
        <h3>Évolution des Prix et Volumes</h3>
        <div className="chart-wrapper">
          <Line 
            data={priceData}
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                title: {
                  display: true,
                  text: 'Tendances du Marché NFT 2024',
                  color: '#ffffff',
                  font: {
                    size: 16,
                    family: "'SF Pro Display', sans-serif"
                  }
                }
              }
            }}
          />
        </div>
      </div>

      <div className="chart-section">
        <h3>Distribution par Gamme de Prix</h3>
        <div className="chart-wrapper">
          <Bar
            data={distributionData}
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                title: {
                  display: true,
                  text: 'Répartition des NFTs par Valeur',
                  color: '#ffffff',
                  font: {
                    size: 16,
                    family: "'SF Pro Display', sans-serif"
                  }
                }
              }
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .charts-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          padding: 20px;
          margin-bottom: 40px;
        }

        .chart-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .chart-section h3 {
          color: #ffffff;
          margin: 0 0 20px 0;
          font-size: 1.2rem;
          text-align: center;
        }

        .chart-wrapper {
          height: 300px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .charts-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default FinancialCharts; 