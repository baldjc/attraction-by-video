import React from 'react';
import { useInView } from '../hooks/useInView';
import { JOIN_URL_USD, AUDIT_URL } from '../lib/constants';

export function ReadyToJoin() {
  const { ref, isVisible } = useInView();

  return (
    <section style={{ background: 'var(--bg-primary)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div
          ref={ref}
          className={`fade-up ${isVisible ? 'visible' : ''}`}
          style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(61, 195, 255, 0.08)',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-azure)',
            marginBottom: '24px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-azure)' }} />
            Ready to Start
          </div>

          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(34px, 5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            Ready to start attracting clients?
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '16px',
          }}>
            $495 USD/mo — cancel anytime. Includes the full Foundations course, weekly coaching calls, and your Attraction dashboard.
          </p>

          <p style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginBottom: '40px',
          }}>
            Your rate is locked in forever as long as you remain a member.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {/* Primary filled */}
            <a
              href={JOIN_URL_USD}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 36px',
                background: '#1A1A1A',
                color: '#fff',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s var(--ease-out-expo)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Join Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Secondary outline */}
            <a
              href={AUDIT_URL}
              style={{
                padding: '15px 32px',
                background: 'transparent',
                color: '#1A1A1A',
                border: '2px solid #1A1A1A',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#1A1A1A';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1A1A1A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Your Free Audit First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
