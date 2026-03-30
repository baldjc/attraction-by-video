import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface FormData {
  name: string;
  email: string;
  phone: string;
  youtubeUrl: string;
  currentCommission: string;
  desiredCommission: string;
}

export function AuditForm() {
  const { ref, isVisible } = useInView();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [utms, setUtms] = useState({ source: '', medium: '', campaign: '' });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    youtubeUrl: '',
    currentCommission: '',
    desiredCommission: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      source: params.get('utm_source') || '',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const params = new URLSearchParams(window.location.search);

    try {
      const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/vEIiKAjpBkCDrabeDre7/webhook-trigger/09f67f89-b6c3-4d2f-a66b-36936c8aad46';

      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          youtube_channel_url: formData.youtubeUrl,
          Current_YouTube_Commission: formData.currentCommission,
          desired_YouTube_Commission: formData.desiredCommission,
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
        }),
      });

      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        setError('Something went wrong. Please try again.');
        setSubmitting(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    border: '1px solid var(--border-strong)',
    borderRadius: '8px',
    fontSize: '15px',
    background: 'var(--bg-primary)',
    fontFamily: "'Satoshi', sans-serif",
    transition: 'all 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '6px',
    display: 'block',
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = 'var(--accent-azure)';
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(61,195,255,0.1)';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.boxShadow = 'none';
    },
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
              color: 'var(--text-primary)',
            }}>
              Get your free Attraction Audit.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We'll analyse your YouTube channel across our 16-point Attraction system and show you exactly where to focus. No cost, no obligation — just clarity.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column' }}>
              {[
                '16-dimension scoring system',
                'Personalised recommendations',
                '48-hour turnaround',
                '15-minute walkthrough call',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-azure)', flexShrink: 0 }} />
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
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="utm_source" value={utms.source} />
              <input type="hidden" name="utm_medium" value={utms.medium} />
              <input type="hidden" name="utm_campaign" value={utms.campaign} />

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="phone" style={labelStyle}>Cell Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="youtubeUrl" style={labelStyle}>YouTube Channel URL</label>
                <input
                  type="url"
                  id="youtubeUrl"
                  name="youtubeUrl"
                  required
                  placeholder="https://youtube.com/@yourchannel"
                  value={formData.youtubeUrl}
                  onChange={handleChange}
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="currentCommission" style={labelStyle}>Current commission from YouTube</label>
                <select
                  id="currentCommission"
                  name="currentCommission"
                  required
                  value={formData.currentCommission}
                  onChange={handleChange}
                  style={inputStyle}
                  {...focusHandlers}
                >
                  <option value="">Select...</option>
                  <option value="$0 — haven't started">$0 — haven't started</option>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50-100K">$50-100K</option>
                  <option value="$100-250K">$100-250K</option>
                  <option value="$250K+">$250K+</option>
                </select>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label htmlFor="desiredCommission" style={labelStyle}>Desired commission volume</label>
                <select
                  id="desiredCommission"
                  name="desiredCommission"
                  required
                  value={formData.desiredCommission}
                  onChange={handleChange}
                  style={inputStyle}
                  {...focusHandlers}
                >
                  <option value="">Select...</option>
                  <option value="$50-100K">$50-100K</option>
                  <option value="$100-250K">$100-250K</option>
                  <option value="$250K-500K">$250K-500K</option>
                  <option value="$500K-$1M">$500K-$1M</option>
                  <option value="$1M+">$1M+</option>
                </select>
              </div>

              {error && (
                <div style={{ marginBottom: '16px', padding: '12px 16px', background: 'rgba(255,0,51,0.06)', border: '1px solid rgba(255,0,51,0.2)', borderRadius: '8px', fontSize: '14px', color: 'var(--accent-crimson)' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: submitting ? '#666' : '#1A1A1A',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Satoshi', sans-serif",
                }}
                onMouseOver={(e) => { if (!submitting) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; } }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {submitting ? 'Submitting...' : 'Request My Free Audit'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
