import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const beforeVideos = [
  { title: 'SOLD: A Gorgeous Killarney Townhome – Calgary Real Estate', views: '64', ago: '12 years ago', duration: '2:35' },
  { title: 'SOLD: A Beautiful Copperfield Family Home – Calgary Real Estate', views: '100', ago: '12 years ago', duration: '2:44' },
  { title: '2611 17A Street SW | Homes by The Chamberlain Group', views: '128', ago: '12 years ago', duration: '2:01' },
];

const afterVideos = [
  { title: 'Do NOT Buy a New Home in Calgary Right Now (HERE\'S WHY)', views: '79K', ago: '1 month ago', duration: '22:51', hot: true },
  { title: 'Calgary Real Estate Market Update – May 2025', views: '22K', ago: '2 weeks ago', duration: '22:05' },
  { title: 'Avoid Being Scammed by Movers (5 Red Flags & Insider Tips)', views: '9.5K', ago: '11 days ago', duration: '10:45' },
];

function VideoRow({ title, views, ago, duration, hot = false, variant }: {
  title: string; views: string; ago: string; duration: string; hot?: boolean; variant: 'before' | 'after';
}) {
  const isBefore = variant === 'before';
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Thumbnail */}
      <div style={{
        width: '80px',
        height: '48px',
        borderRadius: '6px',
        flexShrink: 0,
        background: isBefore
          ? 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))'
          : 'linear-gradient(135deg, rgba(61,195,255,0.15), rgba(0,80,120,0.3))',
        border: isBefore ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(61,195,255,0.2)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: '4px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Play icon hint */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: isBefore ? 'rgba(255,255,255,0.1)' : 'rgba(61,195,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 0,
            height: 0,
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderLeft: isBefore ? '6px solid rgba(255,255,255,0.3)' : '6px solid rgba(61,195,255,0.9)',
            marginLeft: '2px',
          }} />
        </div>
        {/* Duration badge */}
        <span style={{
          fontSize: '9px',
          fontWeight: 600,
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '1px 4px',
          borderRadius: '3px',
          position: 'relative',
          zIndex: 1,
        }}>{duration}</span>
      </div>

      {/* Meta */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '12px',
          fontWeight: 500,
          color: isBefore ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.85)',
          lineHeight: 1.4,
          marginBottom: '4px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>{title}</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {hot && (
            <span style={{
              fontSize: '9px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              background: 'rgba(255,0,51,0.2)',
              color: '#ff0033',
              padding: '1px 6px',
              borderRadius: '3px',
            }}>🔥 Top</span>
          )}
          <span style={{ fontSize: '11px', color: isBefore ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
            {views} views · {ago}
          </span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const { ref, isVisible } = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const target = 287400;
    const steps = 60;
    const stepTime = 2000 / steps;
    const inc = target / steps;
    const interval = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, stepTime);
    return () => clearInterval(interval);
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
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#fff',
            marginBottom: '16px',
          }}>
            Same agent. Same market.<br />Different system.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto' }}>
            This is Jared's actual channel. 12 videos each. The only thing that changed was the system.
          </p>
        </div>

        {/* COMPARISON PANELS */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>

          {/* BEFORE */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '32px',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)' }}>
                Without a system
              </span>
            </div>

            {/* Big number */}
            <div style={{ marginBottom: '4px' }}>
              <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: 'rgba(255,255,255,0.25)', lineHeight: 1 }}>
                13,180
              </span>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '24px' }}>views across 12 videos</div>

            {/* Video list */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '4px' }}>
              {beforeVideos.map((v, i) => (
                <VideoRow key={i} {...v} variant="before" />
              ))}
            </div>

            <div style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
              Listing videos, no strategy, paid ads to boost reach. Zero inbound leads from content.
            </div>
          </div>

          {/* AFTER */}
          <div style={{
            background: 'rgba(61,195,255,0.06)',
            border: '1px solid rgba(61,195,255,0.2)',
            borderRadius: '20px',
            padding: '32px',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-azure)' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-azure)' }}>
                With the Attraction system
              </span>
            </div>

            {/* Big number (animated) */}
            <div style={{ marginBottom: '4px' }}>
              <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: '#fff', lineHeight: 1 }}>
                {count.toLocaleString()}
              </span>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>views across 12 videos</div>

            {/* Video list */}
            <div style={{ borderTop: '1px solid rgba(61,195,255,0.1)', paddingTop: '4px' }}>
              {afterVideos.map((v, i) => (
                <VideoRow key={i} {...v} variant="after" />
              ))}
            </div>

            <div style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              Attraction system applied. No ad spend on content. Leads rolling in from search every week.
            </div>
          </div>
        </div>

        {/* 22x CALLOUT */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.2s',
          textAlign: 'center',
          marginTop: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)', maxWidth: '200px' }} />
          <span style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: '28px',
            color: 'var(--accent-azure)',
          }}>22× more views. Zero ad spend.</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)', maxWidth: '200px' }} />
        </div>

        {/* 3-COLUMN STATS */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-up ${isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.3s',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '56px',
          marginTop: '56px',
        }}>
          {[
            { stat: '68%', label: 'of everyone in your city uses YouTube to help make large financial decisions' },
            { stat: '50%', label: 'of all purchases now involve video at some point in the journey' },
            { stat: '34%', label: 'was this number just 4 years ago — the gap is widening fast' },
          ].map(({ stat, label }, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                {stat}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }} className={`fade-up ${isVisible ? 'visible' : ''}`} >
          <a href="#audit" style={{
            display: 'inline-block',
            background: '#fff',
            color: '#1A1A1A',
            borderRadius: '100px',
            padding: '16px 40px',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo)',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            Get Your Free Audit — See Where You Stand
          </a>
        </div>

      </div>
    </section>
  );
}
