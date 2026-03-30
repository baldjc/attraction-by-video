import React from 'react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: "Working with Jared Chamberlain has been exactly what I needed to finally take YouTube seriously. I had wanted to do YouTube for years, but lacked clear direction and the motivation to stay consistent. Jared's coaching changed that. His classes are incredibly tactical, practical, and step-by-step, making the entire process easy to understand and actually implement. He doesn't hold anything back. He truly shares his playbook, which has been a game-changer for me. If you're someone who knows YouTube could be a powerful part of your business but feels stuck or overwhelmed, I highly recommend Jared. This program finally gave me clarity, confidence, and momentum.",
    name: 'Julie Roth',
    initials: 'JR',
    role: 'Foundations Member',
    avatar: '/images/avatars/julie-roth.png',
  },
  {
    quote: "If this continues the way I think it will, it'll change my life. Up to about 200 leads in a couple of weeks.",
    name: 'Paul Wolfert',
    initials: 'PW',
    role: 'Foundations Member',
    avatar: '/images/avatars/paul-wolfert.png',
  },
  {
    quote: '',
    name: '',
    initials: '',
    role: '',
    avatar: '',
    placeholder: true,
  },
  {
    quote: "The weekly live calls changed everything. Having Jared look at my actual channel and give real feedback — nothing else compares.",
    name: 'Member Result',
    initials: 'TK',
    role: 'Foundations Member',
    avatar: '',
  },
];

function Avatar({ avatar, initials }: { avatar: string; initials: string }) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={initials}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid var(--border)',
          flexShrink: 0,
        }}
      />
    );
  }
  return (
    <div style={{
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: 'var(--bg-warm)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 700,
      color: 'var(--text-secondary)',
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export function Testimonials() {
  const { ref, isVisible } = useInView();

  const realTestimonials = testimonials.filter(t => !t.placeholder);

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

          {/* Julie — full-width, long testimonial */}
          <div
            className={`fade-up ${isVisible ? 'visible' : ''} md:col-span-2`}
            style={{
              transitionDelay: '0s',
              background: '#fff',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              padding: '40px',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#f59e0b">
                  <path d="M8 1l1.8 3.6L14 5.2l-3 2.9.7 4.1L8 10.1l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
                </svg>
              ))}
            </div>
            <blockquote style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '28px' }}>
              "{testimonials[0].quote}"
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar avatar={testimonials[0].avatar} initials={testimonials[0].initials} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>{testimonials[0].name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{testimonials[0].role}</div>
              </div>
            </div>
          </div>

          {/* Paul — left column */}
          <div
            className={`fade-up ${isVisible ? 'visible' : ''}`}
            style={{
              transitionDelay: '0.1s',
              background: '#fff',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              padding: '36px',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#f59e0b">
                  <path d="M8 1l1.8 3.6L14 5.2l-3 2.9.7 4.1L8 10.1l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
                </svg>
              ))}
            </div>
            <blockquote style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '28px' }}>
              "{testimonials[1].quote}"
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar avatar={testimonials[1].avatar} initials={testimonials[1].initials} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>{testimonials[1].name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{testimonials[1].role}</div>
              </div>
            </div>
          </div>

          {/* Stat block — right column, matching height */}
          <div
            className={`fade-up ${isVisible ? 'visible' : ''}`}
            style={{
              transitionDelay: '0.2s',
              background: 'var(--bg-dark)',
              borderRadius: '24px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <div>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: 'var(--accent-azure)', lineHeight: 1, marginBottom: '8px' }}>$171M+</div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>in real estate volume sold from Jared's YouTube channel since 2022</div>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>$4M+</div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>in GCI generated from YouTube leads across the program</div>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: '52px', color: 'var(--accent-azure)', lineHeight: 1, marginBottom: '8px' }}>200+</div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>leads generated in a couple of weeks — Paul Wolfert</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
