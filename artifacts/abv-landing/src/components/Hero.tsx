import React from 'react';
import { useInView } from '../hooks/useInView';

export function Hero() {
  const { ref, isVisible } = useInView();

  return (
    <section id="hero" style={{
      paddingTop: '120px',
      paddingBottom: '80px',
    }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>

          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
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
              marginBottom: '32px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-azure)' }} />
              For Real Estate Agents
            </div>

            <h1 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(42px, 6vw, 80px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}>
              Stop chasing leads.<br />
              Start <span style={{
                background: 'linear-gradient(135deg, var(--accent-azure), #0099cc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>attracting</span> them.
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto 16px',
            }}>
              The YouTube system behind $171M+ in real estate sold — and nearly $4M in commissions — without spending a dollar on cold ads. Built for realtors who want clients that already trust them.
            </p>

            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              marginBottom: '36px',
            }}>
              Our goal: help 1,000 agents build profitable YouTube channels.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#audit" style={{
                padding: '16px 32px',
                background: '#1A1A1A',
                color: '#fff',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s var(--ease-out-expo)',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Get Your Free Channel Audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Full-width video */}
          <div style={{ position: 'relative', maxWidth: '1040px', margin: '0 auto' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#1A1A1A',
              aspectRatio: '16/9',
              boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
            }}>
              <iframe
                src="https://www.youtube.com/embed/g5gnNHw5Ruw?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="Attraction by Video VSL"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>

            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '32px',
              background: '#fff',
              padding: '12px 20px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>22+ agents currently enrolled</span>
            </div>
          </div>

          {/* Social proof stats */}
          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            borderTop: '1px solid var(--border)',
            paddingTop: '48px',
            marginTop: '56px',
            flexWrap: 'wrap',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: '32px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>$171M+</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Volume Sold via YouTube</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: '32px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>242+</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Consecutive Weeks</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: '32px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>230+</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Leads from 1 Video</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
