import React from 'react';
import { useInView } from '../hooks/useInView';

const painPoints = [
  { num: '01', title: 'The feast-or-famine cycle', desc: "You close a deal, celebrate, then realise you haven't prospected in weeks. The pipeline is empty again." },
  { num: '02', title: 'Paying for strangers', desc: "Cold ads bring cold leads. You spend thousands on people who don't know you and don't trust you yet." },
  { num: '03', title: 'The content grind', desc: "You tried posting, but without a system it feels random. You quit after 6 videos because nothing happened." },
  { num: '04', title: 'Someone else is doing it', desc: "Every week you wait, another agent in your market starts a channel and takes the attention you could have had." },
];

export function Problem() {
  const { ref, isVisible } = useInView();

  return (
    <section id="why" style={{ background: 'var(--bg-warm)', padding: '120px 0' }}>
      <div className="container">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start fade-up ${isVisible ? 'visible' : ''}`}>
          
          {/* LEFT */}
          <div>
            <div className="section-label">The Problem</div>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              You're working harder than you should be.
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              lineHeight: 1.7
            }}>
              Every day you're not showing up on YouTube, someone else is. And they're building the trust you could be building — on autopilot.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            {painPoints.map((point, index) => (
              <div 
                key={point.num}
                style={{
                  padding: '28px 32px',
                  background: '#fff',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  marginBottom: '16px',
                  transition: 'all 0.3s var(--ease-out-expo)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
                  transitionDelay: `${index * 0.15}s`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  fontSize: '12px',
                  color: 'var(--accent-crimson)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}>
                  {point.num}
                </div>
                <h3 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
