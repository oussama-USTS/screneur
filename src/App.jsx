import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import AdvancedCharts from './components/AdvancedCharts';
import FundamentalAnalysis from './components/FundamentalAnalysis';
import AIAnalysis from './components/AIAnalysis';
import './components/AIAnalysis.css';

// Mock data for dynamic elements
const mockInsights = [
  "🔥 Volume Exceptionnel: Collection 'CryptoArt Premium' en hausse de 150%",
  "🎨 Tendance: L'art digital traditionnel gagne en popularité",
  "🐋 Whale Alert: Collectionneur majeur accumule sur 'RarePieces'",
  "📈 Opportunité: Artistes émergents détectés dans le secteur Gaming"
];

const mockMetrics = [
  { label: "Volume 24h", value: "12,435 ETH", trend: "+15%", icon: "📊" },
  { label: "Floor Price", value: "2.8 ETH", trend: "+5%", icon: "💎" },
  { label: "Holders", value: "8.2K", trend: "+2%", icon: "👥" },
  { label: "Listed", value: "12%", trend: "-3%", icon: "🏷️" }
];

const marketAnalysis = {
  technicalIndicators: [
    { name: "RSI", value: "65", status: "neutral" },
    { name: "MACD", value: "Positif", status: "bullish" },
    { name: "Volume Profile", value: "Accumulation", status: "bullish" },
    { name: "Support", value: "2.5 ETH", status: "strong" }
  ],
  sentimentAnalysis: {
    overall: "Très Positif",
    socialScore: 8.5,
    newsImpact: "Positif",
    communityGrowth: "+25%"
  }
};

