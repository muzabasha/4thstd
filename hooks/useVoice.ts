"use client";

import { useState, useCallback, useMemo, useEffect } from 'react';

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lang, setLang] = useState('en-IN');

  const recognition = useMemo(() => {
    if (typeof window === 'undefined') return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return null;
    
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = lang;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      const current = event.resultIndex;
      const result = event.results[current][0].transcript;
      setTranscript(result);
      setIsListening(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    rec.onend = () => {
      setIsListening(false);
    };

    return rec;
  }, [lang]);

  const startListening = useCallback(() => {
    if (!recognition) return;
    setIsListening(true);
    recognition.start();
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (!recognition) return;
    setIsListening(false);
    recognition.stop();
  }, [recognition]);

  const speak = useCallback((text: string, overrideLang?: string) => {
    if (typeof window === 'undefined') return;

    const currentLang = overrideLang || lang;
    
    // Stop current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang;
    
    // Attempt to find a high-quality native voice
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => 
      v.lang.toLowerCase().startsWith(currentLang.split('-')[0].toLowerCase()) ||
      v.name.toLowerCase().includes(currentLang.split('-')[0].toLowerCase())
    );
    
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.rate = 0.95; 
    utterance.pitch = 1.15; 

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error('Speech Synthesis Error:', e);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [lang]);

  // Pre-fetch voices to ensure they are available
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  return { isListening, transcript, isSpeaking, startListening, stopListening, speak, setLang };
};
