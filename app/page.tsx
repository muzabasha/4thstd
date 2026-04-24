"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import VoiceAITutor from '../components/VoiceAITutor';
import Link from 'next/link';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleSelectSubject = (subjectId: string | null) => {
    if (!subjectId) {
      setSelectedSubject(null);
      setSelectedChapter(null);
      setSelectedTopic(null);
    } else {
      const subject = syllabus.find(s => s.id === subjectId);
      setSelectedSubject(subject || null);
      setSelectedChapter(null);
      setSelectedTopic(null);
    }
  };

  const handleSelectTopic = (subject: Subject, chapter: Chapter, topic: Topic) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setSelectedTopic(topic);
    
    if (typeof localStorage !== 'undefined') {
      const progress = JSON.parse(localStorage.getItem('yasmeen_progress') || '{}');
      progress[topic.id] = true;
      localStorage.setItem('yasmeen_progress', JSON.stringify(progress));
    }
  };

  return (
    <div className="container">
      <Sidebar 
        onSelectSubject={handleSelectSubject} 
        selectedSubjectId={selectedSubject?.id || null} 
      />
      
      <main className="main-content">
        {!selectedSubject ? (
          <div className="welcome-dashboard animate-fade-in">
            <header className="welcome-header">
              <div className="header-top">
                <h1>Welcome back, Yasmeen! 🌟</h1>
                <Link href="/audit" className="audit-link-btn glass-card">📑 Full Audit View</Link>
              </div>
              <p>Ready to learn something amazing today?</p>
            </header>

            <div className="dashboard-grid">
              <div className="mission-card glass-card">
                <div className="card-icon">🚀</div>
                <h3>Today&apos;s Mission</h3>
                <p>Complete the &quot;Patterns of Bricks&quot; lesson in Math-Magic.</p>
                <button className="start-btn" onClick={() => handleSelectTopic(syllabus[0], syllabus[0].chapters[0], syllabus[0].chapters[0].topics[0])}>
                  Jump In!
                </button>
              </div>

              <div className="stats-card glass-card">
                <div className="card-icon">🏆</div>
                <h3>Your Progress</h3>
                <div className="stat-row">
                  <span>Lessons Mastery</span>
                  <span>45%</span>
                </div>
                <div className="mini-progress"><div className="fill" style={{width: '45%'}}></div></div>
              </div>
            </div>

            <div className="subject-explorer">
              <h2>🚀 Start Your Subject Missions</h2>
              <div className="subject-grid">
                {syllabus.map(s => (
                  <button 
                    key={s.id} 
                    className="subject-box glass-card" 
                    onClick={() => handleSelectSubject(s.id)}
                    style={{ borderLeft: `6px solid ${s.color}` }}
                  >
                    <div className="box-icon" style={{ fontSize: '2rem' }}>{s.icon}</div>
                    <div className="subject-box-info">
                      <span className="subject-box-title">{s.title}</span>
                      <span className="subject-box-status">{s.chapters.length} Units</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : !selectedTopic ? (
          <div className="subject-detail-view animate-fade-in">
            <header className="page-header">
              <div className="breadcrumb">
                <button className="back-btn" onClick={() => handleSelectSubject(null)}>⬅ Dashboard</button>
                <span>{selectedSubject.title}</span>
              </div>
              <h1>Select a Topic</h1>
            </header>

            <div className="chapters-explorer">
              {selectedSubject.chapters.map(chapter => (
                <div key={chapter.id} className="chapter-section glass-card">
                  <h2 className="chapter-title">📖 {chapter.title}</h2>
                  <div className="topic-grid">
                    {chapter.topics.map(topic => (
                      <button 
                        key={topic.id} 
                        className="topic-box card-small"
                        onClick={() => handleSelectTopic(selectedSubject, chapter, topic)}
                      >
                        <div className="topic-icon">🎯</div>
                        <div className="topic-info">
                          <span className="topic-name">{topic.title}</span>
                          <span className="topic-steps">{topic.subtopics.length} learning steps</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="learning-view animate-fade-in">
            <header className="page-header">
              <div className="breadcrumb">
                <button className="back-btn" onClick={() => setSelectedTopic(null)}>⬅ Topics</button>
                <span>{selectedSubject?.title}</span> / <span>{selectedChapter?.title}</span>
              </div>
              <h1>{selectedTopic.title}</h1>
            </header>

            <section className="learning-area">
              <VoiceAITutor 
                subject={selectedSubject!} 
                topic={selectedTopic!} 
              />
            </section>
          </div>
        )}

        <footer className="page-footer">
          <div className="premium-badge glass-card">
            ✨ CBSE Grade 4 Premium Learning AI
          </div>
        </footer>
      </main>

      <style jsx>{`
        .welcome-dashboard {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .welcome-header h1 { font-size: 3.5rem; margin: 0; color: var(--primary); font-weight: 900; }
        .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .audit-link-btn { 
          padding: 0.8rem 1.5rem !important; font-weight: 800; color: var(--primary); 
          text-decoration: none; border-radius: 15px; background: white; 
          transition: all 0.2s; border: 1px solid rgba(0,0,0,0.05);
        }
        .audit-link-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .welcome-header p { font-size: 1.2rem; opacity: 0.8; margin-bottom: 3rem; color: var(--text-color); }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .mission-card { padding: 3rem !important; }
        .mission-card h3 { font-size: 2rem; margin: 1rem 0; }
        .mission-card p { font-size: 1.1rem; opacity: 0.7; margin-bottom: 2rem; }
        .start-btn { 
          background: var(--primary); color: white; padding: 1rem 3rem; 
          border-radius: 50px; font-weight: 800; font-size: 1.2rem;
        }

        .stats-card { padding: 2rem !important; }
        .stat-row { display: flex; justify-content: space-between; margin: 1rem 0 0.5rem 0; font-weight: 700; }
        .mini-progress { height: 8px; background: rgba(0,0,0,0.05); border-radius: 10px; }
        .mini-progress .fill { height: 100%; background: var(--success); border-radius: 10px; }

        .subject-explorer h2 { margin-bottom: 1.5rem; }
        .subject-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .subject-box {
          display: flex; gap: 1.5rem; align-items: center; 
          background: white !important;
          padding: 2rem !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          border-radius: 24px;
        }
        .subject-box:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
        .subject-box-info { display: flex; flex-direction: column; text-align: left; }
        .subject-box-title { font-weight: 800; font-size: 1.2rem; color: var(--text-color); }
        .subject-box-status { font-size: 0.85rem; opacity: 0.6; font-weight: 600; }

        .chapter-section { margin-bottom: 2rem; padding: 2rem !important; }
        .chapter-title { margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem; }
        .topic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .topic-box {
          display: flex; gap: 1rem; align-items: center; 
          background: white !important;
          padding: 1rem !important;
          border-radius: 16px;
          text-align: left;
          transition: all 0.2s;
        }
        .topic-box:hover { transform: translateX(5px); border-color: var(--primary); }
        .topic-icon { font-size: 1.5rem; }
        .topic-info { display: flex; flex-direction: column; }
        .topic-name { font-weight: 700; color: var(--text-color); }
        .topic-steps { font-size: 0.8rem; opacity: 0.6; }

        .back-btn { background: none; color: var(--primary); font-weight: 800; margin-right: 1rem; border: 2px solid rgba(108, 92, 231, 0.2); padding: 0.5rem 1rem; border-radius: 12px; }

        @media (max-width: 768px) {
          .dashboard-grid { grid-template-columns: 1fr; }
          .welcome-header h1 { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  );
}