const App = () => {
  const [activeTab, setActiveTab] = useState('market');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [currentInsight, setCurrentInsight] = useState(0);

  // Données de démonstration pour les insights financiers
  const insights = [
    "Analyse technique : Le RSI du S&P 500 indique une condition de survente potentielle",
    "Tendance sectorielle : Le secteur technologique montre une forte dynamique haussière",
    "Analyse macro : L'inflation en baisse pourrait influencer positivement les marchés",
    "Sentiment du marché : Indicateur de peur et d'avidité en zone neutre à 52/100",
    "Alerte : Divergence haussière détectée sur l'indice principal",
    "Focus : Les valeurs de croissance surperforment le marché de 15% ce mois-ci"
  ];

  // Métriques clés du marché étendues
  const marketMetrics = [
    {
      label: "Volume Total",
      value: "$245.8B",
      change: "+15.2%",
      trend: "up",
      icon: "📊"
    },
    {
      label: "Volatilité (VIX)",
      value: "18.45",
      change: "-2.3%",
      trend: "down",
      icon: "📉"
    },
    {
      label: "Ratio Put/Call",
      value: "0.85",
      change: "+0.05",
      trend: "neutral",
      icon: "⚖️"
    },
    {
      label: "Breadth Index",
      value: "65.2",
      change: "+5.4%",
      trend: "up",
      icon: "📈"
    },
    {
      label: "Taux 10 Ans",
      value: "3.85%",
      change: "-0.12%",
      trend: "down",
      icon: "🏦"
    },
    {
      label: "Or (USD)",
      value: "$1,892",
      change: "+0.8%",
      trend: "up",
      icon: "🔶"
    }
  ];

  // Rotation des insights
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Simulation de suggestions de recherche
  useEffect(() => {
    if (searchQuery.trim()) {
      const mockSuggestions = [
        "Actions technologiques à fort RSI",
        "Secteurs avec momentum positif",
        "Valeurs sous-évaluées selon PER",
        "Entreprises à forte croissance",
        "Screening par ratio dette/EBITDA",
        "Filtrer par rendement du dividende",
        "Analyse des gaps techniques",
        "Scanner de configurations chartistes"
      ].filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const renderMarketAnalysis = () => (
    <div className="market-analysis">
      <AIAnalysis />
      <div className="technical-indicators">
        <h3>Indicateurs Techniques</h3>
        <div className="indicator-grid">
          <div className="indicator-card glass-effect">
            <h4>RSI</h4>
            <div className="value">62.5</div>
            <div className="description">Momentum neutre à haussier</div>
          </div>
          <div className="indicator-card glass-effect">
            <h4>MACD</h4>
            <div className="value">+0.25</div>
            <div className="description">Signal d'achat potentiel</div>
          </div>
          <div className="indicator-card glass-effect">
            <h4>Stochastique</h4>
            <div className="value">75.8</div>
            <div className="description">Zone de surachat proche</div>
          </div>
        </div>
      </div>

      <AdvancedCharts />

      <div className="sentiment-analysis">
        <h3>Analyse du Sentiment</h3>
        <div className="sentiment-grid">
          <div className="sentiment-card glass-effect">
            <h4>Indice de Peur & Avidité</h4>
            <div className="gauge">52</div>
            <div className="description">Sentiment neutre du marché</div>
          </div>
          <div className="sentiment-card glass-effect">
            <h4>Volume Anormal</h4>
            <div className="value">+25%</div>
            <div className="description">Augmentation significative de l'activité</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFundamentalTab = () => (
    <div className="fundamental-tab">
      <FundamentalAnalysis />
    </div>
  );

  const renderScreenerTab = () => (
    <div className="screener-tab">
      <div className="filters-section glass-effect">
        <h3>Filtres Avancés</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <h4>Valorisation</h4>
            <div className="filter-inputs">
              <input type="number" placeholder="PER Min" className="filter-input" />
              <input type="number" placeholder="PER Max" className="filter-input" />
            </div>
          </div>
          <div className="filter-group">
            <h4>Croissance</h4>
            <div className="filter-inputs">
              <input type="number" placeholder="Croissance CA Min (%)" className="filter-input" />
              <select className="filter-input">
                <option>Annuelle</option>
                <option>Trimestrielle</option>
              </select>
            </div>
          </div>
          <div className="filter-group">
            <h4>Dividendes</h4>
            <div className="filter-inputs">
              <input type="number" placeholder="Rendement Min (%)" className="filter-input" />
              <input type="number" placeholder="Croissance Min (%)" className="filter-input" />
            </div>
          </div>
          <div className="filter-group">
            <h4>Technique</h4>
            <div className="filter-inputs">
              <select className="filter-input">
                <option>Au-dessus MA200</option>
                <option>Au-dessus MA50</option>
                <option>Croisement MA</option>
              </select>
              <select className="filter-input">
                <option>RSI {'>'} 50</option>
                <option>RSI {'<'} 30</option>
                <option>RSI {'>'} 70</option>
              </select>
            </div>
          </div>
        </div>
        <button className="apply-filters-btn">Appliquer les Filtres</button>
      </div>
    </div>
  );

  return (
    <div className="app">
      <header className="header glass-effect">
        <div className="logo">
          <span className="logo-icon">📊</span>
          <h1>ScreenFinance Pro</h1>
        </div>
        <div className="insight-banner">
          {insights[currentInsight]}
        </div>
      </header>

      <main className="main-content">
        <div className="search-container">
          <input
            type="text"
            className="search-input glass-effect"
            placeholder="Rechercher des actifs, des indicateurs ou des stratégies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {suggestions.length > 0 && (
            <div className="suggestions glass-effect">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="suggestion-item">
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="metrics-grid">
          {marketMetrics.map((metric, index) => (
            <div key={index} className="metric-card glass-effect">
              <div className="metric-label">
                <span className="metric-icon">{metric.icon}</span>
                {metric.label}
              </div>
              <div className="metric-value">
                {metric.value}
                <span className={`trend-indicator ${metric.trend}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'market' ? 'active' : ''}`}
            onClick={() => setActiveTab('market')}
          >
            Analyse de Marché
          </button>
          <button
            className={`tab-button ${activeTab === 'fundamental' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamental')}
          >
            Analyse Fondamentale
          </button>
          <button
            className={`tab-button ${activeTab === 'screener' ? 'active' : ''}`}
            onClick={() => setActiveTab('screener')}
          >
            Screener
          </button>
        </div>

        <div className="tab-content glass-effect">
          {activeTab === 'market' && renderMarketAnalysis()}
          {activeTab === 'fundamental' && renderFundamentalTab()}
          {activeTab === 'screener' && renderScreenerTab()}
        </div>
      </main>

      <footer className="footer glass-effect">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sécurité & Performance</h3>
            <div className="badges">
              <div className="badge">
                <span className="badge-icon">🔒</span>
                Données Temps Réel
              </div>
              <div className="badge">
                <span className="badge-icon">🤖</span>
                Analyse IA
              </div>
              <div className="badge">
                <span className="badge-icon">📊</span>
                Indicateurs Avancés
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 