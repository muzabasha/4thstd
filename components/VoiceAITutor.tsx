"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Subject, Chapter, Topic } from '../lib/curriculum';
import { useVoice } from '../hooks/useVoice';
import { generateAIResponse } from '../lib/ai';
import InteractiveMapLab from './InteractiveMapLab';

interface VoiceAITutorProps {
  subject: Subject;
  chapter: Chapter;
  topic: Topic;
}

export default function VoiceAITutor({ subject, chapter, topic }: VoiceAITutorProps) {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'learn' | 'quiz' | 'activity' | 'lab'>('learn');
  const [currentLevel, setCurrentLevel] = useState<'low' | 'mid' | 'high'>('low');
  const [masteryStep, setMasteryStep] = useState(0); // 0: Intro, 1: Subtopic 1, etc.
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const { isListening, transcript, isSpeaking, startListening, stopListening, speak, setLang } = useVoice();
  
  useEffect(() => {
    if (subject.id === 'hindi') {
      setLang('hi-IN');
    } else if (subject.id === 'kannada') {
      setLang('kn-IN');
    } else {
      setLang('en-IN');
    }
  }, [subject.id, setLang]);

  useEffect(() => {
    // Proactive Guidance: Starts when topic or mastery step changes
    const guideMe = async () => {
      let prompt: string = "";
      if (masteryStep === 0) {
        prompt = `Hi Yasmeen! I'm so excited to help you master ${topic.title}. First, let's look at the big picture. ${topic.subtopics.join(", ")} are what we'll explore. Ready to start with the first part?`;
      } else if (masteryStep <= topic.subtopics.length) {
        prompt = `Great! Step ${masteryStep}: Let's talk about ${topic.subtopics[masteryStep - 1]}. It's very important because... [Explanation]. Shall we try a quick activity to see how this works?`;
      } else {
        prompt = `Hooray! You've reached the end of our lesson on ${topic.title}. You are now a master! Would you like to try the Expert Activity now?`;
      }
      
      setIsLoading(true);
      // Simulate/Generate AI guiding response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: prompt }]);
        speak(prompt);
        setIsLoading(false);
      }, 1000);
    };

    guideMe();
  }, [topic.id, masteryStep, speak]); // Triggered on topic change or step completion

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle new transcript from voice
  useEffect(() => {
    if (transcript && !isListening) {
      handleUserAction(transcript);
    }
  }, [transcript]);

  // Initial greeting when topic changes
  useEffect(() => {
    const initialText = `Hi Yasmeen! Let's learn about ${topic.title} in ${subject.title}. Should I explain it to you, or would you like to start a quiz?`;
    setMessages([{ role: 'ai', content: initialText }]);
    speak(initialText);
  }, [topic.id]);

  const handleUserAction = async (input: string) => {
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setIsLoading(true);

    let promptType: 'explain' | 'quiz' | 'evaluate' | 'activity' = 'explain';
    if (input.toLowerCase().includes('quiz')) {
      promptType = 'quiz';
      setMode('quiz');
    } else if (input.toLowerCase().includes('finished')) {
      promptType = 'activity';
      setMode('activity');
    } else if (mode === 'quiz') {
      promptType = 'evaluate';
    }

    const aiResponseText = await generateAIResponse(promptType, topic.title, input);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponseText }]);
    speak(aiResponseText);
    setIsLoading(false);
  };

  return (
    <div className="tutor-container">
      <div className="tutor-header">
        <div className="avatar Large">🤖</div>
        <div className="tutor-info">
          <h3>Professor Spark</h3>
          <span className="status">{isSpeaking ? 'Speaking...' : isListening ? 'Listening...' : 'Ready'}</span>
        </div>
        <div className="mode-toggle glass-card">
          <button className={mode === 'learn' ? 'active' : ''} onClick={() => setMode('learn')}>Learning</button>
          <button className={mode === 'quiz' ? 'active' : ''} onClick={() => setMode('quiz')}>Quick Quiz</button>
          <button className={mode === 'activity' ? 'active' : ''} onClick={() => setMode('activity')}>Activity Zone ✨</button>
          <button className={mode === 'lab' ? 'active' : ''} onClick={() => setMode('lab')}>Virtual Lab 🧪</button>
        </div>
      </div>

      {mode === 'activity' && (
        <div className="level-selector glass-card animate-fade-in">
          <button className={currentLevel === 'low' ? 'active' : ''} onClick={() => setCurrentLevel('low')}>Starter</button>
          <button className={currentLevel === 'mid' ? 'active' : ''} onClick={() => setCurrentLevel('mid')}>Explorer</button>
          <button className={currentLevel === 'high' ? 'active' : ''} onClick={() => setCurrentLevel('high')}>Expert</button>
        </div>
      )}

      {mode === 'activity' && topic.activities.find(a => a.level === currentLevel) && (
        <div className="activity-banner animate-fade-in activity-manual">
          <div className="activity-icon">🎯</div>
          <div className="activity-info">
            <h4>{topic.activities.find(a => a.level === currentLevel)?.title}</h4>
            <p className="activity-desc">{topic.activities.find(a => a.level === currentLevel)?.description}</p>
            
            {topic.activities.find(a => a.level === currentLevel)?.materials && (
              <div className="materials-list card-small">
                <h5>🧰 Materials Needed:</h5>
                <ul>
                  {topic.activities.find(a => a.level === currentLevel)?.materials?.map((m, i) => (
                    <li key={i}><input type="checkbox" /> {m}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="steps-list card-small">
              <h5>📍 Action Plan:</h5>
              <ol>
                {topic.activities.find(a => a.level === currentLevel)?.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>

            <span className="skill-tag">{topic.activities.find(a => a.level === currentLevel)?.skill.toUpperCase()} SKILL</span>
          </div>
          <button className="done-btn" onClick={() => handleUserAction("I'm done with the activity!")}>Done! ✅</button>
        </div>
      )}

      {mode === 'lab' && topic.virtualLab && (
        <div className="lab-panel glass-card animate-fade-in">
          <div className="lab-header">
            <h3>🔬 {topic.virtualLab.title}</h3>
          </div>
          <div className="lab-simulation">
            {topic.virtualLab.title.includes('India Map Lab') ? (
              <InteractiveMapLab onLandmarkClick={(info) => handleUserAction(info)} />
            ) : (
              <div className="sim-placeholder">
                <p>{topic.virtualLab.simulation}</p>
              </div>
            )}
          </div>
          <div className="lab-task activity-info">
            <h4>Objective:</h4>
            <p>{topic.virtualLab.task}</p>
          </div>
        </div>
      )}

      <div className="nep-insights glass-card animate-fade-in">
        <div className="nep-header">
          <span>🎓 NEP Preparatory Stage</span>
          <div className="cc-link">{topic.crossCurricularLink}</div>
        </div>
        <div className="lo-list">
          {topic.learningOutcomes.map((lo, i) => (
            <span key={i} className="lo-tag">🏆 {lo}</span>
          ))}
        </div>
        <div className="inquiry-area">
          <p className="inquiry-label">Ask a Critical Thinking Question:</p>
          <div className="inquiry-chips">
            <button key="why" onClick={() => handleUserAction(`Why does ${topic.title} happen like that?`)}>Why? 🤔</button>
            <button key="how" onClick={() => handleUserAction(`How is ${topic.title} used in real life?`)}>How? 🛠️</button>
            <button key="what" onClick={() => handleUserAction(`What if ${topic.title} were different?`)}>What if? 🌈</button>
          </div>
        </div>
      </div>

      <div className="chat-window dark-glass-card">
        {messages.map((m, i) => (
          <div key={i} className={`message-bubble ${m.role}`}>
            {m.content}
          </div>
        ))}
        {isLoading && <div className="message-bubble ai loading">Thinking...</div>}
        <div ref={chatEndRef} />
      </div>

      <div className="action-area animate-fade-in">
        {!isLoading && (
          <div className="response-chips">
            {masteryStep === 0 && (
              <button className="chip primary" onClick={() => setMasteryStep(1)}>
                Yes, let's start! 🚀
              </button>
            )}
            {masteryStep > 0 && masteryStep <= topic.subtopics.length && (
              <>
                <button className="chip" onClick={() => speak(messages[messages.length-1].content)}>
                  Can you repeat that? 🔄
                </button>
                <button className="chip primary" onClick={() => setMasteryStep(prev => prev + 1)}>
                  I understand, next step! ➡️
                </button>
                <button className="chip accent" onClick={() => setMode('activity')}>
                  Let's do an Activity! 🎯
                </button>
              </>
            )}
            {masteryStep > topic.subtopics.length && (
              <button className="chip success" onClick={() => setMasteryStep(0)}>
                Restart & Review 🔄
              </button>
            )}
          </div>
        )}
        {isLoading && <div className="typing-indicator">Professor Spark is preparing your next step...</div>}
      </div>

      <style jsx>{`
        .action-area {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .response-chips {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .chip {
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s;
        }
        .chip.primary { background: var(--primary); border-color: var(--primary); }
        .chip.accent { background: var(--accent); color: var(--primary); border-color: var(--accent); }
        .chip.success { background: var(--success); border-color: var(--success); }
        .chip:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
