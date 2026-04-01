import React from 'react';
import { useInView } from '../hooks/useInView';
import { JOIN_URL_USD, JOIN_URL_CAD } from '../lib/constants';

const INCLUDES = [
  'Full Foundations Course — the complete YouTube system',
  'Weekly live coaching calls with Jared',
  'Your personal Attraction Dashboard',
  'Private community of agent-creators',
  'Rate locked in forever — never increases',
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <path d="M20 6L9 17L4 12" stroke="var(--accent-azure)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DirectJoin() {
  const { ref, isVisible } = useInView();

  return (
    <section id="join" style={{ background: 'var(--bg-warm)', padding: '100px 0' }}>
      <div className="container" ref={ref}>
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>

          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(61,195,255,0.08)',
              borderRadius: '100px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-azure)',
              marginBottom: '20px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-azure)' }} />
              Join Today
            </div>

            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}>
              Ready to join now?
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Skip the audit. Lock in your rate today and start attracting clients through YouTube — the proven way.
            </p>
          </div>

          {/* What's included */}
          <div style={{
            maxWidth: '480px',
            margin: '0 auto 56px',
            background: '#fff',
            borderRadius: '20px',
            padding: '32px 36px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Everything included
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {INCLUDES.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckIcon />
                  <span style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing cards — USD and CAD clearly separated */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '680px',
            margin: '0 auto',
          }}>

            {/* USD Card */}
            <div style={{
              background: '#1A1A1A',
              borderRadius: '24px',
              padding: '36px 32px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '12px' }}>
                🇺🇸 USD — United States & International
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', letterSpacing: '-0.02em', color: '#fff' }}>$495</span>
                <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>/mo</span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '32px', marginTop: 0 }}>
                Billed monthly in US Dollars. Cancel anytime.
              </p>

              <a
                href={JOIN_URL_USD}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#1A1A1A',
                  borderRadius: '100px',
                  padding: '15px 24px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  marginTop: 'auto',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent-azure)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,195,255,0.35)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#1A1A1A';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Join Now — $495 USD/mo
              </a>
            </div>

            {/* CAD Card */}
            <div style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '36px 32px',
              border: '2px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                🇨🇦 CAD — Canada
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>$595</span>
                <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: 500 }}>/mo</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px', marginTop: 0 }}>
                Billed monthly in Canadian Dollars. Cancel anytime.
              </p>

              <a
                href={JOIN_URL_CAD}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'transparent',
                  color: '#1A1A1A',
                  border: '2px solid #1A1A1A',
                  borderRadius: '100px',
                  padding: '14px 24px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  marginTop: 'auto',
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
                Join Now — $595 CAD/mo
              </a>
            </div>

          </div>

          <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Your rate is locked in forever as long as you remain a member — it never increases.
          </p>

        </div>
      </div>
    </section>
  );
}
