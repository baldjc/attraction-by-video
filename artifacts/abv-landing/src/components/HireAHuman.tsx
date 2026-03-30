import React from 'react';
import { useInView } from '../hooks/useInView';

export function HireAHuman() {
  const { ref, isVisible } = useInView();

  return (
    <section id="services" style={{ background: 'var(--bg-warm)', padding: '120px 0' }}>
      <div className="container" ref={ref}>
        
        {/* HEADER */}
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="section-label">Hire A Human</div>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            You film. We handle everything else.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            You keep doing what only you can do — showing up on camera. We handle everything else.
          </p>
        </div>

        {/* 3-CARD TIER GRID */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          
          {/* TIER 1 */}
          <div className="group" style={{
            background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '40px 32px',
            position: 'relative', transition: 'all 0.4s var(--ease-out-expo)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', background: 'rgba(139,92,246,0.08)', color: 'var(--colour-hire)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '100px' }}>
              Members Only
            </div>
            <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)', marginTop: '16px' }}>PRODUCTION</h3>
            <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>We edit. You publish.</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px', minHeight: '66px' }}>
              Professional editing, graphics, titles, b-roll, music licensing, and Frame.io review.
            </p>
            <div>
              {["Professional video editing", "Graphics, titles, and b-roll", "Music and asset licensing", "Frame.io review workflow", "2-3 revisions per video"].map((feature, i) => (
                <div key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', padding: '10px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-azure)' }}>–</span> {feature}
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2 - GROWTH */}
          <div className="group" style={{
            background: '#fff', borderRadius: '24px', border: '1px solid var(--accent-azure)', padding: '40px 32px',
            position: 'relative', transition: 'all 0.4s var(--ease-out-expo)', boxShadow: '0 0 0 1px var(--accent-azure), var(--shadow-md)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 0 0 1px var(--accent-azure), var(--shadow-lg)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 0 1px var(--accent-azure), var(--shadow-md)'; }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', background: 'var(--accent-azure)', color: '#fff', fontSize: '10px', fontWeight: 700, borderRadius: '100px', whiteSpace: 'nowrap' }}>
              MOST POPULAR
            </div>
            <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', background: 'rgba(139,92,246,0.08)', color: 'var(--colour-hire)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '100px' }}>
              Members Only
            </div>
            <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)', marginTop: '16px' }}>GROWTH</h3>
            <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Editing + strategy + funnels.</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px', minHeight: '66px' }}>
              Everything in Production plus full funnel building, lead magnets, and monthly strategy with Jared.
            </p>
            <div>
              {["Everything in Production", "Full funnel built at launch", "Lead magnet strategy + setup", "Monthly strategy with Jared", "Content calendar planning", "Jared's feedback included"].map((feature, i) => (
                <div key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', padding: '10px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-azure)' }}>–</span> {feature}
                </div>
              ))}
            </div>
          </div>

          {/* TIER 3 - DONE WITH YOU */}
          <div className="group" style={{
            background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '40px 32px',
            position: 'relative', transition: 'all 0.4s var(--ease-out-expo)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', background: 'rgba(139,92,246,0.08)', color: 'var(--colour-hire)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '100px' }}>
              Members Only
            </div>
            <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)', marginTop: '16px' }}>DONE WITH YOU</h3>
            <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Your entire YouTube engine.</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px', minHeight: '66px' }}>
              Full agency service. We own the entire content pipeline from raw footage to live video.
            </p>
            <div>
              {["Everything in Growth", "Unlimited video edits", "Full channel management", "Thumbnail design + A/B testing", "SEO, descriptions, publishing", "Weekly performance reporting"].map((feature, i) => (
                <div key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', padding: '10px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-azure)' }}>–</span> {feature}
                </div>
              ))}
            </div>
          </div>

        </div>

        <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '32px', fontSize: '14px', color: 'var(--text-secondary)', transitionDelay: '0.2s' }} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          All services are available exclusively to Foundations members. Join to unlock.
        </p>
      </div>
    </section>
  );
}
