"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import VoiceAITutor from '../components/VoiceAITutor';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

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
        onSelectTopic={handleSelectTopic} 
        selectedTopicId={selectedTopic?.id} 
      />
      
      <main className="main-content">
        {!selectedTopic ? (
          <div className="welcome-dashboard animate-fade-in">
            <header className="welcome-header">
              <h1>Welcome back, Yasmeen! 🌟</h1>
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
              <h2>Explore your Subjects</h2>
              <div className="subject-grid">
                {syllabus.map(s => (
                  <div key={s.id} className="subject-box card-small">
                    <span className="box-icon">📚</span>
                    <span>{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="learning-view animate-fade-in">
            <header className="page-header">
              <div className="breadcrumb">
                <button className="back-btn" onClick={() => setSelectedTopic(null)}>⬅ Dashboard</button>
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
        .welcome-header h1 { font-size: 3.5rem; margin-bottom: 0.5rem; color: var(--primary); font-weight: 900; }
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
          display: flex; gap: 1rem; align-items: center; 
          background: white !important;
          padding: 1.5rem !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .back-btn { background: none; color: var(--primary); font-weight: 800; margin-right: 1rem; border: 2px solid rgba(108, 92, 231, 0.2); padding: 0.5rem 1rem; border-radius: 12px; }

        @media (max-width: 768px) {
          .dashboard-grid { grid-template-columns: 1fr; }
          .welcome-header h1 { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  );
}
