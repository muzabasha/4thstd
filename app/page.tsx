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

    </div>
  );
}
