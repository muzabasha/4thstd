"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Subject, Chapter, Topic } from '../lib/curriculum';
import { useVoice } from '../hooks/useVoice';
import { generateAIResponse } from '../lib/ai';

interface VoiceAITutorProps {
  subject: Subject;
  chapter: Chapter;
  topic: Topic;
}

export default function VoiceAITutor({ subject, chapter, topic }: VoiceAITutorProps) {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const { isListening, transcript, isSpeaking, startListening, stopListening, speak } = useVoice();

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

    let promptType: 'explain' | 'quiz' | 'evaluate' = 'explain';
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
