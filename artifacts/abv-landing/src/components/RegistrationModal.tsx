import React, { useState, useEffect } from 'react';
import { WebinarConfig } from '../lib/site-config';

interface Props {
  config: WebinarConfig;
  onClose: () => void;
}

export function RegistrationModal({ config, onClose }: Props) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch('GHL_WEBINAR_WEBHOOK_URL_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tags: ['webinar-registration'],
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
        }),
      });

      if (response.ok) {
        window.location.href = '/webinar-thank-you';
      } else {
        setError('Something went wrong. Please try again.');
        setSubmitting(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.65)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        maxWidth: '480px',
        width: '100%',
        padding: '40px',
        position: 'relative',
        boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        animation: 'modalIn 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'none', border: 'none', cursor: 'pointer',
            width: '32px', height: '32px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRadius: '50%',
            color: '#9ca3af', fontSize: '20px', lineHeight: 1,
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#f3f4f6'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'none'; }}
        >
          ×
        </button>

        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700, fontSize: '28px',
          color: '#111827', marginBottom: '8px',
        }}>
          Reserve Your Free Spot
        </h2>

        <p style={{
          fontSize: '14px', fontWeight: 600,
          color: '#d3753d', marginBottom: '28px',
        }}>
          {config.date} at {config.time}
        </p>

        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Jane Smith' },
            { label: 'Email', key: 'email', type: 'email', placeholder: 'jane@example.com' },
            { label: 'Cell Phone', key: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key} style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block', fontSize: '13px', fontWeight: 600,
                color: '#374151', marginBottom: '6px',
              }}>
                {label} <span style={{ color: '#d3753d' }}>*</span>
              </label>
              <input
                type={type}
                required
                placeholder={placeholder}
                value={formData[key as keyof typeof formData]}
                onChange={(e) => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                style={{
                  width: '100%', padding: '12px 16px',
                  border: '1px solid #e5e7eb', borderRadius: '10px',
                  fontSize: '15px', color: '#111827',
                  outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  fontFamily: "'Satoshi', sans-serif",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#d3753d'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; }}
              />
            </div>
          ))}

          {error && (
            <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%', padding: '16px',
              background: '#3dc3ff', color: '#fff',
              border: 'none', borderRadius: '12px',
              fontSize: '15px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.05em',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.7 : 1,
              transition: 'all 0.3s',
              marginTop: '8px',
            }}
            onMouseOver={(e) => { if (!submitting) e.currentTarget.style.background = '#28b0f0'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#3dc3ff'; }}
          >
            {submitting ? 'Registering...' : 'Register Now — It\'s Free'}
          </button>

          <p style={{
            textAlign: 'center', fontSize: '12px',
            color: '#9ca3af', marginTop: '14px', lineHeight: 1.5,
          }}>
            We'll send you a confirmation and reminder before the event.
          </p>
        </form>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
