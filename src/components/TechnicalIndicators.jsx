import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TechnicalIndicators.css';

const TechnicalIndicators = () => {
  const [indicators, setIndicators] = useState([
    {
      name: 'RSI',
      value: 65,
      signal: 'Neutral',
      description: 'Relative Strength Index shows moderate momentum',
      trend: 'neutral'
    },
    {
      name: 'MACD',
      value: 0.245,
      signal: 'Buy',
      description: 'Moving Average Convergence Divergence indicates bullish momentum',
      trend: 'up'
    },
    {
      name: 'Bollinger Bands',
      value: 1.8,
      signal: 'Sell',
      description: 'Price near upper band suggests overbought condition',
      trend: 'down'
    },
    {
      name: 'Moving Average (50)',
      value: 2.35,
      signal: 'Buy',
      description: 'Price above 50-day moving average shows uptrend',
      trend: 'up'
    }
  ]);

  const [activeTimeframe, setActiveTimeframe] = useState('1D');

  const timeframes = ['1H', '4H', '1D', '1W', '1M'];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const getSignalColor = (signal) => {
    switch (signal.toLowerCase()) {
      case 'buy':
        return '#4CAF50';
      case 'sell':
        return '#F44336';
      default:
        return '#FFC107';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <div className="technical-indicators">
      <div className="indicators-header">
        <h3>Technical Analysis</h3>
        <div className="timeframe-selector">
          {timeframes.map((tf) => (
            <button
              key={tf}
              className={`timeframe-btn ${activeTimeframe === tf ? 'active' : ''}`}
              onClick={() => setActiveTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="indicators-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {indicators.map((indicator, index) => (
          <motion.div
            key={indicator.name}
            className="indicator-card"
            variants={itemVariants}
          >
            <div className="indicator-header">
              <h4>{indicator.name}</h4>
              <span
                className="signal-badge"
                style={{ backgroundColor: `${getSignalColor(indicator.signal)}20`,
                        color: getSignalColor(indicator.signal) }}
              >
                {indicator.signal}
              </span>
            </div>
            
            <div className="indicator-value">
              <span className="value">{indicator.value}</span>
              <span className={`trend-icon ${indicator.trend}`}>
                {getTrendIcon(indicator.trend)}
              </span>
            </div>
            
            <p className="indicator-description">{indicator.description}</p>
            
            <div className="indicator-chart">
              {/* Placeholder for mini chart */}
              <div className="mini-chart-placeholder"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnicalIndicators; 