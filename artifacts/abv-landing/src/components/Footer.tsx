import React from 'react';

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(255,255,255,0.4)', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', fontSize: '13px' }}>
      <div className="container">
        <p style={{ marginBottom: '16px' }}>Attraction by Video — Built for real estate agents who want to attract, not chase.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>Privacy Policy</a>
          <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
