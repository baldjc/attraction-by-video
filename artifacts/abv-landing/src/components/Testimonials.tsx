import React from 'react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  { quote: "I closed a $3.2M deal from a YouTube lead. That's over $50,000 in commission from one video. This system works.", name: 'Jared Chamberlain', initials: 'JC', role: 'Founder, CREG — Calgary, AB' },
  { quote: "Within 3 months of following the Foundations system, I had more inbound leads than my entire first year of cold calling.", name: 'Member Result', initials: 'MR', role: 'Foundations Graduate' },
  { quote: "I went from 0 YouTube strategy to a fully systemised channel in 8 weeks. The ARC script alone is worth the membership.", name: 'Member Result', initials: 'SR', role: 'Foundations Member' },
  { quote: "The weekly live calls changed everything. Having Jared look at my actual channel and give real feedback — nothing else compares.", name: 'Member Result', initials: 'TK', role: 'Foundations Member' },
];

export function Testimonials() {
  const { ref, isVisible } = useInView();

  return (
    <section id="proof" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="container" ref={ref}>
        
        {/* HEADER */}
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="section-label">What Members Are Saying</div>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)'
          }}>
            Real agents. Real results.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.slice(0, 2).map((t, i) => (
            <div key={i} className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.1}s`, background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '36px' }}>
              <blockquote style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '24px' }}>
                "{t.quote}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-warm)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
          
          <div className={`fade-up ${isVisible ? 'visible' : ''} md:col-span-2`} style={{ transitionDelay: '0.2s', background: 'var(--bg-warm)', borderRadius: '24px', border: '1px solid var(--border)', padding: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '48px', color: 'var(--accent-azure)', lineHeight: 1, marginBottom: '8px' }}>$4M+</div>
            <div style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>in commissions generated from YouTube leads</div>
          </div>

          {testimonials.slice(2, 4).map((t, i) => (
            <div key={i+2} className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${(i+3) * 0.1}s`, background: '#fff', borderRadius: '24px', border: '1px solid var(--border)', padding: '36px' }}>
              <blockquote style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '24px' }}>
                "{t.quote}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-warm)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
