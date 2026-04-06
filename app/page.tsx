"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import VoiceAITutor from '../components/VoiceAITutor';
import { syllabus, Subject, Chapter, Topic } from '../lib/curriculum';

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(syllabus[0]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(syllabus[0].chapters[0]);
  const [selectedTopic, setSelectedTopic] = useState<Topic>(syllabus[0].chapters[0].topics[0]);

  const handleSelectTopic = (subject: Subject, chapter: Chapter, topic: Topic) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setSelectedTopic(topic);
    
    // Save progress to localStorage (Stateless progress tracking)
    if (typeof localStorage !== 'undefined') {
      const progress = JSON.parse(localStorage.getItem('yasmeen_progress') || '{}');
      progress[topic.id] = true;
      localStorage.setItem('yasmeen_progress', JSON.stringify(progress));
    }
  };

  return (
    <div className="container">
      <Sidebar onSelectTopic={handleSelectTopic} selectedTopicId={selectedTopic.id} />
      
      <main className="main-content">
        <header className="page-header">
          <div className="breadcrumb">
            <span>{selectedSubject.title}</span> / <span>{selectedChapter.title}</span>
          </div>
          <h1>{selectedTopic.title}</h1>
        </header>

        <section className="learning-area">
          <VoiceAITutor 
            subject={selectedSubject} 
            chapter={selectedChapter} 
            topic={selectedTopic} 
          />
        </section>

        <footer className="page-footer">
          <div className="premium-badge glass-card">
            ✨ CBSE Grade 4 Premium Learning AI
          </div>
        </footer>
      </main>

      <style jsx>{`
        .page-header {
          margin-bottom: 2rem;
        }

        .breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(to right, white, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .learning-area {
          margin-top: 1rem;
        }

        .page-footer {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
        }

        .premium-badge {
          font-size: 0.8rem;
          padding: 0.8rem 1.2rem;
          border-radius: 50px;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-weight: 700;
          box-shadow: 0 0 20px rgba(255, 209, 102, 0.2);
        }
      `}</style>
    </div>
  );
}
