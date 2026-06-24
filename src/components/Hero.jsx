import { useState, useEffect } from 'react';
import './Hero.css';

const TYPED_WORDS = [
  'AI Chatbots',
  'Social Content',
  'Workflow Automation',
  'AI Receptionists',
  'SEO Content',
  'CRM Follow-Up',
  'AI Video',
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => { setPause(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }

    const word = TYPED_WORDS[wordIndex];

    if (!deleting) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        setPause(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIndex(i => (i + 1) % TYPED_WORDS.length);
      }
    }
  }, [displayed, deleting, wordIndex, pause]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI-Powered Growth for Small Businesses
        </div>

        <h1 className="hero-title">
          We Build<br />
          <span className="hero-typed">
            {displayed}
            <span className="cursor">|</span>
          </span>
          <br />
          <span className="hero-title-sub">That Work While You Sleep</span>
        </h1>

        <p className="hero-desc">
          Qwvarah deploys intelligent AI systems so your small business runs smarter, faster, and 24/7 — without adding headcount.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Start Free Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services" className="btn-ghost">View Services</a>
        </div>

        <div className="hero-trust">
          <span>Trusted by 50+ small businesses</span>
          <div className="trust-dots">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--green)">
                <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
              </svg>
            ))}
          </div>
          <span>4.9/5 average rating</span>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
