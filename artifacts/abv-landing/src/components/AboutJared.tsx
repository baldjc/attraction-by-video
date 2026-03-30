import React from 'react';
import { useInView } from '../hooks/useInView';

export function AboutJared() {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="container" ref={ref}>
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center fade-up ${isVisible ? 'visible' : ''}`}>
          
          {/* LEFT: Photo */}
          <div className="order-2 md:order-1">
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="/images/jared-headshot.png"
                alt="Jared Chamberlain"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '3/4' }}
              />
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
              Jared Chamberlain, Founder
            </div>
          </div>

          {/* RIGHT: Copy */}
          <div className="order-1 md:order-2">
            <div className="section-label">Your Coach</div>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '32px',
              color: 'var(--text-primary)'
            }}>
              I built my real estate business on YouTube. Now I'm helping you do the same.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { stat: '$80K/month', desc: 'generated from YouTube leads' },
                { stat: '$171M+ sold', desc: 'in real estate volume from YouTube since 2022 — $3,996,258+ in GCI' },
                { stat: '16 years', desc: 'on video — started long before most agents knew YouTube was an option' },
                { stat: "Trained by Mr. Beast & Alex Hormozi's advisor", desc: 'learned from the best in the YouTube world' },
                { stat: '4.5M views', desc: '296.4K watch time hours, 21K+ subscribers' },
                { stat: '242+ weeks', desc: 'of consecutive publishing — never missed a week' },
                { stat: '230+ leads', desc: 'from one video in 2 days' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)', minWidth: '140px' }}>
                    {item.stat}
                  </div>
                  <div style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: 500, marginTop: '24px', lineHeight: 1.7 }}>
              I'm not a YouTube guru who's never sold a house. I'm a working agent who figured out how to make YouTube the most profitable thing in my business — and I want to help 1,000 agents do the same.
            </p>

            <a href="#audit" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 32px',
              background: '#1A1A1A',
              color: '#fff',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: 600,
              marginTop: '32px',
              transition: 'all 0.3s var(--ease-out-expo)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Get Your Free Audit &rarr;
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
