import React, { useState, useEffect } from 'react';
import AIVisualization3D from './AIVisualization3D';
import TechnicalIndicators from './TechnicalIndicators';
import MarketCharts from './MarketCharts';
import './AIVisualization3D.css';
import './MarketCharts.css';

const AIAnalysis = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [aiInsights, setAiInsights] = useState({
    sentimentAnalysis: {
      score: 75,
      trend: 'positive',
      sources: {
        news: 68,
        social: 82,
        technical: 75
      },
      keyTopics: [
        { topic: 'Politique Monétaire', sentiment: 'neutre', impact: 'modéré' },
        { topic: 'Résultats Entreprises', sentiment: 'positif', impact: 'fort' },
        { topic: 'Tensions Géopolitiques', sentiment: 'négatif', impact: 'faible' }
      ]
    },
    anomalyDetection: {
      alerts: [
        {
          type: 'Volume',
          description: 'Volume inhabituel détecté sur le secteur technologique',
          severity: 'high',
          timestamp: '2024-01-20'
        },
        {
          type: 'Prix',
          description: 'Mouvement de prix anormal sur les valeurs financières',
          severity: 'medium',
          timestamp: '2024-01-19'
        }
      ]
    },
    sectorAnalysis: {
      clusters: [
        {
          name: 'Tech Leaders',
          performance: '+12.5%',
          momentum: 'fort',
          risk: 'modéré'
        },
        {
          name: 'Finance Défensive',
          performance: '+5.2%',
          momentum: 'stable',
          risk: 'faible'
        },
        {
          name: 'Growth Émergent',
          performance: '+18.7%',
          momentum: 'très fort',
          risk: 'élevé'
        }
      ]
    },
    macroTrends: {
      indicators: [
        {
          name: 'Inflation',
          trend: 'baisse',
          impact: 'positif',
          confidence: 85
        },
        {
          name: 'Croissance PIB',
          trend: 'stable',
          impact: 'neutre',
          confidence: 72
        },
        {
          name: 'Taux Directeurs',
          trend: 'stable',
          impact: 'positif',
          confidence: 78
        }
      ]
    }
  });

  const renderSentimentGauge = (score) => (
    <div className="sentiment-gauge">
      <div className="gauge-value" style={{ '--score': `${score}%` }}>
        <span>{score}</span>
      </div>
      <div className="gauge-label">Score de Sentiment Global</div>
    </div>
  );

  const renderTopicBadge = (sentiment) => {
    const colors = {
      positif: 'var(--success)',
      négatif: 'var(--danger)',
      neutre: 'var(--accent)'
    };
    return {
      backgroundColor: `${colors[sentiment]}20`,
      color: colors[sentiment]
    };
  };

  return (
    <div className="ai-analysis">
      <div className="ai-header">
        <h2>Analyse IA du Marché</h2>
        <div className="timeframe-selector">
          <button 
            className={`timeframe-btn ${selectedTimeframe === '1S' ? 'active' : ''}`}
            onClick={() => setSelectedTimeframe('1S')}
          >
            1S
          </button>
          <button 
            className={`timeframe-btn ${selectedTimeframe === '1M' ? 'active' : ''}`}
            onClick={() => setSelectedTimeframe('1M')}
          >
            1M
          </button>
          <button 
            className={`timeframe-btn ${selectedTimeframe === '3M' ? 'active' : ''}`}
            onClick={() => setSelectedTimeframe('3M')}
          >
            3M
          </button>
        </div>
      </div>

      <div className="ai-grid">
        {/* Ajout des graphiques de marché */}
        <div className="ai-card full-width">
          <MarketCharts />
        </div>

        {/* Visualisation 3D */}
        <div className="ai-card visualization-card">
          <h3>
            <span className="card-icon">🔮</span>
            Prédictions IA en Temps Réel
          </h3>
          <AIVisualization3D />
        </div>

        {/* Indicateurs Techniques */}
        <div className="ai-card full-width">
          <h3>
            <span className="card-icon">📊</span>
            Indicateurs Techniques
          </h3>
          <TechnicalIndicators />
        </div>

        {/* Analyse du Sentiment */}
        <div className="ai-card">
          <h3>
            <span className="card-icon">🎯</span>
            Analyse du Sentiment
          </h3>
          <div className="card-content">
            {renderSentimentGauge(aiInsights.sentimentAnalysis.score)}
            <div className="sentiment-sources">
              <div className="source-item">
                <span className="source-label">Actualités</span>
                <div className="source-bar" style={{ width: `${aiInsights.sentimentAnalysis.sources.news}%` }}></div>
              </div>
              <div className="source-item">
                <span className="source-label">Réseaux Sociaux</span>
                <div className="source-bar" style={{ width: `${aiInsights.sentimentAnalysis.sources.social}%` }}></div>
              </div>
              <div className="source-item">
                <span className="source-label">Analyse Technique</span>
                <div className="source-bar" style={{ width: `${aiInsights.sentimentAnalysis.sources.technical}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Détection d'Anomalies */}
        <div className="ai-card">
          <h3>
            <span className="card-icon">🔍</span>
            Détection d'Anomalies
          </h3>
          <div className="card-content">
            {aiInsights.anomalyDetection.alerts.map((alert, index) => (
              <div key={index} className={`anomaly-alert severity-${alert.severity}`}>
                <div className="alert-header">
                  <span className="alert-type">{alert.type}</span>
                  <span className="alert-date">{alert.timestamp}</span>
                </div>
                <p>{alert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clusters Sectoriels */}
        <div className="ai-card">
          <h3>
            <span className="card-icon">📊</span>
            Clusters Sectoriels
          </h3>
          <div className="card-content">
            <div className="cluster-grid">
              {aiInsights.sectorAnalysis.clusters.map((cluster, index) => (
                <div key={index} className="cluster-card">
                  <h4>{cluster.name}</h4>
                  <div className="cluster-stats">
                    <div className="stat-item">
                      <span className="stat-label">Perf</span>
                      <span className="stat-value">{cluster.performance}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Momentum</span>
                      <span className="stat-value">{cluster.momentum}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Risque</span>
                      <span className="stat-value">{cluster.risk}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analyse Macro */}
        <div className="ai-card">
          <h3>
            <span className="card-icon">🌍</span>
            Analyse Macro
          </h3>
          <div className="card-content">
            <div className="macro-indicators">
              {aiInsights.macroTrends.indicators.map((indicator, index) => (
                <div key={index} className="macro-indicator">
                  <div className="indicator-header">
                    <span className="indicator-name">{indicator.name}</span>
                    <span className="confidence-score">{indicator.confidence}%</span>
                  </div>
                  <div className="indicator-details">
                    <span className={`trend-badge ${indicator.trend}`}>
                      {indicator.trend}
                    </span>
                    <span className={`impact-badge ${indicator.impact}`}>
                      Impact: {indicator.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis; 