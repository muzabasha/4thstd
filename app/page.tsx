"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import VoiceAITutor from '../components/VoiceAITutor';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

const SUBJECT_BG: Record<string, string> = {
  mathematics: 'linear-gradient(135deg,#EDE9FE,#DDD6FE)',
  science: 'linear-gradient(135deg,#D1FAE5,#A7F3D0)',
  english: 'linear-gradient(135deg,#DBEAFE,#BFDBFE)',
  hindi: 'linear-gradient(135deg,#FEE2E2,#FECACA)',
  kannada: 'linear-gradient(135deg,#FEF3C7,#FDE68A)',
  computers: 'linear-gradient(135deg,#F3E8FF,#E9D5FF)',
};

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [greeting, setGreeting] = useState('Good morning');

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening');
    const saved = JSON.parse(localStorage.getItem('yasmeen_progress') || '{}');
    setProgress(saved);
  }, []);

  const totalTopics = syllabus.reduce((a, s) => a + s.chapters.reduce((b, c) => b + c.topics.length, 0), 0);
  const doneTopics = Object.keys(progress).length;
  const pct = Math.round((doneTopics / totalTopics) * 100);

  const handleSelectSubject = (id: string | null) => {
    setSelectedSubject(id ? (syllabus.find(s => s.id === id) ?? null) : null);
    setSelectedChapter(null);
    setSelectedTopic(null);
  };

  const handleSelectTopic = (subject: Subject, chapter: Chapter, topic: Topic) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setSelectedTopic(topic);
    const next = { ...progress, [topic.id]: true };
    setProgress(next);
    localStorage.setItem('yasmeen_progress', JSON.stringify(next));
  };

  return (
    <div className="container">
      <Sidebar onSelectSubject={handleSelectSubject} selectedSubjectId={selectedSubject?.id ?? null} />

      <main className="main-content">

        {/* ── DASHBOARD ─────────────────────────────────────────────────────── */}
        {!selectedSubject && (
          <div className="animate-fade-in">

            {/* Hero */}
            <div className="hero-card">
              <div className="hero-left">
                <p className="hero-greeting">{greeting}, Yasmeen! 👋</p>
                <h1 className="hero-title">Ready to learn<br />something <span className="hero-highlight">amazing</span>?</h1>
                <p className="hero-sub">You&apos;ve completed <strong>{doneTopics}</strong> of <strong>{totalTopics}</strong> topics. Keep going!</p>
                <div className="hero-progress-wrap">
                  <div className="progress-track" style={{ height: 12 }}>
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="hero-pct">{pct}%</span>
                </div>
                <button
                  className="btn btn-primary btn-lg hero-cta"
                  onClick={() => handleSelectTopic(syllabus[0], syllabus[0].chapters[0], syllabus[0].chapters[0].topics[0])}
                >
                  🚀 Jump into Today&apos;s Mission
                </button>
              </div>
              <div className="hero-right">
                <div className="hero-mascot animate-float">🦋</div>
                <div className="hero-bubble">Hi! I&apos;m Spark ✨<br />your AI tutor!</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="stats-row">
              {[
                { icon: '📚', label: 'Subjects', value: syllabus.length },
                { icon: '🎯', label: 'Topics', value: totalTopics },
                { icon: '✅', label: 'Completed', value: doneTopics },
                { icon: '🏆', label: 'Progress', value: `${pct}%` },
              ].map(s => (
                <div key={s.label} className="stat-chip glass-card">
                  <span className="stat-icon">{s.icon}</span>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Subject grid */}
            <h2 className="section-heading">📖 Choose Your Subject</h2>
            <div className="subject-grid">
              {syllabus.map((s, i) => {
                const done = s.chapters.reduce((a, c) => a + c.topics.filter(t => progress[t.id]).length, 0);
                const total = s.chapters.reduce((a, c) => a + c.topics.length, 0);
                const p = Math.round((done / total) * 100);
                return (
                  <button
                    key={s.id}
                    className="subject-card animate-fade-in"
                    style={{ animationDelay: `${i * 0.06}s`, background: SUBJECT_BG[s.id] ?? SUBJECT_BG.computers }}
                    onClick={() => handleSelectSubject(s.id)}
                  >
                    <div className="sc-icon">{s.icon}</div>
                    <div className="sc-body">
                      <p className="sc-title">{s.title.split(' (')[0]}</p>
                      <p className="sc-meta">{s.chapters.length} chapters · {total} topics</p>
                      <div className="progress-track" style={{ height: 6, marginTop: '0.5rem' }}>
                        <div className="progress-fill" style={{ width: `${p}%`, background: s.color }} />
                      </div>
                    </div>
                    <span className="sc-arrow">›</span>
                  </button>
                );
              })}
            </div>

            {/* Fun fact */}
            <div className="fun-fact glass-card">
              <span className="ff-icon">🌈</span>
              <div>
                <p className="ff-label">Did you know?</p>
                <p className="ff-text">India has 22 official languages and over 1600 dialects. Learning Hindi and Kannada makes you a language superhero! 🦸</p>
              </div>
            </div>
          </div>
        )}

        {/* ── CHAPTER LIST ──────────────────────────────────────────────────── */}
        {selectedSubject && !selectedTopic && (
          <div className="animate-fade-in">
            <div className="page-header">
              <div className="breadcrumb">
                <button className="btn btn-ghost btn-sm" onClick={() => handleSelectSubject(null)}>← Home</button>
                <span>›</span>
                <span>{selectedSubject.title}</span>
              </div>
              <h1 className="page-title" style={{ color: selectedSubject.color }}>
                {selectedSubject.icon} {selectedSubject.title.split(' (')[0]}
              </h1>
            </div>

            <div className="chapters-list">
              {selectedSubject.chapters.map((ch, ci) => (
                <div
                  key={ch.id}
                  className="chapter-block glass-card animate-fade-in"
                  style={{ animationDelay: `${ci * 0.05}s` }}
                >
                  <div className="ch-header">
                    <span className="ch-num">{ci + 1}</span>
                    <h3 className="ch-title">{ch.title}</h3>
                    <span className="badge badge-primary">{ch.topics.length} topic{ch.topics.length > 1 ? 's' : ''}</span>
                  </div>
                  <div className="topics-grid">
                    {ch.topics.map(t => {
                      const done = progress[t.id];
                      return (
                        <button
                          key={t.id}
                          className={`topic-card ${done ? 'done' : ''}`}
                          onClick={() => handleSelectTopic(selectedSubject, ch, t)}
                        >
                          <span className="tc-dot" style={{ background: done ? '#10B981' : selectedSubject.color }} />
                          <div className="tc-body">
                            <p className="tc-title">{t.title}</p>
                            <p className="tc-meta">{t.subtopics.length} steps · {t.quiz.length} quiz Qs</p>
                          </div>
                          <span className="tc-arrow">{done ? '✅' : '›'}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── LEARNING VIEW ─────────────────────────────────────────────────── */}
        {selectedSubject && selectedTopic && (
          <div className="animate-fade-in">
            <div className="page-header">
              <div className="breadcrumb">
                <button className="btn btn-ghost btn-sm" onClick={() => setSelectedTopic(null)}>← Topics</button>
                <span>›</span>
                <span>{selectedSubject.title.split(' (')[0]}</span>
                <span>›</span>
                <span>{selectedChapter?.title}</span>
              </div>
              <h1 className="page-title">{selectedTopic.title}</h1>
            </div>
            <VoiceAITutor subject={selectedSubject} topic={selectedTopic} />
          </div>
        )}

        <footer className="page-footer">
          <div className="premium-badge">✨ CBSE Grade 4 · AI Learning</div>
        </footer>
      </main>

      <style jsx>{`
        /* ── Hero ── */
        .hero-card {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
          border-radius: 28px;
          padding: 2.5rem 3rem;
          color: white;
          margin-bottom: 2rem;
          overflow: hidden;
          position: relative;
        }
        .hero-left { flex: 1; }
        .hero-greeting { font-size: 1rem; font-weight: 700; opacity: 0.85; margin-bottom: 0.4rem; }
        .hero-title {
          font-family: 'Baloo 2', cursive;
          font-size: 2.4rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.8rem;
        }
        .hero-highlight {
          background: linear-gradient(90deg, #FEF08A, #FDE68A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub { font-size: 0.95rem; opacity: 0.85; margin-bottom: 1rem; }
        .hero-progress-wrap { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
        .hero-progress-wrap .progress-track { flex: 1; background: rgba(255,255,255,0.25); }
        .hero-progress-wrap .progress-fill { background: #FEF08A; }
        .hero-pct { font-weight: 900; font-size: 1rem; white-space: nowrap; }
        .hero-cta { font-size: 1.05rem; }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .hero-mascot { font-size: 5rem; line-height: 1; }
        .hero-bubble {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.4;
          border: 1px solid rgba(255,255,255,0.3);
        }

        /* ── Stats ── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .stat-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 1.2rem 1rem !important;
          text-align: center;
        }
        .stat-icon  { font-size: 1.6rem; }
        .stat-value { font-family: 'Baloo 2', cursive; font-size: 1.6rem; font-weight: 800; color: #7C3AED; line-height: 1; }
        .stat-label { font-size: 0.75rem; font-weight: 700; color: #6B7280; text-transform: uppercase; letter-spacing: 0.05em; }

        /* ── Section heading ── */
        .section-heading {
          font-family: 'Baloo 2', cursive;
          font-size: 1.4rem;
          font-weight: 800;
          color: #1E1B4B;
          margin-bottom: 1.25rem;
        }

        /* ── Subject grid ── */
        .subject-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .subject-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .subject-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
        .sc-icon { font-size: 2.2rem; flex-shrink: 0; }
        .sc-body { flex: 1; min-width: 0; }
        .sc-title { font-family: 'Baloo 2', cursive; font-size: 1rem; font-weight: 800; color: #1E1B4B; }
        .sc-meta  { font-size: 0.75rem; color: #6B7280; font-weight: 600; margin-top: 0.1rem; }
        .sc-arrow { font-size: 1.5rem; color: rgba(0,0,0,0.25); font-weight: 900; }

        /* ── Fun fact ── */
        .fun-fact {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.25rem 1.5rem !important;
          background: linear-gradient(135deg, #FEF3C7, #FDE68A) !important;
          border: none !important;
        }
        .ff-icon  { font-size: 2rem; flex-shrink: 0; }
        .ff-label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #92400E; margin-bottom: 0.2rem; }
        .ff-text  { font-size: 0.9rem; font-weight: 600; color: #78350F; line-height: 1.5; }

        /* ── Page title ── */
        .page-title {
          font-family: 'Baloo 2', cursive;
          font-size: 2rem;
          font-weight: 800;
          color: #1E1B4B;
          margin-top: 0.25rem;
        }

        /* ── Chapters ── */
        .chapters-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .chapter-block { padding: 1.5rem 1.75rem !important; }
        .ch-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .ch-num {
          width: 32px; height: 32px;
          background: #7C3AED;
          color: white;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem;
          font-weight: 900;
          flex-shrink: 0;
        }
        .ch-title { font-family: 'Baloo 2', cursive; font-size: 1.1rem; font-weight: 800; flex: 1; color: #1E1B4B; }

        /* ── Topics ── */
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 0.75rem;
        }
        .topic-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1rem;
          background: #F9FAFB;
          border: 1.5px solid #E5E7EB;
          border-radius: 14px;
          cursor: pointer;
          text-align: left;
          transition: all 0.18s;
          width: 100%;
        }
        .topic-card:hover { background: #EDE9FE; border-color: #7C3AED; transform: translateX(3px); }
        .topic-card.done  { background: #F0FDF4; border-color: #10B981; }
        .tc-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .tc-body { flex: 1; min-width: 0; }
        .tc-title { font-size: 0.88rem; font-weight: 800; color: #1E1B4B; }
        .tc-meta  { font-size: 0.72rem; color: #6B7280; font-weight: 600; margin-top: 0.1rem; }
        .tc-arrow { font-size: 1.1rem; color: #9CA3AF; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-card { flex-direction: column; padding: 2rem; }
          .hero-right { flex-direction: row; }
          .hero-title { font-size: 1.8rem; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 1.5rem; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .subject-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
