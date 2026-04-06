"use client";

import React, { useState } from 'react';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

interface SidebarProps {
  onSelectTopic: (subject: Subject, chapter: Chapter, topic: Topic) => void;
  selectedTopicId?: string;
}

export default function Sidebar({ onSelectTopic, selectedTopicId }: SidebarProps) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(syllabus[0].id);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="avatar-small">🌟</div>
        <div>
          <h2 className="title">Tutor Yasmeen</h2>
          <p className="subtitle">Grade 4 CBSE</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {syllabus.map((subject) => (
          <div key={subject.id} className="subject-group">
            <button 
              className={`nav-item subject-item ${expandedSubject === subject.id ? 'active' : ''}`}
              onClick={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
            >
              <span className="icon">📚</span>
              {subject.title}
              <span className="chevron">{expandedSubject === subject.id ? '▾' : '▸'}</span>
            </button>

            {expandedSubject === subject.id && (
              <div className="chapter-list">
                {subject.chapters.map((chapter) => (
                  <div key={chapter.id} className="chapter-group">
                    <button 
                      className={`nav-item chapter-item ${expandedChapter === chapter.id ? 'active' : ''}`}
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                    >
                      <span className="icon">📖</span>
                      {chapter.title}
                    </button>
                    
                    {expandedChapter === chapter.id && (
                      <div className="topic-list">
                        {chapter.topics.map((topic) => (
                          <button 
                            key={topic.id} 
                            className={`nav-item topic-item ${selectedTopicId === topic.id ? 'selected' : ''}`}
                            onClick={() => onSelectTopic(subject, chapter, topic)}
                          >
                            <span className="bullet">•</span>
                            {topic.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
