"use client";

import React, { useState } from 'react';

interface Props {
  subjectId: string;
  topicId: string;
}

export default function ExperientialLab({ subjectId, topicId }: Props) {
  const [rotation, setRotation] = useState({ x: -20, y: 45 });
  const [activeChoice, setActiveChoice] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    setRotation({
      x: rotation.x - e.movementY * 0.5,
      y: rotation.y + e.movementX * 0.5
    });
  };

  const getChoices = () => {
    if (subjectId !== 'mathematics') return [];
    switch (topicId) {
      case 'm1-t1': return ['Standard Brick', 'Brick Wall', 'Brick Arch'];
      case 'm2-t1': return ['Ruler', 'Tape', 'Wooden Scale'];
      case 'm3-t1': return ['School Bus', 'Fuel Tanker', 'Signboard'];
      case 'm4-t1': return ['Wall Clock', 'Hourglass', 'Pocket Watch'];
      case 'm5-t1': return ['Rubik\'s Cube', 'Dice', 'Tissue Box'];
      case 'm6-t1': return ['Gold Coin', 'Currency Note', 'Piggy Bank'];
      case 'm7-t1': return ['Measuring Jug', 'Milk Bottle', 'Water Tank'];
      case 'm8-t1': return ['Bicycle Wheel', 'Ferris Wheel', 'Dartboard'];
      case 'm9-t1': return ['Pizza', 'Apple', 'Chocolate Bar'];
      case 'm11-t1': return ['Egg Carton', 'Keyboard Grid', 'Solar Array'];
      case 'm12-t1': return ['Beam Balance', 'Kitchen Scale', 'Dumbbell'];
      case 'm13-t1': return ['Fenced Garden', 'Picture Frame', 'Football Pitch'];
      case 'm14-t1': return ['Bar Chart', 'Pie Chart', 'Data Pyramid'];
      default: return [];
    }
  };

  const choices = getChoices();

  const renderObject = () => {
    // ─── MATHEMATICS ──────────────────────────────────────────────────
    if (subjectId === 'mathematics') {
      switch (topicId) {
        case 'm1-t1': return <Brick type={activeChoice} />;
        case 'm2-t1': return <Ruler type={activeChoice} />;
        case 'm4-t1': return <Clock type={activeChoice} />;
        case 'm5-t1': return <CubePerspective type={activeChoice} />;
        case 'm8-t1': return <Wheel type={activeChoice} />;
        case 'm9-t1': return <PizzaFractions type={activeChoice} />;
        case 'm14-t1': return <BarChart type={activeChoice} />;
        case 'm3-t1': return <Bus type={activeChoice} />;
        case 'm6-t1': return <Coin type={activeChoice} />;
        case 'm7-t1': return <Jug type={activeChoice} />;
        case 'm11-t1': return <MultiplicationGrid type={activeChoice} />;
        case 'm12-t1': return <BalanceScale type={activeChoice} />;
        case 'm13-t1': return <FieldFence type={activeChoice} />;
        default: return <GenericBlock text="Math Lab" color="#6C5CE7" />;
      }
    }

    // ─── EVS (SCIENCE) ────────────────────────────────────────────────
    if (subjectId === 'science') {
      switch (topicId) {
        case 'e1-t1': return <Bridge />;
        case 'e3-t1': return <Elephant />;
        case 'e5-t1': return <Beehive />;
        case 'e11-t1': return <Flower3D />;
        case 'e13-t1': return <River3D />;
        case 'e16-t1': return <BirdNest />;
        case 'e24-t1': return <DesertScene />;
        default: return <GenericBlock text="EVS Lab" color="#00B894" />;
      }
    }

    // ─── COMPUTER SCIENCE ─────────────────────────────────────────────
    if (subjectId === 'computers') {
      switch (topicId) {
        case 'c1-t1': return <DesktopPC />;
        case 'c2-t1': return <InputDevices />;
        case 'c7-t1': return <PaintPalette />;
        default: return <GenericBlock text="CS Lab" color="#2D3436" />;
      }
    }

    // ─── LANGUAGES ────────────────────────────────────────────────────
    if (subjectId === 'hindi' || subjectId === 'kannada') {
      if (topicId === 'h9-t1') return <Charkha />; // Gandhi Topic
      if (topicId === 'k1-t1') return <KarnatakaMap />;
      return <GenericBlock text="Lang Lab" color="#E17055" />;
    }

    return <GenericBlock text="Lab" color="#7C3AED" />;
  };

  return (
    <div className="experiential-lab" onMouseMove={handleMouseMove}>
      <div className="lab-header">
        <div className="lab-status">
          <span className="pulse-dot"></span>
          <span>INTERACTIVE 3D LAB — DRAG TO ROTATE</span>
        </div>
      </div>
      <div className="scene">
        <div className="object-container" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
          {renderObject()}
        </div>
      </div>

      {choices.length > 0 && (
        <div className="choices-tray">
          {choices.map((c, i) => (
            <button 
              key={i} 
              className={`choice-pill ${activeChoice === i ? 'active' : ''}`}
              onClick={() => setActiveChoice(i)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .experiential-lab {
          background: radial-gradient(circle at center, #1e1b4b, #0f172a);
          border-radius: 24px;
          padding: 2rem;
          color: white;
          margin: 0;
          cursor: grab;
          user-select: none;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 0 50px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .experiential-lab:active { cursor: grabbing; }
        
        .lab-header {
          position: absolute;
          top: 1.25rem;
          left: 1.5rem;
          z-index: 10;
        }
        .lab-status {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(0,0,0,0.4);
          padding: 0.4rem 0.8rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .pulse-dot {
          width: 8px; height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .scene {
          width: 100%;
          height: 350px;
          perspective: 1200px;
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
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .choices-tray {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          background: rgba(255,255,255,0.05);
          padding: 0.6rem;
          border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 20;
          flex-wrap: wrap;
          justify-content: center;
        }
        .choice-pill {
          padding: 0.4rem 1.25rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.75rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }
        .choice-pill:hover { color: white; background: rgba(255,255,255,0.1); }
        .choice-pill.active { background: white; color: #1e1b4b; box-shadow: 0 4px 12px rgba(255,255,255,0.2); }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

const GenericBlock = ({ text, color }: { text: string; color: string }) => (
  <div className="cube">
    <div className="face front" style={{ background: color }}>{text}</div>
    <div className="face back" style={{ background: color }}></div>
    <div className="face right" style={{ background: color, filter: 'brightness(0.8)' }}></div>
    <div className="face left" style={{ background: color, filter: 'brightness(0.8)' }}></div>
    <div className="face top" style={{ background: color, filter: 'brightness(1.2)' }}></div>
    <div className="face bottom" style={{ background: color, filter: 'brightness(0.6)' }}></div>
    <style jsx>{`
      .cube { width: 120px; height: 120px; transform-style: preserve-3d; }
      .face { position: absolute; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; font-weight: 900; border: 1px solid rgba(255,255,255,0.2); font-size: 0.8rem; }
      .front { transform: translateZ(60px); }
      .back { transform: rotateY(180deg) translateZ(60px); }
      .right { transform: rotateY(90deg) translateZ(60px); }
      .left { transform: rotateY(-90deg) translateZ(60px); }
      .top { transform: rotateX(90deg) translateZ(60px); }
      .bottom { transform: rotateX(-90deg) translateZ(60px); }
    `}</style>
  </div>
);

// --- Math Components ---
const Brick = ({ type }: { type: number }) => (
  <div className="brick-scene">
    {type === 0 && (
      <div className="brick-3d">
        <div className="face front">BRICK</div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    )}
    {type === 1 && (
      <div className="brick-wall">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="wall-brick" style={{ 
            transform: `translateX(${(i % 3) * 65 - 65}px) translateY(${Math.floor(i / 3) * 35 - 15}px)` 
          }}></div>
        ))}
      </div>
    )}
    {type === 2 && (
      <div className="brick-arch">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="arch-brick" style={{ 
            transform: `rotate(${(i - 2) * 30}deg) translateY(-80px)` 
          }}></div>
        ))}
      </div>
    )}
    <style jsx>{`
      .brick-scene { transform-style: preserve-3d; }
      .brick-3d { position: relative; width: 160px; height: 80px; transform-style: preserve-3d; }
      .face { position: absolute; width: 160px; height: 80px; background: #B91C1C; border: 2px solid #7F1D1D; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.2rem; }
      .front { transform: translateZ(40px); }
      .back { transform: rotateY(180deg) translateZ(40px); }
      .right { width: 80px; transform: rotateY(90deg) translateZ(120px); background: #991B1B; }
      .left { width: 80px; transform: rotateY(-90deg) translateZ(40px); background: #991B1B; }
      .top { height: 80px; transform: rotateX(90deg) translateZ(40px); background: #EF4444; }
      .bottom { height: 80px; transform: rotateX(-90deg) translateZ(40px); background: #7F1D1D; }
      
      .wall-brick { position: absolute; width: 60px; height: 30px; background: #B91C1C; border: 1px solid #7F1D1D; transform: translateZ(10px); }
      .arch-brick { position: absolute; width: 40px; height: 25px; background: #B91C1C; border: 1px solid #7F1D1D; left: -20px; top: -12px; }
    `}</style>
  </div>
);

const Ruler = ({ type }: { type: number }) => (
  <div className="ruler-scene">
    {type === 0 && (
      <div className="ruler-std">
        <div className="face front">
          {[...Array(10)].map((_, i) => <div key={i} className="mark" style={{left: `${i*10}%`}}><span>{i}</span></div>)}
        </div>
      </div>
    )}
    {type === 1 && (
      <div className="tape-measure">
        <div className="tape-roll"></div>
        <div className="tape-end">
          {[...Array(5)].map((_, i) => <div key={i} className="mark-tape" style={{left: `${i*20}%`}}></div>)}
        </div>
      </div>
    )}
    {type === 2 && (
      <div className="wooden-scale">
        <div className="wood-base">
          <div className="grain"></div>
          <div className="marks-wood">
            {[...Array(10)].map((_, i) => <div key={i} className="mark-wood" style={{left: `${i*10}%`}}></div>)}
          </div>
        </div>
      </div>
    )}
    <style jsx>{`
      .ruler-scene { transform-style: preserve-3d; }
      .ruler-std { position: relative; width: 250px; height: 40px; transform-style: preserve-3d; }
      .face { position: absolute; width: 250px; height: 40px; background: #FEF3C7; border: 1px solid #F59E0B; }
      .mark { position: absolute; bottom: 0; width: 1px; height: 15px; background: #92400E; }
      .mark span { position: absolute; top: -15px; left: -3px; font-size: 10px; font-weight: 800; color: #92400E; }
      .front { transform: translateZ(10px); }
      
      .tape-roll { position: absolute; width: 60px; height: 60px; border-radius: 50%; background: #FACC15; border: 4px solid #CA8A04; left: -80px; top: -30px; }
      .tape-end { position: absolute; width: 150px; height: 30px; background: #FDE68A; top: -15px; border-bottom: 2px solid #CA8A04; }
      .mark-tape { position: absolute; bottom: 0; width: 1px; height: 10px; background: #CA8A04; }

      .wooden-scale { position: relative; width: 200px; height: 40px; background: #92400E; border-radius: 4px; overflow: hidden; transform: translateZ(10px); }
      .wood-base { width: 100%; height: 100%; position: relative; border: 2px solid #78350F; }
      .grain { position: absolute; width: 100%; height: 100%; background: linear-gradient(90deg, transparent 95%, rgba(0,0,0,0.1) 100%); background-size: 20px 100%; }
      .mark-wood { position: absolute; bottom: 0; width: 2px; height: 20px; background: #FCD34D; }
    `}</style>
  </div>
);

const Clock = ({ type }: { type: number }) => (
  <div className="clock-scene">
    {type === 0 && (
      <div className="clock-std">
        <div className="face front">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="num" style={{ transform: `rotate(${i * 30}deg) translateY(-65px) rotate(-${i * 30}deg)` }}>
              {i === 0 ? 12 : i}
            </div>
          ))}
          <div className="center"></div>
          <div className="hand hour" style={{ transform: 'rotate(90deg)' }}></div>
          <div className="hand min" style={{ transform: 'rotate(0deg)' }}></div>
        </div>
      </div>
    )}
    {type === 1 && (
      <div className="hourglass">
        <div className="glass top-glass"></div>
        <div className="glass bot-glass"></div>
        <div className="sand"></div>
      </div>
    )}
    {type === 2 && (
      <div className="pocket-watch">
        <div className="watch-case">
          <div className="watch-face">
            <div className="hand-gold h-g"></div>
            <div className="hand-gold m-g"></div>
          </div>
        </div>
      </div>
    )}
    <style jsx>{`
      .clock-scene { transform-style: preserve-3d; }
      .clock-std { position: relative; width: 180px; height: 180px; transform-style: preserve-3d; }
      .face { position: absolute; width: 180px; height: 180px; background: white; border: 8px solid #7C3AED; border-radius: 50%; color: #1E1B4B; }
      .front { transform: translateZ(20px); }
      .num { position: absolute; left: 50%; top: 50%; margin: -10px; width: 20px; text-align: center; font-weight: 800; font-size: 0.8rem; }
      .center { position: absolute; top: 50%; left: 50%; width: 12px; height: 12px; background: #EF4444; border-radius: 50%; margin: -6px; z-index: 10; }
      .hand { position: absolute; left: 50%; bottom: 50%; background: #1E1B4B; transform-origin: bottom center; border-radius: 10px; }
      .hour { width: 6px; height: 45px; margin-left: -3px; }
      .min { width: 4px; height: 65px; margin-left: -2px; background: #7C3AED; }

      .hourglass { position: relative; width: 80px; height: 140px; transform-style: preserve-3d; }
      .glass { position: absolute; width: 80px; height: 70px; background: rgba(255,255,255,0.2); border: 2px solid white; }
      .top-glass { top: 0; clip-path: polygon(0 0, 100% 0, 50% 100%); }
      .bot-glass { bottom: 0; clip-path: polygon(50% 0, 0 100%, 100% 100%); }
      .sand { position: absolute; width: 40px; height: 30px; background: #FDE68A; bottom: 5px; left: 20px; border-radius: 50% 50% 0 0; }

      .watch-case { width: 120px; height: 120px; background: #FBBF24; border: 6px solid #B45309; border-radius: 50%; transform: translateZ(10px); padding: 10px; }
      .watch-face { width: 100%; height: 100%; background: #FEF3C7; border-radius: 50%; position: relative; }
      .hand-gold { position: absolute; left: 50%; bottom: 50%; background: #92400E; transform-origin: bottom center; }
      .h-g { width: 4px; height: 30px; margin-left: -2px; transform: rotate(45deg); }
      .m-g { width: 2px; height: 45px; margin-left: -1px; transform: rotate(180deg); }
    `}</style>
  </div>
);

const CubePerspective = ({ type }: { type: number }) => (
  <div className="cube-scene">
    {type === 0 && (
      <div className="rubiks">
        {[...Array(6)].map((_, f) => (
          <div key={f} className={`cube-face f-${f}`}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="sticker" style={{ background: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#FFFFFF', '#FACC15'][f] }}></div>
            ))}
          </div>
        ))}
      </div>
    )}
    {type === 1 && (
      <div className="dice">
        <div className="cube-face front">
          <div className="dot d-center"></div>
        </div>
        <div className="cube-face back">
          <div className="dot d-tl"></div><div className="dot d-tr"></div>
          <div className="dot d-bl"></div><div className="dot d-br"></div>
          <div className="dot d-ml"></div><div className="dot d-mr"></div>
        </div>
      </div>
    )}
    {type === 2 && <GenericBlock text="TISSUE" color="#E5E7EB" />}
    <style jsx>{`
      .cube-scene { transform-style: preserve-3d; }
      .rubiks { position: relative; width: 120px; height: 120px; transform-style: preserve-3d; }
      .cube-face { position: absolute; width: 120px; height: 120px; border: 2px solid #000; display: grid; grid-template-columns: repeat(3, 1fr); background: #000; }
      .sticker { border: 2px solid #000; border-radius: 4px; }
      .f-0 { transform: translateZ(60px); }
      .f-1 { transform: rotateY(180deg) translateZ(60px); }
      .f-2 { transform: rotateY(90deg) translateZ(60px); }
      .f-3 { transform: rotateY(-90deg) translateZ(60px); }
      .f-4 { transform: rotateX(90deg) translateZ(60px); }
      .f-5 { transform: rotateX(-90deg) translateZ(60px); }

      .dice .cube-face { width: 100px; height: 100px; background: white; border-radius: 12px; position: absolute; border: 2px solid #DDD; }
      .dot { width: 15px; height: 15px; background: #333; border-radius: 50%; position: absolute; }
      .d-center { left: 42.5px; top: 42.5px; }
    `}</style>
  </div>
);

// --- Science/EVS Components ---
const Bridge = () => <div className="bridge-shape">
  <div className="road"></div>
  <div className="pylon left"></div>
  <div className="pylon right"></div>
  <style jsx>{`
    .bridge-shape { position: relative; width: 240px; height: 100px; transform-style: preserve-3d; }
    .road { position: absolute; width: 240px; height: 40px; background: #4B5563; transform: rotateX(90deg) translateZ(-50px); border: 2px solid #9CA3AF; }
    .pylon { position: absolute; width: 20px; height: 120px; background: #9CA3AF; border: 2px solid #4B5563; }
    .left { left: 40px; transform: translateZ(20px); }
    .right { right: 40px; transform: translateZ(20px); }
  `}</style>
</div>;

const Beehive = () => <div className="beehive-shape">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="layer" style={{ transform: `translateZ(${i * 15}px) scale(${1 - i * 0.1})` }}></div>
  ))}
  <style jsx>{`
    .beehive-shape { position: relative; width: 120px; height: 120px; transform-style: preserve-3d; }
    .layer { position: absolute; width: 120px; height: 120px; background: #F59E0B; border: 2px solid #B45309; border-radius: 50%; }
  `}</style>
