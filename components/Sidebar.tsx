"use client";

import React from 'react';
import { syllabus } from '../lib/curriculum';

interface SidebarProps {
  onSelectSubject: (id: string | null) => void;
  selectedSubjectId: string | null;
}

export default function Sidebar({ onSelectSubject, selectedSubjectId }: SidebarProps) {
  return (
    <aside className="sidebar">
      {/* ── Brand header ── */}
      <div className="sb-header">
        <div className="sb-avatar animate-float">🌟</div>
        <div>
          <p className="sb-name">Yasmeen</p>
          <p className="sb-grade">Grade 4 · CBSE</p>
        </div>
        <div className="sb-stars">⭐ 240 pts</div>
      </div>

      {/* ── Nav ── */}
      <nav className="sb-nav">
        <p className="sb-section-label">Home</p>
        <button
          className={`sb-item ${selectedSubjectId === null ? 'active' : ''}`}
          onClick={() => onSelectSubject(null)}
        >
          <span className="sb-icon" style={{ background: '#EDE9FE' }}>🏠</span>
          <span className="sb-label">Dashboard</span>
          {selectedSubjectId === null && <span className="sb-pip" />}
        </button>

        <p className="sb-section-label" style={{ marginTop: '1.2rem' }}>Subjects</p>
        {syllabus.map(s => (
          <button
            key={s.id}
            className={`sb-item ${selectedSubjectId === s.id ? 'active' : ''}`}
            onClick={() => onSelectSubject(s.id)}
            style={selectedSubjectId === s.id ? { background: `${s.color}18` } : {}}
          >
            <span className="sb-icon" style={{ background: `${s.color}20`, fontSize: '1.3rem' }}>
              {s.icon}
            </span>
            <span className="sb-label">{s.title.split(' (')[0]}</span>
            {selectedSubjectId === s.id && (
              <span className="sb-pip" style={{ background: s.color }} />
            )}
          </button>
        ))}
      </nav>

      {/* ── Footer tip ── */}
      <div className="sb-tip">
        <span>💡</span>
        <span>Tap any subject to start learning!</span>
      </div>

      <style jsx>{`
        .sb-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1.25rem 1.25rem;
          background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
          color: white;
        }
        .sb-avatar {
          width: 46px; height: 46px;
          background: white;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }
        .sb-name  { font-family: 'Baloo 2', cursive; font-size: 1.05rem; font-weight: 800; line-height: 1.2; }
        .sb-grade { font-size: 0.75rem; opacity: 0.85; font-weight: 600; }
        .sb-stars {
          margin-left: auto;
          background: rgba(255,255,255,0.2);
          padding: 0.3rem 0.7rem;
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .sb-nav {
          flex: 1;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          overflow-y: auto;
        }
        .sb-section-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9CA3AF;
          font-weight: 800;
          padding: 0 0.5rem;
          margin-bottom: 0.3rem;
        }
        .sb-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.75rem;
          border-radius: 14px;
          transition: all 0.18s;
          text-align: left;
          color: #374151;
          font-weight: 700;
          font-size: 0.88rem;
          position: relative;
          width: 100%;
        }
        .sb-item:hover { background: #F5F3FF; color: #7C3AED; }
        .sb-item.active { color: #7C3AED; font-weight: 800; }
        .sb-icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .sb-label { flex: 1; }
        .sb-pip {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #7C3AED;
          flex-shrink: 0;
        }

        .sb-tip {
          margin: 0.75rem;
          padding: 0.75rem 1rem;
          background: #FEF3C7;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #92400E;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
      `}</style>
    </aside>
  );
}
