import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

export function BeforeAfter() {
  const { ref, isVisible } = useInView();
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const target = 287400;
      const duration = 2000; // ms
      const steps = 60;
      const increment = target / steps;
      const stepTime = duration / steps;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setViews(target);
          clearInterval(interval);
        } else {
          setViews(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="results" style={{ background: 'var(--bg-dark)', color: '#fff', padding: '120px 0' }}>
      <div className="container" ref={ref}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>The Proof</div>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#fff'
          }}>
            Same agent. Same market. Different system.
          </h2>
        </div>

        {/* SIDE-BY-SIDE COMPARISON */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          
          {/* BEFORE */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '24px' }}>Without a system</div>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '56px', color: 'rgba(255,255,255,0.3)', lineHeight: 1 }}>13,180</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '8px', marginBottom: '24px' }}>views across 12 videos</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>Didn't know what to shoot. Pushed videos with ads. No leads.</div>
          </div>

          {/* AFTER */}
          <div style={{ background: 'rgba(61,195,255,0.08)', border: '1px solid rgba(61,195,255,0.2)', borderRadius: '24px', padding: '40px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-azure)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '24px' }}>With the Attraction system</div>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '56px', color: '#fff', lineHeight: 1 }}>{views.toLocaleString()}</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', marginBottom: '24px' }}>views across 12 videos</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Repeatable system implemented. No ads needed. Lots of leads.</div>
          </div>
        </div>

        {/* CENTRE CALLOUT */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s', fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '32px', color: 'var(--accent-azure)', textAlign: 'center', marginTop: '32px' }}>
          22x more views.
        </div>

        {/* 3-COLUMN YOUTUBE STATS ROW */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '48px' }}>
          <div>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', color: '#fff', marginBottom: '8px' }}>68%</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>use YouTube to help make purchase decisions</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', color: '#fff', marginBottom: '8px' }}>50%</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>of all purchases now involve video</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', color: '#fff', marginBottom: '8px' }}>34%</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>was the number just 4 years ago — it's accelerating</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', transitionDelay: '0.4s' }} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <a href="#audit" style={{
            display: 'inline-block',
            background: '#fff',
            color: '#1A1A1A',
            borderRadius: '100px',
            padding: '16px 40px',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s var(--ease-out-expo)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            Get Your Free Audit — See Where You Stand
          </a>
        </div>

      </div>
    </section>
  );
}
