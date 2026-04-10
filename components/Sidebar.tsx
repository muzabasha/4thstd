"use client";

import React, { useState } from 'react';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

interface SidebarProps {
  onSelectTopic: (subject: Subject, chapter: Chapter, topic: Topic) => void;
  onGoHome: () => void;
  selectedTopicId?: string;
}

export default function Sidebar({ onSelectTopic, onGoHome, selectedTopicId }: SidebarProps) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(syllabus[0].id);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="avatar-small">🌟</div>
        <div>
          <h2 className="title">Tutor Yasmeen</h2>
          <p className="subtitle">Grade 4 CBSE</p>
        </div>
      </div>

      <div className="subjects-list">
        <h3 className="section-label">Main</h3>
        <button 
          className={`subject-item ${selectedTopicId === undefined ? 'active' : ''}`}
          onClick={() => { setExpandedSubject(null); onGoHome(); }}
        >
          <div className="subject-icon-box">🏠</div>
          <span className="subject-name">Dashboard</span>
        </button>

        <h3 className="section-label">Subjects</h3>
        {syllabus.map((subject) => (
          <button 
            key={subject.id}
            className={`subject-item ${expandedSubject === subject.id ? 'active' : ''}`}
            onClick={() => setExpandedSubject(subject.id)}
          >
            <div className="subject-icon-box">
              {subject.id === 'hindi' ? '🇮🇳' : subject.id === 'kannada' ? '🚩' : 
               subject.id === 'mathematics' ? '📐' : subject.id === 'science' ? '🧪' :
               subject.id === 'social-studies' ? '🌍' : '💻'}
            </div>
            <span className="subject-name">{subject.title.split(' (')[0]}</span>
            {expandedSubject === subject.id && <span className="active-dot"></span>}
          </button>
        ))}
      </div>

      <nav className="sidebar-nav">
        {expandedSubject && (
          <div className="active-subject-view animate-fade-in">
            {syllabus.find(s => s.id === expandedSubject)?.chapters.map((chapter) => (
              <div key={chapter.id} className="chapter-box glass-card">
                <h3 className="chapter-title">📖 {chapter.title}</h3>
                <div className="topic-grid">
                  {chapter.topics.map((topic) => (
                    <button 
                      key={topic.id} 
                      className={`topic-card ${selectedTopicId === topic.id ? 'selected' : ''}`}
                      onClick={() => onSelectTopic(syllabus.find(s => s.id === expandedSubject)!, chapter, topic)}
                    >
                      <div className="topic-card-icon">{selectedTopicId === topic.id ? '✅' : '🎯'}</div>
                      <div className="topic-card-info">
                        <span className="topic-card-title">{topic.title}</span>
                        <span className="topic-card-meta">{topic.subtopics.length} steps</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: white;
          border-right: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 10px 0 40px rgba(0,0,0,0.02);
        }
        .subjects-list {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .section-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #999;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        .subject-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: 16px;
          transition: all 0.2s;
          text-align: left;
          color: var(--text-color);
          font-weight: 700;
        }
        .subject-item:hover {
          background: rgba(0,0,0,0.03);
        }
        .subject-item.active {
          background: rgba(108, 92, 231, 0.1);
          color: var(--primary);
        }
        .subject-icon-box {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .active-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          margin-left: auto;
        }
        .subject-name { font-size: 0.9rem; }

        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }

        .chapter-box {
          margin-bottom: 1.5rem;
          padding: 1rem !important;
          background: white !important;
        }
        .chapter-title {
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
          color: var(--primary);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding-bottom: 0.5rem;
        }
        
        .topic-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .topic-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.2s;
          text-align: left;
        }
        .topic-card:hover { border-color: var(--primary); transform: translateX(5px); }
        .topic-card.selected {
          background: rgba(88, 61, 161, 0.1);
          border-color: var(--primary);
        }
        
        .topic-card-icon { font-size: 1.2rem; }
        .topic-card-info { display: flex; flex-direction: column; }
        .topic-card-title { font-size: 0.85rem; font-weight: 700; color: #333; }
        .topic-card-meta { font-size: 0.7rem; color: #666; }
      `}</style>
    </aside>
  );
}
