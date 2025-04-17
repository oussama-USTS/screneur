import React from 'react';

const FundamentalAnalysis = () => {
  const fundamentalMetrics = {
    valorisation: [
      { label: 'PER Moyen', value: '15.8x', change: '-2.3', trend: 'down' },
      { label: 'Price/Book', value: '2.4x', change: '+0.2', trend: 'up' },
      { label: 'EV/EBITDA', value: '12.5x', change: '-0.5', trend: 'down' },
      { label: 'Rendement Div.', value: '2.8%', change: '+0.3', trend: 'up' }
    ],
    profitabilite: [
      { label: 'Marge EBITDA', value: '25.4%', change: '+1.2', trend: 'up' },
      { label: 'Marge Nette', value: '18.2%', change: '+0.8', trend: 'up' },
      { label: 'ROE', value: '15.6%', change: '-0.4', trend: 'down' },
      { label: 'ROIC', value: '12.8%', change: '+0.6', trend: 'up' }
    ],
    croissance: [
      { label: 'Croiss. CA (YoY)', value: '12.5%', change: '+2.5', trend: 'up' },
      { label: 'Croiss. BPA (YoY)', value: '8.7%', change: '-1.2', trend: 'down' },
      { label: 'Croiss. FCF (YoY)', value: '15.3%', change: '+3.1', trend: 'up' },
      { label: 'Croiss. Div (YoY)', value: '5.2%', change: '+0.4', trend: 'up' }
    ],
    solvabilite: [
      { label: 'Dette/EBITDA', value: '2.1x', change: '-0.3', trend: 'up' },
      { label: 'Couverture Int.', value: '8.5x', change: '+1.2', trend: 'up' },
      { label: 'Ratio Courant', value: '1.8x', change: '+0.1', trend: 'up' },
      { label: 'Quick Ratio', value: '1.2x', change: '0.0', trend: 'neutral' }
    ]
  };

  const renderMetricCard = (metric) => (
    <div className="metric-card glass-effect" key={metric.label}>
      <div className="metric-header">
        <span className="metric-label">{metric.label}</span>
        <span className={`trend-badge ${metric.trend}`}>
          {metric.change > 0 ? '+' : ''}{metric.change}
        </span>
      </div>
      <div className="metric-value">{metric.value}</div>
    </div>
  );

  return (
    <div className="fundamental-analysis">
      <div className="metrics-section">
        <div className="section-container glass-effect">
          <h3 className="section-title">
            <span className="title-icon">💰</span>
            Valorisation
          </h3>
          <div className="metrics-grid">
            {fundamentalMetrics.valorisation.map(renderMetricCard)}
          </div>
        </div>

        <div className="section-container glass-effect">
          <h3 className="section-title">
            <span className="title-icon">📈</span>
            Profitabilité
          </h3>
          <div className="metrics-grid">
            {fundamentalMetrics.profitabilite.map(renderMetricCard)}
          </div>
        </div>

        <div className="section-container glass-effect">
          <h3 className="section-title">
            <span className="title-icon">🚀</span>
            Croissance
          </h3>
          <div className="metrics-grid">
            {fundamentalMetrics.croissance.map(renderMetricCard)}
          </div>
        </div>

        <div className="section-container glass-effect">
          <h3 className="section-title">
            <span className="title-icon">🛡️</span>
            Solvabilité
          </h3>
          <div className="metrics-grid">
            {fundamentalMetrics.solvabilite.map(renderMetricCard)}
          </div>
        </div>
      </div>

      <div className="analysis-notes glass-effect">
        <h3 className="notes-title">
          <span className="title-icon">📝</span>
          Notes d'Analyse
        </h3>
        <div className="notes-content">
          <div className="note-item">
            <span className="note-badge positive">FORT</span>
            <p>Croissance soutenue du chiffre d'affaires et des marges en amélioration</p>
          </div>
          <div className="note-item">
            <span className="note-badge neutral">STABLE</span>
            <p>Ratios de valorisation proches des moyennes historiques</p>
          </div>
          <div className="note-item">
            <span className="note-badge positive">FORT</span>
            <p>Structure financière saine avec un endettement maîtrisé</p>
          </div>
          <div className="note-item">
            <span className="note-badge warning">ATTENTION</span>
            <p>Légère baisse du ROE à surveiller dans les prochains trimestres</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalAnalysis; 