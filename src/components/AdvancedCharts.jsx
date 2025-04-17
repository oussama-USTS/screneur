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

const AdvancedCharts = () => {
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
          color: '#e2e8f0',
          font: {
            family: "'Inter', sans-serif",
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
          color: '#e2e8f0'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#e2e8f0'
        }
      }
    }
  };

  // Données pour le graphique de performance sectorielle
  const sectorPerformanceData = {
    labels: ['Tech', 'Finance', 'Énergie', 'Santé', 'Industrie', 'Consommation', 'Matériaux'],
    datasets: [
      {
        label: 'Performance MTD (%)',
        data: [12.5, 8.3, -2.1, 5.4, 3.2, -1.5, 4.8],
        backgroundColor: 'rgba(108, 92, 231, 0.8)',
        borderColor: 'rgba(108, 92, 231, 1)',
        borderWidth: 2
      }
    ]
  };

  // Données pour le graphique de tendance du marché
  const marketTrendData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Indice de Référence',
        data: [100, 105, 102, 110, 115, 112, 118, 125, 122, 130, 135, 140],
        borderColor: '#00cec9',
        backgroundColor: 'rgba(0, 206, 201, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Volume de Transactions',
        data: [80, 85, 90, 85, 95, 100, 95, 105, 100, 110, 115, 120],
        borderColor: '#6c5ce7',
        backgroundColor: 'rgba(108, 92, 231, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  // Données pour le graphique de distribution des rendements
  const returnsDistributionData = {
    labels: ['<-10%', '-10% à -5%', '-5% à 0%', '0% à 5%', '5% à 10%', '>10%'],
    datasets: [
      {
        label: 'Distribution des Rendements',
        data: [5, 15, 25, 30, 15, 10],
        backgroundColor: [
          'rgba(255, 71, 87, 0.8)',
          'rgba(255, 71, 87, 0.6)',
          'rgba(255, 195, 18, 0.6)',
          'rgba(46, 213, 115, 0.6)',
          'rgba(46, 213, 115, 0.8)',
          'rgba(46, 213, 115, 1)'
        ],
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    ]
  };

  // Données pour le graphique de corrélation
  const correlationData = {
    labels: ['USD/EUR', 'Or', 'Pétrole', 'Bitcoin', 'Obligations', 'VIX'],
    datasets: [
      {
        label: 'Corrélation avec l\'Indice Principal',
        data: [0.35, -0.25, 0.45, 0.15, -0.55, -0.65],
        backgroundColor: (context) => {
          const value = context.dataset.data[context.dataIndex];
          return value > 0 
            ? 'rgba(46, 213, 115, 0.8)'
            : 'rgba(255, 71, 87, 0.8)';
        },
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="advanced-charts">
      <div className="chart-grid">
        <div className="chart-container">
          <h3 className="chart-title">Performance Sectorielle</h3>
          <div className="chart-wrapper">
            <Bar 
              data={sectorPerformanceData} 
              options={{
                ...commonOptions,
                plugins: {
                  ...commonOptions.plugins,
                  title: {
                    display: true,
                    text: 'Performance par Secteur (MTD)',
                    color: '#e2e8f0'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Tendance du Marché</h3>
          <div className="chart-wrapper">
            <Line 
              data={marketTrendData}
              options={{
                ...commonOptions,
                plugins: {
                  ...commonOptions.plugins,
                  title: {
                    display: true,
                    text: 'Évolution de l\'Indice et du Volume',
                    color: '#e2e8f0'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Distribution des Rendements</h3>
          <div className="chart-wrapper">
            <Bar 
              data={returnsDistributionData}
              options={{
                ...commonOptions,
                plugins: {
                  ...commonOptions.plugins,
                  title: {
                    display: true,
                    text: 'Distribution des Rendements sur 12 Mois',
                    color: '#e2e8f0'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Corrélations</h3>
          <div className="chart-wrapper">
            <Bar 
              data={correlationData}
              options={{
                ...commonOptions,
                plugins: {
                  ...commonOptions.plugins,
                  title: {
                    display: true,
                    text: 'Corrélations avec Différents Actifs',
                    color: '#e2e8f0'
                  }
                },
                scales: {
                  y: {
                    min: -1,
                    max: 1
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCharts; 