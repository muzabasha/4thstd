"use client";

import React, { useState } from 'react';

interface Props {
  topicId: string;
}

export default function Math3DLab({ topicId }: Props) {
  const [rotation, setRotation] = useState({ x: -20, y: 45 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    setRotation({
      x: rotation.x - e.movementY * 0.5,
      y: rotation.y + e.movementX * 0.5
    });
  };

  const renderObject = () => {
    switch (topicId) {
      case 'm1-t1': // Brick
        return (
          <div className="brick">
            <div className="face front">FRONT</div>
            <div className="face back">BACK</div>
            <div className="face right">RIGHT</div>
            <div className="face left">LEFT</div>
            <div className="face top">TOP</div>
            <div className="face bottom">BOTTOM</div>
          </div>
        );
      case 'm2-t1': // Ruler
        return (
          <div className="ruler">
            <div className="face front">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="ruler-mark" style={{ left: `${i * 10}%` }}>
                  <span>{i}</span>
                </div>
              ))}
            </div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        );
      case 'm4-t1': // Clock
        return (
          <div className="clock-3d">
            <div className="face front">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="clock-num" style={{ transform: `rotate(${i * 30}deg) translateY(-80px) rotate(-${i * 30}deg)` }}>
                  {i === 0 ? 12 : i}
                </div>
              ))}
              <div className="hand hour" style={{ transform: 'rotate(120deg)' }}></div>
              <div className="hand minute" style={{ transform: 'rotate(0deg)' }}></div>
              <div className="clock-center"></div>
            </div>
            <div className="face side"></div>
          </div>
        );
      case 'm5-t1': // Perspective Cube
        return (
          <div className="cube-perspective">
            <div className="face front" style={{ background: 'rgba(239, 68, 68, 0.8)', border: '4px solid #B91C1C' }}>FRONT</div>
            <div className="face back" style={{ background: 'rgba(59, 130, 246, 0.8)', border: '4px solid #1D4ED8' }}>BACK</div>
            <div className="face right" style={{ background: 'rgba(16, 185, 129, 0.8)', border: '4px solid #047857' }}>RIGHT</div>
            <div className="face left" style={{ background: 'rgba(245, 158, 11, 0.8)', border: '4px solid #B45309' }}>LEFT</div>
            <div className="face top" style={{ background: 'rgba(139, 92, 246, 0.8)', border: '4px solid #6D28D9' }}>TOP</div>
            <div className="face bottom" style={{ background: 'rgba(107, 114, 128, 0.8)', border: '4px solid #374151' }}>BOTTOM</div>
          </div>
        );
      case 'm8-t1': // Circle/Wheel
        return (
          <div className="wheel-3d">
            <div className="face front">
              <div className="tire-inner"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="spoke" style={{ transform: `rotate(${i * 45}deg)` }}></div>
              ))}
            </div>
            <div className="face back"></div>
            <div className="side-ring"></div>
          </div>
        );
      case 'm9-t1': // Fractions/Pizza
        return (
          <div className="pizza-3d">
            <div className="face front">
              <div className="pizza-slice slice-1"></div>
              <div className="pizza-slice slice-2"></div>
              <div className="pizza-slice slice-3"></div>
              <div className="pizza-slice slice-4"></div>
            </div>
          </div>
        );
      case 'm3-t1': // Bus
        return (
          <div className="bus-3d">
            <div className="face front">🚌</div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`wheel wheel-${i}`}></div>
            ))}
          </div>
        );
      case 'm6-t1': // Coin
        return (
          <div className="coin-3d">
            <div className="face front">₹</div>
            <div className="face back">₹</div>
            <div className="side-ring"></div>
          </div>
        );
      case 'm7-t1': // Jug
        return (
          <div className="jug-3d">
            <div className="jug-body"></div>
            <div className="jug-handle"></div>
            <div className="jug-top"></div>
          </div>
        );
      case 'm11-t1': // Multiplication Grid
        return (
          <div className="grid-3d">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="grid-cube" style={{ 
                transform: `translateX(${(i % 3) * 40 - 40}px) translateY(${Math.floor(i / 3) * 40 - 40}px)` 
              }}>
                <div className="face front"></div>
                <div className="face top"></div>
                <div className="face right"></div>
              </div>
            ))}
          </div>
        );
      case 'm12-t1': // Weight Scale
        return (
          <div className="scale-3d">
            <div className="scale-beam"></div>
            <div className="scale-pillar"></div>
            <div className="scale-pan left-pan"></div>
            <div className="scale-pan right-pan"></div>
          </div>
        );
      case 'm13-t1': // Field/Fence
        return (
          <div className="field-3d">
            <div className="field-surface"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="fence-post" style={{ transform: `rotate(${i * 45}deg) translateZ(90px)` }}></div>
            ))}
          </div>
        );
      case 'm14-t1': // Bar Chart
        return (
          <div className="chart-3d">
            <div className="bar bar-1" style={{ height: '60px' }}><div className="bar-top"></div></div>
            <div className="bar bar-2" style={{ height: '100px' }}><div className="bar-top"></div></div>
            <div className="bar bar-3" style={{ height: '40px' }}><div className="bar-top"></div></div>
            <div className="bar bar-4" style={{ height: '80px' }}><div className="bar-top"></div></div>
            <div className="chart-base"></div>
          </div>
        );
      default:
        // Generic 3D Blocks for m10-t1 and others
        return (
          <div className="generic-shape">
            <div className="face front">Math</div>
            <div className="face back">Fun</div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        );
    }
  };

  return (
    <div className="math-3d-lab" onMouseMove={handleMouseMove}>
      <div className="lab-header">
        <span>🖱️ Drag to Rotate Object</span>
      </div>
      <div className="scene">
        <div className="object-container" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
          {renderObject()}
        </div>
      </div>

      <style jsx>{`
        .math-3d-lab {
          background: #1e1b4b;
          border-radius: 20px;
          padding: 1.5rem;
          color: white;
          margin: 1.5rem 0;
          cursor: grab;
          user-select: none;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .math-3d-lab:active { cursor: grabbing; }
        
        .lab-header {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-size: 0.75rem;
          font-weight: 800;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 10;
        }

        .scene {
          width: 100%;
          height: 300px;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .object-container {
          position: relative;
          width: 200px;
          height: 200px;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }

        .face {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          font-size: 0.8rem;
          backface-visibility: visible;
          border: 2px solid rgba(255,255,255,0.2);
        }

        /* Brick (m1-t1) */
        .brick .face { width: 160px; height: 80px; background: rgba(185, 28, 28, 0.9); color: white; }
        .brick .front  { transform: translateZ(40px); }
        .brick .back   { transform: rotateY(180deg) translateZ(40px); }
        .brick .right  { width: 80px; transform: rotateY(90deg) translateZ(120px); }
        .brick .left   { width: 80px; transform: rotateY(-90deg) translateZ(40px); }
        .brick .top    { height: 80px; width: 160px; transform: rotateX(90deg) translateZ(40px); background: #991B1B; }
        .brick .bottom { height: 80px; width: 160px; transform: rotateX(-90deg) translateZ(40px); background: #7F1D1D; }

        /* Ruler (m2-t1) */
        .ruler .face { width: 250px; height: 40px; background: #FEF3C7; color: #92400E; }
        .ruler .front { transform: translateZ(10px); border: 1px solid #F59E0B; overflow: hidden; }
        .ruler-mark { position: absolute; bottom: 0; width: 1px; height: 15px; background: #92400E; }
        .ruler-mark span { position: absolute; top: -15px; left: -3px; font-size: 10px; }
        .ruler .back  { transform: rotateY(180deg) translateZ(10px); }
        .ruler .right { width: 20px; transform: rotateY(90deg) translateZ(240px); background: #FDE68A; }
        .ruler .left  { width: 20px; transform: rotateY(-90deg) translateZ(10px); background: #FDE68A; }
        .ruler .top   { height: 20px; width: 250px; transform: rotateX(90deg) translateZ(10px); background: #F59E0B; }
        .ruler .bottom { height: 20px; width: 250px; transform: rotateX(-90deg) translateZ(30px); background: #D97706; }

        /* Clock (m4-t1) */
        .clock-3d .face.front {
          width: 180px; height: 180px;
          border-radius: 50%;
          background: white;
          color: #1e1b4b;
          border: 10px solid #7C3AED;
          transform: translateZ(15px);
          position: relative;
        }
        .clock-num { position: absolute; left: 50%; top: 50%; margin-left: -8px; margin-top: -10px; width: 16px; text-align: center; }
        .hand { position: absolute; left: 50%; bottom: 50%; border-radius: 10px; transform-origin: bottom center; }
        .hour { width: 6px; height: 45px; background: #1e1b4b; margin-left: -3px; }
        .minute { width: 4px; height: 70px; background: #7C3AED; margin-left: -2px; }
        .clock-center { position: absolute; left: 50%; top: 50%; width: 12px; height: 12px; border-radius: 50%; background: #EF4444; margin-left: -6px; margin-top: -6px; }
        .clock-3d .face.side {
          width: 180px; height: 180px; border-radius: 50%;
          background: #5B21B6;
          transform: translateZ(-15px);
        }

        /* Cube (m5-t1) */
        .cube-perspective .face { width: 120px; height: 120px; color: white; font-size: 1.2rem; }
        .cube-perspective .front  { transform: translateZ(60px); }
        .cube-perspective .back   { transform: rotateY(180deg) translateZ(60px); }
        .cube-perspective .right  { transform: rotateY(90deg) translateZ(60px); }
        .cube-perspective .left   { transform: rotateY(-90deg) translateZ(60px); }
        .cube-perspective .top    { transform: rotateX(90deg) translateZ(60px); }
        .cube-perspective .bottom { transform: rotateX(-90deg) translateZ(60px); }

        /* Wheel (m8-t1) */
        .wheel-3d .face.front {
          width: 160px; height: 160px; border-radius: 50%;
          background: #374151; border: 20px solid #111827;
          transform: translateZ(15px);
        }
        .tire-inner { width: 100%; height: 100%; border-radius: 50%; border: 4px dashed #4B5563; }
        .spoke { position: absolute; top: 50%; left: 50%; width: 2px; height: 50%; background: #9CA3AF; transform-origin: top center; }
        .wheel-3d .face.back {
          width: 160px; height: 160px; border-radius: 50%;
          background: #111827;
          transform: translateZ(-15px);
        }

        /* Pizza (m9-t1) */
        .pizza-3d .face.front {
          width: 180px; height: 180px; border-radius: 50%;
          background: #FDE68A; border: 12px solid #D97706;
          transform: translateZ(5px);
          position: relative;
          overflow: hidden;
        }
        .pizza-slice {
          position: absolute; width: 50%; height: 50%;
          background: #FBBF24; border: 1px solid rgba(255,255,255,0.3);
          transform-origin: bottom right;
        }
        .slice-1 { top: 0; left: 0; }
        .slice-2 { top: 0; left: 50%; transform: rotate(90deg); }
        .slice-3 { top: 50%; left: 50%; transform: rotate(180deg); }
        .slice-4 { top: 50%; left: 0; transform: rotate(270deg); background: rgba(0,0,0,0.1); }

        /* Bus (m3-t1) */
        .bus-3d .face { width: 140px; height: 70px; background: #FACC15; border: 2px solid #CA8A04; }
        .bus-3d .front { transform: translateZ(40px); font-size: 2rem; }
        .bus-3d .back  { transform: rotateY(180deg) translateZ(40px); }
        .bus-3d .right { width: 80px; transform: rotateY(90deg) translateZ(100px); }
        .bus-3d .left  { width: 80px; transform: rotateY(-90deg) translateZ(40px); }
        .bus-3d .top   { width: 140px; height: 80px; transform: rotateX(90deg) translateZ(40px); }
        .bus-3d .wheel { position: absolute; width: 24px; height: 24px; background: #111827; border-radius: 50%; bottom: -12px; }
        .wheel-0 { left: 20px; transform: translateZ(42px); }
        .wheel-1 { right: 20px; transform: translateZ(42px); }
        .wheel-2 { left: 20px; transform: translateZ(-42px); }
        .wheel-3 { right: 20px; transform: translateZ(-42px); }

        /* Coin (m6-t1) */
        .coin-3d .face { width: 100px; height: 100px; border-radius: 50%; background: #FCD34D; color: #92400E; font-size: 2.5rem; border: 4px double #B45309; }
        .coin-3d .front { transform: translateZ(10px); }
        .coin-3d .back  { transform: rotateY(180deg) translateZ(10px); }
        .coin-3d .side-ring { position: absolute; width: 100px; height: 20px; background: #D97706; transform: rotateX(90deg) translateZ(50px); }

        /* Jug (m7-t1) */
        .jug-3d { position: relative; width: 100px; height: 150px; transform-style: preserve-3d; }
        .jug-body { position: absolute; width: 80px; height: 120px; background: rgba(59, 130, 246, 0.4); border: 2px solid #3B82F6; transform: translateZ(0); border-radius: 10px; }
        .jug-top { position: absolute; top: -10px; width: 80px; height: 20px; background: rgba(255,255,255,0.5); transform: rotateX(90deg); border-radius: 50%; }
        .jug-handle { position: absolute; right: -20px; top: 30px; width: 40px; height: 60px; border: 8px solid #2563EB; border-radius: 50%; clip-path: inset(0 0 0 50%); }

        /* Grid (m11-t1) */
        .grid-3d { position: relative; transform-style: preserve-3d; }
        .grid-cube { position: absolute; transform-style: preserve-3d; }
        .grid-cube .face { width: 30px; height: 30px; background: #10B981; border: 1px solid #059669; }
        .grid-cube .front { transform: translateZ(15px); }
        .grid-cube .top   { transform: rotateX(90deg) translateZ(15px); background: #34D399; }
        .grid-cube .right { transform: rotateY(90deg) translateZ(15px); background: #059669; }

        /* Scale (m12-t1) */
        .scale-3d { position: relative; width: 200px; height: 150px; transform-style: preserve-3d; }
        .scale-beam { position: absolute; top: 40px; left: -100px; width: 200px; height: 10px; background: #4B5563; }
        .scale-pillar { position: absolute; top: 40px; left: -5px; width: 10px; height: 100px; background: #374151; }
        .scale-pan { position: absolute; top: 50px; width: 60px; height: 10px; background: #9CA3AF; border-radius: 50%; transform: rotateX(90deg); }
        .left-pan { left: -130px; }
        .right-pan { left: 70px; }

        /* Field (m13-t1) */
        .field-3d { position: relative; width: 200px; height: 200px; transform-style: preserve-3d; }
        .field-surface { width: 180px; height: 180px; background: #059669; transform: rotateX(90deg); border: 4px solid #FACC15; }
        .fence-post { position: absolute; width: 4px; height: 30px; background: #78350F; top: 0; left: 90px; }

        /* Chart (m14-t1) */
        .chart-3d { position: relative; width: 200px; height: 200px; transform-style: preserve-3d; }
        .bar { position: absolute; bottom: 0; width: 30px; background: #6C5CE7; transform-style: preserve-3d; }
        .bar-1 { left: 10px; background: #A78BFA; }
        .bar-2 { left: 50px; background: #8B5CF6; }
        .bar-3 { left: 90px; background: #7C3AED; }
        .bar-4 { left: 130px; background: #6D28D9; }
        .bar-top {
          position: absolute; top: 0; left: 0; width: 30px; height: 30px;
          background: rgba(255,255,255,0.3); transform: rotateX(90deg) translateZ(15px);
        }
        .chart-base {
          position: absolute; bottom: 0; left: 0; width: 180px; height: 100px;
          background: rgba(255,255,255,0.1); transform: rotateX(90deg) translateY(50px);
        }

        /* Generic */
        .generic-shape .face { width: 100px; height: 100px; background: #6C5CE7; color: white; }
        .generic-shape .front { transform: translateZ(50px); }
        .generic-shape .back { transform: rotateY(180deg) translateZ(50px); }
        .generic-shape .top { transform: rotateX(90deg) translateZ(50px); background: #8B5CF6; }
        .generic-shape .bottom { transform: rotateX(-90deg) translateZ(50px); background: #4C1D95; }
      `}</style>
    </div>
  );
}
