"use client";

import { useState } from 'react';
import { syllabus } from '../lib/curriculum';

interface SidebarProps {
  onSelectSubject: (id: string | null) => void;
  selectedSubjectId: string | null;
}

export default function Sidebar({ onSelectSubject, selectedSubjectId }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const select = (id: string | null) => {
    onSelectSubject(id);
    setOpen(false); // close drawer on mobile after selection
  };

  const activeSubject = syllabus.find(s => s.id === selectedSubjectId);

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="mobile-bar">
        <div className="mb-brand">
          <span className="mb-star">🌟</span>
          <div>
            <p className="mb-name">Yasmeen</p>
            <p className="mb-grade">Grade 4 · CBSE</p>
          </div>
        </div>
        {activeSubject && (
          <span className="mb-active-subject" style={{ color: activeSubject.color }}>
            {activeSubject.icon} {activeSubject.title.split(' (')[0]}
          </span>
        )}
        <button
          className="mb-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile drawer backdrop ── */}
      {open && <div className="drawer-backdrop" onClick={() => setOpen(false)} />}

      {/* ── Sidebar / Drawer ── */}
      <aside className={`sidebar ${open ? 'drawer-open' : ''}`}>
        {/* Brand header */}
        <div className="sb-header">
          <div className="sb-avatar animate-float">🌟</div>
          <div>
            <p className="sb-name">Yasmeen</p>
            <p className="sb-grade">Grade 4 · CBSE</p>
          </div>
          <div className="sb-pts">⭐ 240 pts</div>
        </div>

        {/* Nav */}
        <nav className="sb-nav">
          <p className="sb-label">Home</p>
          <button
            className={`sb-item ${selectedSubjectId === null ? 'active' : ''}`}
            onClick={() => select(null)}
          >
            <span className="sb-icon" style={{ background: '#EDE9FE' }}>🏠</span>
            <span className="sb-text">Dashboard</span>
            {selectedSubjectId === null && <span className="sb-pip" />}
          </button>

          <p className="sb-label" style={{ marginTop: '1rem' }}>Subjects</p>
          {syllabus.map(s => (
            <button
              key={s.id}
              className={`sb-item ${selectedSubjectId === s.id ? 'active' : ''}`}
              onClick={() => select(s.id)}
              style={selectedSubjectId === s.id ? { background: `${s.color}18` } : {}}
            >
              <span className="sb-icon" style={{ background: `${s.color}20` }}>
                {s.icon}
              </span>
              <span className="sb-text">{s.title.split(' (')[0]}</span>
              {selectedSubjectId === s.id && (
                <span className="sb-pip" style={{ background: s.color }} />
              )}
            </button>
          ))}
        </nav>

        {/* Tip */}
        <div className="sb-tip">
          <span>💡</span>
          <span>Tap any subject to start learning!</span>
        </div>
      </aside>

      <style jsx>{`
        /* ── Mobile top bar (hidden on desktop) ── */
        .mobile-bar {
          display: none;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #7C3AED, #EC4899);
          color: white;
          position: sticky;
          top: 0;
          z-index: 300;
        }
        .mb-brand { display: flex; align-items: center; gap: 0.5rem; flex: 1; min-width: 0; }
        .mb-star  { font-size: 1.4rem; flex-shrink: 0; }
        .mb-name  { font-family: 'Baloo 2', cursive; font-size: 0.95rem; font-weight: 800; line-height: 1.1; }
        .mb-grade { font-size: 0.65rem; opacity: 0.85; font-weight: 600; }
        .mb-active-subject {
          font-size: 0.78rem; font-weight: 800;
          background: rgba(255,255,255,0.2);
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 120px;
          color: white !important;
        }
        .mb-hamburger {
          width: 38px; height: 38px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          color: white;
          font-size: 1.1rem;
          font-weight: 900;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.18s;
        }
        .mb-hamburger:hover { background: rgba(255,255,255,0.3); }

        /* ── Backdrop ── */
        .drawer-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(30,27,75,0.45);
          z-index: 250;
          backdrop-filter: blur(2px);
        }

        /* ── Sidebar ── */
        .sb-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.4rem 1.2rem 1.2rem;
          background: linear-gradient(135deg, #7C3AED, #EC4899);
          color: white;
          flex-shrink: 0;
        }
        .sb-avatar {
          width: 44px; height: 44px;
          background: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }
        .sb-name  { font-family: 'Baloo 2', cursive; font-size: 1rem; font-weight: 800; line-height: 1.2; }
        .sb-grade { font-size: 0.72rem; opacity: 0.85; font-weight: 600; }
        .sb-pts {
          margin-left: auto;
          background: rgba(255,255,255,0.2);
          padding: 0.28rem 0.65rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .sb-nav {
          flex: 1;
          padding: 0.9rem 0.7rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          overflow-y: auto;
        }
        .sb-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9CA3AF;
          font-weight: 800;
          padding: 0 0.5rem;
          margin-bottom: 0.25rem;
        }
        .sb-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 0.7rem;
          border-radius: 12px;
          transition: all 0.18s;
          text-align: left;
          color: #374151;
          font-weight: 700;
          font-size: 0.86rem;
          width: 100%;
          -webkit-tap-highlight-color: transparent;
        }
        .sb-item:hover  { background: #F5F3FF; color: #7C3AED; }
        .sb-item.active { color: #7C3AED; font-weight: 800; }
        .sb-icon {
          width: 32px; height: 32px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .sb-text { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sb-pip  { width: 7px; height: 7px; border-radius: 50%; background: #7C3AED; flex-shrink: 0; }

        .sb-tip {
          margin: 0.6rem;
          padding: 0.65rem 0.9rem;
          background: #FEF3C7;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #92400E;
          display: flex;
          gap: 0.45rem;
          align-items: center;
          flex-shrink: 0;
        }

        /* ── Mobile overrides ── */
        @media (max-width: 767px) {
          .mobile-bar   { display: flex; }
          .drawer-backdrop { display: block; }

          /* Sidebar hidden by default, slides in as drawer */
          :global(.sidebar) {
            position: fixed !important;
            top: 0; left: 0;
            height: 100dvh !important;
            width: 280px !important;
            min-width: unset !important;
            transform: translateX(-100%);
            transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
            z-index: 400 !important;
            border-right: none !important;
            box-shadow: 8px 0 32px rgba(0,0,0,0.18) !important;
          }
          :global(.sidebar.drawer-open) {
            transform: translateX(0);
          }
          /* Hide the brand header inside drawer on mobile (mobile-bar shows it) */
          .sb-header { display: flex; }
        }

        /* ── Tablet: sidebar visible but narrower ── */
        @media (min-width: 768px) {
          .mobile-bar { display: none; }
          .drawer-backdrop { display: none !important; }
          :global(.sidebar) {
            transform: none !important;
            position: sticky !important;
          }
        }
      `}</style>
    </>
  );
}