</div>;

const River3D = () => <div className="river-scene">
  <div className="water"></div>
  <div className="bank left"></div>
  <div className="bank right"></div>
  <style jsx>{`
    .river-scene { position: relative; width: 200px; height: 200px; transform-style: preserve-3d; }
    .water { position: absolute; width: 120px; height: 200px; background: #3B82F6; transform: rotateX(90deg) translateZ(0); left: 40px; }
    .bank { position: absolute; width: 40px; height: 200px; background: #8B4513; transform: rotateX(90deg) translateZ(5px); }
    .left { left: 0; }
    .right { right: 0; }
  `}</style>
</div>;

// --- Remaining Stubs ---
const Wheel = ({ type }: { type: number }) => (
  <div className="wheel-scene">
    {type === 0 && <div className="cycle-wheel"></div>}
    {type === 1 && <div className="ferris-wheel"></div>}
    {type === 2 && <div className="dartboard"></div>}
    <style jsx>{`
      .wheel-scene { transform-style: preserve-3d; }
      .cycle-wheel { width: 160px; height: 160px; border-radius: 50%; border: 4px solid #111827; background: repeating-conic-gradient(#374151 0deg 15deg, #4B5563 15deg 30deg); transform: translateZ(10px); }
      .ferris-wheel { width: 160px; height: 160px; border-radius: 50%; border: 8px solid #EF4444; background: radial-gradient(circle, #7C3AED 20%, transparent 20%); transform: translateZ(10px); }
      .dartboard { width: 160px; height: 160px; border-radius: 50%; background: repeating-conic-gradient(#000 0% 10%, #FFF 10% 20%); border: 10px solid #1E1B4B; }
    `}</style>
  </div>
);

