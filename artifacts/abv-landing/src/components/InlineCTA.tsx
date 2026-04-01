import React from 'react';
import { JOIN_ANCHOR } from '../lib/constants';

interface InlineCTAProps {
  light?: boolean;
}

export function InlineCTA({ light = true }: InlineCTAProps) {
  const bg = light ? 'var(--bg-primary)' : 'var(--bg-dark)';
  const textColor = light ? 'var(--text-secondary)' : 'rgba(255,255,255,0.5)';
  const linkColor = light ? 'var(--text-primary)' : '#fff';

  return (
    <div style={{
      background: bg,
      padding: '24px 0',
      textAlign: 'center',
      borderTop: light ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.06)',
    }}>
      <p style={{ margin: 0, fontSize: '15px', color: textColor }}>
        Like what you see?{' '}
        <a
          href={JOIN_ANCHOR}
          style={{
            color: linkColor,
            fontWeight: 700,
            textDecoration: 'none',
            borderBottom: `1.5px solid ${light ? '#1A1A1A' : 'rgba(255,255,255,0.4)'}`,
            paddingBottom: '1px',
            transition: 'opacity 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Join Now →
        </a>
      </p>
    </div>
  );
}
