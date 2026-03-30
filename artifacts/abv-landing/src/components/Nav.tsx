import React from 'react';

export function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(250,250,248,0.85)',
      borderBottom: '1px solid var(--border)',
      padding: '14px 0',
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '16px' }}>

        {/* Left: nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" style={{
            fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
            textTransform: 'uppercase', letterSpacing: '0.02em', textDecoration: 'none', transition: 'color 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Platform
          </a>
          <a href="#services" style={{
            fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
            textTransform: 'uppercase', letterSpacing: '0.02em', textDecoration: 'none', transition: 'color 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Services
          </a>
          <a href="#proof" style={{
            fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
            textTransform: 'uppercase', letterSpacing: '0.02em', textDecoration: 'none', transition: 'color 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Results
          </a>
        </div>

        {/* Center: wordmark only, bigger */}
        <a href="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/abv-wordmark.png"
            alt="Attraction by Video"
            style={{ height: '48px', width: 'auto' }}
          />
        </a>

        {/* Right: members login + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
          <a
            href="https://members.attractionbyvideo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline"
            style={{
              fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
              textDecoration: 'none', transition: 'color 0.2s ease', whiteSpace: 'nowrap',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Members Login
          </a>
          <a href="#audit" style={{
            background: '#1A1A1A', color: '#FFFFFF', borderRadius: '9999px',
            padding: '10px 24px', fontSize: '13px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.02em',
            transition: 'all 0.3s var(--ease-out-expo)', textDecoration: 'none',
            display: 'inline-block', whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            Get Your Free Audit
          </a>
        </div>

      </div>
    </nav>
  );
}
