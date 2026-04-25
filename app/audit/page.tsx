"use client";

import React, { useState } from 'react';
import { syllabus, type Subject, type Chapter, type Topic } from '../../lib/curriculum';
import Link from 'next/link';

export default function AuditPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  return (
    <div className="audit-container animate-fade-in">
      <header className="audit-header glass-card">
        <div className="header-content">
          <Link href="/" className="back-link">← Return to Dashboard</Link>
          <h1>Complete Curriculum Audit 📑</h1>
          <p>Grade 4 — Full Syllabus & Content Verification</p>
        </div>
        <div className="audit-stats">
          <div className="stat-pill"><strong>{syllabus.length}</strong> Subjects</div>
          <div className="stat-pill"><strong>{syllabus.reduce((acc, s) => acc + s.chapters.length, 0)}</strong> Chapters</div>
          <div className="stat-pill"><strong>34</strong> Learning Missions</div>
        </div>
      </header>

      <div className="subject-sections">
        {syllabus.map(subject => (
          <section key={subject.id} className="subject-section glass-card" style={{ borderTop: `8px solid ${subject.color}` }}>
            <div className="subject-header">
              <span className="subject-icon">{subject.icon}</span>
              <h2>{subject.title}</h2>
            </div>

            <div className="chapters-list">
              {subject.chapters.map(chapter => (
                <div key={chapter.id} className="chapter-item">
                  <h3>📖 {chapter.title}</h3>
                  <div className="topics-list">
                    {chapter.topics.map(topic => (
                      <div key={topic.id} className={`topic-card ${expandedTopic === topic.id ? 'expanded' : ''}`}>
                        <div className="topic-summary" onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}>
                          <div className="topic-main">
                            <span className="topic-bullet">🎯</span>
                            <span className="topic-title">{topic.title}</span>
                          </div>
                          <div className="topic-meta">
                            <span>{topic.subtopics.length} Steps</span>
                            <span>{topic.quiz.length} Questions</span>
                            <span className="expand-icon">{expandedTopic === topic.id ? '▼' : '▶'}</span>
                          </div>
                        </div>

                        {expandedTopic === topic.id && (
                          <div className="topic-details animate-slide-down">
                            <div className="detail-grid">
                              <div className="detail-col">
                                <h4>📚 Textbook Summary</h4>
                                <div className="reading-text-preview">
                                  <p><strong>EN:</strong> {topic.readingText?.en}</p>
                                  {topic.readingText?.hi && <p><strong>HI:</strong> {topic.readingText.hi}</p>}
                                  {topic.readingText?.kn && <p><strong>KN:</strong> {topic.readingText.kn}</p>}
                                </div>
                                
                                <h4>💡 Learning Outcomes</h4>
                                <ul className="outcomes-list">
                                  {topic.learningOutcomes.map((lo, i) => <li key={i}>{lo}</li>)}
                                </ul>
                              </div>

                              <div className="detail-col">
                                <h4>🚀 Experiential Steps</h4>
                                <ol className="steps-list">
                                  {topic.subtopics.map((step, i) => <li key={i}>{step}</li>)}
                                </ol>

                                <h4>🎯 Sample Quiz Questions</h4>
                                <div className="quiz-preview">
                                  {topic.quiz.slice(0, 2).map((q, i) => (
                                    <div key={i} className="quiz-q">
                                      <p className="q-text"><strong>Q:</strong> {q.question}</p>
                                      <p className="a-text"><strong>A:</strong> {q.correctAnswer}</p>
                                    </div>
                                  ))}
                                  <p className="more-indicator">+ {topic.quiz.length - 2} more questions</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="topic-actions">
                              <span className="link-tag">🔗 Cross-Curricular: {topic.crossCurricularLink}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <style jsx>{`
        .audit-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          color: #2d3436;
        }

        .audit-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3rem !important;
          margin-bottom: 3rem;
          background: white;
          border-radius: 32px;
        }

        .header-content h1 { font-size: 3rem; margin: 0.5rem 0; font-weight: 900; color: #6c5ce7; }
        .header-content p { font-size: 1.2rem; opacity: 0.7; }
        .back-link { font-weight: 800; color: #6c5ce7; text-decoration: none; font-size: 1rem; }

        .audit-stats { display: flex; gap: 1rem; }
        .stat-pill { background: #f1f2f6; padding: 0.8rem 1.5rem; border-radius: 50px; font-weight: 600; font-size: 0.9rem; }

        .subject-section { margin-bottom: 4rem; padding: 3rem !important; border-radius: 32px; background: white; }
        .subject-header { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2.5rem; }
        .subject-icon { font-size: 3rem; }
        .subject-header h2 { font-size: 2.5rem; font-weight: 900; }

        .chapter-item { margin-bottom: 2.5rem; }
        .chapter-item h3 { font-size: 1.5rem; margin-bottom: 1.5rem; color: #636e72; border-bottom: 2px solid #f1f2f6; padding-bottom: 0.5rem; }

        .topic-card { 
          margin-bottom: 1rem; 
          border-radius: 20px; 
          border: 1px solid #f1f2f6; 
          overflow: hidden;
          transition: all 0.3s;
        }
        .topic-card:hover { border-color: #6c5ce7; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .topic-card.expanded { border-color: #6c5ce7; background: #fafaff; }

        .topic-summary { 
          padding: 1.5rem 2rem; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          cursor: pointer;
        }
        .topic-main { display: flex; align-items: center; gap: 1rem; }
        .topic-bullet { font-size: 1.2rem; }
        .topic-title { font-weight: 800; font-size: 1.2rem; }
        
        .topic-meta { display: flex; gap: 2rem; align-items: center; font-weight: 700; font-size: 0.9rem; opacity: 0.6; }
        .expand-icon { font-size: 0.8rem; }

        .topic-details { padding: 2rem 3rem 3rem 3rem; border-top: 1px solid #f1f2f6; }
        .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }

        h4 { font-size: 1.1rem; font-weight: 900; color: #6c5ce7; margin-bottom: 1.2rem; text-transform: uppercase; letter-spacing: 1px; }
        
        .reading-text-preview { background: #f8f9fa; padding: 1.5rem; border-radius: 16px; font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
        .reading-text-preview p { margin-bottom: 1rem; }
        
        .outcomes-list, .steps-list { padding-left: 1.5rem; margin-bottom: 2rem; }
        .outcomes-list li, .steps-list li { margin-bottom: 0.5rem; font-weight: 600; font-size: 0.95rem; opacity: 0.8; }

        .quiz-preview { background: #fff; border: 1px dashed #6c5ce7; padding: 1.5rem; border-radius: 16px; }
        .quiz-q { margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #f1f2f6; }
        .q-text { color: #2d3436; font-size: 0.9rem; }
        .a-text { color: #00b894; font-size: 0.9rem; margin-top: 0.3rem; }
        .more-indicator { font-size: 0.8rem; font-style: italic; opacity: 0.5; text-align: center; }

        .topic-actions { margin-top: 2.5rem; display: flex; gap: 1rem; }
        .link-tag { background: #6c5ce7; color: white; padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; }

        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr; }
          .topic-meta { display: none; }
        }
      `}</style>
    </div>
  );
}
