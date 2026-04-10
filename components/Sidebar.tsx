"use client";

import React, { useState } from 'react';
import { syllabus } from '../lib/curriculum';

interface SidebarProps {
  onSelectSubject: (subjectId: string | null) => void;
  selectedSubjectId: string | null;
}

export default function Sidebar({ onSelectSubject, selectedSubjectId }: SidebarProps) {

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
          className={`subject-item ${selectedSubjectId === null ? 'active' : ''}`}
          onClick={() => onSelectSubject(null)}
        >
          <div className="subject-icon-box">🏠</div>
          <span className="subject-name">Dashboard</span>
        </button>

        <h3 className="section-label">Subjects</h3>
        {syllabus.map((subject) => (
          <button 
            key={subject.id}
            className={`subject-item ${selectedSubjectId === subject.id ? 'active' : ''}`}
            onClick={() => onSelectSubject(subject.id)}
          >
            <div className="subject-icon-box">
              {subject.id === 'hindi' ? '🇮🇳' : subject.id === 'kannada' ? '🚩' : 
               subject.id === 'mathematics' ? '📐' : subject.id === 'science' ? '🧪' :
               subject.id === 'social-studies' ? '🌍' : '💻'}
            </div>
            <span className="subject-name">{subject.title.split(' (')[0]}</span>
            {selectedSubjectId === subject.id && <span className="active-dot"></span>}
          </button>
        ))}
      </div>


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

      `}</style>
    </aside>
  );
}
