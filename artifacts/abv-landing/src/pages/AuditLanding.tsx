import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  youtubeUrl: string;
  currentCommission: string;
  desiredCommission: string;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '15px',
  background: '#fff',
  fontFamily: "'Satoshi', sans-serif",
  transition: 'all 0.2s ease',
  outline: 'none',
  boxSizing: 'border-box',
  color: '#1A1A1A',
};

const labelStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#1A1A1A',
  marginBottom: '6px',
  display: 'block',
};

const focusStyle = {
  borderColor: 'var(--accent-azure)',
  boxShadow: '0 0 0 3px rgba(61,195,255,0.12)',
};

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: '#ff0033', marginLeft: '3px' }}>*</span>}
        {optional && (
          <span style={{ fontWeight: 400, color: '#9ca3af', fontSize: '12px', marginLeft: '4px' }}>
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export function AuditLanding() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    youtubeUrl: '',
    currentCommission: '',
    desiredCommission: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Get Your Free Attraction Audit — Attraction by Video';
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
      const GHL_WEBHOOK_URL =
        'https://services.leadconnectorhq.com/hooks/vEIiKAjpBkCDrabeDre7/webhook-trigger/09f67f89-b6c3-4d2f-a66b-36936c8aad46';

      const response = await fetch(GHL_WEBHOOK_URL, {
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

  const fieldProps = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
    style: {
      ...inputStyle,
      ...(focused === name ? focusStyle : {}),
    },
  });

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: '48px 24px 80px' }}>
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>

        {/* Logo — not linked */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <img
            src="/images/abv-wordmark.png"
            alt="Attraction by Video"
            style={{ height: '48px', width: 'auto' }}
          />
        </div>

        {/* Eyebrow */}
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: 'var(--accent-azure)',
          marginBottom: '16px',
        }}>
          A free YouTube channel audit for real estate agents
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(28px, 5vw, 40px)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: 'var(--text-primary)',
          marginBottom: '16px',
        }}>
          Find out exactly what's stopping your YouTube channel from bringing you leads.
        </h1>

        {/* Subhead */}
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '36px',
        }}>
          Get your free Attraction Audit. We score your channel against the 16 principles that turn
          views into real estate clients, then send you a personalised report within 48 hours. No
          call required to get it.
        </p>

        {/* Proof strip */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '40px',
        }}>
          {[
            '$45M+ in real estate sold from YouTube leads in 2025',
            'A new video every week since June 2020',
            'The same 16-principle system 22 agents now run',
          ].map((point, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '10px 14px',
              background: 'rgba(61,195,255,0.06)',
              border: '1px solid rgba(61,195,255,0.15)',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-primary)',
              lineHeight: 1.4,
            }}>
              <span style={{ color: 'var(--accent-azure)', flexShrink: 0, marginTop: '1px' }}>✓</span>
              {point}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '36px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          {/* Form heading */}
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            Tell us where to send your audit. Takes about 60 seconds.
          </p>

          <form onSubmit={handleSubmit}>
            <Field label="Full Name" required>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                {...fieldProps('name')}
              />
            </Field>

            <Field label="Email" required>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                {...fieldProps('email')}
              />
            </Field>

            <Field label="Mobile Phone" required>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                {...fieldProps('phone')}
              />
            </Field>

            <Field label="Your YouTube Channel URL" required>
              <input
                type="url"
                name="youtubeUrl"
                required
                placeholder="https://youtube.com/@yourchannel"
                value={formData.youtubeUrl}
                onChange={handleChange}
                {...fieldProps('youtubeUrl')}
              />
            </Field>

            <Field label="Your current annual GCI" optional>
              <select
                name="currentCommission"
                value={formData.currentCommission}
                onChange={handleChange}
                {...fieldProps('currentCommission')}
              >
                <option value="">Select...</option>
                <option value="$0 — haven't started">$0 — haven't started</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50-100K">$50-100K</option>
                <option value="$100-250K">$100-250K</option>
                <option value="$250K+">$250K+</option>
              </select>
            </Field>

            <Field label="Your GCI goal" optional>
              <select
                name="desiredCommission"
                value={formData.desiredCommission}
                onChange={handleChange}
                {...fieldProps('desiredCommission')}
                style={{ ...inputStyle, ...(focused === 'desiredCommission' ? focusStyle : {}), marginBottom: '0' }}
              >
                <option value="">Select...</option>
                <option value="$50-100K">$50-100K</option>
                <option value="$100-250K">$100-250K</option>
                <option value="$250K-500K">$250K-500K</option>
                <option value="$500K-$1M">$500K-$1M</option>
                <option value="$1M+">$1M+</option>
              </select>
            </Field>

            {error && (
              <div style={{
                marginBottom: '16px',
                padding: '12px 16px',
                background: 'rgba(255,0,51,0.06)',
                border: '1px solid rgba(255,0,51,0.2)',
                borderRadius: '8px',
                fontSize: '14px',
                color: 'var(--accent-crimson)',
              }}>
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
                marginTop: '8px',
              }}
              onMouseOver={(e) => {
                if (!submitting) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {submitting ? 'Submitting...' : 'Send Me My Free Audit'}
            </button>
          </form>
        </div>

        {/* What happens next */}
        <p style={{
          marginTop: '24px',
          fontSize: '13px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          textAlign: 'center',
        }}>
          Once you submit, we build your audit by hand. Within 48 hours you'll get a personalised
          report on your channel, scored across all 16 principles, with the three biggest gaps
          holding your leads back. Keep an eye on your inbox.
        </p>

      </div>
    </div>
  );
}
