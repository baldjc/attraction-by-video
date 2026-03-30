import React from 'react';
import { useInView } from '../hooks/useInView';

const members = [
  {
    name: 'Julie Roth',
    handle: 'Julie Roth',
    role: 'Foundations Member',
    avatar: '/images/avatars/julie-roth.png',
    time: 'Today at 9:41 AM',
    reaction: '🔥',
    reactionCount: 14,
    message:
      "Working with Jared has been exactly what I needed to finally take YouTube seriously. I had wanted to do YouTube for years, but lacked clear direction and the motivation to stay consistent. Jared\u2019s coaching changed that. His classes are incredibly tactical, practical, and step-by-step \u2014 making the entire process easy to understand and actually implement. He doesn\u2019t hold anything back. He truly shares his playbook, which has been a game-changer for me. If you\u2019re stuck or overwhelmed, I highly recommend this program. It finally gave me clarity, confidence, and momentum.",
    wide: true,
  },
  {
    name: 'Paul Wolfert',
    handle: 'Paul Wolfert',
    role: 'Foundations Member',
    avatar: '/images/avatars/paul-wolfert.png',
    time: 'Today at 10:07 AM',
    reaction: '🙌',
    reactionCount: 22,
    message:
      "If this continues the way I think it will, it\u2019ll change my life. Up to about 200 leads in a couple of weeks.",
    wide: false,
  },
  {
    name: 'Phil Martin',
    handle: 'Phil Martin',
    role: 'Growth + Foundations Member',
    avatar: '/images/avatars/phil-martin.png',
    time: 'Today at 10:23 AM',
    reaction: '💡',
    reactionCount: 18,
    message:
      "Jared is the first person I\u2019ve ever met that can actually explain the rhyme and the reason \u2014 A plus B equals C, meaning leads. Consistent leads. He\u2019s cracked a code that takes all the voodoo out and all the complexity out. Forget the hype. Have an approach, do the work, stay consistent. I know for a fact this is passive marketing that consistently generates quality leads.",
    wide: false,
  },
];

function SlackCard({ member, delay, wide }: { member: typeof members[0]; delay: string; wide: boolean }) {
  return (
    <div
      className={`${wide ? 'md:col-span-2' : ''}`}
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e8e8e8',
        padding: '20px 20px 16px 20px',
        fontFamily: "'Slack-Lato', 'Lato', system-ui, sans-serif",
      }}
    >
      {/* Slack message header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        {/* Square avatar — Slack style */}
        <img
          src={member.avatar}
          alt={member.name}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '6px',
            objectFit: 'cover',
            objectPosition: 'top center',
            flexShrink: 0,
          }}
        />
        {/* Name + timestamp + message */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 900, fontSize: '15px', color: '#1d1c1d', letterSpacing: '-0.01em' }}>
              {member.name}
            </span>
            <span style={{ fontSize: '12px', color: '#616061', fontWeight: 400 }}>{member.time}</span>
          </div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#1d1c1d', fontWeight: 400 }}>
            {member.message}
          </p>
        </div>
      </div>

      {/* Reaction */}
      <div style={{ marginTop: '10px', marginLeft: '52px' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: '#f2f2f2',
          border: '1px solid #e8e8e8',
          borderRadius: '20px',
          padding: '3px 10px',
          fontSize: '13px',
          color: '#616061',
          cursor: 'default',
        }}>
          <span>{member.reaction}</span>
          <span style={{ fontWeight: 700, color: '#1264a3' }}>{member.reactionCount}</span>
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref, isVisible } = useInView();

  return (
    <section id="proof" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="container" ref={ref}>

        {/* HEADER */}
        <div
          style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}
          className={`fade-up ${isVisible ? 'visible' : ''}`}
        >
          <div className="section-label">What Members Are Saying</div>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
          }}>
            Real agents. Real results.
          </h2>
        </div>

        {/* SLACK-STYLE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Julie — full-width */}
          <SlackCard member={members[0]} delay="0s" wide={true} />

          {/* Paul — left column */}
          <SlackCard member={members[1]} delay="0.1s" wide={false} />

          {/* Phil — right column */}
          <SlackCard member={members[2]} delay="0.2s" wide={false} />

          {/* Stat block — full-width */}
          <div
            className={`fade-up ${isVisible ? 'visible' : ''} md:col-span-2`}
            style={{
              transitionDelay: '0.3s',
              background: 'var(--bg-dark)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ alignItems: 'center' }}>
              <div className="stat-cell" style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--accent-azure)', lineHeight: 1, marginBottom: '8px' }}>$171M+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>in volume sold from Jared's YouTube channel since 2022</div>
              </div>
              <div className="stat-cell" style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>$4M+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>in GCI generated from YouTube leads across the program</div>
              </div>
              <div className="stat-cell" style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--accent-azure)', lineHeight: 1, marginBottom: '8px' }}>200+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>leads in a couple of weeks — Paul Wolfert</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
