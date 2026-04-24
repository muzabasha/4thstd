"use client";

import { useState, useCallback, useRef, useEffect } from 'react';

// Language detection by Unicode script range
function detectScript(text: string): string | null {
  if (/[\u0900-\u097F]/.test(text)) return 'hi-IN';   // Devanagari → Hindi
  if (/[\u0C80-\u0CFF]/.test(text)) return 'kn-IN';   // Kannada script
  return null;
}

// Find the best available voice for a given BCP-47 lang code
function pickVoice(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | null {
  const code = lang.toLowerCase();
  const base = code.split('-')[0];

  // Exact match first
  let v = voices.find(v => v.lang.toLowerCase() === code);
  if (v) return v;

  // Prefix match (e.g. hi-IN matches hi)
  v = voices.find(v => v.lang.toLowerCase().startsWith(base));
  if (v) return v;

  // Name-based fallback for Indian languages
  if (base === 'hi') {
    v = voices.find(v => /hindi|devanagari/i.test(v.name));
    if (v) return v;
  }
  if (base === 'kn') {
    v = voices.find(v => /kannada/i.test(v.name));
    if (v) return v;
  }

  // Generic India fallback
  v = voices.find(v => /india/i.test(v.name));
  return v ?? null;
}

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lang, setLangState] = useState('en-IN');
  const langRef = useRef('en-IN');
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  // Keep langRef in sync
  const setLang = useCallback((l: string) => {
    langRef.current = l;
    setLangState(l);
  }, []);

  // Load voices — retry until available (browsers load them async)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) voicesRef.current = v;
    };

    load();
    window.speechSynthesis.onvoiceschanged = load;

    // Retry a few times for browsers that are slow to load voices
    const timers = [
      setTimeout(load, 500),
      setTimeout(load, 1500),
      setTimeout(load, 3000),
    ];

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      timers.forEach(clearTimeout);
    };
  }, []);

  // Build recognition lazily
  const getRecognition = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (recognitionRef.current) return recognitionRef.current;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return null;

    const rec = new SR();
    rec.continuous = false;
    rec.interimResults = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      const result = event.results[event.resultIndex][0].transcript;
      setTranscript(result);
      setIsListening(false);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };
    rec.onend = () => setIsListening(false);

    recognitionRef.current = rec;
    return rec;
  }, []);

  const startListening = useCallback(() => {
    const rec = getRecognition();
    if (!rec) return;
    rec.lang = langRef.current;
    setIsListening(true);
    try { rec.start(); } catch { setIsListening(false); }
  }, [getRecognition]);

  const stopListening = useCallback(() => {
    const rec = recognitionRef.current;
    if (!rec) return;
    setIsListening(false);
    try { rec.stop(); } catch { /* ignore */ }
  }, []);

  const speak = useCallback((text: string, overrideLang?: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (!text.trim()) return;

    // Auto-detect script, then fall back to override, then current lang
    const scriptLang = detectScript(text);
    const targetLang = scriptLang ?? overrideLang ?? langRef.current;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang;

    // Pick best voice — use cached list, retry once if empty
    let voices = voicesRef.current;
    if (voices.length === 0) {
      voices = window.speechSynthesis.getVoices();
      voicesRef.current = voices;
    }

    const voice = pickVoice(voices, targetLang);
    if (voice) utterance.voice = voice;

    // Slower rate for Hindi/Kannada for better articulation
    const base = targetLang.split('-')[0].toLowerCase();
    utterance.rate = (base === 'hi' || base === 'kn') ? 0.82 : 0.92;
    utterance.pitch = 1.05;
    utterance.volume = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      // 'interrupted' is normal when cancel() is called — don't log it
      if (e.error !== 'interrupted') console.error('TTS error:', e.error);
      setIsSpeaking(false);
    };

    // Small delay to let cancel() settle before speaking
    setTimeout(() => {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    }, 80);
  }, []);

  return {
    isListening, transcript, isSpeaking,
    lang, setLang,
    startListening, stopListening, speak,
  };
};
