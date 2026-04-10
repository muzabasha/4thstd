"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Subject, Topic } from '../lib/curriculum';
import { useVoice } from '../hooks/useVoice';
import { generateAIResponse } from '../lib/ai';
import InteractiveQuiz from './InteractiveQuiz';

interface TopicExplorerProps {
  subject: Subject;
  topic: Topic;
}

export default function VoiceAITutor({ subject, topic }: TopicExplorerProps) {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'learn' | 'quiz' | 'activity'>('learn');
  const [currentLevel, setCurrentLevel] = useState<'low' | 'mid' | 'high'>('low');
  const [masteryStep, setMasteryStep] = useState(0); 
  const [audioStarted, setAudioStarted] = useState(false);

  const { speak, setLang } = useVoice();

  useEffect(() => {
    const guideMe = async () => {
      setIsLoading(true);

      // Ensure language is set before speaking
      const targetLang = subject.id === 'hindi' ? 'hi-IN' : (subject.id === 'kannada' ? 'kn-IN' : 'en-IN');
      setLang(targetLang);

      const chapterId = topic.id.split('-')[0];
      let prompt: string = "";
      
      if (masteryStep === 0) {
        const scenario = await generateAIResponse('explain', topic.title, chapterId);
        prompt = `🌈 **The Mission:** "${topic.title}" \n\n${scenario}`;
      } else if (masteryStep <= topic.subtopics.length) {
        const subtopic = topic.subtopics[masteryStep - 1];
        const explanation = await generateAIResponse('explain', topic.title, subtopic);
        prompt = `🔍 **Concept Explorer:** ${subtopic} \n\n${explanation}`;
      } else {
        prompt = `Mission Accomplished! You've successfully navigated the scenarios for "${topic.title}". Time for your final Mastery Challenge! 🏆`;
      }
      
      const cleanPrompt = prompt.replace(/\*\*/g, '').replace(/🌈|🔍|🚀|🏆/g, '');
      setMessages([{ role: 'ai', content: prompt }]);
      speak(cleanPrompt, targetLang);
      setIsLoading(false);
    };

    guideMe();
  }, [topic.id, topic.title, topic.subtopics, masteryStep, speak, subject.id, setLang]);

  const handleUserAction = useCallback(async (input: string) => {
    setMessages(prev => [...prev, { role: 'user', content: input }]);
  }, []);

  return (
    <div className="topic-explorer">
      {/* Header with Progress */}
      <div className="explorer-header glass-card">
        <div className="topic-info">
          <span className="subject-tag">{subject.title}</span>
          <h2>{topic.title}</h2>
        </div>
        <div className="mission-status">
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${(masteryStep / (topic.subtopics.length + 1)) * 100}%` }}
            ></div>
          </div>
          <span className="status-text">
            {masteryStep === 0 ? "Ready to Start" : 
             masteryStep <= topic.subtopics.length ? `Concept ${masteryStep} of ${topic.subtopics.length}` : 
             "Mastery Achieved"}
          </span>
        </div>
      </div>

      <main className="explorer-main">
        {/* Main Content Area */}
        <section className="scenario-section glass-card animate-fade-in">
          {isLoading ? (
            <div className="loading-state">Generating your mission scenario...</div>
          ) : (
            <div className="scenario-content">
              <div className="scenario-header">
                <div className="scenario-badge">LEARNING MISSION</div>
                <button 
                  className="read-aloud-btn" 
                  onClick={() => {
                    const clean = messages[messages.length - 1]?.content.replace(/\*\*/g, '').replace(/🌈|🔍|🚀|🏆/g, '');
                    const targetLang = subject.id === 'hindi' ? 'hi-IN' : (subject.id === 'kannada' ? 'kn-IN' : 'en-IN');
                    speak(clean, targetLang);
                  }}
                  title="Read Aloud"
                >
                  🔈 Listen
                </button>
              </div>
              <p className="scenario-text">{messages[messages.length - 1]?.content.replace(/Professor Spark|Hi Yasmeen!/g, '').trim()}</p>
            </div>
          )}
          
          <div className="action-tray">
            {masteryStep === 0 && !isLoading && (
              <button 
                className="action-btn primary pulse" 
                onClick={() => {
                  setMasteryStep(1);
                  setAudioStarted(true);
                  // Trigger a silent speak to 'unlock' audio
                  speak("");
                }}
              >
                Start Learning Mission & Audio 🔊
              </button>
            )}
            {masteryStep > 0 && masteryStep <= topic.subtopics.length && !isLoading && (
              <div className="step-actions">
                <button className="action-btn secondary" onClick={() => setMasteryStep(prev => prev + 1)}>
                  Next Concept ➡️
                </button>
                <button className="action-btn accent" onClick={() => setMode('activity')}>
                  Learn by Doing Activity 🎯
                </button>
              </div>
            )}
            {masteryStep > topic.subtopics.length && !isLoading && (
              <button className="action-btn success" onClick={() => setMode('quiz')}>
                Take Mastery Quiz 🏆
              </button>
            )}
          </div>
        </section>

        {/* Technical/Teacher Details (Optional) */}
        {!mode && (
          <div className="learning-outcomes">
            <h4>Learning Outcomes</h4>
            <div className="outcome-tags">
              {topic.learningOutcomes.map((lo, i) => <span key={i} className="outcome-tag">{lo}</span>)}
            </div>
          </div>
        )}
      </main>

      {/* Overlays for Labs, Quizzes, Activities */}
      {mode !== 'learn' && (
        <div className="feature-overlay animate-scale-in">
          <div className="overlay-nav">
             <h3>{mode === 'quiz' ? 'Mastery Challenge' : mode === 'activity' ? 'Learn by Doing' : 'Virtual Lab'}</h3>
             <button className="exit-btn" onClick={() => setMode('learn')}>Exit ✕</button>
          </div>
          
          <div className="overlay-content">
            {mode === 'activity' && (
              <div className="activity-panel glass-card">
                 <div className="difficulty-picker">
                  <button className={currentLevel === 'low' ? 'active' : ''} onClick={() => setCurrentLevel('low')}>Starter</button>
                  <button className={currentLevel === 'mid' ? 'active' : ''} onClick={() => setCurrentLevel('mid')}>Explorer</button>
                  <button className={currentLevel === 'high' ? 'active' : ''} onClick={() => setCurrentLevel('high')}>Expert</button>
                </div>
                {topic.activities.find(a => a.level === currentLevel) && (
                  <div className="activity-details">
                    <h3>{topic.activities.find(a => a.level === currentLevel)?.title}</h3>
                    <p className="desc">{topic.activities.find(a => a.level === currentLevel)?.description}</p>
                    <div className="checklist">
                      {topic.activities.find(a => a.level === currentLevel)?.steps.map((s, i) => (
                        <div key={i} className="check-item">
                          <input type="checkbox" id={`step-${i}`} />
                          <label htmlFor={`step-${i}`}>{s}</label>
                        </div>
                      ))}
                    </div>
                    <button className="complete-btn" onClick={() => { setMode('learn'); handleUserAction("Action completed."); }}>Mission Complete! ✅</button>
                  </div>
                )}
              </div>
            )}

            {mode === 'quiz' && (
              <InteractiveQuiz 
                questions={topic.quiz} 
                onComplete={(score) => {
                  setMessages([{ role: 'ai', content: `Score: ${score}/${topic.quiz.length}` }]);
                  setMode('learn');
                  setMasteryStep(0);
                }} 
              />
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .topic-explorer {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 1rem;
          max-width: 1000px;
          margin: 0 auto;
          color: var(--text-color);
        }

        .explorer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          border-radius: 24px;
          background: white;
        }
        .subject-tag { font-size: 0.8rem; font-weight: 800; color: var(--accent); text-transform: uppercase; }
        h2 { font-size: 2rem; color: var(--primary); margin: 0.2rem 0; }
        
        .mission-status { width: 250px; }
        .progress-container { height: 10px; background: rgba(0,0,0,0.05); border-radius: 10px; overflow: hidden; margin-bottom: 0.5rem; }
        .progress-bar { height: 100%; background: var(--success); transition: width 0.4s; }
        .status-text { font-size: 0.8rem; font-weight: 700; opacity: 0.6; }

        .scenario-section {
          padding: 4rem 3rem;
          border-radius: 32px;
          min-height: 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: white;
        }

        .scenario-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        
        .scenario-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: var(--primary);
          color: white;
          border-radius: 50px;
          font-weight: 900;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .read-aloud-btn {
          background: var(--accent);
          color: var(--primary);
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .read-aloud-btn:hover { transform: scale(1.1); }
        
        .scenario-text {
          font-size: 2rem;
          line-height: 1.6;
          font-weight: 800;
          color: var(--text-color);
          margin-bottom: 3.5rem;
          max-width: 850px;
        }

        .action-tray { display: flex; gap: 1.5rem; width: 100%; justify-content: center; }
        .action-btn { 
          padding: 1.4rem 3.5rem; border-radius: 20px; font-weight: 900; font-size: 1.3rem;
          border: none; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
        }
        .action-btn.primary { background: var(--primary); color: white; box-shadow: 0 10px 25px rgba(108, 92, 231, 0.2); }
        .action-btn.secondary { background: var(--info); color: white; }
        .action-btn.accent { background: var(--accent); color: var(--primary); }
        .action-btn.success { background: var(--success); color: white; }
        .action-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        
        .feature-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: var(--bg-color); z-index: 1000; padding: 2.5rem;
          overflow-y: auto;
        }
        .overlay-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; }
        .exit-btn { padding: 0.8rem 2rem; border-radius: 12px; font-weight: 800; border: none; background: rgba(0,0,0,0.05); cursor: pointer; }
        
        .activity-panel { max-width: 850px; margin: 0 auto; padding: 3rem; background: white; border-radius: 32px; }
        .difficulty-picker { display: flex; gap: 0.75rem; margin-bottom: 2.5rem; justify-content: center; }
        .difficulty-picker button { padding: 0.8rem 2.2rem; border-radius: 50px; border: none; background: rgba(0,0,0,0.05); cursor: pointer; }
        .difficulty-picker button.active { background: var(--primary); color: white; font-weight: 900; }
        
        .checklist { display: flex; flex-direction: column; gap: 1.5rem; margin: 3rem 0; text-align: left; }
        .check-item { display: flex; gap: 1.2rem; align-items: center; font-size: 1.4rem; font-weight: 600; cursor: pointer; }
        input[type="checkbox"] { width: 26px; height: 26px; accent-color: var(--success); cursor: pointer; }

        .loading-state { font-size: 1.2rem; font-weight: 700; color: var(--primary); animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        .learning-outcomes { margin-top: 4rem; padding: 2rem; background: rgba(255, 255, 255, 0.5); border-radius: 20px; }
        .outcome-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-top: 1rem; }
        .outcome-tag { padding: 0.4rem 1rem; background: white; border-radius: 10px; font-size: 0.9rem; font-weight: 700; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }

        @media (max-width: 768px) {
          .explorer-header { flex-direction: column; text-align: center; gap: 1.5rem; }
          .scenario-text { font-size: 1.4rem; }
          .action-tray { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
