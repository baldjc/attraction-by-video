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
      padding: '20px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left: wordmark */}
        <div style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: '18px',
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)'
        }}>
          attraction <span style={{ color: 'var(--accent-azure)' }}>by video</span>
        </div>

        {/* Right: nav links & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              Platform
            </a>
            <a href="#services" style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              Services
            </a>
            <a href="#proof" style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              Results
            </a>
          </div>
          
          <a href="#audit" style={{
            background: '#1A1A1A',
            color: '#FFFFFF',
            borderRadius: '9999px',
            padding: '10px 24px',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            transition: 'all 0.3s var(--ease-out-expo)',
            textDecoration: 'none',
            display: 'inline-block'
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
