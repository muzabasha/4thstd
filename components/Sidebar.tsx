"use client";

import React, { useState } from 'react';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

interface SidebarProps {
  onSelectTopic: (subject: Subject, chapter: Chapter, topic: Topic) => void;
  selectedTopicId?: string;
}

export default function Sidebar({ onSelectTopic, selectedTopicId }: SidebarProps) {
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

      <div className="subject-pills">
        {syllabus.map((subject) => (
          <button 
            key={subject.id}
            className={`subject-pill ${expandedSubject === subject.id ? 'active' : ''}`}
            onClick={() => setExpandedSubject(subject.id)}
            title={subject.title}
          >
            <span className="pill-icon">{subject.id === 'hindi' ? '🇮🇳' : subject.id === 'kannada' ? '🚩' : '📚'}</span>
            <span className="pill-text">{subject.title}</span>
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
        .subject-pills {
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          background: rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          scrollbar-width: none;
        }
        .subject-pills::-webkit-scrollbar { display: none; }
        
        .subject-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          min-width: 60px;
          border-radius: 12px;
          transition: all 0.2s;
          opacity: 0.6;
        }
        .subject-pill.active {
          opacity: 1;
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 10px rgba(88, 61, 161, 0.2);
        }
        .pill-icon { font-size: 1.2rem; }
        .pill-text { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; }

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
