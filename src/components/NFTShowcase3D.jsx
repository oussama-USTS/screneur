import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockNFTs = [
  {
    id: 1,
    name: "Cosmic Dreamer #1337",
    image: "https://via.placeholder.com/300",
    price: "2.5 ETH",
    collection: "Cosmic Dreamers",
    rarity: "Legendary",
    attributes: [
      { trait: "Background", value: "Deep Space" },
      { trait: "Body", value: "Ethereal" },
      { trait: "Eyes", value: "Starlit" }
    ]
  },
  {
    id: 2,
    name: "Digital Nomad #420",
    image: "https://via.placeholder.com/300",
    price: "1.8 ETH",
    collection: "Digital Nomads",
    rarity: "Epic",
    attributes: [
      { trait: "Background", value: "Cyberpunk City" },
      { trait: "Outfit", value: "Neon Suit" },
      { trait: "Accessory", value: "Holographic Visor" }
    ]
  },
  {
    id: 3,
    name: "Pixel Punk #8888",
    image: "https://via.placeholder.com/300",
    price: "3.2 ETH",
    collection: "Pixel Punks",
    rarity: "Mythical",
    attributes: [
      { trait: "Background", value: "Rainbow Matrix" },
      { trait: "Style", value: "8-bit" },
      { trait: "Special", value: "Glitch Effect" }
    ]
  }
];

const NFTShowcase3D = () => {
  const [activeNFT, setActiveNFT] = useState(mockNFTs[0]);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setActiveNFT(current => {
          const currentIndex = mockNFTs.findIndex(nft => nft.id === current.id);
          const nextIndex = (currentIndex + 1) % mockNFTs.length;
          return mockNFTs[nextIndex];
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRotate]);

  return (
    <div className="nft-showcase">
      <h2 className="showcase-title">Featured NFTs</h2>
      
      <div className="showcase-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNFT.id}
            className="nft-card"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="nft-image">
              <img src={activeNFT.image} alt={activeNFT.name} />
              <div className="price-tag">{activeNFT.price}</div>
            </div>
            
            <div className="nft-details">
              <h3>{activeNFT.name}</h3>
              <p className="collection">Collection: {activeNFT.collection}</p>
              <p className="rarity">Rarity: <span className={activeNFT.rarity.toLowerCase()}>{activeNFT.rarity}</span></p>
              
              <div className="attributes">
                {activeNFT.attributes.map((attr, index) => (
                  <div key={index} className="attribute">
                    <span className="trait">{attr.trait}:</span>
                    <span className="value">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="controls">
        <button
          className="control-btn"
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? '⏸ Pause' : '▶ Play'}
        </button>
        
        <div className="nft-selector">
          {mockNFTs.map((nft) => (
            <motion.div
              key={nft.id}
              className={`selector-dot ${nft.id === activeNFT.id ? 'active' : ''}`}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setActiveNFT(nft);
                setAutoRotate(false);
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .nft-showcase {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          perspective: 1000px;
        }

        .showcase-title {
          text-align: center;
          color: var(--text-primary);
          font-size: 2rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .showcase-container {
          min-height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }

        .nft-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nft-image {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .nft-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .price-tag {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
        }

        .nft-details h3 {
          color: var(--text-primary);
          margin: 0 0 1rem;
          font-size: 1.5rem;
        }

        .collection, .rarity {
          color: var(--text-secondary);
          margin: 0.5rem 0;
        }

        .rarity span {
          padding: 0.2rem 0.8rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .legendary {
          background: linear-gradient(45deg, #ffd700, #ff8c00);
          color: #000;
        }

        .epic {
          background: linear-gradient(45deg, #9400d3, #4b0082);
          color: #fff;
        }

        .mythical {
          background: linear-gradient(45deg, #ff1493, #ff69b4);
          color: #fff;
        }

        .attributes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .attribute {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }

        .trait {
          color: var(--text-secondary);
          margin-right: 0.5rem;
        }

        .value {
          color: var(--text-primary);
          font-weight: bold;
        }

        .controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .control-btn {
          background: var(--accent-color);
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .nft-selector {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .selector-dot {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .selector-dot.active {
          background: var(--accent-color);
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .nft-showcase {
            padding: 1rem;
          }

          .showcase-container {
            min-height: 400px;
          }

          .nft-card {
            padding: 1rem;
          }

          .attributes {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default NFTShowcase3D; 