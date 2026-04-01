import React, { useState, useEffect } from 'react';
import { JOIN_URL_USD } from '../lib/constants';

export function StickyJoinBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check sessionStorage for prior dismiss
    if (sessionStorage.getItem('joinBarDismissed') === '1') {
      setDismissed(true);
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('joinBarDismissed', '1');
  };

  const show = visible && !dismissed;

  return (
    <div
      role="complementary"
      aria-label="Join Attraction by Video"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        transform: show ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: '#1A1A1A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.25)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '14px 24px',
          flexWrap: 'wrap',
        }}
      >
        {/* Text */}
        <p style={{
          margin: 0,
          fontSize: '14px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.75)',
          flex: '1 1 auto',
          minWidth: 0,
        }}>
          <span style={{ color: '#fff', fontWeight: 700 }}>Join Attraction by Video</span>
          {' '}—{' '}
          <span>$495 USD/mo. Cancel anytime.</span>
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <a
            href={JOIN_URL_USD}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 24px',
              background: '#fff',
              color: '#1A1A1A',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--accent-azure)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#1A1A1A';
            }}
          >
            Join Now
          </a>

          {/* Dismiss X */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: 'rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s ease',
              flexShrink: 0,
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
