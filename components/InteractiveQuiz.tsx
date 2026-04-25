"use client";

import { useState } from 'react';
import { QuizQuestion } from '../lib/curriculum';

interface Props {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const OPTION_COLORS = ['#7C3AED', '#EC4899', '#F59E0B', '#10B981'];
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function InteractiveQuiz({ questions, onComplete }: Props) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!questions?.length) {
    return (
      <div className="qz-empty glass-card">
        <p>🚧 Quiz coming soon for this topic!</p>
      </div>
    );
  }

  const q = questions[idx];
  const isCorrect = picked === q.correctAnswer;
  const finalScore = done ? score : 0;

  const pick = (opt: string) => {
    if (answered) return;
    setPicked(opt);
    setAnswered(true);
    if (opt === q.correctAnswer) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 < questions.length) {
      setIdx(i => i + 1);
      setPicked(null);
      setAnswered(false);
    } else {
      setDone(true);
      onComplete(score + (isCorrect ? 1 : 0));
    }
  };

  if (done) {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="qz-result animate-pop-in">
        <div className="qz-trophy">{pct === 100 ? '🏆' : pct >= 60 ? '🌟' : '💪'}</div>
        <h2 className="qz-result-title">
          {pct === 100 ? 'Perfect Score!' : pct >= 60 ? 'Well Done!' : 'Keep Practising!'}
        </h2>
        <p className="qz-score">{score} / {total}</p>
        <div className="qz-result-bar">
          <div className="progress-track" style={{ height: 14 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="qz-pct">{pct}%</span>
        </div>
        <p className="qz-msg">
          {pct === 100
            ? "You're a superstar, Yasmeen! 🌟 Every answer was correct!"
            : pct >= 60
              ? "Great job! Review the ones you missed and try again! 💪"
              : "Don't give up! Read the topic again and you'll do better! 📚"}
        </p>
        <button className="btn btn-primary" onClick={() => onComplete(finalScore)}>
          ← Back to Learning
        </button>
      </div>
    );
  }

  return (
    <div className="qz-wrap animate-fade-in">
      {/* Header */}
      <div className="qz-header">
        <div className="qz-counter">
          <span className="qz-num">{idx + 1}</span>
          <span className="qz-of">of {questions.length}</span>
        </div>
        <div className="progress-track" style={{ flex: 1 }}>
          <div className="progress-fill" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
        </div>
        <div className="qz-score-live">⭐ {score}</div>
      </div>

      {/* Question */}
      <div className="qz-question glass-card">
        <p className="qz-q-text">{q.question}</p>
        {q.hint && !answered && (
          <p className="qz-hint">💡 Hint: {q.hint}</p>
        )}
      </div>

      {/* Options */}
      <div className="qz-options">
        {q.options.map((opt, i) => {
          let state = '';
          if (answered) {
            if (opt === q.correctAnswer) state = 'correct';
            else if (opt === picked) state = 'wrong';
            else state = 'dim';
          }
          return (
            <button
              key={i}
              className={`qz-opt ${state}`}
              onClick={() => pick(opt)}
              disabled={answered}
              style={!answered ? { '--opt-color': OPTION_COLORS[i] } as React.CSSProperties : {}}
            >
              <span
                className="qz-opt-label"
                style={{ background: state === 'correct' ? '#10B981' : state === 'wrong' ? '#EF4444' : OPTION_COLORS[i] }}
              >
                {OPTION_LABELS[i]}
              </span>
              <span className="qz-opt-text">{opt}</span>
              {state === 'correct' && <span className="qz-opt-icon">✅</span>}
              {state === 'wrong' && <span className="qz-opt-icon">❌</span>}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className={`qz-feedback animate-pop-in ${isCorrect ? 'correct' : 'wrong'}`}>
          <span className="qz-fb-icon">{isCorrect ? '🎉' : '🤔'}</span>
          <div>
            <p className="qz-fb-title">{isCorrect ? 'Brilliant!' : `The answer is: ${q.correctAnswer}`}</p>
            {q.explanation && <p className="qz-fb-exp">{q.explanation}</p>}
          </div>
          <button className="btn btn-primary" onClick={next}>
            {idx + 1 === questions.length ? 'See Results 🏆' : 'Next →'}
          </button>
        </div>
      )}

      <style jsx>{`
        .qz-wrap { display: flex; flex-direction: column; gap: 1.25rem; max-width: 700px; margin: 0 auto; }

        .qz-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .qz-counter { display: flex; align-items: baseline; gap: 0.25rem; }
        .qz-num  { font-family: 'Baloo 2', cursive; font-size: 1.6rem; font-weight: 900; color: #7C3AED; }
        .qz-of   { font-size: 0.85rem; font-weight: 700; color: #9CA3AF; }
        .qz-score-live { font-size: 1rem; font-weight: 800; color: #F59E0B; white-space: nowrap; }

        .qz-question { padding: 1.75rem 2rem !important; }
        .qz-q-text {
          font-family: 'Baloo 2', cursive;
          font-size: 1.3rem;
          font-weight: 800;
          color: #1E1B4B;
          line-height: 1.4;
        }
        .qz-hint { font-size: 0.85rem; color: #6B7280; font-weight: 600; margin-top: 0.75rem; font-style: italic; }

        .qz-options { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .qz-opt {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          cursor: pointer;
          text-align: left;
          transition: all 0.18s;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #374151;
          width: 100%;
        }
        .qz-opt:hover:not(:disabled) {
          border-color: var(--opt-color, #7C3AED);
          background: #F5F3FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(124,58,237,0.12);
        }
        .qz-opt.correct { background: #F0FDF4; border-color: #10B981; }
        .qz-opt.wrong   { background: #FEF2F2; border-color: #EF4444; }
        .qz-opt.dim     { opacity: 0.4; }
        .qz-opt-label {
          width: 32px; height: 32px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: white;
          font-size: 0.85rem;
          font-weight: 900;
          flex-shrink: 0;
        }
        .qz-opt-text { flex: 1; }
        .qz-opt-icon { font-size: 1.1rem; flex-shrink: 0; }

        .qz-feedback {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-radius: 20px;
          flex-wrap: wrap;
        }
        .qz-feedback.correct { background: #F0FDF4; border: 2px solid #A7F3D0; }
        .qz-feedback.wrong   { background: #FEF2F2; border: 2px solid #FECACA; }
        .qz-fb-icon  { font-size: 2rem; flex-shrink: 0; }
        .qz-fb-title { font-weight: 800; font-size: 1rem; color: #1E1B4B; margin-bottom: 0.2rem; }
        .qz-fb-exp   { font-size: 0.85rem; color: #6B7280; font-weight: 600; }
        .qz-feedback .btn { margin-left: auto; white-space: nowrap; }

        /* Result */
        .qz-result {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 3rem 2rem;
          text-align: center;
          background: white;
          border-radius: 28px;
          box-shadow: 0 8px 32px rgba(124,58,237,0.12);
        }
        .qz-trophy { font-size: 5rem; animation: bounce-in 0.6s cubic-bezier(0.34,1.56,0.64,1); }
        .qz-result-title {
          font-family: 'Baloo 2', cursive;
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #7C3AED, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .qz-score { font-family: 'Baloo 2', cursive; font-size: 3rem; font-weight: 900; color: #7C3AED; line-height: 1; }
        .qz-result-bar { display: flex; align-items: center; gap: 0.75rem; width: 100%; max-width: 320px; }
        .qz-result-bar .progress-track { flex: 1; }
        .qz-pct { font-weight: 900; color: #7C3AED; }
        .qz-msg { font-size: 1rem; color: #6B7280; font-weight: 600; max-width: 360px; line-height: 1.5; }

        .qz-empty { text-align: center; padding: 3rem; font-size: 1.1rem; font-weight: 700; color: #6B7280; }

        @media (max-width: 600px) {
          .qz-options { grid-template-columns: 1fr; gap: 0.6rem; }
          .qz-opt { padding: 0.85rem 1rem; font-size: 0.88rem; }
          .qz-q-text { font-size: 1.1rem; }
          .qz-feedback { flex-direction: column; gap: 0.75rem; }
          .qz-feedback .btn { width: 100%; margin-left: 0; }
          .qz-result { padding: 2rem 1.25rem; }
          .qz-result-title { font-size: 1.5rem; }
          .qz-score { font-size: 2.2rem; }
          .qz-question { padding: 1.25rem !important; }
        }
        @media (max-width: 380px) {
          .qz-num { font-size: 1.3rem; }
          .qz-opt-label { width: 28px; height: 28px; font-size: 0.78rem; }
        }
      `}</style>
    </div>
  );
}
