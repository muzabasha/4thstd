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

    // Browser policy: Resume if paused
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    
    // Stop current speech
    window.speechSynthesis.cancel();

    const currentLang = overrideLang || lang;
    const langCode = currentLang.split('-')[0].toLowerCase();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang;
    
    // Discovery loop for voices
    const voices = window.speechSynthesis.getVoices();
    let targetVoice = voices.find(v => 
      v.lang.toLowerCase() === currentLang.toLowerCase() ||
      v.lang.toLowerCase().startsWith(langCode)
    );

    // Deep search for Hindi/Kannada indicators in voice names
    if (!targetVoice && (langCode === 'hi' || langCode === 'kn')) {
      targetVoice = voices.find(v => {
        const name = v.name.toLowerCase();
        return name.includes('india') || name.includes('hindi') || name.includes('kannada');
      });
    }
    
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.rate = 0.9; // Even slower for better articulation of complex scripts
    utterance.pitch = 1.1; 
    utterance.volume = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error('TTS Error:', e);
      setIsSpeaking(false);
    };

    // Final check for synthesis readiness
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 50);
  }, [lang]);

  // Pre-fetch and update voices
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const updateVoices = () => {
      window.speechSynthesis.getVoices();
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
    
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return { isListening, transcript, isSpeaking, startListening, stopListening, speak, setLang };
};
