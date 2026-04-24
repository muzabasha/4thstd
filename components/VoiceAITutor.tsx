"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Subject, Topic } from '../lib/curriculum';
import { useVoice } from '../hooks/useVoice';
import { generateAIResponse } from '../lib/ai';
import InteractiveQuiz from './InteractiveQuiz';

interface Props { subject: Subject; topic: Topic; }

export default function VoiceAITutor({ subject, topic }: Props) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'learn' | 'quiz' | 'activity'>('learn');
  const [level, setLevel] = useState<'low' | 'mid' | 'high'>('low');
  const [step, setStep] = useState(0);
  const [isSpeakingNow, setIsSpeakingNow] = useState(false);

  const { speak, setLang, isSpeaking } = useVoice();
  const speakRef = useRef(speak);
  const setLangRef = useRef(setLang);
  useEffect(() => { speakRef.current = speak; }, [speak]);
  useEffect(() => { setLangRef.current = setLang; }, [setLang]);

  const targetLang = subject.id === 'hindi' ? 'hi-IN' : subject.id === 'kannada' ? 'kn-IN' : 'en-IN';
  const langKey = subject.id === 'hindi' ? 'hi' : subject.id === 'kannada' ? 'kn' : 'en';

  useEffect(() => {
    setLangRef.current(targetLang);
    const load = async () => {
      setIsLoading(true);
      const chId = topic.id.split('-')[0];
      let text = '';
      if (step === 0) {
        const reading = topic.readingText?.[langKey as 'en' | 'hi' | 'kn'] ?? topic.readingText?.en ?? '';
        const ai = await generateAIResponse('explain', topic.title, chId);
        text = `${ai}\n\n📖 ${reading}`;
      } else if (step <= topic.subtopics.length) {
        const sub = topic.subtopics[step - 1];
        const ai = await generateAIResponse('explain', topic.title, sub);
        text = `**${sub}**\n\n${ai}`;
      } else {
        text = `🎉 Amazing work! You've explored all ${topic.subtopics.length} concepts in "${topic.title}". Time for the Mastery Quiz!`;
      }
      setContent(text);
      if (step > 0) {
        const clean = text.replace(/\*\*/g, '').replace(/[🎉📖🌈🔍🚀🏆]/g, '');
        speakRef.current(clean, targetLang);
      }
      setIsLoading(false);
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic.id, step, subject.id]);

  useEffect(() => { setIsSpeakingNow(isSpeaking); }, [isSpeaking]);

  const handleSpeak = useCallback(() => {
    const clean = content.replace(/\*\*/g, '').replace(/[🎉📖🌈🔍🚀🏆]/g, '');
    speakRef.current(clean, targetLang);
  }, [content, targetLang]);

  const activity = topic.activities.find(a => a.level === level);
  const pct = Math.round(((step + 1) / (topic.subtopics.length + 2)) * 100);

  return (
    <div className="tutor-wrap">

      {/* ── Top bar ── */}
      <div className="tutor-topbar glass-card">
        <div className="tb-left">
          <span className="tb-subject" style={{ color: subject.color }}>{subject.icon} {subject.title.split(' (')[0]}</span>
          <h2 className="tb-title">{topic.title}</h2>
        </div>
        <div className="tb-right">
          <div className="tb-progress">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="tb-pct">{pct}%</span>
          </div>
          <span className="badge badge-primary">
            {step === 0 ? 'Intro' : step <= topic.subtopics.length ? `Step ${step}/${topic.subtopics.length}` : '🏆 Done!'}
          </span>
        </div>
      </div>

      {/* ── Step dots ── */}
      <div className="step-dots">
        {Array.from({ length: topic.subtopics.length + 2 }).map((_, i) => (
          <div
            key={i}
            className={`dot ${i <= step ? 'done' : ''} ${i === step ? 'current' : ''}`}
            style={i === step ? { background: subject.color } : {}}
          />
        ))}
      </div>

      {/* ── Content card ── */}
      <div className="content-card glass-card animate-fade-in">
        {isLoading ? (
          <div className="loading-wrap">
            <div className="loading-spinner" style={{ borderTopColor: subject.color }} />
            <p className="loading-text">Spark is thinking… 🤔</p>
          </div>
        ) : (
          <>
            <div className="content-header">
              <div className="ch-badge" style={{ background: `${subject.color}20`, color: subject.color }}>
                {step === 0 ? '🌟 Introduction' : step <= topic.subtopics.length ? `🔍 Concept ${step}` : '🏆 Complete!'}
              </div>
              <button
                className={`speak-btn ${isSpeakingNow ? 'speaking' : ''}`}
                onClick={handleSpeak}
                title={isSpeakingNow ? 'Speaking…' : 'Read aloud'}
              >
                {isSpeakingNow ? '🔊' : '🔈'} {isSpeakingNow ? 'Speaking…' : 'Listen'}
              </button>
            </div>

            <div className="content-body">
              {content.split('\n').map((line, i) => {
                if (!line.trim()) return <div key={i} style={{ height: '0.5rem' }} />;
                const parts = line.split(/(\*\*.*?\*\*)/);
                return (
                  <p key={i} className="content-line">
                    {parts.map((p, j) =>
                      p.startsWith('**') && p.endsWith('**')
                        ? <strong key={j} className="content-bold">{p.slice(2, -2)}</strong>
                        : p
                    )}
                  </p>
                );
              })}
            </div>

            {/* Reading text panel */}
            {step === 0 && topic.readingText && (
              <div className="reading-panel">
                <p className="rp-label">📚 Read in your language</p>
                <div className="rp-tabs">
                  {(['en', 'hi', 'kn'] as const).filter(l => topic.readingText?.[l]).map(l => (
                    <button
                      key={l}
                      className="rp-tab"
                      onClick={() => speakRef.current(topic.readingText![l]!, l === 'en' ? 'en-IN' : l === 'hi' ? 'hi-IN' : 'kn-IN')}
                    >
                      {l === 'en' ? '🇬🇧 English' : l === 'hi' ? '🇮🇳 हिन्दी' : '🚩 ಕನ್ನಡ'}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ── Action buttons ── */}
        {!isLoading && (
          <div className="action-row">
            {step === 0 && (
              <button className="btn btn-primary btn-lg" onClick={() => setStep(1)}>
                🚀 Start Learning!
              </button>
            )}
            {step > 0 && step <= topic.subtopics.length && (
              <>
                <button className="btn btn-secondary" onClick={() => setStep(s => s + 1)}>
                  Next Concept →
                </button>
                <button className="btn btn-accent" onClick={() => setMode('activity')}>
                  🎯 Do Activity
                </button>
              </>
            )}
            {step > topic.subtopics.length && (
              <button className="btn btn-success btn-lg" onClick={() => setMode('quiz')}>
                🏆 Take Quiz!
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Learning outcomes ── */}
      {step === 0 && !isLoading && (
        <div className="outcomes-card glass-card animate-fade-in">
          <p className="oc-label">💡 What you&apos;ll learn</p>
          <div className="oc-tags">
            {topic.learningOutcomes.map((lo, i) => (
              <span key={i} className="oc-tag">{lo}</span>
            ))}
          </div>
          {topic.crossCurricularLink && (
            <p className="oc-link">🔗 Connected to: <em>{topic.crossCurricularLink}</em></p>
          )}
        </div>
      )}

      {/* ── ACTIVITY OVERLAY ── */}
      {mode === 'activity' && (
        <div className="overlay animate-pop-in">
          <div className="overlay-inner">
            <div className="overlay-header">
              <h3 className="overlay-title">🎯 Learn by Doing</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setMode('learn')}>✕ Close</button>
            </div>

            <div className="level-tabs">
              {(['low', 'mid', 'high'] as const).map(l => (
                <button
                  key={l}
                  className={`level-tab ${level === l ? 'active' : ''}`}
                  onClick={() => setLevel(l)}
                >
                  {l === 'low' ? '🌱 Starter' : l === 'mid' ? '🌿 Explorer' : '🌳 Expert'}
                </button>
              ))}
            </div>

            {activity ? (
              <div className="activity-body glass-card">
                <div className="act-header">
                  <span className="act-icon">
                    {activity.skill === 'drawing' ? '🎨' : activity.skill === 'calculating' ? '🔢' : activity.skill === 'writing' ? '✏️' : activity.skill === 'speaking' ? '🗣️' : activity.skill === 'listening' ? '👂' : '🎭'}
                  </span>
                  <div>
                    <h4 className="act-title">{activity.title}</h4>
                    <p className="act-desc">{activity.description}</p>
                  </div>
                </div>

                {activity.materials && activity.materials.length > 0 && (
                  <div className="act-materials">
                    <p className="act-section-label">🎒 You need:</p>
                    <div className="materials-chips">
                      {activity.materials.map((m, i) => <span key={i} className="mat-chip">{m}</span>)}
                    </div>
                  </div>
                )}

                <div className="act-steps">
                  <p className="act-section-label">📋 Steps:</p>
                  {activity.steps.map((s, i) => (
                    <label key={i} className="step-row">
                      <input type="checkbox" className="step-check" />
                      <span className="step-num">{i + 1}</span>
                      <span className="step-text">{s}</span>
                    </label>
                  ))}
                </div>

                {activity.doItYourself && (
                  <div className="act-diy">
                    <span>🤔</span>
                    <p>{activity.doItYourself}</p>
                  </div>
                )}

                <button className="btn btn-success" style={{ width: '100%', marginTop: '1.5rem' }}
                  onClick={() => setMode('learn')}>
                  ✅ Mission Complete!
                </button>
              </div>
            ) : (
              <p style={{ textAlign: 'center', color: '#6B7280', padding: '2rem' }}>No activity at this level yet.</p>
            )}
          </div>
        </div>
      )}

      {/* ── QUIZ OVERLAY ── */}
      {mode === 'quiz' && (
        <div className="overlay animate-pop-in">
          <div className="overlay-inner">
            <div className="overlay-header">
              <h3 className="overlay-title">🏆 Mastery Quiz</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setMode('learn')}>✕ Close</button>
            </div>
            <InteractiveQuiz
              questions={topic.quiz}
              onComplete={score => {
                setMode('learn');
                setStep(0);
                alert(`🎉 You scored ${score}/${topic.quiz.length}! ${score === topic.quiz.length ? 'Perfect! 🌟' : 'Great effort! 💪'}`);
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .tutor-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 860px;
          margin: 0 auto;
        }

        /* Top bar */
        .tutor-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.75rem !important;
          gap: 1rem;
        }
        .tb-subject { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 0.2rem; }
        .tb-title   { font-family: 'Baloo 2', cursive; font-size: 1.3rem; font-weight: 800; color: #1E1B4B; }
        .tb-right   { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; min-width: 160px; }
        .tb-progress { display: flex; align-items: center; gap: 0.5rem; width: 100%; }
        .tb-progress .progress-track { flex: 1; }
        .tb-pct { font-size: 0.8rem; font-weight: 800; color: #7C3AED; white-space: nowrap; }

        /* Step dots */
        .step-dots {
          display: flex;
          gap: 0.4rem;
          align-items: center;
          padding: 0 0.25rem;
          flex-wrap: wrap;
        }
        .dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #E5E7EB;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .dot.done    { background: #C4B5FD; }
        .dot.current { width: 28px; border-radius: 99px; }

        /* Content card */
        .content-card {
          padding: 2rem 2.5rem !important;
          min-height: 320px;
        }
        .content-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .ch-badge {
          padding: 0.4rem 1rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 800;
        }
        .speak-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 1rem;
          border-radius: 99px;
          background: #EDE9FE;
          color: #7C3AED;
          font-weight: 800;
          font-size: 0.85rem;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }
        .speak-btn:hover   { background: #DDD6FE; transform: scale(1.05); }
        .speak-btn.speaking { background: #7C3AED; color: white; animation: pulse-ring 1.5s infinite; }

        .content-body { margin-bottom: 1.5rem; }
        .content-line {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .content-bold {
          color: #7C3AED;
          font-weight: 900;
          background: #EDE9FE;
          padding: 0.05em 0.3em;
          border-radius: 6px;
        }

        /* Reading panel */
        .reading-panel {
          background: #F0FDF4;
          border: 1.5px solid #A7F3D0;
          border-radius: 16px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
        }
        .rp-label { font-size: 0.78rem; font-weight: 800; color: #065F46; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .rp-tabs  { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .rp-tab {
          padding: 0.4rem 0.9rem;
          border-radius: 99px;
          background: white;
          border: 1.5px solid #A7F3D0;
          font-size: 0.82rem;
          font-weight: 800;
          color: #065F46;
          cursor: pointer;
          transition: all 0.18s;
        }
        .rp-tab:hover { background: #10B981; color: white; border-color: #10B981; transform: scale(1.05); }

        /* Action row */
        .action-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }

        /* Loading */
        .loading-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          min-height: 200px;
        }
        .loading-spinner {
          width: 44px; height: 44px;
          border: 4px solid #EDE9FE;
          border-top-color: #7C3AED;
          border-radius: 50%;
          animation: spin-slow 0.8s linear infinite;
        }
        .loading-text { font-size: 1rem; font-weight: 700; color: #7C3AED; }

        /* Outcomes */
        .outcomes-card { padding: 1.25rem 1.5rem !important; }
        .oc-label { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #6B7280; margin-bottom: 0.75rem; }
        .oc-tags  { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem; }
        .oc-tag   { padding: 0.3rem 0.85rem; background: #EDE9FE; color: #7C3AED; border-radius: 99px; font-size: 0.8rem; font-weight: 700; }
        .oc-link  { font-size: 0.82rem; color: #6B7280; font-weight: 600; }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(30,27,75,0.55);
          backdrop-filter: blur(6px);
          z-index: 500;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 2rem 1rem;
          overflow-y: auto;
        }
        .overlay-inner {
          background: #F5F3FF;
          border-radius: 28px;
          width: 100%;
          max-width: 700px;
          padding: 2rem;
          box-shadow: 0 24px 64px rgba(0,0,0,0.2);
        }
        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .overlay-title { font-family: 'Baloo 2', cursive; font-size: 1.4rem; font-weight: 800; color: #1E1B4B; }

        /* Level tabs */
        .level-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          background: white;
          padding: 0.4rem;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .level-tab {
          flex: 1;
          padding: 0.6rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 800;
          color: #6B7280;
          transition: all 0.18s;
          border: none;
          cursor: pointer;
          background: transparent;
        }
        .level-tab:hover { background: #EDE9FE; color: #7C3AED; }
        .level-tab.active { background: #7C3AED; color: white; box-shadow: 0 4px 12px rgba(124,58,237,0.3); }

        /* Activity body */
        .activity-body { padding: 1.5rem !important; }
        .act-header { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.25rem; }
        .act-icon   { font-size: 2.2rem; flex-shrink: 0; }
        .act-title  { font-family: 'Baloo 2', cursive; font-size: 1.1rem; font-weight: 800; color: #1E1B4B; margin-bottom: 0.2rem; }
        .act-desc   { font-size: 0.88rem; color: #6B7280; font-weight: 600; }
        .act-section-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #6B7280; margin-bottom: 0.5rem; }
        .act-materials { margin-bottom: 1.25rem; }
        .materials-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .mat-chip { padding: 0.25rem 0.75rem; background: #FEF3C7; color: #92400E; border-radius: 99px; font-size: 0.78rem; font-weight: 700; }
        .act-steps { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem; }
        .step-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.9rem;
          background: white;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .step-row:hover { background: #EDE9FE; }
        .step-check { width: 18px; height: 18px; accent-color: #7C3AED; cursor: pointer; flex-shrink: 0; }
        .step-num   { width: 24px; height: 24px; background: #7C3AED; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 900; flex-shrink: 0; }
        .step-text  { font-size: 0.9rem; font-weight: 600; color: #374151; }
        .act-diy {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: #FEF3C7;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: #92400E;
        }

        @media (max-width: 600px) {
          .tutor-topbar { flex-direction: column; align-items: flex-start; }
          .tb-right { align-items: flex-start; width: 100%; }
          .content-card { padding: 1.25rem !important; }
          .action-row { flex-direction: column; }
          .action-row .btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
