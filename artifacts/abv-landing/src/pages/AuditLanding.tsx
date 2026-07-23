import React, { useState, useEffect } from 'react';
import { VideoPlayer } from '../components/VideoPlayer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  youtubeUrl: string;
  currentCommission: string;
  desiredCommission: string;
}

const baseInput: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '14px',
  background: '#fff',
  fontFamily: "'Satoshi', sans-serif",
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
  boxSizing: 'border-box',
  color: '#1A1A1A',
};

const activeInput: React.CSSProperties = {
  borderColor: 'var(--accent-azure)',
  boxShadow: '0 0 0 3px rgba(61,195,255,0.12)',
};

export function AuditLanding() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', youtubeUrl: '',
    currentCommission: '', desiredCommission: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Get Your Free Attraction Audit — Attraction by Video';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const params = new URLSearchParams(window.location.search);
    try {
      const res = await fetch(
        'https://services.leadconnectorhq.com/hooks/vEIiKAjpBkCDrabeDre7/webhook-trigger/09f67f89-b6c3-4d2f-a66b-36936c8aad46',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            youtube_channel_url: formData.youtubeUrl,
            Current_YouTube_Commission: formData.currentCommission,
            Desired_YouTube_Commission: formData.desiredCommission,
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
          }),
        }
      );
      if (res.ok) { window.location.href = '/thank-you'; }
      else { setError('Something went wrong. Please try again.'); setSubmitting(false); }
    } catch { setError('Something went wrong. Please try again.'); setSubmitting(false); }
  };

  const fieldInput = (name: string): React.CSSProperties => ({
    ...baseInput, ...(focused === name ? activeInput : {}),
  });

  const fp = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
    style: fieldInput(name),
  });

  return (
    <>
      <style>{`
        .audit-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }
        @media (max-width: 600px) {
          .audit-form-row { grid-template-columns: 1fr; }
        }

        /* ── Grid: desktop 2-col, mobile reordered ── */
        .audit-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2.5vw, 40px);
        }
        .audit-copy  { order: 1; }
        .audit-form  { order: 2; }
        .audit-proof { order: 3; }

        @media (min-width: 700px) {
          .audit-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "copy  form"
              "proof form";
            grid-template-rows: auto 1fr;
          }
          .audit-copy  { grid-area: copy; }
          .audit-proof { grid-area: proof; align-self: start; }
          .audit-form  { grid-area: form; }
        }

        /* ── No-scroll desktop layout ── */
        @media (min-width: 900px) and (min-height: 700px) {
          .audit-page {
            height: 100dvh !important;
            min-height: 0 !important;
            overflow: hidden;
          }
          .audit-video-band {
            padding: 0 24px !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          /* Constrain video width so its 16:9 height stays ≤ 28vh */
          .audit-video-wrap {
            max-width: calc(28vh * 16 / 9) !important;
          }
          .audit-content {
            flex: 1 !important;
            min-height: 0 !important;
            overflow: hidden !important;
            padding-top: clamp(10px, 1.5vh, 20px) !important;
            padding-bottom: clamp(10px, 1.5vh, 20px) !important;
          }
        }
      `}</style>

      <div className="audit-page" style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Logo bar */}
        <div style={{
          padding: '10px 24px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-primary)',
          flexShrink: 0,
        }}>
          <img src="/images/abv-wordmark.png" alt="Attraction by Video" style={{ height: '34px', width: 'auto' }} />
        </div>

        {/* Video — full width below logo */}
        <div className="audit-video-band" style={{ background: '#0d0d0d', padding: '16px 24px' }}>
          <div className="audit-video-wrap" style={{ maxWidth: '560px', margin: '0 auto', width: '100%' }}>
            <VideoPlayer slot="audit" unmuteLabel="Click to hear Jared" />
          </div>
        </div>

        {/* Main content */}
        <div className="audit-content" style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '24px 24px 32px',
        }}>
          <div className="audit-grid" style={{ width: '100%', maxWidth: '1040px' }}>

            {/* COPY — eyebrow + headline + subhead */}
            <div className="audit-copy">
              <div style={{
                fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.14em', color: 'var(--accent-azure)', marginBottom: '10px',
              }}>
                A free YouTube channel audit for real estate agents
              </div>

              <h1 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(22px, 2.6vw, 36px)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '10px',
              }}>
                Find out exactly what's stopping your YouTube channel from bringing you leads.
              </h1>

              <p style={{
                fontSize: '14px', color: 'var(--text-secondary)',
                lineHeight: 1.6, margin: 0,
              }}>
                We score your channel against the 16 principles that turn views into real estate
                clients, then send you a personalised report within 48 hours. No call required.
              </p>
            </div>

            {/* FORM */}
            <div className="audit-form">
              <div style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '18px',
                padding: 'clamp(16px, 2vh, 24px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              }}>
                <p style={{
                  fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'clamp(10px, 1.5vh, 16px)',
                }}>
                  Tell us where to send your audit. Takes 60 seconds.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name + Email — Fix 2: uses .audit-form-row class */}
                  <div className="audit-form-row">
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '5px' }}>
                        Full Name <span style={{ color: '#ff0033' }}>*</span>
                      </label>
                      {/* Fix 4: plain text input, nothing inside */}
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} {...fp('name')} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '5px' }}>
                        Email <span style={{ color: '#ff0033' }}>*</span>
                      </label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} {...fp('email')} />
                    </div>
                  </div>

                  {/* Row 2: Phone + YouTube URL */}
                  <div className="audit-form-row">
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '5px' }}>
                        Mobile Phone <span style={{ color: '#ff0033' }}>*</span>
                      </label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} {...fp('phone')} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '5px' }}>
                        YouTube Channel URL <span style={{ color: '#ff0033' }}>*</span>
                      </label>
                      <input type="url" name="youtubeUrl" required placeholder="https://youtube.com/@you" value={formData.youtubeUrl} onChange={handleChange} {...fp('youtubeUrl')} />
                    </div>
                  </div>

                  {/* Row 3: GCI fields */}
                  <div className="audit-form-row" style={{ marginBottom: '16px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '5px' }}>
                        Current annual GCI <span style={{ fontSize: '11px', fontWeight: 400, color: '#9ca3af' }}>(optional)</span>
                      </label>
                      <select name="currentCommission" value={formData.currentCommission} onChange={handleChange} {...fp('currentCommission')}>
                        <option value="">Select...</option>
                        <option value="$0 — haven't started">$0 — haven't started</option>
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50-100K">$50-100K</option>
                        <option value="$100-250K">$100-250K</option>
                        <option value="$250K+">$250K+</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '5px' }}>
                        GCI goal <span style={{ fontSize: '11px', fontWeight: 400, color: '#9ca3af' }}>(optional)</span>
                      </label>
                      <select name="desiredCommission" value={formData.desiredCommission} onChange={handleChange} {...fp('desiredCommission')}>
                        <option value="">Select...</option>
                        <option value="$50-100K">$50-100K</option>
                        <option value="$100-250K">$100-250K</option>
                        <option value="$250K-500K">$250K-500K</option>
                        <option value="$500K-$1M">$500K-$1M</option>
                        <option value="$1M+">$1M+</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div style={{
                      marginBottom: '12px', padding: '10px 14px',
                      background: 'rgba(255,0,51,0.06)', border: '1px solid rgba(255,0,51,0.2)',
                      borderRadius: '8px', fontSize: '13px', color: 'var(--accent-crimson)',
                    }}>{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%', padding: '14px',
                      background: submitting ? '#666' : '#1A1A1A',
                      color: '#fff', borderRadius: '8px',
                      fontSize: '15px', fontWeight: 600, border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Satoshi', sans-serif",
                    }}
                    onMouseOver={(e) => { if (!submitting) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; } }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {submitting ? 'Submitting...' : 'Send Me My Free Audit'}
                  </button>
                </form>
              </div>

            </div>

            {/* PROOF chips — below form on mobile, bottom-left on desktop */}
            <div className="audit-proof">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[
                  '$45M+ in real estate sold from YouTube leads in 2025',
                  'A new video every week since June 2020',
                  'The same 16-principle system 22 agents now run',
                ].map((point, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '9px',
                    padding: '7px 11px',
                    background: 'rgba(61,195,255,0.06)',
                    border: '1px solid rgba(61,195,255,0.15)',
                    borderRadius: '8px',
                    fontSize: '13px', fontWeight: 500,
                    color: 'var(--text-primary)', lineHeight: 1.4,
                  }}>
                    <span style={{ color: 'var(--accent-azure)', flexShrink: 0 }}>&#10003;</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
