"use client";

import { useState, useCallback, useEffect } from 'react';

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lang, setLang] = useState('en-IN');

  // Check for SpeechRecognition support
  const SpeechRecognition = typeof window !== 'undefined' ? 
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null;

  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = lang;
  }

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

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const result = event.results[current][0].transcript;
      setTranscript(result);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }, [recognition]);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined') return;

    // Stop current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1.0;
    utterance.pitch = 1.2; // Child-friendly pitch

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  return { isListening, transcript, isSpeaking, startListening, stopListening, speak, setLang };
};
