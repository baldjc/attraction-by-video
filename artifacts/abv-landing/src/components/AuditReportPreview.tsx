import React from 'react';
import { useInView } from '../hooks/useInView';

const dimensions = [
  { name: 'Consistency',        score: 8.1, color: '#3dc3ff' },
  { name: 'Content Pillars',    score: 8.3, color: '#3dc3ff' },
  { name: 'Upload Frequency',   score: 8.0, color: '#3dc3ff' },
  { name: 'Topic Research',     score: 7.9, color: '#3dc3ff' },
  { name: 'SEO',                score: 7.8, color: '#3dc3ff' },
  { name: 'Channel Keywords',   score: 7.4, color: '#3dc3ff' },
  { name: 'Engagement',         score: 7.6, color: '#3dc3ff' },
  { name: 'Watch Time',         score: 7.2, color: '#3dc3ff' },
  { name: 'Hook Strength',      score: 7.1, color: '#3dc3ff' },
  { name: 'Retention',          score: 6.9, color: '#f59e0b' },
  { name: 'Title Optimization', score: 7.1, color: '#3dc3ff' },
  { name: 'Thumbnails',         score: 6.4, color: '#f59e0b' },
  { name: 'Description Quality',score: 6.3, color: '#f59e0b' },
  { name: 'Call to Action',     score: 5.8, color: '#ef4444' },
  { name: 'End Screens',        score: 5.2, color: '#ef4444' },
  { name: 'Playlist Strategy',  score: 4.8, color: '#ef4444' },
];

function ScoreBar({ score }: { score: number }) {
  const color = score >= 8 ? '#3dc3ff' : score >= 6.5 ? '#f59e0b' : '#ef4444';
  return (
    <div style={{ flex: 1, height: '5px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{ width: `${(score / 10) * 100}%`, height: '100%', background: color, borderRadius: '3px' }} />
    </div>
  );
}

function Page({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07), 0 20px 40px -8px rgba(0,0,0,0.12)',
      padding: '40px',
      width: '100%',
      maxWidth: '560px',
      ...style,
    }}>
      {children}
    </div>
  );
}

export function AuditReportPreview() {
  const { ref, isVisible } = useInView();

  return (
    <section style={{ background: 'var(--bg-dark)', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container" ref={ref}>

        {/* Header */}
        <div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          className={`fade-up ${isVisible ? 'visible' : ''}`}
        >
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>The Attraction Audit</div>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#fff',
            marginBottom: '20px',
          }}>
            See exactly what you&apos;ll get.
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Every free audit produces a real report. Scored across 16 dimensions. No fluff — just your actual numbers and what to fix first.
          </p>
        </div>

        {/* Stacked pages */}
        <div
          className={`fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '0px', position: 'relative' }}
        >

          {/* Page 2 — behind, slightly rotated */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-26%) rotate(3deg) translateY(24px)',
            transformOrigin: 'top center',
            width: '100%',
            maxWidth: '560px',
            pointerEvents: 'none',
            zIndex: 1,
          }}>
            <Page>
              {/* Page 2 header */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: '6px' }}>Attraction Audit Report · Page 2 of 3</div>
                <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '20px', color: '#111827' }}>16-Dimension Breakdown</div>
              </div>

              {/* Dimensions grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {dimensions.slice(0, 8).map(d => (
                  <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#6b7280', width: '148px', flexShrink: 0 }}>{d.name}</span>
                    <ScoreBar score={d.score} />
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      width: '28px',
                      textAlign: 'right',
                      color: d.score >= 8 ? '#3dc3ff' : d.score >= 6.5 ? '#f59e0b' : '#ef4444',
                      flexShrink: 0,
                    }}>{d.score}</span>
                  </div>
                ))}
              </div>
            </Page>
          </div>

          {/* Page 1 — front, matching My Scores screenshot */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '560px' }}>
            <Page>
              {/* Watermark */}
              <div style={{ position: 'absolute', top: '20px', right: '28px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d1d5db' }}>
                SAMPLE REPORT
              </div>

              {/* Page 1 header */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: '6px' }}>Attraction Audit Report · Page 1 of 3</div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>Channel: Jared Chamberlain · March 30, 2026</div>
              </div>

              {/* Star icon + title — matching screenshot */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '24px',
              }}>⭐</div>
              <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '24px', color: '#111827', marginBottom: '8px' }}>My Scores</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginBottom: '28px' }}>
                A 16-dimension scoring system that shows exactly where your channel stands — and what to fix first.
              </p>

              {/* Score card — matching screenshot exactly */}
              <div style={{ background: '#f3f4f6', borderRadius: '16px', padding: '24px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: '#3dc3ff', lineHeight: 1 }}>7.2</span>
                  <span style={{ fontSize: '18px', color: '#9ca3af', fontWeight: 400 }}>/ 10</span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: '14px' }}>Channel Health Score</div>
                <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '3px', marginBottom: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #3dc3ff, #0099cc)', borderRadius: '3px' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[
                    { name: 'Consistency', s: '8.1' },
                    { name: 'Thumbnails', s: '6.4' },
                    { name: 'SEO', s: '7.8' },
                    { name: 'Retention', s: '6.9' },
                  ].map(d => (
                    <div key={d.name} style={{ background: '#fff', borderRadius: '10px', padding: '12px 16px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#374151' }}>{d.name}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#3dc3ff' }}>{d.s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priority fixes teaser */}
              <div style={{ marginTop: '24px', padding: '16px', background: '#fff7ed', borderRadius: '10px', border: '1px solid #fed7aa' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#f97316', marginBottom: '8px' }}>🔧 Top Priority Fixes</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['Playlist Strategy (4.8) — No structured playlists found', 'End Screens (5.2) — Missing on 80% of videos', 'Call to Action (5.8) — No consistent CTA hook'].map((fix, i) => (
                    <div key={i} style={{ fontSize: '12px', color: '#92400e', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <span style={{ color: '#f97316', flexShrink: 0 }}>→</span>
                      <span>{fix}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Page>
          </div>

        </div>

        {/* CTA below */}
        <div
          className={`fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s', textAlign: 'center', marginTop: '64px' }}
        >
          <a href="#audit" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-azure)',
            color: '#fff',
            borderRadius: '9999px',
            padding: '16px 36px',
            fontSize: '15px',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'all 0.3s var(--ease-out-expo)',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,195,255,0.4)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Get Your Free Attraction Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
          <div style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Free · No credit card · Delivered within 24 hours</div>
        </div>

      </div>
    </section>
  );
}
