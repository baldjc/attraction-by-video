import React from 'react';
import { useInView } from '../hooks/useInView';
import { JOIN_URL_USD, JOIN_URL_CAD } from '../lib/constants';

export function DirectJoin() {
  const { ref, isVisible } = useInView();

  return (
    <section id="join" style={{ background: 'var(--bg-warm)', padding: '80px 0' }}>
      <div className="container" ref={ref}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--text-primary)',
            marginBottom: '12px'
          }}>
            Ready to join now?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
            Skip the audit. Lock in your rate today.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href={JOIN_URL_USD} target="_blank" rel="noopener noreferrer" style={{
              padding: '16px 32px',
              background: '#1A1A1A',
              color: '#fff',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              Join — $495 USD/mo
            </a>
            <a href={JOIN_URL_CAD} target="_blank" rel="noopener noreferrer" style={{
              padding: '16px 32px',
              background: '#1A1A1A',
              color: '#fff',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              Join — $595 CAD/mo
            </a>
          </div>

          <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Your rate is locked forever as long as you remain a member.
          </p>
        </div>
      </div>
    </section>
  );
}
