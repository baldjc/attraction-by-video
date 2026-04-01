import React from 'react';
import { JOIN_URL_USD } from '../lib/constants';

export function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(250,250,248,0.90)',
      borderBottom: '1px solid var(--border)',
      padding: '12px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>

        {/* Left: wordmark */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img
            src="/images/abv-wordmark.png"
            alt="Attraction by Video"
            style={{ height: '52px', width: 'auto' }}
          />
        </a>

        {/* Center: nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8" style={{ flex: 1, justifyContent: 'center' }}>
          {[
            { href: '#platform', label: 'Platform' },
            { href: '#services', label: 'Services' },
            { href: '#proof',    label: 'Results' },
            { href: '#audit-info', label: 'Audit' },
          ].map(({ href, label }) => (
            <a key={label} href={href} style={{
              fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
              textTransform: 'uppercase', letterSpacing: '0.02em',
              textDecoration: 'none', transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              {label}
            </a>
          ))}
        </div>

        {/* Right: Members Login + Join Now + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Members Login — always visible, compact on mobile */}
          <a
            href="https://members.attractionbyvideo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
              textDecoration: 'none', transition: 'color 0.2s ease', whiteSpace: 'nowrap',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <span className="hidden sm:inline">Members </span>Login
          </a>

          {/* Join Now — outline ghost button */}
          <a
            href={JOIN_URL_USD}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '1.5px solid #1A1A1A',
              color: '#1A1A1A',
              borderRadius: '9999px',
              padding: '9px 18px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              transition: 'all 0.25s ease',
              textDecoration: 'none',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              background: 'transparent',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1A1A1A';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1A1A1A';
            }}
          >
            Join Now
          </a>

          {/* Free Audit — filled primary */}
          <a href="#audit" style={{
            background: '#1A1A1A', color: '#FFFFFF', borderRadius: '9999px',
            padding: '10px 20px', fontSize: '12px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.04em',
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
            <span className="hidden sm:inline">Get Your </span>Free Audit
          </a>
        </div>

      </div>
    </nav>
  );
}
