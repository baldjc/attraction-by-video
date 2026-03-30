import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';

function CheckmarkIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="72"
      height="72"
      style={{ margin: '0 auto 32px', display: 'block' }}
    >
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="var(--accent-azure)"
        strokeWidth="3"
        strokeDasharray="182"
        strokeDashoffset="182"
        strokeLinecap="round"
        style={{
          animation: 'drawCircle 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        }}
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
        style={{
          animation: 'drawCheck 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards',
        }}
      />
    </svg>
  );
}

const timelineSteps = [
  {
    time: 'Right now',
    desc: 'Check your phone — we just sent you a confirmation text.',
  },
  {
    time: 'Next 48 hours',
    desc: 'We run your full 16-point Attraction Audit.',
  },
  {
    time: "When it's ready",
    desc: "We'll text you a link to book your 15-minute walkthrough call.",
  },
];

export function ThankYou() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* NAV — thank-you variant */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(250,250,248,0.85)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/abv-wordmark.png" alt="Attraction by Video" style={{ height: '32px', width: 'auto' }} />
          </a>
          <a href="/" style={{
            background: '#1A1A1A',
            color: '#FFFFFF',
            borderRadius: '9999px',
            padding: '10px 24px',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            textDecoration: 'none',
            display: 'inline-block',
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '160px 24px 80px',
      }}>
        <div
          style={{
            maxWidth: '640px',
            width: '100%',
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <CheckmarkIcon />

          <h1 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 48px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            Your audit is underway.
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto',
          }}>
            We need 48 hours to analyse your channel across our 16-point Attraction system. We'll text you to book your walkthrough call as soon as it's ready.
          </p>

          {/* WHAT TO EXPECT CARD */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '32px',
            marginTop: '40px',
            textAlign: 'left',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px' }}>
              What happens next:
            </div>

            {timelineSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < timelineSteps.length - 1 ? '0' : '0' }}>
                {/* Timeline column */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'var(--accent-azure)',
                    marginTop: '3px',
                    flexShrink: 0,
                  }} />
                  {i < timelineSteps.length - 1 && (
                    <div style={{
                      width: '2px',
                      flex: 1,
                      background: 'var(--border)',
                      margin: '6px 0',
                      minHeight: '32px',
                    }} />
                  )}
                </div>
                {/* Content */}
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

          {/* WHILE YOU WAIT */}
          <div style={{
            marginTop: '32px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.35s',
          }}>
            <a
              href="https://www.youtube.com/@JaredChamberlain"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--accent-azure)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(61,195,255,0.3)',
                paddingBottom: '2px',
                transition: 'border-color 0.2s ease',
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(61,195,255,0.3)'; }}
            >
              While you wait, watch this →
            </a>

            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              Questions? Text Jared directly at{' '}
              <a href="sms:+1" style={{ color: 'var(--text-muted)' }}>
                {/* TODO: Add Jared's phone number */}
                [phone number]
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* CONVERSION TRACKING */}
      {/* TODO: Add conversion tracking pixel */}
      {/* Example:
      <script>
        gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXX' });
      </script>
      */}

      <Footer />

      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