const PizzaFractions = ({ type }: { type: number }) => (
  <div className="pizza-scene">
    {type === 0 && (
      <div className="pizza">
        <div className="slice" style={{ background: '#D97706', transform: 'rotate(45deg)' }}></div>
      </div>
    )}
    {type === 1 && <div style={{ fontSize: '5rem' }}>🍎</div>}
    {type === 2 && <div style={{ width: '120px', height: '60px', background: '#451A03', borderRadius: '4px' }}></div>}
    <style jsx>{`
      .pizza-scene { transform-style: preserve-3d; }
      .pizza { width: 180px; height: 180px; border-radius: 50%; background: #FDE68A; border: 8px solid #D97706; position: relative; overflow: hidden; }
      .slice { position: absolute; width: 50%; height: 50%; top: 0; left: 0; transform-origin: bottom right; }
    `}</style>
  </div>
);

const BarChart = ({ type }: { type: number }) => (
  <div className="chart-scene">
    {type === 0 && (
      <div className="bars">
        {[60, 100, 40, 80].map((h, i) => <div key={i} className="b" style={{ height: `${h}px` }}></div>)}
      </div>
    )}
    {type === 1 && <div className="pie"></div>}
    {type === 2 && <div className="pyramid"></div>}
    <style jsx>{`
      .chart-scene { transform-style: preserve-3d; }
      .bars { display: flex; gap: 10px; align-items: flex-end; }
      .b { width: 30px; background: #7C3AED; box-shadow: 4px 0 10px rgba(0,0,0,0.3); }
      .pie { width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#7C3AED 0 30%, #EF4444 30% 60%, #10B981 60% 100%); }
    `}</style>
  </div>
);

