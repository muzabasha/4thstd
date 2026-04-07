'use client';

import React, { useState } from 'react';

interface Landmark {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
}

interface MapLabProps {
  onLandmarkClick: (info: string) => void;
}

const landmarks: Landmark[] = [
  { id: 'him', name: 'Mount Everest (Himalayas)', x: 60, y: 30, description: 'The highest peak in the world! It is part of the Great Himalayas.' },
  { id: 'ktwo', name: 'K2', x: 45, y: 20, description: 'The second highest peak, located in the Karakoram range.' },
  { id: 'kan', name: 'Kanchenjunga', x: 75, y: 35, description: 'The third highest mountain, located on the border of India and Nepal.' },
];

export default function InteractiveMapLab({ onLandmarkClick }: MapLabProps) {
  const [selected, setSelected] = useState<Landmark | null>(null);

  const handleClick = (l: Landmark) => {
    setSelected(l);
    onLandmarkClick(`I found ${l.name}! ${l.description}`);
  };

  return (
    <div className="map-lab-container glass-card">
      <div className="map-area">
        {/* Mock Satellite View with CSS Gradient/Texture */}
        <div className="satellite-map">
          <div className="map-grid"></div>
          {landmarks.map((l) => (
            <button
              key={l.id}
              className={`landmark-spot ${selected?.id === l.id ? 'active' : ''}`}
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
              onClick={() => handleClick(l)}
              title={l.name}
            >
              🏔️
            </button>
          ))}
        </div>
      </div>
      
      {selected && (
        <div className="landmark-info animate-fade-in card-small">
          <h5>📍 {selected.name}</h5>
          <p>{selected.description}</p>
        </div>
      )}

      <style jsx>{`
        .map-lab-container {
          width: 100%;
          height: 350px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          background: #1a1a2e;
          position: relative;
        }

        .map-area {
          flex: 1;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000') center/cover;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .satellite-map {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .map-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .landmark-spot {
          position: absolute;
          width: 30px;
          height: 30px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          border: 2px solid var(--accent);
          cursor: pointer;
          transition: all 0.3s;
          transform: translate(-50%, -50%);
          animation: pulse 2s infinite;
        }

        .landmark-spot.active {
          background: var(--accent);
          transform: translate(-50%, -50%) scale(1.2);
          box-shadow: 0 0 20px var(--accent);
        }

        .landmark-spot:hover {
          transform: translate(-50%, -50%) scale(1.3);
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 209, 102, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 209, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 209, 102, 0); }
        }

        @media (max-width: 600px) {
          .map-lab-container {
            height: 250px;
          }
          .landmark-spot {
            width: 24px;
            height: 24px;
            font-size: 1rem;
          }
        }

        .landmark-info {
          background: rgba(0,0,0,0.6);
          border: 1px solid var(--accent);
        }
      `}</style>
    </div>
  );
}
