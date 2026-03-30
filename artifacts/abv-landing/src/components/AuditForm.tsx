import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export function AuditForm() {
  const { ref, isVisible } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [utms, setUtms] = useState({ source: '', medium: '', campaign: '' });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      source: params.get('utm_source') || '',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || ''
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace form action with GHL webhook endpoint
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    border: '1px solid var(--border-strong)',
    borderRadius: '8px',
    fontSize: '15px',
    background: 'var(--bg-primary)',
    fontFamily: "'Satoshi', sans-serif",
    transition: 'all 0.2s ease',
    outline: 'none'
  };

  const labelStyle = {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '6px',
    display: 'block'
  };

  return (
    <section id="audit" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="container" ref={ref}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start fade-up ${isVisible ? 'visible' : ''}`}>
          
          {/* LEFT (copy) */}
          <div>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Get your free Attraction Audit.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We'll analyse your YouTube channel across our 16-point Attraction system and show you exactly where to focus. No cost, no obligation — just clarity.
            </p>
            
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column' }}>
              {[
                "16-dimension scoring system",
                "Personalised recommendations",
                "48-hour turnaround",
                "15-minute walkthrough call"
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-azure)' }}></div>
                  <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>{point}</div>
                </div>
              ))}
            </div>
            
            <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--text-muted)' }}>
              We need 48 hours to run your full audit. We'll text you to book a call as soon as it's ready.
            </p>
          </div>

          {/* RIGHT (form) */}
          <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '40px', boxShadow: 'var(--shadow-md)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="utm_source" value={utms.source} />
                <input type="hidden" name="utm_medium" value={utms.medium} />
                <input type="hidden" name="utm_campaign" value={utms.campaign} />

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input type="text" id="name" required style={inputStyle} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)'; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }} />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input type="email" id="email" required style={inputStyle} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)'; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }} />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="phone" style={labelStyle}>Cell Phone</label>
                  <input type="tel" id="phone" required style={inputStyle} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)'; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }} />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="url" style={labelStyle}>YouTube Channel URL</label>
                  <input type="url" id="url" required style={inputStyle} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)'; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }} />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="current" style={labelStyle}>Current commission from YouTube</label>
                  <select id="current" required style={inputStyle} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)'; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <option value="">Select...</option>
                    <option value="0">$0 — haven't started</option>
                    <option value="<50k">Under $50K</option>
                    <option value="50-100k">$50-100K</option>
                    <option value="100-250k">$100-250K</option>
                    <option value="250k+">$250K+</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="desired" style={labelStyle}>Desired commission volume</label>
                  <select id="desired" required style={inputStyle} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-azure)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)'; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <option value="">Select...</option>
                    <option value="50-100k">$50-100K</option>
                    <option value="100-250k">$100-250K</option>
                    <option value="250-500k">$250K-500K</option>
                    <option value="500k-1m">$500K-$1M</option>
                    <option value="1m+">$1M+</option>
                  </select>
                </div>

                <button type="submit" style={{
                  width: '100%',
                  padding: '16px',
                  background: '#1A1A1A',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Request My Free Audit
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0', animation: 'fadeIn 0.5s ease' }}>
                <svg style={{ color: 'var(--accent-azure)', width: '48px', height: '48px', margin: '0 auto 24px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>Your audit is underway.</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  We need 48 hours to run your full audit. We'll text you to book a call as soon as it's ready.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