const Bus = ({ type }: { type: number }) => (
  <div className="bus-scene">
    {type === 0 && <div className="sch-bus">🚌</div>}
    {type === 1 && <div className="tanker">🚛</div>}
    {type === 2 && <div className="sign">🪧</div>}
    <style jsx>{`
      .bus-scene { transform-style: preserve-3d; font-size: 5rem; }
    `}</style>
  </div>
);

const Coin = ({ type }: { type: number }) => (
  <div className="coin-scene">
    {type === 0 && <div className="g-coin">₹</div>}
    {type === 1 && <div className="note">💵</div>}
    {type === 2 && <div className="piggy">🐷</div>}
    <style jsx>{`
      .coin-scene { transform-style: preserve-3d; }
      .g-coin { width: 120px; height: 120px; border-radius: 50%; background: #FACC15; border: 4px double #B45309; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: 900; color: #92400E; }
    `}</style>
  </div>
);

const Jug = ({ type }: { type: number }) => (
  <div className="jug-scene">
    <div style={{ fontSize: '5rem' }}>{type === 0 ? '🍶' : type === 1 ? '🍼' : '🛢️'}</div>
  </div>
);

const MultiplicationGrid = ({ type }: { type: number }) => (
  <div className="grid-scene">
    <div style={{ fontSize: '5rem' }}>{type === 0 ? '🥚' : type === 1 ? '⌨️' : '☀️'}</div>
  </div>
);

