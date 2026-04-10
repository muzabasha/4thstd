"use client";

import React, { useState } from 'react';
import { QuizQuestion } from '../lib/curriculum';

interface InteractiveQuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export default function InteractiveQuiz({ questions, onComplete }: InteractiveQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      onComplete(score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0));
    }
  };

  if (!questions || questions.length === 0) {
    return <div className="quiz-container glass-card">No quiz available for this topic yet.</div>;
  }

  if (showResult) {
    return (
      <div className="quiz-container glass-card animate-scale-in">
        <div className="result-view">
          <div className="trophy">🏆</div>
          <h2>Great Job, Yasmeen!</h2>
          <p className="score-text">You scored {score} out of {questions.length}!</p>
          <div className="feedback-message">
            {score === questions.length ? "Perfect Score! You are a superstar! 🌟" : "Well done! Keep learning and you'll get them all next time! 💪"}
          </div>
          <button className="done-btn" onClick={() => onComplete(score)}>Finish Quiz</button>
        </div>
        <style jsx>{`
          .result-view {
            text-align: center;
            padding: 3rem;
          }
          .trophy {
            font-size: 5rem;
            margin-bottom: 1rem;
            animation: bounce 2s infinite;
          }
          h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #ffd700, #ff8c00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .score-text {
            font-size: 1.8rem;
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-weight: 800;
          }
          .feedback-message {
            font-size: 1.2rem;
            color: var(--text-color);
            opacity: 0.8;
            margin-bottom: 2rem;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="quiz-container glass-card animate-fade-in">
      <div className="quiz-header">
        <span className="question-count">Question {currentQuestionIndex + 1} of {questions.length}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="question-section">
        <h3>{currentQuestion.question}</h3>
      </div>

      <div className="options-grid">
        {currentQuestion.options.map((option, index) => {
          let statusClass = "";
          if (isAnswered) {
            if (option === currentQuestion.correctAnswer) statusClass = "correct";
            else if (option === selectedOption) statusClass = "incorrect";
            else statusClass = "dimmed";
          } else if (option === selectedOption) {
            statusClass = "selected";
          }

          return (
            <button
              key={index}
              className={`option-btn ${statusClass}`}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
            >
              <span className="option-label">{String.fromCharCode(65 + index)}</span>
              {option}
              {isAnswered && option === currentQuestion.correctAnswer && <span className="icon">✅</span>}
              {isAnswered && option === selectedOption && option !== currentQuestion.correctAnswer && <span className="icon">❌</span>}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="explanation animate-slide-up">
          <p className={selectedOption === currentQuestion.correctAnswer ? "correct-text" : "incorrect-text"}>
            {selectedOption === currentQuestion.correctAnswer 
              ? "That's correct! Brilliant! 🎉" 
              : `Not quite! The correct answer is: ${currentQuestion.correctAnswer}`}
          </p>
          <button className="next-btn" onClick={handleNext}>
            {currentQuestionIndex + 1 === questions.length ? "See Results" : "Next Question ➡️"}
          </button>
        </div>
      )}

      <style jsx>{`
        .quiz-container {
          padding: 2.5rem;
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }
        .quiz-header {
          margin-bottom: 2rem;
        }
        .question-count {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
        }
        .progress-bar {
          height: 8px;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          margin-top: 0.5rem;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        h3 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--text-color);
          line-height: 1.4;
          font-weight: 800;
        }
        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .option-btn {
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          border-radius: 16px;
          color: var(--text-color);
          font-size: 1.2rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 1.2rem;
          position: relative;
          width: 100%;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }
        .option-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .option-label {
          background: rgba(108, 92, 231, 0.1);
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: 800;
          color: var(--primary);
        }
        .option-btn.correct {
          background: rgba(46, 213, 115, 0.2);
          border-color: #2ed573;
        }
        .option-btn.incorrect {
          background: rgba(255, 71, 87, 0.2);
          border-color: #ff4757;
        }
        .option-btn.dimmed {
          opacity: 0.5;
        }
        .icon {
          margin-left: auto;
          font-size: 1.2rem;
        }
        .explanation {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: white;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .correct-text {
          color: #2ed573;
          font-weight: 700;
          font-size: 1.3rem;
        }
        .incorrect-text {
          color: #ff4757;
          font-weight: 700;
          font-size: 1.3rem;
        }
        .next-btn {
          padding: 1.2rem 4rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 1.1rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.2);
        }
        .next-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255, 209, 102, 0.4);
        }

        @media (max-width: 600px) {
          .options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
