"use client";

import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, ContactShadows, Float, MeshDistortMaterial, Environment, MeshWobbleMaterial, MeshReflectorMaterial } from '@react-three/drei';

interface Props {
  subjectId: string;
  topicId: string;
}

export default function ExperientialLab({ subjectId, topicId }: Props) {
  const [activeChoice, setActiveChoice] = useState(0);
  const [param1, setParam1] = useState(5);
  const [param2, setParam2] = useState(5);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setParam1(5);
    setParam2(5);
    setToggle(false);
  }, [topicId]);

  const getChoices = () => {
    switch (topicId) {
      // Mathematics
      case 'm1-t1': return ['Red Clay Brick', 'Concrete Block', 'Ancient Brick'];
      case 'm2-t1': return ['Steel Ruler', 'Fiber Tape', 'Wood Scale'];
      case 'm3-t1': return ['School Bus', 'Fuel Tanker', 'Express Truck'];
      case 'm4-t1': return ['Classic Wall Clock', 'Digital Timer', 'Hourglass'];
      case 'm5-t1': return ['Rubik\'s Cube', 'Translucent Dice', 'Crystal Prism'];
      case 'm6-t1': return ['Gold Coin', 'Currency Note', 'Silver Bar'];
      case 'm7-t1': return ['Glass Measuring Jug', 'Milk Bottle', 'Oil Drum'];
      case 'm8-t1': return ['Chrome Bicycle Wheel', 'Giant Ferris Wheel', 'Dartboard'];
      case 'm9-t1': return ['Pepperoni Pizza', 'Sliced Apple', 'Chocolate Cake'];
      case 'm10-t1': return ['Number Train', 'Flower Pattern', 'Shape Sequence'];
      case 'm11-t1': return ['Egg Carton', 'Mechanical Keyboard', 'Solar Array'];
      case 'm12-t1': return ['Brass Beam Balance', 'Digital Scale', 'Weight Stone'];
      case 'm13-t1': return ['Fenced Garden', 'Photo Frame', 'Football Pitch'];
      case 'm14-t1': return ['Glass Bar Chart', 'Glow Pie Chart', 'Data Pyramid'];
      
      // Science / EVS
      case 'e1-t1': return ['Suspension Bridge', 'Bamboo Bridge', 'Stone Arch'];
      case 'e2-t1': return ['Elephant Ears', 'Rabbit Ears', 'Human Ear'];
      case 'e3-t1': return ['Nandu (Calf)', 'Matriarch', 'Elephant Herd'];
      case 'e4-t1': return ['Khejadi Tree', 'Desert Oasis', 'Tree Guardian'];
      case 'e5-t1': return ['Natural Beehive', 'Box Hive', 'Honey Jar'];
      case 'e6-t1': return ['Express Engine', 'Coal Wagon', 'Railway Track'];
      case 'e7-t1': return ['Mountain Tunnel', 'Riverside Bridge', 'Railway Crossing'];
      case 'e8-t1': return ['Kerala Ferry', 'Wooden Vallam', 'Motor Boat'];
      case 'e10-t1': return ['Kabaddi Court', 'Player Uniform', 'Victory Trophy'];
      case 'e11-t1': return ['Rose Flower', 'Sunflower', 'Lotus'];
      case 'e12-t1': return ['Mud House', 'Brick House', 'Modern Villa'];
      case 'e13-t1': return ['Clean River', 'Polluted River', 'Frozen Stream'];
      case 'e14-t1': return ['Onion Plant', 'Khunti (Tool)', 'Farming Field'];
      case 'e16-t1': return ['Twig Nest', 'Mud Nest', 'Hollow Tree'];
      case 'e18-t1': return ['Sand Filter', 'Boiling Pot', 'ORS Glass'];
      case 'e23-t1': return ['Handloom', 'Silk Fabric', 'Dyeing Pot'];
      case 'e24-t1': return ['Desert Dunes', 'Date Palm', 'Solar Still'];
      case 'e25-t1': return ['Turmeric Root', 'Dried Clove', 'Pepper Corns'];
      case 'e26-t1': return ['Naval Ship', 'Prism Doctor', 'Marching Parade'];
      case 'e27-t1': return ['Standard Wheelchair', 'Powered Wheelchair', 'Ramp Access'];
      
      // Hindi
      case 'h1-t1': return ['Rain Cloud', 'Thunder Cloud', 'Golden Cloud'];
      case 'h3-t1': return ['Cricket Ball', 'Football', 'Tennis Ball'];
      case 'h6-t1': return ['Paper Boat', 'Speed Boat', 'Wooden Ship'];
      case 'h7-t1': return ['Golden Coins', 'Empty Pot', 'Donation Box'];
      case 'h9-t1': return ['Spinning Wheel', 'Salt Mound', 'Freedom Flag'];
      case 'h14-t1': return ['Coconut Tree', 'Fallen Coconut', 'Market Stall'];
      
      // English
      case 'en2-t1': return ['Small Nose', 'Funny Nose', 'Long Nose'];
      case 'en7-t1': return ['Giving Tree', 'Stump Seat', 'Red Apples'];
      case 'en8-t1': return ['Story Book', 'Dictionary', 'Comic Book'];
      case 'en9-t1': return ['Hand Puppet', 'String Puppet', 'Shadow Puppet'];
      case 'en12-t1': return ['Watering Can', 'Blooming Plant', 'Rain Cloud'];
      case 'en14-t1': return ['Pinocchio', 'Toy Workshop', 'Starry Night'];
      
      // Kannada
      case 'k1-t1': return ['Karnataka Map', 'State Flag', 'Gandaberunda'];
      case 'k5-t1': return ['Banyan Tree', 'Mango Tree', 'Coconut Palm'];
      case 'k6-t1': return ['Rani Chennamma Shield', 'Royal Sword', 'Victory Flag'];
      case 'k7-t1': return ['Obavva\'s Onake', 'Fort Wall', 'Bugle Horn'];
      
      // Computer Science
      case 'c1-t1': return ['High-End Desktop', 'Gaming Laptop', 'Mini PC'];
      case 'c2-t1': return ['RGB Mouse', 'Mechanical Keyboard', 'Scanner'];
      case 'c6-t1': return ['Logic Gates', 'Flowchart', 'Code Blocks'];
      case 'c7-t1': return ['Red Paint Bucket', 'Blue Paint Bucket', 'Rainbow Palette'];
      case 'c8-t1': return ['Presentation Slide', 'Title Slide', 'Chart Slide'];
      case 'c9-t1': return ['Scratch Cat', 'Magic Wand', 'Code Block'];
      
      default: return ['Conceptual Model', 'Abstract View', 'Golden Trophy'];
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
                <RealObject topicId={topicId} type={activeChoice} param1={param1} param2={param2} toggle={toggle} />
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
              autoRotate={!toggle}
              autoRotateSpeed={0.3}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2.1}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Learn by Doing Controls */}
        <div className="lab-controls">
          <div className="control-card">
            <div className="control-label">LEARN BY DOING</div>
            
            {subjectId === 'mathematics' && (
              <div className="control-group">
                {topicId === 'm1-t1' && (
                  <>
                    <label>Wall Length: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Wall Height: {param2}</label>
                    <input type="range" min="1" max="5" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'SHOW JAALI' : 'SOLID WALL'}
                    </button>
                  </>
                )}
                {topicId === 'm2-t1' && (
                  <>
                    <label>Scale Zoom: {param1}%</label>
                    <input type="range" min="50" max="200" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Marker Position: {param2}cm</label>
                    <input type="range" min="0" max="30" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm3-t1' && (
                  <>
                    <label>Number of Buses: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Students per Bus: {param2}</label>
                    <input type="range" min="10" max="50" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm4-t1' && (
                  <>
                    <label>Hours: {param1}</label>
                    <input type="range" min="1" max="12" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Minutes: {param2}</label>
                    <input type="range" min="0" max="59" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm5-t1' && (
                  <>
                    <label>Object Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'EXPLODED VIEW' : 'NORMAL VIEW'}
                    </button>
                  </>
                )}
                {topicId === 'm6-t1' && (
                  <>
                    <label>Quantity: {param1}</label>
                    <input type="range" min="1" max="20" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Denomination: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm7-t1' && (
                  <>
                    <label>Water Level: {param1}%</label>
                    <input type="range" min="0" max="100" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Jug Width: {param2}</label>
                    <input type="range" min="5" max="15" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm8-t1' && (
                  <>
                    <label>Radius: {param1}cm</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Spokes: {param2}</label>
                    <input type="range" min="4" max="24" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm9-t1' && (
                  <>
                    <label>Total Slices: {param1}</label>
                    <input type="range" min="2" max="12" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Active Slices: {param2}</label>
                    <input type="range" min="1" max={param1} value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm10-t1' && (
                  <>
                    <label>Pattern Step: {param1}</label>
                    <input type="range" min="1" max="5" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Iteration: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm11-t1' && (
                  <>
                    <label>Rows: {param1}</label>
                    <input type="range" min="1" max="8" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Columns: {param2}</label>
                    <input type="range" min="1" max="8" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm12-t1' && (
                  <>
                    <label>Left Weight: {param1}kg</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Right Weight: {param2}kg</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'm13-t1' && (
                  <>
                    <label>Field Length: {param1}m</label>
                    <input type="range" min="2" max="15" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Field Width: {param2}m</label>
                    <input type="range" min="2" max="15" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'SHOW AREA' : 'SHOW PERIMETER'}
                    </button>
                  </>
                )}
                {topicId === 'm14-t1' && (
                  <>
                    <label>Value 1: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Value 2: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
              </div>
            )}

            {subjectId === 'science' && (
              <div className="control-group">
                {topicId === 'e1-t1' && (
                  <>
                    <label>Bridge Length: {param1}m</label>
                    <input type="range" min="2" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Pillar Strength: {param2}</label>
                    <input type="range" min="1" max="5" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e2-t1' && (
                  <>
                    <label>Ear Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'HIDE HOLES' : 'SHOW EAR HOLES'}
                    </button>
                  </>
                )}
                {topicId === 'e3-t1' && (
                  <>
                    <label>Herd Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Trunk Angle: {param2}°</label>
                    <input type="range" min="-45" max="45" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e4-t1' && (
                  <>
                    <label>Tree Age: {param1} yrs</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Leaves Density: {param2}</label>
                    <input type="range" min="1" max="20" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e5-t1' && (
                  <>
                    <label>Bee Count: {param1 * 5}</label>
                    <input type="range" min="1" max="20" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'OPEN HIVE' : 'CLOSE HIVE'}
                    </button>
                  </>
                )}
                {topicId === 'e6-t1' && (
                  <>
                    <label>Engine Speed: {param1}</label>
                    <input type="range" min="0" max="20" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'STOP' : 'START'}
                    </button>
                  </>
                )}
                {topicId === 'e7-t1' && (
                  <>
                    <label>Tunnel Depth: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e8-t1' && (
                  <>
                    <label>Water Level: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e10-t1' && (
                  <>
                    <label>Player Position: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e11-t1' && (
                  <>
                    <label>Petal Count: {param1}</label>
                    <input type="range" min="3" max="20" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Bloom Size: {param2 / 5}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e12-t1' && (
                  <>
                    <label>House Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'MODERN ROOF' : 'THATCH ROOF'}
                    </button>
                  </>
                )}
                {topicId === 'e13-t1' && (
                  <>
                    <label>Flow Speed: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Pollution: {param2}%</label>
                    <input type="range" min="0" max="100" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e14-t1' && (
                  <>
                    <label>Onion Growth: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e16-t1' && (
                  <>
                    <label>Egg Count: {param1}</label>
                    <input type="range" min="1" max="8" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Nest Depth: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e23-t1' && (
                  <>
                    <label>Threads: {param1 * 10}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Pattern Complexity: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e18-t1' && (
                  <>
                    <label>Filter Layers: {param1}</label>
                    <input type="range" min="1" max="5" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e24-t1' && (
                  <>
                    <label>Heat Intensity: {param1}%</label>
                    <input type="range" min="0" max="100" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Evaporation: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e25-t1' && (
                  <>
                    <label>Spice Amount: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e26-t1' && (
                  <>
                    <label>Parade Speed: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'e27-t1' && (
                  <>
                    <label>Wheel Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'SPINNING' : 'STILL'}
                    </button>
                  </>
                )}
              </div>
            )}

            {subjectId === 'hindi' && (
              <div className="control-group">
                {topicId === 'h1-t1' && (
                  <>
                    <label>Rain Intensity: {param1}</label>
                    <input type="range" min="0" max="50" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Cloud Size: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'h3-t1' && (
                  <>
                    <label>Bounce: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Ball Scale: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'h6-t1' && (
                  <>
                    <label>Wave Power: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'FLOAT' : 'SINK'}
                    </button>
                  </>
                )}
                {topicId === 'h7-t1' && (
                  <>
                    <label>Donation Amount: {param1}</label>
                    <input type="range" min="1" max="100" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'h9-t1' && (
                  <>
                    <label>Spin Speed: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'h14-t1' && (
                  <>
                    <label>Tree Height: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Coconuts: {param2}</label>
                    <input type="range" min="0" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
              </div>
            )}

            {(subjectId === 'english' || subjectId === 'english-special') && (
              <div className="control-group">
                {topicId === 'en2-t1' && (
                  <>
                    <label>Nose Wiggle: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'en7-t1' && (
                  <>
                    <label>Tree Age: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'en8-t1' && (
                  <>
                    <label>Thickness: {param1}</label>
                    <input type="range" min="1" max="20" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <label>Scale: {param2}</label>
                    <input type="range" min="1" max="10" value={param2} onChange={(e) => setParam2(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'en9-t1' && (
                  <>
                    <label>Stiffness: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'DANCE' : 'STILL'}
                    </button>
                  </>
                )}
                {topicId === 'en12-t1' && (
                  <>
                    <label>Water Flow: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'en14-t1' && (
                  <>
                    <label>Nose Growth: {param1}</label>
                    <input type="range" min="1" max="20" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'REAL' : 'WOOD'}
                    </button>
                  </>
                )}
              </div>
            )}

            {subjectId === 'kannada' && (
              <div className="control-group">
                {topicId === 'k1-t1' && (
                  <>
                    <label>Map Depth: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'k5-t1' && (
                  <>
                    <label>Canopy Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'k6-t1' && (
                  <>
                    <label>Hero Power: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'ATTACK' : 'DEFEND'}
                    </button>
                  </>
                )}
                {topicId === 'k7-t1' && (
                  <>
                    <label>Strength: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
              </div>
            )}

            {subjectId === 'computers' && (
              <div className="control-group">
                {topicId === 'c1-t1' && (
                  <>
                    <label>Monitor Size: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'SCREEN ON' : 'SCREEN OFF'}
                    </button>
                  </>
                )}
                {topicId === 'c6-t1' && (
                  <>
                    <label>Logic Steps: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'c7-t1' && (
                  <>
                    <label>Paint Flow: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'c8-t1' && (
                  <>
                    <label>Brightness: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                  </>
                )}
                {topicId === 'c9-t1' && (
                  <>
                    <label>Character Scale: {param1}</label>
                    <input type="range" min="1" max="10" value={param1} onChange={(e) => setParam1(parseInt(e.target.value))} />
                    <button className={`toggle-btn ${toggle ? 'on' : ''}`} onClick={() => setToggle(!toggle)}>
                      {toggle ? 'GLOW' : 'NORMAL'}
                    </button>
                  </>
                )}
              </div>
            )}
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

        .lab-controls {
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
          width: 220px;
        }

        .control-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.25rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .control-label {
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: #3B82F6;
          margin-bottom: 1rem;
          text-align: center;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .control-group label {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
        }

        .control-group input[type="range"] {
          width: 100%;
          accent-color: #3B82F6;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          height: 4px;
          -webkit-appearance: none;
        }

        .toggle-btn {
          margin-top: 0.5rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 0.6rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-btn.on {
          background: #3B82F6;
          border-color: #60A5FA;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
}

function RealObject({ topicId, type, param1, param2, toggle }: { topicId: string; type: number; param1: number; param2: number; toggle: boolean }) {
  switch (topicId) {
    case 'm1-t1': // Brick
      return (
        <group>
          {[...Array(param2)].map((row, y) => (
            <group key={y} position={[0, y * 0.55, 0]}>
              {[...Array(param1)].map((col, x) => {
                const isJaali = toggle && (x + y) % 2 === 0;
                if (isJaali) return null;
                return (
                  <mesh key={x} position={[x * 1.05 - (param1 * 0.5), 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[1, 0.5, 0.5]} />
                    <meshStandardMaterial 
                      color={type === 0 ? "#B91C1C" : type === 1 ? "#4B5563" : "#92400E"} 
                      roughness={0.9} 
                    />
                  </mesh>
                );
              })}
            </group>
          ))}
        </group>
      );

    case 'm2-t1': // Ruler
      return (
        <group scale={param1 / 100}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 0.4, 0.04]} />
            <meshPhysicalMaterial 
              color={type === 0 ? "#E5E7EB" : type === 1 ? "#FDE68A" : "#92400E"}
              metalness={type === 0 ? 0.9 : 0.1}
              roughness={type === 0 ? 0.1 : 0.3}
            />
          </mesh>
          <mesh position={[param2 * 0.1 - 1.5, 0, 0.03]}>
            <boxGeometry args={[0.02, 0.5, 0.01]} />
            <meshStandardMaterial color="#EF4444" />
          </mesh>
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
          {/* Hands */}
          <mesh position={[0, 0, 0.08]} rotation={[0, 0, -param1 * Math.PI / 6 - (param2 / 60) * (Math.PI / 6)]}>
            <boxGeometry args={[0.06, 0.6, 0.01]} />
            <meshStandardMaterial color="#1E1B4B" />
          </mesh>
          <mesh position={[0, 0, 0.09]} rotation={[0, 0, -param2 * Math.PI / 30]}>
            <boxGeometry args={[0.04, 0.9, 0.01]} />
            <meshStandardMaterial color="#EF4444" />
          </mesh>
          {/* Ticks */}
          {[...Array(12)].map((_, i) => (
            <mesh key={i} position={[Math.sin(i * Math.PI / 6) * 0.9, Math.cos(i * Math.PI / 6) * 0.9, 0.07]} rotation={[0, 0, -i * Math.PI / 6]}>
              <boxGeometry args={[0.04, 0.1, 0.02]} />
              <meshStandardMaterial color="#000" />
            </mesh>
          ))}
        </group>
      );

    case 'm5-t1': // Cube
      return (
        <group scale={param1 / 5}>
          <mesh castShadow receiveShadow position={toggle ? [0, 0.5, 0] : [0, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshPhysicalMaterial 
              color={type === 0 ? "#3B82F6" : "#FFFFFF"} 
              roughness={0.1} 
              metalness={0.2}
            />
          </mesh>
          {toggle && (
            <mesh position={[0, -1, 0]} receiveShadow>
              <planeGeometry args={[3, 3]} />
              <meshStandardMaterial color="#1E293B" transparent opacity={0.5} />
            </mesh>
          )}
        </group>
      );

    case 'm6-t1': // Coin
      return (
        <group>
          {[...Array(param1)].map((_, i) => (
            <group key={i} position={[0, i * 0.1, 0]}>
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.8, 0.8, 0.08, 64]} />
                <meshPhysicalMaterial 
                  color={type === 0 ? "#FBBF24" : "#E5E7EB"} 
                  metalness={0.9} 
                  roughness={0.15}
                />
              </mesh>
            </group>
          ))}
          <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.2, 1.2, 0.02, 32]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
        </group>
      );

    case 'm7-t1': // Jug
      return (
        <group scale={param2 / 10}>
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
          <mesh position={[0, (param1 / 100) * 0.9 - 0.9, 0]}>
            <cylinderGeometry args={[0.6 + (1-param1/100)*0.2, 0.8, (param1 / 100) * 1.8, 32]} />
            <meshPhysicalMaterial color="#3B82F6" transmission={0.9} roughness={0.1} transparent opacity={0.6} />
          </mesh>
        </group>
      );

    case 'm8-t1': // Wheel
      return (
        <group scale={param1 / 5}>
          <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
            <torusGeometry args={[1.2, 0.12, 16, 100]} />
            <meshPhysicalMaterial color="#1F2937" roughness={0.8} />
          </mesh>
          {/* Spokes */}
          {[...Array(param2)].map((_, i) => (
            <mesh key={i} rotation={[i * (Math.PI * 2 / param2), Math.PI / 2, 0]} position={[0, 0, 0]}>
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
          {[...Array(param1)].map((_, i) => (
            <group key={i} position={[0, 0, i * 1.5 - (param1 * 0.75)]}>
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
              {[-0.8, 0.8].map((x, j) => (
                <group key={j}>
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
              {/* Students (small spheres) */}
              {[...Array(Math.floor(param2/5))].map((_, k) => (
                <mesh key={k} position={[k * 0.2 - 1, 0.8, 0]}>
                  <sphereGeometry args={[0.1, 16, 16]} />
                  <meshStandardMaterial color="#FFF" />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      );

    case 'm11-t1': // Grid / Solar
      return (
        <group>
          {[...Array(param1)].map((_, r) => (
            [...Array(param2)].map((_, c) => (
              <mesh key={`${r}-${c}`} position={[c * 0.6 - (param2 * 0.3), r * 0.6 - (param1 * 0.3), 0]} castShadow>
                <boxGeometry args={[0.5, 0.5, 0.1]} />
                <meshPhysicalMaterial 
                  color={type === 2 ? "#1E3A8A" : "#10B981"} 
                  metalness={0.8} 
                  roughness={0.1} 
                />
              </mesh>
            ))
          ))}
        </group>
      );

    case 'm12-t1': // Balance
      return (
        <group rotation={[0, 0, (param2 - param1) * 0.05]}>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[3.5, 0.1, 0.1]} />
            <meshStandardMaterial color="#92400E" />
          </mesh>
          {/* Brass Plates */}
          <group position={[-1.5, (param1 - param2) * 0.1, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
              <meshPhysicalMaterial color="#FBBF24" metalness={0.9} />
            </mesh>
            {[...Array(param1)].map((_, i) => (
              <mesh key={i} position={[0, i * 0.1 + 0.1, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#4B5563" />
              </mesh>
            ))}
          </group>
          <group position={[1.5, (param2 - param1) * 0.1, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
              <meshPhysicalMaterial color="#FBBF24" metalness={0.9} />
            </mesh>
            {[...Array(param2)].map((_, i) => (
              <mesh key={i} position={[0, i * 0.1 + 0.1, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#4B5563" />
              </mesh>
            ))}
          </group>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.1, 0.2, 1, 16]} />
            <meshStandardMaterial color="#4B5563" />
          </mesh>
        </group>
      );

    case 'm14-t1': // Chart
      return (
        <group>
          {[param1, param2, (param1+param2)/2, param1*0.8, param2*1.2].map((h, i) => (
            <mesh key={i} position={[i * 0.7 - 1.4, h / 2 - 1, 0]} castShadow>
              <boxGeometry args={[0.5, h, 0.5]} />
              <meshPhysicalMaterial 
                color={`hsl(${i * 60}, 70%, 50%)`} 
                transmission={0.4} 
                thickness={1} 
                roughness={0.1} 
                transparent 
                opacity={0.8}
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
            <boxGeometry args={[param1, 0.15, 1.5]} />
            <meshStandardMaterial color="#374151" roughness={0.9} />
          </mesh>
          {/* Pillars */}
          {[-param1/3, 0, param1/3].map((x, i) => (
            <mesh key={i} position={[x, -1, 0]} scale={[param2/3, 1, 1]}>
              <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
              <meshStandardMaterial color="#94A3B8" />
            </mesh>
          ))}
          {/* Cables */}
          <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, param1, 8]} />
            <meshStandardMaterial color="#E5E7EB" />
          </mesh>
        </group>
      );

    case 'e3-t1': // Elephants
      return (
        <group>
          {[...Array(param1)].map((_, i) => (
            <group key={i} position={[Math.cos(i) * 2, 0, Math.sin(i) * 2]} rotation={[0, -i, 0]}>
              {/* Body */}
              <mesh castShadow position={[0, 0.8, 0]}>
                <boxGeometry args={[1.2, 0.8, 0.6]} />
                <meshStandardMaterial color="#4B5563" />
              </mesh>
              {/* Head */}
              <mesh position={[0.8, 1, 0]}>
                <boxGeometry args={[0.6, 0.6, 0.5]} />
                <meshStandardMaterial color="#4B5563" />
              </mesh>
              {/* Trunk */}
              <mesh position={[1.1, 0.8, 0]} rotation={[0, 0, param2 * Math.PI / 180]}>
                <cylinderGeometry args={[0.1, 0.15, 0.8, 8]} />
                <meshStandardMaterial color="#374151" />
              </mesh>
              {/* Ears */}
              {[-0.3, 0.3].map((z, j) => (
                <mesh key={j} position={[0.7, 1.1, z]} rotation={[0.5, 0, 0]}>
                  <boxGeometry args={[0.4, 0.6, 0.05]} />
                  <meshStandardMaterial color="#4B5563" />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      );

    case 'e4-t1': // Khejadi Tree
      return (
        <group scale={param1 / 5}>
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.25, 2, 8]} />
            <meshStandardMaterial color="#78350F" />
          </mesh>
          {[...Array(param2)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 0.8, 2, Math.sin(i) * 0.8]} castShadow>
              <sphereGeometry args={[0.4, 8, 8]} />
              <meshStandardMaterial color="#059669" />
            </mesh>
          ))}
        </group>
      );

    case 'e5-t1': // Beehive
      return (
        <group>
          <mesh castShadow position={toggle ? [0, 0.5, 0] : [0, 0, 0]}>
            <icosahedronGeometry args={[1.2, 2]} />
            <meshPhysicalMaterial 
              color="#F59E0B" 
              roughness={0.7} 
            />
          </mesh>
          {toggle && (
            <mesh position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.8, 0.8, 0.1, 16]} />
              <meshStandardMaterial color="#78350F" />
            </mesh>
          )}
          {[...Array(param1 * 5)].map((_, i) => (
            <mesh key={i} position={[Math.sin(i + Date.now() * 0.001) * 1.5, Math.cos(i * 0.5) * 1.2, Math.sin(i * 0.2) * 1.5]}>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshStandardMaterial color="#000" emissive="#FACC15" />
            </mesh>
          ))}
        </group>
      );

    case 'e6-t1': // Train Engine
      return (
        <group position={[toggle ? Math.sin(Date.now() * 0.001 * param1) * 5 : 0, 0, 0]}>
          <mesh castShadow position={[0, 0.5, 0]}>
            <boxGeometry args={[2, 1, 1]} />
            <meshStandardMaterial color="#1E3A8A" metalness={0.8} />
          </mesh>
          <mesh position={[1, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        </group>
      );

    case 'e7-t1': // Tunnel
      return (
        <group>
          <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.5, 0.5, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#4B5563" roughness={1} />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[4, 0.1, 2]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        </group>
      );

    case 'e8-t1': // Ferry
      return (
        <group position={[0, Math.sin(Date.now() * 0.001) * 0.1, 0]}>
          <mesh castShadow>
            <boxGeometry args={[3, 0.4, 1.5]} />
            <meshStandardMaterial color="#F3F4F6" metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[1, 0.6, 0.8]} />
            <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
          </mesh>
        </group>
      );

    case 'e10-t1': // Kabaddi Court
      return (
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[5, 3]} />
            <meshStandardMaterial color="#D97706" />
          </mesh>
          <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.1, 3]} />
            <meshStandardMaterial color="#FFF" />
          </mesh>
        </group>
      );

    case 'e14-t1': // Onion Plant
      return (
        <group scale={param1 / 5}>
          <mesh position={[0, -0.5, 0]} castShadow>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color="#F97316" />
          </mesh>
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[0, 0.4, 0]} rotation={[0.5, i * 1.2, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
              <meshStandardMaterial color="#10B981" />
            </mesh>
          ))}
        </group>
      );

    case 'e18-t1': // Water Filter
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.6, 0.6, 2, 32, 1, true]} />
            <meshPhysicalMaterial color="#BFDBFE" transmission={0.9} transparent />
          </mesh>
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} position={[0, i * 0.4 - 0.8, 0]}>
              <cylinderGeometry args={[0.58, 0.58, 0.35, 32]} />
              <meshStandardMaterial color={i === 0 ? "#4B5563" : i === 1 ? "#9CA3AF" : "#E5E7EB"} />
            </mesh>
          ))}
        </group>
      );

    case 'e25-t1': // Spices
      return (
        <group scale={param1 / 5}>
          <mesh castShadow>
            <sphereGeometry args={[0.5, 16, 16]} scale={[1, 0.6, 1]} />
            <meshStandardMaterial color="#F59E0B" roughness={0.8} />
          </mesh>
          <mesh position={[0.4, 0.2, 0.3]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#451a03" />
          </mesh>
        </group>
      );

    case 'e26-t1': // Naval Ship
      return (
        <group rotation={[0, Date.now() * 0.001 * param1, 0]}>
          <mesh castShadow>
            <boxGeometry args={[3, 0.5, 1]} />
            <meshStandardMaterial color="#94A3B8" metalness={0.8} />
          </mesh>
          <mesh position={[-0.5, 0.6, 0]}>
            <boxGeometry args={[1, 0.8, 0.6]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
        </group>
      );

    // ─── COMPUTER SCIENCE ─────────────────────────────────────────────
    case 'k7-t1': // Obavva (Onake)
      return (
        <group rotation={[Math.sin(Date.now() * 0.005 * param1) * 0.8, 0, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
            <meshStandardMaterial color="#78350F" metalness={0.5} />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
            <meshStandardMaterial color="#94A3B8" metalness={0.8} />
          </mesh>
        </group>
      );

    case 'c6-t1': // Flowchart / Algorithm
      return (
        <group>
          {[...Array(param1)].map((_, i) => (
            <group key={i} position={[0, -i * 1.2 + 1, 0]}>
              <mesh castShadow>
                <boxGeometry args={[2, 0.8, 0.1]} />
                <meshStandardMaterial color={i % 2 === 0 ? "#1D4ED8" : "#10B981"} />
              </mesh>
              {i < param1 - 1 && (
                <mesh position={[0, -0.8, 0]}>
                  <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
                  <meshStandardMaterial color="#FFF" />
                </mesh>
              )}
            </group>
          ))}
        </group>
      );

    case 'c1-t1': // Desktop PC
      return (
        <group scale={param1 / 5}>
          {/* Monitor */}
          <mesh position={[0, 0.6, 0]} castShadow>
            <boxGeometry args={[2, 1.2, 0.15]} />
            <meshPhysicalMaterial color="#1F2937" roughness={0.2} metalness={0.8} clearcoat={1} />
          </mesh>
          {/* Screen */}
          <mesh position={[0, 0.6, 0.08]}>
            <planeGeometry args={[1.8, 1]} />
            <meshStandardMaterial 
              color="#000" 
              emissive={toggle ? "#3B82F6" : "#000"} 
              emissiveIntensity={toggle ? 2 : 0} 
            />
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
        <mesh castShadow scale={param1 / 5}>
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

    case 'k5-t1': // Tree
      return (
        <group scale={param1 / 5}>
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.3, 2, 16]} />
            <meshStandardMaterial color="#78350F" />
          </mesh>
          <mesh position={[0, 1.2, 0]} castShadow>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#059669" />
          </mesh>
          <mesh position={[0.4, 1.6, 0.2]} castShadow>
            <sphereGeometry args={[0.7, 16, 16]} />
            <meshStandardMaterial color="#10B981" />
          </mesh>
        </group>
      );
    case 'm13-t1': // Perimeter & Area
      return (
        <group>
          {/* Surface (Area) */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[param1, param2]} />
            <meshStandardMaterial 
              color={toggle ? "#10B981" : "#1F2937"} 
              transparent 
              opacity={toggle ? 0.8 : 0.2} 
            />
          </mesh>
          {/* Boundary (Perimeter) */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <boxGeometry args={[param1 + 0.1, param2 + 0.1, 0.05]} />
            <meshStandardMaterial color="#3B82F6" wireframe={!toggle} />
          </mesh>
          {/* Fence Posts */}
          {[[-param1/2, -param2/2], [param1/2, -param2/2], [param1/2, param2/2], [-param1/2, param2/2]].map((pos, i) => (
            <mesh key={i} position={[pos[0], 0.25, pos[1]]}>
              <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
              <meshStandardMaterial color="#92400E" />
            </mesh>
          ))}
        </group>
      );

    case 'm9-t1': // Pizza / Fruit / Cake
      return (
        <group>
          {type === 0 && ( // Pizza
            <group>
              {[...Array(param1)].map((_, i) => {
                if (i >= param2) return null;
                return (
                  <group key={i} rotation={[0, i * (Math.PI * 2 / param1), 0]}>
                    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                      <cylinderGeometry args={[1.6, 1.6, 0.1, 32, 1, false, 0, Math.PI * 2 / param1]} />
                      <meshStandardMaterial color="#92400E" roughness={0.8} />
                    </mesh>
                    <mesh position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
                      <cylinderGeometry args={[1.5, 1.5, 0.05, 32, 1, false, 0, Math.PI * 2 / param1]} />
                      <meshStandardMaterial color="#FDE68A" roughness={0.4} />
                    </mesh>
                  </group>
                );
              })}
            </group>
          )}
          {type === 1 && ( // Apple
            <mesh castShadow scale={param2 / 5}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshPhysicalMaterial color="#EF4444" roughness={0.1} clearcoat={1} />
            </mesh>
          )}
        </group>
      );

    case 'm10-t1': // Sequences
      return (
        <group>
          {[...Array(param2)].map((_, i) => (
            <mesh key={i} position={[i * (param1 * 0.5) - (param2 * param1 * 0.25), 0, 0]} castShadow>
              {type === 0 ? (
                <boxGeometry args={[0.5, 0.5, 0.5]} />
              ) : type === 1 ? (
                <sphereGeometry args={[0.3, 16, 16]} />
              ) : (
                <octahedronGeometry args={[0.4]} />
              )}
              <meshPhysicalMaterial 
                color={`hsl(${i * 40}, 70%, 50%)`} 
                metalness={0.5} 
                roughness={0.2} 
              />
            </mesh>
          ))}
        </group>
      );

    case 'e23-t1': // Weaving
      return (
        <group>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3, 3]} />
            <meshStandardMaterial color="#E11D48" />
          </mesh>
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} position={[i * 0.3 - 1.5, 0.1, 0]}>
              <boxGeometry args={[0.05, 0.05, 3]} />
              <meshStandardMaterial color="#FDE68A" />
            </mesh>
          ))}
          {[...Array(param2)].map((_, i) => (
            <mesh key={i} position={[0, 0.2, i * 0.3 - 1.5]}>
              <boxGeometry args={[3, 0.05, 0.05]} />
              <meshStandardMaterial color="#3B82F6" />
            </mesh>
          ))}
        </group>
      );
    case 'e24-t1': // Abu Dhabi / Climate
      return (
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#FDE68A" />
          </mesh>
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 3, 0, Math.sin(i) * 3]} castShadow>
              <coneGeometry args={[1, 2, 32]} />
              <meshStandardMaterial color="#F59E0B" />
            </mesh>
          ))}
          <mesh position={[0, 5, -5]}>
            <sphereGeometry args={[param1 / 50]} />
            <meshStandardMaterial color="#FBBF24" emissive="#F59E0B" emissiveIntensity={param1 / 20} />
          </mesh>
        </group>
      );
    case 'e13-t1': // River
      return (
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[5, 5, 64, 64]} />
            <MeshDistortMaterial 
              color={param2 > 50 ? "#4B5563" : "#3B82F6"} 
              speed={param1} 
              distort={0.3} 
              metalness={0.2} 
              roughness={0.1}
              transmission={0.5}
              transparent
            />
          </mesh>
          {param2 > 0 && [...Array(Math.floor(param2/10))].map((_, i) => (
            <mesh key={i} position={[Math.sin(i) * 2, 0.1, Math.cos(i) * 2]}>
              <boxGeometry args={[0.2, 0.2, 0.2]} />
              <meshStandardMaterial color="#1F2937" />
            </mesh>
          ))}
        </group>
      );

    case 'e2-t1': // Ears
      return (
        <group scale={param1 / 5}>
          {[-0.8, 0.8].map((x, i) => (
            <group key={i} position={[x, 0, 0]}>
              <mesh rotation={[0, x > 0 ? -0.5 : 0.5, 0]}>
                <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
                <meshStandardMaterial color="#FDE68A" />
              </mesh>
              {toggle && (
                <mesh position={[0, 0, -0.1]}>
                  <sphereGeometry args={[0.05, 8, 8]} />
                  <meshStandardMaterial color="#000" />
                </mesh>
              )}
            </group>
          ))}
          <mesh position={[0, 0, -0.2]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#FDE68A" />
          </mesh>
        </group>
      );

    case 'en2-t1': // Nose
      return (
        <group rotation={[Math.sin(Date.now() * 0.01 * param1) * 0.2, 0, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.3, 1, 32]} />
            <meshStandardMaterial color="#FDE68A" />
          </mesh>
          <mesh position={[0, -0.3, 0]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#FDE68A" />
          </mesh>
        </group>
      );

    case 'c7-t1': // Paint Bucket
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.6, 0.5, 1.2, 32]} />
            <meshStandardMaterial color="#94A3B8" metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.61, 0]}>
            <cylinderGeometry args={[0.55, 0.55, 0.05, 32]} />
            <meshStandardMaterial color={type === 0 ? "#EF4444" : type === 1 ? "#3B82F6" : "#10B981"} />
          </mesh>
          {/* Paint Drip */}
          <mesh position={[0.5, 0.2, 0]} scale={[1, param1 / 5, 1]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={type === 0 ? "#EF4444" : type === 1 ? "#3B82F6" : "#10B981"} />
          </mesh>
        </group>
      );

    case 'c8-t1': // Slide Deck
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[2.5, 1.5, 0.1]} />
            <meshStandardMaterial color="#FFF" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[2.2, 1.2, 0.01]} />
            <meshStandardMaterial 
              color={type === 0 ? "#F43F5E" : "#3B82F6"} 
              emissive={type === 0 ? "#F43F5E" : "#3B82F6"} 
              emissiveIntensity={param1 / 5}
            />
          </mesh>
        </group>
      );
    case 'e11-t1': // Flower
      return (
        <group scale={param2 / 5}>
          <mesh position={[0, -0.8, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
            <meshStandardMaterial color="#059669" />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color={type === 0 ? "#FACC15" : type === 1 ? "#78350F" : "#FDE68A"} />
          </mesh>
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} rotation={[0, 0, i * (Math.PI * 2 / param1)]} position={[Math.sin(i * (Math.PI * 2 / param1)) * 0.4, 0.2 + Math.cos(i * (Math.PI * 2 / param1)) * 0.4, 0.1]}>
              <boxGeometry args={[0.6, 0.2, 0.05]} />
              <meshPhysicalMaterial color={type === 0 ? "#EF4444" : type === 1 ? "#F59E0B" : "#F472B6"} roughness={0.3} />
            </mesh>
          ))}
        </group>
      );

    case 'e12-t1': // House
      return (
        <group scale={param1 / 5}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2, 1.2, 1.5]} />
            <meshStandardMaterial color={type === 0 ? "#92400E" : "#E5E7EB"} />
          </mesh>
          <mesh position={[0, 1, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[1.6, 1, 4]} />
            <meshStandardMaterial color={toggle ? "#374151" : "#78350F"} />
          </mesh>
        </group>
      );

    case 'e16-t1': // Nest
      return (
        <group scale={param2 / 5}>
          <mesh castShadow>
            <torusGeometry args={[0.8, 0.3, 16, 32]} />
            <meshStandardMaterial color="#78350F" roughness={1} />
          </mesh>
          {/* Eggs */}
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 0.3, 0.1, Math.sin(i) * 0.3]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshPhysicalMaterial color={i % 2 === 0 ? "#F3F4F6" : "#BFDBFE"} roughness={0.1} />
            </mesh>
          ))}
        </group>
      );

    case 'h1-t1': // Cloud
      return (
        <group scale={param2 / 5}>
          <mesh castShadow>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshPhysicalMaterial 
              color={type === 0 ? "#94A3B8" : type === 1 ? "#334155" : "#FDE68A"} 
              transmission={0.4} 
              transparent 
              opacity={0.8}
            />
          </mesh>
          <mesh position={[0.5, 0.2, 0]}><sphereGeometry args={[0.5, 16, 16]} /><meshStandardMaterial color={type === 0 ? "#CBD5E1" : "#475569"} /></mesh>
          <mesh position={[-0.5, 0, 0.2]}><sphereGeometry args={[0.4, 16, 16]} /><meshStandardMaterial color={type === 0 ? "#CBD5E1" : "#475569"} /></mesh>
          {/* Rain drops */}
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} position={[Math.random() * 2 - 1, -Math.random() * 2, Math.random() * 2 - 1]}>
              <cylinderGeometry args={[0.01, 0.01, 0.2]} />
              <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      );

    case 'h3-t1': // Ball
      return (
        <group position={[0, Math.abs(Math.sin(Date.now() * 0.005)) * (param1 / 2) - 1, 0]}>
          <mesh castShadow scale={param2 / 5}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
              color={type === 0 ? "#EF4444" : type === 1 ? "#059669" : "#FBBF24"} 
              roughness={0.4}
            />
          </mesh>
        </group>
      );

    case 'h7-t1': // Donation
      return (
        <group>
          {[...Array(Math.floor(param1/10))].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 1.5, i * 0.1, Math.sin(i) * 1.5]}>
              <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
              <meshStandardMaterial color="#FBBF24" metalness={0.9} />
            </mesh>
          ))}
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#92400E" />
          </mesh>
        </group>
      );

    case 'h9-t1': // Spinning Wheel (Charkha)
      return (
        <group rotation={[0, 0, Date.now() * 0.001 * param1]}>
          <mesh castShadow>
            <torusGeometry args={[1, 0.05, 8, 32]} />
            <meshStandardMaterial color="#92400E" />
          </mesh>
          {[...Array(8)].map((_, i) => (
            <mesh key={i} rotation={[0, 0, i * Math.PI / 4]}>
              <boxGeometry args={[2, 0.02, 0.02]} />
              <meshStandardMaterial color="#D1D5DB" />
            </mesh>
          ))}
        </group>
      );

    case 'h14-t1': // Coconut Tree
      return (
        <group>
          <mesh position={[0, param1 / 2 - 1, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.2, param1, 8]} />
            <meshStandardMaterial color="#78350F" />
          </mesh>
          {[...Array(6)].map((_, i) => (
            <mesh key={i} position={[0, param1 - 1, 0]} rotation={[0, i * Math.PI / 3, 0.5]}>
              <boxGeometry args={[1.5, 0.1, 0.4]} />
              <meshStandardMaterial color="#059669" />
            </mesh>
          ))}
          {[...Array(param2)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 0.3, param1 - 1.2, Math.sin(i) * 0.3]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#451a03" />
            </mesh>
          ))}
        </group>
      );

    case 'h6-t1': // Paper Boat
      return (
        <group rotation={[0, Math.PI / 2, 0]} position={[0, toggle ? 0 : -2, 0]}>
          <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[0.8, 1, 4]} />
            <meshStandardMaterial color={type === 0 ? "#FFFFFF" : "#3B82F6"} />
          </mesh>
          <mesh position={[0, -0.2, 0]} rotation={[Math.PI, Math.PI / 4, 0]}>
            <coneGeometry args={[1, 0.4, 4]} />
            <meshStandardMaterial color={type === 0 ? "#F3F4F6" : "#2563EB"} />
          </mesh>
          {/* Waves */}
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[Math.sin(i + Date.now() * 0.001 * param1) * 2, -0.5, i - 2]}>
              <boxGeometry args={[1, 0.1, 0.1]} />
              <meshStandardMaterial color="#60A5FA" transparent opacity={0.5} />
            </mesh>
          ))}
        </group>
      );

    case 'en7-t1': // Giving Tree
      return (
        <group>
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.4, 2, 8]} />
            <meshStandardMaterial color="#78350F" />
          </mesh>
          <mesh position={[0, 2.5, 0]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#059669" />
          </mesh>
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 1, 2, Math.sin(i) * 1]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#EF4444" />
            </mesh>
          ))}
        </group>
      );

    case 'en8-t1': // Book
      return (
        <group scale={param2 / 5}>
          <mesh castShadow>
            <boxGeometry args={[1.2, 1.6, 0.1 + (param1 * 0.05)]} />
            <meshStandardMaterial color={type === 0 ? "#1D4ED8" : "#B91C1C"} />
          </mesh>
          <mesh position={[0, 0, 0.01]}>
            <boxGeometry args={[1, 1.4, 0.1 + (param1 * 0.05)]} />
            <meshStandardMaterial color="#FFF" />
          </mesh>
        </group>
      );

    case 'c2-t1': // Mouse / Keyboard
      return (
        <group>
          {type === 0 ? (
            <mesh castShadow>
              <sphereGeometry args={[0.5, 32, 32]} scale={[1, 0.5, 1.5]} />
              <meshPhysicalMaterial color="#374151" roughness={0.2} metalness={0.5} />
            </mesh>
          ) : (
            <mesh castShadow>
              <boxGeometry args={[2.5, 0.1, 1]} />
              <meshStandardMaterial color="#111827" />
            </mesh>
          )}
        </group>
      );


    case 'en9-t1': // Puppet
      return (
        <group rotation={[0, toggle ? Math.sin(Date.now() * 0.005) * 0.5 : 0, 0]}>
          <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color="#FDE68A" />
          </mesh>
          <mesh position={[0, -0.4, 0]} castShadow>
            <boxGeometry args={[0.6, 1, 0.3]} />
            <meshStandardMaterial color="#B91C1C" />
          </mesh>
          {/* Strings */}
          <mesh position={[0, 1.5, 0]} scale={[param1 / 5, 1, 1]}>
            <boxGeometry args={[0.8, 0.05, 0.05]} />
            <meshStandardMaterial color="#92400E" />
          </mesh>
        </group>
      );

    case 'en12-t1': // Watering Can
      return (
        <group rotation={[0, 0, Math.sin(Date.now() * 0.001) * 0.5]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
            <meshStandardMaterial color="#3B82F6" />
          </mesh>
          <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
            <meshStandardMaterial color="#3B82F6" />
          </mesh>
          {/* Water drops */}
          {[...Array(param1)].map((_, i) => (
            <mesh key={i} position={[1, -i * 0.2, 0]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial color="#60A5FA" />
            </mesh>
          ))}
        </group>
      );

    case 'en14-t1': // Pinocchio
      return (
        <group>
          {/* Head */}
          <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={toggle ? "#FDE68A" : "#78350F"} />
          </mesh>
          {/* Nose */}
          <mesh position={[0, 0.5, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, param1 / 5, 16]} />
            <meshStandardMaterial color={toggle ? "#FDE68A" : "#78350F"} />
          </mesh>
          {/* Body */}
          <mesh position={[0, -0.6, 0]}>
            <boxGeometry args={[0.8, 1.2, 0.5]} />
            <meshStandardMaterial color="#EF4444" />
          </mesh>
        </group>
      );

    case 'k6-t1': // Chennamma
      return (
        <group rotation={[0, toggle ? Math.sin(Date.now() * 0.01) * 0.5 : 0, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
            <meshStandardMaterial color="#B45309" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[0.1, 1.2, 0.05]} />
            <meshStandardMaterial color="#FBBF24" />
          </mesh>
          <mesh position={[0, 0, 0.06]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.1, 1.2, 0.05]} />
            <meshStandardMaterial color="#FBBF24" />
          </mesh>
        </group>
      );

    case 'e27-t1': // Wheelchair
      return (
        <group rotation={[0, toggle ? Date.now() * 0.005 : 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[1, 0.1, 1]} />
            <meshStandardMaterial color="#3B82F6" />
          </mesh>
          {[-0.5, 0.5].map((x, i) => (
            <mesh key={i} position={[x, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.4 + (param1 / 20), 0.4 + (param1 / 20), 0.1, 16]} />
              <meshStandardMaterial color="#1F2937" />
            </mesh>
          ))}
        </group>
      );

    case 'c9-t1': // Scratch Cat (Abstract)
      return (
        <group scale={param1 / 5}>
          <mesh castShadow>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial 
              color="#F97316" 
              emissive={toggle ? "#F97316" : "#000"} 
              emissiveIntensity={toggle ? 1 : 0} 
            />
          </mesh>
          <mesh position={[0.4, 0.4, 0.4]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#FFF" />
          </mesh>
          <mesh position={[-0.4, 0.4, 0.4]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#FFF" />
          </mesh>
          <mesh position={[0, -0.6, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.4]} />
            <meshStandardMaterial color="#F97316" />
          </mesh>
        </group>
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