const BalanceScale = ({ type }: { type: number }) => (
  <div className="scale-scene">
    <div style={{ fontSize: '5rem' }}>{type === 0 ? '⚖️' : type === 1 ? '📟' : '🏋️'}</div>
  </div>
);

const FieldFence = ({ type }: { type: number }) => (
  <div className="field-scene">
    <div style={{ fontSize: '5rem' }}>{type === 0 ? '🏡' : type === 1 ? '🖼️' : '⚽'}</div>
  </div>
);

const Elephant = () => <div style={{ fontSize: '5rem' }}>🐘</div>;
const Flower3D = () => <div style={{ fontSize: '5rem' }}>🌸</div>;
const BirdNest = () => <div style={{ fontSize: '5rem' }}>🪺</div>;
const DesertScene = () => <div style={{ fontSize: '5rem' }}>🌵</div>;
const DesktopPC = () => <div style={{ fontSize: '5rem' }}>🖥️</div>;
const InputDevices = () => <div style={{ fontSize: '5rem' }}>🖱️⌨️</div>;
const PaintPalette = () => <div style={{ fontSize: '5rem' }}>🎨</div>;
const Charkha = () => <div style={{ fontSize: '5rem' }}>⚙️</div>;
const KarnatakaMap = () => <div style={{ fontSize: '5rem' }}>🚩</div>;
