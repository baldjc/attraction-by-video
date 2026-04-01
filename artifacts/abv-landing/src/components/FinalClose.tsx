import React from 'react';
import { useInView } from '../hooks/useInView';
import { JOIN_URL_USD } from '../lib/constants';

export function FinalClose() {
  const { ref, isVisible } = useInView();

  return (
    <section style={{ background: 'var(--bg-dark)', color: '#fff', padding: '120px 0', textAlign: 'center' }}>
      <div className="container" ref={ref}>
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>Ready?</div>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '24px'
          }}>
            Two choices.
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Keep doing what you've been doing — or build a channel that works for you while you sleep. Your future clients are searching YouTube right now.
          </p>

          {/* Two buttons side by side */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#audit" style={{
              display: 'inline-block',
              background: '#fff',
              color: '#1A1A1A',
              borderRadius: '100px',
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s var(--ease-out-expo)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Get Your Free Audit
            </a>

            <a
              href={JOIN_URL_USD}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: '100px',
                padding: '15px 40px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#fff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Join Now — $495 USD/mo
            </a>
          </div>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginTop: '48px' }}>
            We're on a mission to help 1,000 agents build profitable YouTube channels. You could be next.
          </p>
        </div>
      </div>
    </section>
  );
}
