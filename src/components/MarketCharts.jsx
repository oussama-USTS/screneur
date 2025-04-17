import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
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

const MarketCharts = () => {
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

  // Configuration commune pour les graphiques
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
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
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          font: {
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          font: {
            size: 11
          }
        }
      }
    }
  };

  // Données pour le graphique de performance sectorielle
  const sectorData = {
    labels: ['Tech', 'Finance', 'Énergie', 'Santé', 'Industrie', 'Consommation', 'Matériaux'],
    datasets: [{
      label: 'Performance MTD (%)',
      data: [12.5, 8.2, -1.5, 5.3, 3.1, -0.8, 4.7],
      backgroundColor: 'rgba(147, 155, 255, 0.7)',
      borderColor: 'rgba(147, 155, 255, 1)',
      borderWidth: 2,
      borderRadius: 4
    }]
  };

  // Données pour le graphique de tendance du marché
  const marketTrendData = {
    labels: months,
    datasets: [
      {
        label: 'Indice de Référence',
        data: [100, 105, 102, 110, 115, 112, 118, 125, 122, 130, 135, 140],
        borderColor: 'rgba(80, 227, 230, 1)',
        backgroundColor: 'rgba(80, 227, 230, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Volume de Transactions',
        data: [80, 85, 90, 95, 100, 95, 105, 110, 100, 115, 120, 125],
        borderColor: 'rgba(147, 155, 255, 1)',
        backgroundColor: 'rgba(147, 155, 255, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  return (
    <div className="market-charts">
      <div className="chart-container sector-performance">
        <h3>Performance Sectorielle</h3>
        <div className="chart-wrapper">
          <Bar data={sectorData} options={{
            ...commonOptions,
            plugins: {
              ...commonOptions.plugins,
              title: {
                display: true,
                text: 'Performance par Secteur (MTD)',
                color: 'rgba(255, 255, 255, 0.8)',
                font: {
                  size: 14,
                  weight: 'normal'
                }
              }
            }
          }} />
        </div>
      </div>

      <div className="chart-container market-trend">
        <h3>Tendance du Marché</h3>
        <div className="chart-wrapper">
          <Line data={marketTrendData} options={{
            ...commonOptions,
            plugins: {
              ...commonOptions.plugins,
              title: {
                display: true,
                text: 'Évolution de l\'Indice et du Volume',
                color: 'rgba(255, 255, 255, 0.8)',
                font: {
                  size: 14,
                  weight: 'normal'
                }
              }
            }
          }} />
        </div>
      </div>
    </div>
  );
};

export default MarketCharts; 