"use client";

import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, ContactShadows, Float, MeshDistortMaterial, Environment, MeshWobbleMaterial, MeshReflectorMaterial } from '@react-three/drei';

interface Props {
  subjectId: string;
  topicId: string;
}

export default function ExperientialLab({ subjectId, topicId }: Props) {
  const [activeChoice, setActiveChoice] = useState(0);

  const getChoices = () => {
    if (subjectId !== 'mathematics') return [];
    switch (topicId) {
      case 'm1-t1': return ['Red Clay Brick', 'Concrete Block', 'Ancient Brick'];
      case 'm2-t1': return ['Steel Ruler', 'Fiber Tape', 'Wood Scale'];
      case 'm3-t1': return ['School Bus', 'Fuel Tanker', 'Express Truck'];
      case 'm4-t1': return ['Classic Wall Clock', 'Digital Timer', 'Hourglass'];
      case 'm5-t1': return ['Rubik\'s Cube', 'Translucent Dice', 'Crystal Prism'];
      case 'm6-t1': return ['Gold Coin', 'Currency Note', 'Silver Bar'];
      case 'm7-t1': return ['Glass Measuring Jug', 'Milk Bottle', 'Oil Drum'];
      case 'm8-t1': return ['Chrome Bicycle Wheel', 'Giant Ferris Wheel', 'Dartboard'];
      case 'm9-t1': return ['Pepperoni Pizza', 'Sliced Apple', 'Chocolate Cake'];
      case 'm11-t1': return ['Egg Carton', 'Mechanical Keyboard', 'Solar Array'];
      case 'm12-t1': return ['Brass Beam Balance', 'Digital Scale', 'Weight Stone'];
      case 'm13-t1': return ['Fenced Garden', 'Photo Frame', 'Football Pitch'];
      case 'm14-t1': return ['Glass Bar Chart', 'Glow Pie Chart', 'Data Pyramid'];
      default: return ['Concept Model'];
    }
  };

  const choices = getChoices();

  return (
    <div className="experiential-lab">
      <div className="lab-header">
        <div className="lab-status">
          <span className="pulse-dot"></span>
          <span>ULTRA-REALISTIC 3D LAB — PBR RAY-TRACED ENGINE</span>
        </div>
      </div>

      <div className="canvas-container">
        <Canvas shadows camera={{ position: [4, 4, 4], fov: 40 }} gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
            
            <Stage intensity={0.5} environment="city" adjustCamera={1.5}>
              <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.2}>
                <RealObject topicId={topicId} type={activeChoice} />
              </Float>
            </Stage>

            {/* Premium Reflective Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
              <planeGeometry args={[20, 20]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
                mirror={0}
              />
            </mesh>
            
            <gridHelper args={[20, 20, '#1e293b', '#0f172a']} position={[0, -1.19, 0]} />

            <OrbitControls 
              makeDefault 
              enablePan={false} 
              enableZoom={true} 
              autoRotate={true}
              autoRotateSpeed={0.3}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2.1}
            />
          </Suspense>
        </Canvas>
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
          background: radial-gradient(circle at center, #0f172a, #020617);
          border-radius: 28px;
          padding: 1.5rem;
          color: white;
          margin: 0;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 500px;
        }
        
        .lab-header {
          position: absolute;
          top: 1.25rem;
          left: 1.5rem;
          z-index: 10;
          pointer-events: none;
        }
        .lab-status {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .pulse-dot {
          width: 8px; height: 8px;
          background: #3B82F6;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .canvas-container {
          width: 100%;
          flex: 1;
          cursor: grab;
        }
        .canvas-container:active { cursor: grabbing; }

        .choices-tray {
          display: flex;
          gap: 0.5rem;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(12px);
          padding: 0.5rem;
          border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 20;
          margin-bottom: 1rem;
        }
        .choice-pill {
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .choice-pill:hover { color: white; background: rgba(255,255,255,0.05); }
        .choice-pill.active { background: white; color: #020617; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { transform: scale(1.1); opacity: 0.5; box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
      `}</style>
    </div>
  );
}

function RealObject({ topicId, type }: { topicId: string; type: number }) {
  switch (topicId) {
    case 'm1-t1': // Brick
      return (
        <group>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2, 1, 1]} />
            <meshStandardMaterial 
              color={type === 0 ? "#B91C1C" : type === 1 ? "#4B5563" : "#92400E"} 
              roughness={0.9} 
              metalness={0.05}
              bumpScale={0.02}
            />
          </mesh>
          {/* Detailed mortar lines or cracks could be added here if needed */}
        </group>
      );

    case 'm2-t1': // Ruler
      return (
        <group>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 0.4, 0.04]} />
            <meshPhysicalMaterial 
              color={type === 0 ? "#E5E7EB" : type === 1 ? "#FDE68A" : "#92400E"}
              metalness={type === 0 ? 0.9 : 0.1}
              roughness={type === 0 ? 0.1 : 0.3}
              clearcoat={type === 0 ? 1 : 0}
            />
          </mesh>
          {/* Measurement marks */}
          {[...Array(31)].map((_, i) => (
            <mesh key={i} position={[i * 0.1 - 1.5, 0.15, 0.025]}>
              <boxGeometry args={[0.01, i % 5 === 0 ? 0.1 : 0.05, 0.01]} />
              <meshStandardMaterial color="#000" />
            </mesh>
          ))}
        </group>
      );

    case 'm4-t1': // Clock
      return (
        <group>
          {/* Frame */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.2, 1.25, 0.2, 64]} />
            <meshPhysicalMaterial color="#374151" metalness={0.8} roughness={0.2} clearcoat={1} />
          </mesh>
          {/* Face */}
          <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 0.02, 64]} />
            <meshStandardMaterial color="#FFF" />
          </mesh>
          {/* Glass Cover */}
          <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 0.01, 64]} />
            <meshPhysicalMaterial 
              transmission={0.95} 
              thickness={0.5} 
              roughness={0.05} 
              ior={1.5} 
              transparent
              opacity={0.3}
            />
          </mesh>
          {/* Ticks and Hands */}
          {[...Array(12)].map((_, i) => (
            <mesh key={i} position={[Math.sin(i * Math.PI / 6) * 0.9, Math.cos(i * Math.PI / 6) * 0.9, 0.07]} rotation={[0, 0, -i * Math.PI / 6]}>
              <boxGeometry args={[0.04, 0.1, 0.02]} />
              <meshStandardMaterial color="#000" />
            </mesh>
          ))}
          <mesh position={[0, 0.35, 0.08]} rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[0.06, 0.8, 0.01]} />
            <meshStandardMaterial color="#1E1B4B" />
          </mesh>
        </group>
      );

    case 'm5-t1': // Cube
      return (
        <group>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshPhysicalMaterial 
              color={type === 0 ? "#3B82F6" : "#FFFFFF"} 
              roughness={0.1} 
              metalness={0.2}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
          {type === 1 && ( // Dice Dots
            <group>
              <mesh position={[0, 0, 0.76]}><sphereGeometry args={[0.12, 16, 16]} /><meshStandardMaterial color="#000" /></mesh>
              <mesh position={[0.4, 0.4, 0.76]}><sphereGeometry args={[0.1, 16, 16]} /><meshStandardMaterial color="#000" /></mesh>
              <mesh position={[-0.4, -0.4, 0.76]}><sphereGeometry args={[0.1, 16, 16]} /><meshStandardMaterial color="#000" /></mesh>
            </group>
          )}
        </group>
      );

    case 'm6-t1': // Coin
      return (
        <group>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.8, 0.8, 0.08, 64]} />
            <meshPhysicalMaterial 
              color={type === 0 ? "#FBBF24" : "#E5E7EB"} 
              metalness={0.9} 
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.7, 0.02, 16, 100]} />
            <meshStandardMaterial color="#CA8A04" metalness={1} />
          </mesh>
        </group>
      );

    case 'm7-t1': // Jug
      return (
        <group>
          {/* Main Body */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.6, 0.8, 1.8, 32, 1, true]} />
            <meshPhysicalMaterial 
              color="#BFDBFE" 
              transmission={0.98} 
              thickness={1} 
              roughness={0} 
              transparent 
              ior={1.33}
            />
          </mesh>
          {/* Liquid Level */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.7, 0.75, 1, 32]} />
            <meshPhysicalMaterial color="#3B82F6" transmission={0.9} roughness={0.1} transparent opacity={0.6} />
          </mesh>
          {/* Handle */}
          <mesh position={[0.7, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
            <torusGeometry args={[0.4, 0.06, 16, 32, Math.PI * 1.2]} />
            <meshPhysicalMaterial color="#BFDBFE" transmission={0.9} transparent />
          </mesh>
        </group>
      );

    case 'm8-t1': // Wheel
      return (
        <group>
          <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
            <torusGeometry args={[1.2, 0.12, 16, 100]} />
            <meshPhysicalMaterial color="#1F2937" roughness={0.8} />
          </mesh>
          {/* Spokes */}
          {[...Array(12)].map((_, i) => (
            <mesh key={i} rotation={[i * Math.PI / 6, Math.PI / 2, 0]} position={[0, 0, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 2.4, 8]} />
              <meshPhysicalMaterial color="#9CA3AF" metalness={0.9} roughness={0.1} />
            </mesh>
          ))}
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
            <meshPhysicalMaterial color="#6B7280" metalness={0.8} />
          </mesh>
        </group>
      );

    case 'm3-t1': // Bus / Truck
      return (
        <group>
          {/* Main Body */}
          <mesh castShadow position={[0, 0.4, 0]}>
            <boxGeometry args={[2.5, 1, 1]} />
            <meshPhysicalMaterial color={type === 0 ? "#FACC15" : "#1D4ED8"} roughness={0.3} metalness={0.2} clearcoat={1} />
          </mesh>
          {/* Cabin */}
          <mesh position={[0.8, 1, 0]}>
            <boxGeometry args={[0.9, 0.4, 0.9]} />
            <meshPhysicalMaterial color="#94A3B8" transmission={0.9} transparent opacity={0.4} />
          </mesh>
          {/* Wheels */}
          {[-0.8, 0.8].map((x, i) => (
            <group key={i}>
              <mesh position={[x, -0.1, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#111827" roughness={0.8} />
              </mesh>
              <mesh position={[x, -0.1, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#111827" roughness={0.8} />
              </mesh>
            </group>
          ))}
        </group>
      );

    case 'm11-t1': // Grid / Solar
      return (
        <group>
          {[...Array(9)].map((_, i) => (
            <mesh key={i} position={[(i % 3) * 0.6 - 0.6, Math.floor(i / 3) * 0.6 - 0.6, 0]} castShadow>
              <boxGeometry args={[0.5, 0.5, 0.1]} />
              <meshPhysicalMaterial 
                color={type === 2 ? "#1E3A8A" : "#10B981"} 
                metalness={0.8} 
                roughness={0.1} 
                clearcoat={1} 
              />
            </mesh>
          ))}
        </group>
      );

    case 'm12-t1': // Balance
      return (
        <group>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[3.5, 0.1, 0.1]} />
            <meshStandardMaterial color="#92400E" metalness={0.2} />
          </mesh>
          {/* Brass Plates */}
          {[-1.5, 1.5].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
              <meshPhysicalMaterial color="#FBBF24" metalness={0.9} roughness={0.1} clearcoat={1} />
            </mesh>
          ))}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.1, 0.2, 1, 16]} />
            <meshStandardMaterial color="#4B5563" />
          </mesh>
        </group>
      );

    case 'm14-t1': // Chart
      return (
        <group>
          {[0.8, 1.8, 0.6, 1.2, 2.2].map((h, i) => (
            <mesh key={i} position={[i * 0.7 - 1.4, h / 2 - 1, 0]} castShadow>
              <boxGeometry args={[0.5, h, 0.5]} />
              <meshPhysicalMaterial 
                color={`hsl(${i * 60}, 70%, 50%)`} 
                transmission={0.4} 
                thickness={1} 
                roughness={0.1} 
                transparent 
                opacity={0.8}
                clearcoat={1}
              />
            </mesh>
          ))}
        </group>
      );

    // ─── EVS (SCIENCE) ────────────────────────────────────────────────
    case 'e1-t1': // Bridge
      return (
        <group>
          {/* Road */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[5, 0.15, 1.5]} />
            <meshStandardMaterial color="#374151" roughness={0.9} />
          </mesh>
          {/* Pillars */}
          {[-1.8, 1.8].map((x, i) => (
            <mesh key={i} position={[x, -1, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
              <meshStandardMaterial color="#94A3B8" />
            </mesh>
          ))}
          {/* Cables */}
          <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
            <meshStandardMaterial color="#E5E7EB" />
          </mesh>
        </group>
      );

    case 'e5-t1': // Beehive
      return (
        <group>
          <mesh castShadow>
            <icosahedronGeometry args={[1.2, 2]} />
            <meshPhysicalMaterial 
              color="#F59E0B" 
              roughness={0.7} 
              bumpScale={0.1}
              clearcoat={0.2}
            />
          </mesh>
          <mesh position={[0, -0.4, 1.1]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        </group>
      );

    // ─── COMPUTER SCIENCE ─────────────────────────────────────────────
    case 'c1-t1': // Desktop PC
      return (
        <group>
          {/* Monitor */}
          <mesh position={[0, 0.6, 0]} castShadow>
            <boxGeometry args={[2, 1.2, 0.15]} />
            <meshPhysicalMaterial color="#1F2937" roughness={0.2} metalness={0.8} clearcoat={1} />
          </mesh>
          {/* Screen */}
          <mesh position={[0, 0.6, 0.08]}>
            <planeGeometry args={[1.8, 1]} />
            <meshStandardMaterial color="#000" emissive="#1E3A8A" emissiveIntensity={0.5} />
          </mesh>
          {/* Stand */}
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
            <meshStandardMaterial color="#374151" />
          </mesh>
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[1, 0.05, 0.6]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        </group>
      );

    case 'k1-t1': // Karnataka Map
      return (
        <mesh castShadow>
          <boxGeometry args={[1.5, 2, 0.2]} />
          <meshPhysicalMaterial 
            color="#E11D48" 
            metalness={0.5} 
            roughness={0.2} 
            clearcoat={1}
            emissive="#4c0519"
            emissiveIntensity={0.2}
          />
        </mesh>
      );

    case 'm9-t1': // Pizza / Fruit / Cake
      return (
        <group>
          {type === 0 && ( // Pizza
            <group>
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[1.6, 1.6, 0.1, 32]} />
                <meshStandardMaterial color="#92400E" roughness={0.8} />
              </mesh>
              <mesh position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 0.05, 32]} />
                <meshStandardMaterial color="#FDE68A" roughness={0.4} />
              </mesh>
              {[...Array(8)].map((_, i) => (
                <mesh key={i} position={[Math.sin(i * 0.8) * 0.8, 0.1, Math.cos(i * 0.8) * 0.8]} rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[0.2, 0.2, 0.02, 16]} />
                  <meshStandardMaterial color="#B91C1C" />
                </mesh>
              ))}
            </group>
          )}
          {type === 1 && ( // Apple
            <mesh castShadow>
              <sphereGeometry args={[1, 32, 32]} />
              <meshPhysicalMaterial color="#EF4444" roughness={0.1} clearcoat={1} />
            </mesh>
          )}
        </group>
      );

    case 'm13-t1': // Field / Fence
      return (
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[4, 4]} />
            <meshStandardMaterial color="#059669" roughness={1} />
          </mesh>
          {/* Fence Posts */}
          {[-1.8, 1.8].map((x) => (
            [-1.8, 1.8].map((z) => (
              <mesh key={`${x}-${z}`} position={[x, 0.5, z]}>
                <boxGeometry args={[0.1, 1, 0.1]} />
                <meshStandardMaterial color="#92400E" />
              </mesh>
            ))
          ))}
        </group>
      );

    case 'e13-t1': // River
      return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5, 64, 64]} />
          <MeshDistortMaterial 
            color="#3B82F6" 
            speed={3} 
            distort={0.3} 
            metalness={0.2} 
            roughness={0.1}
            transmission={0.5}
            transparent
          />
        </mesh>
      );

    default:
      return (
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
          <meshPhysicalMaterial 
            color="#7C3AED" 
            roughness={0.1} 
            metalness={0.8} 
            clearcoat={1} 
            clearcoatRoughness={0.1}
          />
        </mesh>
      );
  }
}
