import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { getSiteConfig, SITE_CONFIG_DEFAULTS, SiteConfig } from '../lib/site-config';

function CheckmarkIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="72"
      height="72"
      style={{ margin: '0 auto 32px', display: 'block' }}
    >
      <circle
        cx="32" cy="32" r="29"
        fill="none"
        stroke="var(--accent-azure)"
        strokeWidth="3"
        strokeDasharray="182"
        strokeDashoffset="182"
        strokeLinecap="round"
        style={{ animation: 'drawCircle 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
      />
      <polyline
        points="20,33 28,42 46,24"
        fill="none"
        stroke="var(--accent-azure)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
        style={{ animation: 'drawCheck 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards' }}
      />
    </svg>
  );
}

const timelineSteps = [
  {
    time: 'Right now',
    desc: 'Check your phone — we just sent you a confirmation.',
  },
  {
    time: 'Before the event',
    desc: "We'll send you a reminder with the Zoom link.",
  },
  {
    time: 'On the day',
    desc: 'Show up, take notes, and get ready to transform your YouTube strategy.',
  },
];

export function WebinarThankYou() {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<SiteConfig>(SITE_CONFIG_DEFAULTS);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    getSiteConfig().then(setConfig);
    return () => clearTimeout(t);
  }, []);

  const wc = config.webinar;

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(250,250,248,0.85)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/abv-wordmark.png" alt="Attraction by Video" style={{ height: '32px', width: 'auto' }} />
          </a>
          <a href="/" style={{
            background: '#1A1A1A', color: '#FFFFFF',
            borderRadius: '9999px', padding: '10px 24px',
            fontSize: '13px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.02em',
            textDecoration: 'none', display: 'inline-block',
            transition: 'all 0.3s var(--ease-out-expo)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            Back to Home
          </a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main style={{
        flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '160px 24px 80px',
      }}>
        <div style={{
          maxWidth: '640px', width: '100%', textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <CheckmarkIcon />

          <h1 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800, fontSize: 'clamp(36px, 5vw, 48px)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            color: 'var(--text-primary)', marginBottom: '16px',
          }}>
            You're registered!
          </h1>

          <p style={{
            fontSize: '18px', fontWeight: 600,
            color: '#d3753d', marginBottom: '32px',
          }}>
            {wc.date} at {wc.time}
          </p>

          {/* WHAT'S NEXT CARD */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '24px', padding: '32px', marginTop: '8px',
            textAlign: 'left',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px' }}>
              What happens next:
            </div>

            {timelineSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: 'var(--accent-azure)', marginTop: '3px', flexShrink: 0,
                  }} />
                  {i < timelineSteps.length - 1 && (
                    <div style={{
                      width: '2px', flex: 1,
                      background: 'var(--border)', margin: '6px 0', minHeight: '32px',
                    }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < timelineSteps.length - 1 ? '24px' : '0' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {step.time}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div style={{
            marginTop: '32px', display: 'flex', flexDirection: 'column',
            gap: '16px', alignItems: 'center',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.35s',
          }}>
            {wc.calendarLink && (
              <a
                href={wc.calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#1A1A1A', color: '#fff',
                  borderRadius: '12px', padding: '14px 28px',
                  fontSize: '14px', fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s var(--ease-out-expo)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Add to Calendar
              </a>
            )}

            {wc.group && (
              <a
                href={wc.group}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '15px', fontWeight: 500,
                  color: 'var(--accent-azure)', textDecoration: 'none',
                  borderBottom: '1px solid rgba(61,195,255,0.3)', paddingBottom: '2px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(61,195,255,0.3)'; }}
              >
                Join the community while you wait →
              </a>
            )}
          </div>
        </div>
      </main>

      {/* TODO: Add Google Ads / Meta conversion tracking pixel here */}

      <Footer />

      <style>{`
        @keyframes drawCircle { to { stroke-dashoffset: 0; } }
        @keyframes drawCheck  { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}
