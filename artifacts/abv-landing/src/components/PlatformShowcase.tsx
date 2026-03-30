import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

export function PlatformShowcase() {
  const { ref, isVisible } = useInView();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const target = 7.2;
      const interval = setInterval(() => {
        current += 0.1;
        if (current >= target) {
          setScore(target);
          clearInterval(interval);
        } else {
          setScore(Number(current.toFixed(1)));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="platform" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="container" ref={ref}>
        
        {/* HEADER */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div className="section-label">Your Platform</div>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)'
            }}>
              Everything you need.<br/>Nothing you don't.
            </h2>
          </div>
          <p style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            maxWidth: '400px',
            lineHeight: 1.7
          }}>
            One membership. Scores, training, AI tools, live coaching, and done-for-you services — all in one place.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 fade-up ${isVisible ? 'visible' : ''}`}>
          
          {/* CARD 1 - My Scores */}
          <div className="lg:row-span-2 group" style={{
            background: '#fff',
            borderRadius: '24px',
            border: '1px solid var(--border)',
            padding: '36px',
            transition: 'all 0.4s var(--ease-out-expo)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '28px', flexWrap: 'wrap' }}>

              {/* Left: score UI */}
              <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', background: '#F59E0B20',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#F59E0B'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '22px', marginBottom: '12px', color: 'var(--text-primary)' }}>My Scores</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  A 16-principle scoring system that shows exactly where your channel stands — and what to fix first.
                </p>
                <div style={{ background: 'var(--bg-warm)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', color: 'var(--accent-azure)', lineHeight: 1 }}>{score.toFixed(1)}</span>
                    <span style={{ fontSize: '16px', color: 'var(--text-muted)' }}>/ 10</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', marginTop: '8px' }}>Channel Health Score</div>
                  <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', marginBottom: '20px', overflow: 'hidden' }}>
                    <div style={{ width: `${(score/10)*100}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-azure), #0099cc)', borderRadius: '3px', transition: 'width 0.5s ease-out' }}></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {[
                      { name: 'Consistency', s: '8.1' }, { name: 'Thumbnails', s: '6.4' },
                      { name: 'SEO', s: '7.8' }, { name: 'Retention', s: '6.9' }
                    ].map(dim => (
                      <div key={dim.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>{dim.name}</span>
                        <span style={{ fontSize: '12px', color: 'var(--accent-azure)', fontWeight: 600 }}>{dim.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: mini report preview */}
              <div style={{ flex: '1 1 160px', minWidth: 0, position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>
                {/* Back page (rotated) */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '-8px',
                  width: '150px',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '14px',
                  transform: 'rotate(6deg)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  zIndex: 0,
                }}>
                  {[['8.1','#3dc3ff'],['8.3','#3dc3ff'],['8.0','#3dc3ff'],['7.9','#f59e0b'],['7.8','#f59e0b'],['7.4','#f59e0b'],['7.6','#f59e0b'],['7.2','#ef4444']].map(([val, color], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <div style={{ flex: 1, height: '4px', background: '#f3f4f6', borderRadius: '2px' }}>
                        <div style={{ width: `${(parseFloat(val)/10)*100}%`, height: '100%', background: color, borderRadius: '2px' }} />
                      </div>
                      <span style={{ fontSize: '10px', fontWeight: 700, color, minWidth: '22px', textAlign: 'right' }}>{val}</span>
                    </div>
                  ))}
                </div>

                {/* Front page */}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '160px',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                  marginRight: '20px',
                }}>
                  <div style={{ fontSize: '7px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '3px' }}>Attraction Audit Report</div>
                  <div style={{ fontSize: '7px', color: '#9ca3af', marginBottom: '12px' }}>Channel: Jared Chamberlain</div>
                  <div style={{ width: '28px', height: '28px', background: '#fef3c7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginBottom: '8px' }}>⭐</div>
                  <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '13px', color: '#111827', marginBottom: '4px' }}>My Scores</div>
                  <div style={{ fontSize: '7px', color: '#6b7280', lineHeight: 1.5, marginBottom: '12px' }}>A 16-principle scoring system that shows exactly where your channel stands.</div>
                  <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                      <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '22px', color: '#3dc3ff', lineHeight: 1 }}>7.2</span>
                      <span style={{ fontSize: '9px', color: '#9ca3af' }}>/10</span>
                    </div>
                    <div style={{ fontSize: '7px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '6px' }}>Channel Health</div>
                    <div style={{ height: '3px', background: '#e5e7eb', borderRadius: '2px', marginBottom: '8px' }}>
                      <div style={{ width: '72%', height: '100%', background: '#3dc3ff', borderRadius: '2px' }} />
                    </div>
                    {[['Consistency','8.1'],['Thumbnails','6.4']].map(([n,s]) => (
                      <div key={n} style={{ display: 'flex', justifyContent: 'space-between', background: '#fff', padding: '4px 6px', borderRadius: '4px', marginBottom: '4px', border: '1px solid #e5e7eb' }}>
                        <span style={{ fontSize: '8px', color: '#6b7280' }}>{n}</span>
                        <span style={{ fontSize: '8px', color: '#3dc3ff', fontWeight: 700 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 - AI Tools — full-width with real screenshot */}
          <div className="lg:col-span-2 group" style={{
            background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '40px', transition: 'all 0.4s var(--ease-out-expo)',
            overflow: 'hidden',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>

            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', background: '#6ba3c720',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#6ba3c7'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/></svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '22px', marginBottom: '6px', color: 'var(--text-primary)' }}>AI Tools</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '480px' }}>
                    Six purpose-built AI tools trained on real estate YouTube — not generic ChatGPT prompts. Each one knows your avatar, your market, and your content strategy.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-warm)', borderRadius: '20px', padding: '6px 14px', border: '1px solid var(--border)', flexShrink: 0 }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>6 tools live inside the platform</span>
              </div>
            </div>

            {/* Tool cards grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}>
              {[
                { emoji: '🎯', name: 'Avatar Architect' },
                { emoji: '🚀', name: 'Content Engine' },
                { emoji: '🔍', name: 'Title & Thumbnail Analyzer' },
                { emoji: '🎬', name: 'ARC Script Builder' },
                { emoji: '📋', name: 'Script Review' },
                { emoji: '♻️', name: 'Repurpose Content' },
              ].map((tool) => (
                <div key={tool.name} style={{
                  background: 'var(--bg-warm)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <span style={{ fontSize: '22px', flexShrink: 0 }}>{tool.emoji}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 4 - Foundations Academy */}
          <div className="lg:col-span-2 group" style={{
            background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '36px', transition: 'all 0.4s var(--ease-out-expo)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', background: '#10B98120',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#10B981'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '22px', marginBottom: '12px', color: 'var(--text-primary)' }}>Foundations Academy</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>The complete system for building a YouTube channel that attracts real estate clients.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { w: 'WEEK 1', t: 'Channel Strategy' },
                  { w: 'WEEK 2', t: 'Content Pillars' },
                  { w: 'WEEK 3', t: 'The ARC Script' },
                  { w: 'WEEK 4', t: 'Thumbnails & SEO' }
                ].map(week => (
                  <div key={week.w} style={{ background: 'var(--bg-warm)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '4px' }}>{week.w}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{week.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 5 - Weekly Live Calls */}
          <div className="lg:col-span-2 group" style={{
            background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '36px', transition: 'all 0.4s var(--ease-out-expo)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', background: '#10B98120',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#10B981'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '22px', marginBottom: '12px', color: 'var(--text-primary)' }}>Weekly Live Calls</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Real coaching, every week. Not a course dump.</p>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginTop: '16px' }}>Not a course dump. Real coaching, every single week.</div>
              </div>
              <div>
                {[
                  "Mar 27, 2026 — Hot Seat: Packaging Review — 47:22",
                  "Mar 20, 2026 — Live Q&A: Thumbnail Fixes — 38:14",
                  "Mar 13, 2026 — Channel Audit: Calgary Agent — 52:07",
                  "Mar 6, 2026 — ARC Script Workshop — 44:31"
                ].map((call, i) => (
                  <div key={i} style={{ fontSize: '13px', padding: '12px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                    {call.split('—').map((part, idx) => <span key={idx}>{part.trim()}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
