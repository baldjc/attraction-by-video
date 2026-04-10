import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const FAQS = [
  {
    q: 'Do I need to already have a YouTube channel?',
    a: 'No. You start from scratch inside Foundations — we walk you through channel setup, positioning, and your first content plan before you ever hit record.',
  },
  {
    q: 'How long until I see my first YouTube lead?',
    a: 'Most members receive their first inbound inquiry within 60–90 days of consistently applying the system. Some see results faster depending on their market and posting frequency.',
  },
  {
    q: "I'm already busy — how much time does this actually take?",
    a: 'The system is designed for working agents. Once your content engine is set up, most members spend 2–4 hours per week on YouTube. You film; we show you how to make every minute count.',
  },
  {
    q: "What if I'm not comfortable on camera?",
    a: "Jared wasn't either when he started. Getting comfortable on camera is one of the first things we tackle inside Foundations — and most members say it becomes their biggest competitive edge within a few months.",
  },
  {
    q: 'Is this only for Canadian real estate agents?',
    a: 'No. The Attraction system works in any English-speaking market. Members are currently seeing results across Canada, the US, Australia, and the UK.',
  },
  {
    q: 'What exactly does $495 USD/mo include?',
    a: 'Full access to the Foundations course, weekly live group coaching calls with Jared, your personal Attraction Dashboard, and the private member community — plus your rate is locked in forever as long as you stay a member.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(16px, 2vw, 18px)',
          color: 'var(--text-primary)',
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1.5px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.25s ease',
          background: isOpen ? '#1A1A1A' : 'transparent',
          borderColor: isOpen ? '#1A1A1A' : 'var(--border)',
        }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transition: 'transform 0.25s ease',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <path d="M12 5V19M5 12H19" stroke={isOpen ? '#fff' : 'var(--text-primary)'} strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div style={{
        maxHeight: isOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          paddingBottom: '24px',
          margin: 0,
          maxWidth: '680px',
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, isVisible } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
      <div className="container">
        <div
          ref={ref}
          className={`fade-up ${isVisible ? 'visible' : ''}`}
          style={{ maxWidth: '760px', margin: '0 auto' }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label">FAQ</div>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}>
              Common questions
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Everything you need to know before joining.
            </p>
          </div>

          {/* Accordion */}
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {FAQS.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
