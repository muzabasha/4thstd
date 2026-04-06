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
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const { isListening, transcript, isSpeaking, startListening, stopListening, speak } = useVoice();

  useEffect(() => {
    if (mode === 'activity') {
      const currentActivity = topic.activities.find(a => a.level === currentLevel);
      if (currentActivity) {
        handleUserAction(`Let's start the ${currentActivity.title} activity! Give me step-by-step instructions.`);
      }
    } else if (mode === 'lab') {
      handleUserAction(`Let's explore the Virtual Lab for ${topic.title}. What is my first task?`);
    }
  }, [mode, currentLevel, topic.id]);

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

      <div className="controls">
        <button 
          className={`mic-button ${isListening ? 'listening' : ''}`} 
          onClick={isListening ? stopListening : startListening}
        >
          {isListening ? 'Stop' : 'Ask Me!'} 🎙️
        </button>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Type your question here..." 
            onKeyDown={(e) => e.key === 'Enter' && handleUserAction(e.currentTarget.value)} 
          />
          <button className="send-btn" onClick={() => {
            const input = document.querySelector('input');
            if (input?.value) handleUserAction(input.value);
            if (input) input.value = '';
          }}>➔</button>
        </div>
      </div>
    </div>
  );
}
