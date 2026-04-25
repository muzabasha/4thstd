"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Subject, Topic } from '../lib/curriculum';
import { useVoice } from '../hooks/useVoice';
import { generateAIResponse } from '../lib/ai';
import InteractiveQuiz from './InteractiveQuiz';
import ExperientialLab from './ExperientialLab';

interface Props { subject: Subject; topic: Topic; }

export default function VoiceAITutor({ subject, topic }: Props) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'learn' | 'lab' | 'activity' | 'quiz'>('learn');
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
      
      // Auto-speak the content in the Learn tab
      if (activeTab === 'learn') {
        // Auto-speak step 0 for all subjects as per user request 
        // and step > 0 for all subjects
        if (step >= 0) {
          const clean = text.replace(/\*\*/g, '').replace(/[🎉📖🌈🔍🚀🏆]/g, '');
          speakRef.current(clean, targetLang);
        }
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

  const activity = topic.activities.find(a => a.level === level) || topic.activities[0];
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

      {/* ── Main Tab Navigation ── */}
      <div className="tab-nav glass-card">
        <button className={`tab-btn ${activeTab === 'learn' ? 'active' : ''}`} onClick={() => setActiveTab('learn')}>
          📖 Learn
        </button>
        <button className={`tab-btn ${activeTab === 'lab' ? 'active' : ''}`} onClick={() => setActiveTab('lab')}>
          🧪 3D Lab
        </button>
        <button className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`} onClick={() => setActiveTab('activity')}>
          🎯 Activity
        </button>
        <button className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
          🏆 Quiz
        </button>
      </div>

      {/* ── TAB CONTENT ── */}
      <div className="tab-content-area">
        
        {/* LEARN TAB */}
        {activeTab === 'learn' && (
          <div className="tab-pane animate-fade-in">
            {/* Step dots */}
            <div className="step-dots" style={{ marginBottom: '1rem' }}>
              {Array.from({ length: topic.subtopics.length + 2 }).map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i <= step ? 'done' : ''} ${i === step ? 'current' : ''}`}
                  style={i === step ? { background: subject.color } : {}}
                />
              ))}
            </div>

            <div className="content-card glass-card">
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

                  <div className="action-row">
                    {step === 0 ? (
                      <button className="btn btn-primary btn-lg" onClick={() => setStep(1)}>
                        🚀 Start Learning!
                      </button>
                    ) : step <= topic.subtopics.length ? (
                      <button className="btn btn-secondary" onClick={() => setStep(s => s + 1)}>
                        Next Concept →
                      </button>
                    ) : (
                      <button className="btn btn-success btn-lg" onClick={() => setActiveTab('quiz')}>
                        🏆 Go to Quiz!
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>

            {step === 0 && !isLoading && (
              <div className="outcomes-card glass-card animate-fade-in" style={{ marginTop: '1.25rem' }}>
                <p className="oc-label">💡 What you&apos;ll learn</p>
                <div className="oc-tags">
                  {topic.learningOutcomes.map((lo, i) => <span key={i} className="oc-tag">{lo}</span>)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* LAB TAB */}
        {activeTab === 'lab' && (
          <div className="tab-pane animate-fade-in">
            <div className="lab-wrap glass-card">
              <h3 className="pane-title">🧪 Experiential 3D Lab</h3>
              <p className="pane-desc">Visualize the concept with interactive 3D models.</p>
              <ExperientialLab subjectId={subject.id} topicId={topic.id} />
              
              <div className="lab-info">
                <div className="info-card">
                  <span>💡</span>
                  <p>Rotate the object to see all angles. Understanding shapes and structures helps in deeper learning!</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVITY TAB */}
        {activeTab === 'activity' && (
          <div className="tab-pane animate-fade-in">
            <div className="activity-pane-inner glass-card">
              <div className="pane-header">
                <h3 className="pane-title">🎯 Learning Activity</h3>
                <div className="level-tabs-inline">
                  {(['low', 'mid', 'high'] as const).map(l => (
                    <button key={l} className={`level-tab ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}>
                      {l === 'low' ? '🌱 Starter' : l === 'mid' ? '🌿 Explorer' : '🌳 Expert'}
                    </button>
                  ))}
                </div>
              </div>

              {activity ? (
                <div className="activity-main">
                  <div className="act-header-main">
                    <span className="act-icon-large">
                      {activity.skill === 'drawing' ? '🎨' : activity.skill === 'calculating' ? '🔢' : activity.skill === 'writing' ? '✏️' : activity.skill === 'speaking' ? '🗣️' : activity.skill === 'listening' ? '👂' : '🎭'}
                    </span>
                    <div>
                      <h4 className="act-title-large">{activity.title}</h4>
                      <p className="act-desc-large">{activity.description}</p>
                    </div>
                  </div>

                  <div className="act-grid">
                    <div className="act-section">
                      <p className="section-label">🎒 Materials</p>
                      <div className="materials-list">
                        {activity.materials?.map((m, i) => <span key={i} className="mat-tag">{m}</span>)}
                      </div>
                    </div>
                    <div className="act-section">
                      <p className="section-label">📋 Steps to Follow</p>
                      <div className="steps-list">
                        {activity.steps.map((s, i) => (
                          <div key={i} className="step-item">
                            <span className="step-idx">{i+1}</span>
                            <p>{s}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="no-data">No activity for this level.</p>
              )}
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && (
          <div className="tab-pane animate-fade-in">
            <div className="quiz-pane-inner glass-card">
              <h3 className="pane-title">🏆 Knowledge Mastery</h3>
              <p className="pane-desc">Test what you&apos;ve learned!</p>
              <InteractiveQuiz
                questions={topic.quiz}
                onComplete={score => {
                  alert(`🎉 Amazing! You scored ${score}/${topic.quiz.length}!`);
                }}
              />
            </div>
          </div>
        )}

      </div>

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

        /* Tab Navigation */
        .tab-nav {
          display: flex;
          gap: 0.5rem;
          padding: 0.4rem !important;
          background: rgba(255,255,255,0.6) !important;
        }
        .tab-btn {
          flex: 1;
          padding: 0.75rem;
          border-radius: 12px;
          border: none;
          background: transparent;
          font-weight: 800;
          font-size: 0.9rem;
          color: #6B7280;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tab-btn:hover { background: rgba(255,255,255,0.8); color: #1E1B4B; }
        .tab-btn.active {
          background: white;
          color: #7C3AED;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        /* Tab Content Area */
        .tab-content-area {
          min-height: 400px;
        }
        .pane-title { font-family: 'Baloo 2', cursive; font-size: 1.5rem; font-weight: 800; color: #1E1B4B; margin-bottom: 0.25rem; }
        .pane-desc { font-size: 0.9rem; color: #6B7280; font-weight: 600; margin-bottom: 1.5rem; }

        /* Lab Styling */
        .lab-wrap { padding: 2rem !important; }
        .lab-info { margin-top: 1.5rem; }
        .info-card {
          display: flex;
          gap: 0.75rem;
          background: #EFF6FF;
          padding: 1rem;
          border-radius: 16px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1E40AF;
          border: 1px solid #DBEAFE;
        }

        /* Activity Pane Layout */
        .activity-pane-inner { padding: 2rem !important; }
        .pane-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
        .level-tabs-inline { display: flex; gap: 0.4rem; background: #F3F4F6; padding: 0.3rem; border-radius: 12px; }
        .act-header-main { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem; }
        .act-icon-large { font-size: 3.5rem; }
        .act-title-large { font-family: 'Baloo 2', cursive; font-size: 1.4rem; font-weight: 800; color: #1E1B4B; }
        .act-desc-large { font-size: 1rem; color: #6B7280; font-weight: 600; }
        .act-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 2rem; }
        .section-label { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #9CA3AF; margin-bottom: 1rem; }
        .materials-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .mat-tag { padding: 0.4rem 1rem; background: #FEF3C7; color: #92400E; border-radius: 99px; font-weight: 700; font-size: 0.85rem; }
        .steps-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .step-item { display: flex; gap: 1rem; align-items: flex-start; background: white; padding: 1rem; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .step-idx { background: #7C3AED; color: white; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 900; font-size: 0.8rem; flex-shrink: 0; }

        /* Quiz Pane */
        .quiz-pane-inner { padding: 2rem !important; }

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
          .tutor-topbar { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .tb-right { align-items: flex-start; width: 100%; min-width: unset; }
          .tb-progress { width: 100%; }
          .content-card { padding: 1rem 1.1rem !important; min-height: unset; }
          .content-header { flex-wrap: wrap; gap: 0.5rem; }
          .content-line { font-size: 0.95rem; }
          .action-row { flex-direction: column; }
          .action-row .btn { width: 100%; justify-content: center; }
          .overlay { padding: 0; align-items: flex-end; }
          .overlay-inner {
            border-radius: 24px 24px 0 0;
            max-height: 90dvh;
            overflow-y: auto;
            padding: 1.5rem 1.25rem;
          }
          .level-tabs { gap: 0.3rem; }
          .level-tab { font-size: 0.78rem; padding: 0.5rem 0.3rem; }
          .act-header { gap: 0.75rem; }
          .act-icon { font-size: 1.8rem; }
          .step-row { padding: 0.55rem 0.75rem; }
          .step-text { font-size: 0.84rem; }
          .reading-panel { padding: 0.85rem 1rem; }
          .rp-tabs { gap: 0.35rem; }
          .rp-tab { font-size: 0.75rem; padding: 0.35rem 0.7rem; }
          .outcomes-card { padding: 1rem !important; }
          .step-dots { gap: 0.3rem; }
          .dot { width: 8px; height: 8px; }
          .dot.current { width: 22px; }
        }
        @media (max-width: 380px) {
          .tb-title { font-size: 1rem; }
          .overlay-title { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
}
