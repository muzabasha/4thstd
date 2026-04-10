"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Subject, Topic } from '../lib/curriculum';
import { useVoice } from '../hooks/useVoice';
import { generateAIResponse } from '../lib/ai';
import InteractiveMapLab from './InteractiveMapLab';
import InteractiveQuiz from './InteractiveQuiz';

interface VoiceAITutorProps {
  subject: Subject;
  topic: Topic;
}

export default function VoiceAITutor({ subject, topic }: VoiceAITutorProps) {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'learn' | 'quiz' | 'activity' | 'lab'>('learn');
  const [currentLevel, setCurrentLevel] = useState<'low' | 'mid' | 'high'>('low');
  const [masteryStep, setMasteryStep] = useState(0); 
  const [showTechnical, setShowTechnical] = useState(false);
  const lastTranscriptRef = useRef<string>('');
  
  const { isListening, transcript, isSpeaking, startListening, stopListening, speak, setLang } = useVoice();
  
  useEffect(() => {
    if (subject.id === 'hindi') setLang('hi-IN');
    else if (subject.id === 'kannada') setLang('kn-IN');
    else setLang('en-IN');
  }, [subject.id, setLang]);

  useEffect(() => {
    const guideMe = async () => {
      setIsLoading(true);
      let prompt: string = "";
      
      if (masteryStep === 0) {
        prompt = `Hi Yasmeen! I'm Professor Spark. Today we are exploring "${topic.title}". We'll cover things like ${topic.subtopics.slice(0, 3).join(", ")}. Tap the Rocket to jump in! 🚀`;
      } else if (masteryStep <= topic.subtopics.length) {
        const subtopic = topic.subtopics[masteryStep - 1];
        const explanation = await generateAIResponse('explain', topic.title, subtopic);
        
        // Dynamic variatons for step framing
        const openers = [
          `Let's look at ${subtopic}.`,
          `Next, we have ${subtopic}!`,
          `Check this out: ${subtopic}`,
          `Now for something cool: ${subtopic}`
        ];
        const closers = [
          `Isn't that neat?`,
          `Does that make sense?`,
          `Want to try an activity on this?`,
          `What do you think about that?`
        ];
        
        const opener = openers[(masteryStep - 1) % openers.length];
        const closer = closers[(masteryStep - 1) % closers.length];
        
        prompt = `${opener} \n\n${explanation} \n\n${closer}`;
      } else {
        prompt = `You did it! You've successfully explored all parts of "${topic.title}". I'm so proud of you! Ready for the final challenge? 🏆`;
      }
      
      setMessages([{ role: 'ai', content: prompt }]);
      speak(prompt);
      setIsLoading(false);
    };

    guideMe();
  }, [topic.id, topic.title, topic.subtopics, masteryStep, speak]);

  const handleUserAction = useCallback(async (input: string) => {
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setIsLoading(true);

    let promptType: 'explain' | 'quiz' | 'evaluate' | 'activity' = 'explain';
    if (input.toLowerCase().includes('quiz')) {
      promptType = 'quiz';
      setMode('quiz');
    } else if (mode === 'quiz') {
      promptType = 'evaluate';
    }

    const aiResponseText = await generateAIResponse(promptType, topic.title, input);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponseText }]);
    speak(aiResponseText);
    setIsLoading(false);
  }, [mode, topic.title, speak]);

  useEffect(() => {
    if (transcript && !isListening && transcript !== lastTranscriptRef.current) {
      lastTranscriptRef.current = transcript;
      // Defer state update to avoid cascading render warning in some lint configs
      setTimeout(() => {
        handleUserAction(transcript);
      }, 0);
    }
  }, [transcript, isListening, handleUserAction]);

  return (
    <div className="tutor-layout">
      {/* Top Progress Bar */}
      <div className="mission-bar">
        <div className="mission-progress">
          <div 
            className="progress-fill" 
            style={{ width: `${(masteryStep / (topic.subtopics.length + 1)) * 100}%` }}
          ></div>
        </div>
        <div className="mission-label">
          {masteryStep === 0 ? "Mission: Start Journey" : 
           masteryStep <= topic.subtopics.length ? `Mission: Step ${masteryStep}` : 
           "Mission: Mastery Quiz"}
        </div>
      </div>

      <div className="tutor-main">
        {/* Hero Section: Professor Spark */}
        <section className="hero-zone">
          <div className={`spark-avatar ${isSpeaking ? 'bounce' : ''} ${isListening ? 'pulse' : ''}`}>
            <div className="avatar-frame">🤖</div>
            {isListening && <div className="listening-ring"></div>}
          </div>
          
          <div className="speech-container">
            <div className="speech-bubble glass-card animate-fade-in">
              {isLoading ? (
                <div className="typing">Professor Spark is thinking...</div>
              ) : (
                <p className="mentor-text">{messages[messages.length - 1]?.content}</p>
              )}
            </div>
            
            <div className="hero-actions">
              {masteryStep === 0 && !isLoading && (
                <button className="mission-btn primary pulse" onClick={() => setMasteryStep(1)}>
                  Start Mission 🚀
                </button>
              )}
              {masteryStep > 0 && masteryStep <= topic.subtopics.length && !isLoading && (
                <div className="step-actions">
                  <button className="mission-btn secondary" onClick={() => setMasteryStep(prev => prev + 1)}>
                    Next Step ➡️
                  </button>
                  <button className="mission-btn accent" onClick={() => setMode('activity')}>
                    Try Activity 🎯
                  </button>
                </div>
              )}
              {masteryStep > topic.subtopics.length && !isLoading && (
                <button className="mission-btn success" onClick={() => setMode('quiz')}>
                  Take Quiz 🏆
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Content Area (Activity/Lab/Quiz) */}
        {mode !== 'learn' && (
          <div className="content-overlay animate-fade-in">
            <div className="overlay-header">
              <button className="close-btn" onClick={() => setMode('learn')}>✕ Close</button>
            </div>
            
            <div className="overlay-body">
              {mode === 'activity' && (
                <div className="activity-view">
                   <div className="level-tabs">
                    <button className={currentLevel === 'low' ? 'active' : ''} onClick={() => setCurrentLevel('low')}>Starter</button>
                    <button className={currentLevel === 'mid' ? 'active' : ''} onClick={() => setCurrentLevel('mid')}>Explorer</button>
                    <button className={currentLevel === 'high' ? 'active' : ''} onClick={() => setCurrentLevel('high')}>Expert</button>
                  </div>
                  {topic.activities.find(a => a.level === currentLevel) && (
                    <div className="activity-details glass-card">
                      <h4>{topic.activities.find(a => a.level === currentLevel)?.title}</h4>
                      <p>{topic.activities.find(a => a.level === currentLevel)?.description}</p>
                      <div className="steps">
                        {topic.activities.find(a => a.level === currentLevel)?.steps.map((s, i) => (
                          <div key={i} className="step-item">
                            <span className="step-num">{i+1}</span>
                            <span className="step-text">{s}</span>
                          </div>
                        ))}
                      </div>
                      <button className="done-btn" onClick={() => { setMode('learn'); handleUserAction("I did the activity!"); }}>Finished! ✅</button>
                    </div>
                  )}
                </div>
              )}

              {mode === 'lab' && topic.virtualLab && (
                <div className="lab-view glass-card">
                   <h3>🔬 {topic.virtualLab.title}</h3>
                   <div className="lab-sim">
                      {topic.virtualLab.title.includes('India Map Lab') ? (
                        <InteractiveMapLab onLandmarkClick={(info) => handleUserAction(info)} />
                      ) : (
                        <div className="sim-msg">{topic.virtualLab.simulation}</div>
                      )}
                   </div>
                   <div className="lab-footer">
                      <p><strong>Goal:</strong> {topic.virtualLab.task}</p>
                   </div>
                </div>
              )}

              {mode === 'quiz' && (
                <div className="quiz-view">
                  <InteractiveQuiz 
                    questions={topic.quiz} 
                    onComplete={(score) => {
                      const msg = `Amazing Yasmeen! You scored ${score}/${topic.quiz.length}!`;
                      setMessages([{ role: 'ai', content: msg }]);
                      speak(msg);
                      setMode('learn');
                      setMasteryStep(0); // Reset for review
                    }} 
                  />
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Interaction Hub (Voice & Text) */}
        <div className="interaction-hub glass-card">
          <div className="voice-zone">
            <button 
              className={`mic-btn ${isListening ? 'listening' : ''}`} 
              onClick={isListening ? stopListening : startListening}
            >
              {isListening ? '🛑 Stop' : '🎤 Talk to Spark'}
            </button>
            <p className="transcript">{isListening ? (transcript || "Listening...") : "Tap to speak!"}</p>
          </div>
          
          <div className="quick-questions">
            <button onClick={() => handleUserAction("Why?")}>Why? 🤔</button>
            <button onClick={() => handleUserAction("How?")}>How? 🛠️</button>
            <button onClick={() => handleUserAction("Explain more")}>Explain More 📚</button>
          </div>
        </div>
      </div>

      {/* Advanced Drawer for Teachers/Parents */}
      <footer className="tutor-footer">
        <button className="tech-toggle" onClick={() => setShowTechnical(!showTechnical)}>
          {showTechnical ? "Hide Teacher Info" : "Show Teacher Info (NEP)"}
        </button>
        {showTechnical && (
          <div className="technical-info animate-fade-in glass-card">
            <div className="info-grid">
              <div>
                <h5>Learning Outcomes</h5>
                <div className="tags">
                  {topic.learningOutcomes.map((lo, i) => <span key={i} className="tag">{lo}</span>)}
                </div>
              </div>
              <div>
                <h5>Cross-Curricular</h5>
                <p>{topic.crossCurricularLink}</p>
              </div>
            </div>
          </div>
        )}
      </footer>

      <style jsx>{`
        .tutor-layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 1.5rem;
          color: var(--text-color);
        }

        .mission-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .mission-progress {
          flex: 1;
          height: 8px;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--success));
          transition: width 0.5s ease;
        }
        .mission-label { font-size: 0.8rem; font-weight: 700; color: var(--accent); }

        .hero-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem 0;
        }
        
        .spark-avatar {
          position: relative;
          width: 140px;
          height: 140px;
          cursor: pointer;
        }
        .avatar-frame {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 6px solid var(--accent);
          z-index: 2;
          position: relative;
        }
        
        .listening-ring {
          position: absolute;
          top: -10px; left: -10px; right: -10px; bottom: -10px;
          border: 4px solid var(--success);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .speech-container {
          width: 100%;
          max-width: 700px;
          text-align: center;
        }
        .speech-bubble {
          padding: 2rem;
          border-radius: 30px;
          margin-bottom: 2rem;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mentor-text { font-size: 1.6rem; font-weight: 700; line-height: 1.4; color: var(--primary); }

        .mission-btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.25rem;
          font-weight: 700;
          transition: all 0.3s;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .mission-btn.primary { background: var(--primary); color: white; }
        .mission-btn.secondary { background: var(--info); color: white; }
        .mission-btn.accent { background: var(--accent); color: var(--primary); }
        .mission-btn.success { background: var(--success); color: white; }
        .mission-btn:hover { transform: scale(1.05) translateY(-2px); }

        .step-actions { display: flex; gap: 1rem; justify-content: center; }

        .content-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(248, 251, 255, 0.98);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          color: var(--text-color);
        }
        .overlay-header { display: flex; justify-content: flex-end; margin-bottom: 1rem; }
        .close-btn { background: rgba(255,255,255,0.1); padding: 0.5rem 1.5rem; border-radius: 12px; font-weight: 700; }
        .overlay-body { flex: 1; overflow-y: auto; display: flex; align-items: center; justify-content: center; }

        .interaction-hub {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: white !important;
          box-shadow: 0 -10px 40px rgba(0,0,0,0.05);
          border-radius: 40px 40px 0 0;
        }
        .voice-zone { display: flex; align-items: center; gap: 1.5rem; }
        .mic-btn {
          padding: 1rem 2rem;
          background: var(--danger);
          border-radius: 50px;
          font-weight: 800;
          color: white;
          min-width: 180px;
        }
        .mic-btn.listening { background: var(--success); }
        .transcript { font-size: 1.1rem; font-style: italic; opacity: 0.7; }
        
        .quick-questions { display: flex; gap: 0.75rem; }
        .quick-questions button {
          padding: 0.5rem 1rem;
          background: rgba(108, 92, 231, 0.08);
          border-radius: 12px;
          font-size: 0.9rem;
          color: var(--primary);
          font-weight: 700;
        }

        .level-tabs { display: flex; gap: 0.5rem; margin-bottom: 1rem; justify-content: center; }
        .level-tabs button { padding: 0.5rem 1.5rem; border-radius: 50px; background: rgba(255,255,255,0.1); }
        .level-tabs button.active { background: var(--accent); color: var(--primary); font-weight: 700; }

        .steps { display: flex; flex-direction: column; gap: 0.75rem; margin: 1.5rem 0; text-align: left; }
        .step-item { display: flex; gap: 1rem; align-items: flex-start; }
        .step-num { 
          background: var(--primary); width: 28px; height: 28px; 
          border-radius: 50%; display: flex; align-items: center; 
          justify-content: center; font-size: 0.8rem; font-weight: 800;
          flex-shrink: 0;
        }

        .tech-toggle { background: none; color: var(--accent); font-size: 0.8rem; margin-top: 1rem; text-decoration: underline; }
        .technical-info { margin-top: 1rem; text-align: left; background: rgba(0,0,0,0.4) !important; }
        .tag { background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; margin-right: 0.4rem; }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .bounce { animation: bounce 0.5s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          .mentor-text { font-size: 1.2rem; }
          .spark-avatar { width: 100px; height: 100px; }
          .avatar-frame { font-size: 3rem; }
          .mission-btn { padding: 0.8rem 1.5rem; font-size: 1rem; }
          .voice-zone { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>
    </div>
  );
}
