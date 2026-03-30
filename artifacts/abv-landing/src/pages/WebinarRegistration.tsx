import React, { useState, useEffect, useRef } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { RegistrationModal } from '../components/RegistrationModal';
import { getSiteConfig, SITE_CONFIG_DEFAULTS, SiteConfig } from '../lib/site-config';

const COPPER = '#d3753d';

function useIntersect(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function CTAButton({ children, onClick, style }: { children: React.ReactNode; onClick: () => void; style?: React.CSSProperties }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#3dc3ff', color: '#fff',
        border: 'none', borderRadius: '12px',
        padding: '18px 48px',
        fontSize: '16px', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.06em',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: '0 4px 20px rgba(61,195,255,0.3)',
        fontFamily: "'Satoshi', sans-serif",
        ...style,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(61,195,255,0.45)';
        e.currentTarget.style.background = '#28b0f0';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(61,195,255,0.3)';
        e.currentTarget.style.background = '#3dc3ff';
      }}
    >
      {children}
    </button>
  );
}

function MistakeCard({ n, icon, title, desc }: { n: number; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{
      background: '#fff', borderRadius: '20px', padding: '32px',
      display: 'flex', flexDirection: 'column', gap: '16px',
    }}>
      <div style={{ color: COPPER }}>{icon}</div>
      <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: COPPER }}>
        Mistake #{n}
      </div>
      <h3 style={{
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 700, fontSize: '20px', color: '#111827', lineHeight: 1.25,
      }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

export function WebinarRegistration() {
  const [config, setConfig] = useState<SiteConfig>(SITE_CONFIG_DEFAULTS);
  const [modalOpen, setModalOpen] = useState(false);
  const hero = useIntersect(0.05);
  const problem = useIntersect();
  const alt = useIntersect();
  const discover = useIntersect();
  const about = useIntersect();
  const hardway = useIntersect();
  const close = useIntersect();

  useEffect(() => {
    getSiteConfig().then(setConfig);
  }, []);

  const wc = config.webinar;
  const openModal = () => setModalOpen(true);

  return (
    <div style={{ background: '#FAFAF8', fontFamily: "'Satoshi', sans-serif" }}>
      {modalOpen && <RegistrationModal config={wc} onClose={() => setModalOpen(false)} />}

      {/* ── 1. HERO ── */}
      <section style={{ background: '#1A1A1A', padding: 'clamp(120px,12vw,180px) 24px clamp(80px,8vw,120px)' }}>
        <div ref={hero.ref} className="container" style={{
          maxWidth: '860px', textAlign: 'center',
          opacity: hero.visible ? 1 : 0,
          transform: hero.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div style={{
            display: 'inline-block', fontSize: '12px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '9999px', padding: '8px 20px', marginBottom: '36px',
          }}>
            Stop Being Invisible to Your Dream Clients
          </div>

          <h1 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.06, letterSpacing: '-0.03em',
            color: '#fff', marginBottom: '28px',
          }}>
            <span style={{ color: COPPER }}>5 YouTube Mistakes</span>{' '}
            Making You Invisible to Clients and Costing You Millions
          </h1>

          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px',
          }}>
            Join Jared Chamberlain for this powerful, FREE masterclass where he'll show you exactly how to transform your YouTube strategy to attract clients instead of chasing them.
          </p>

          <p style={{
            fontSize: '16px', fontWeight: 600, color: COPPER,
            marginBottom: '40px', letterSpacing: '0.02em',
          }}>
            Date: {wc.date} &nbsp;||&nbsp; Time: {wc.time} &nbsp;||&nbsp; Price: {wc.price}
          </p>

          <CTAButton onClick={openModal}>
            Yes! Register My Spot Now!
          </CTAButton>

          {wc.spotsAvailable && (
            <p style={{
              marginTop: '16px', fontSize: '13px', fontWeight: 600,
              color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              Limited Spots Available
            </p>
          )}
        </div>
      </section>

      {/* ── 2. PROBLEM / EMPATHY ── */}
      <section style={{ background: '#FAFAF8', padding: 'clamp(80px,8vw,120px) 24px' }}>
        <div ref={problem.ref} className="container" style={{
          maxWidth: '1100px',
          opacity: problem.visible ? 1 : 0,
          transform: problem.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)',
            lineHeight: 1.1, letterSpacing: '-0.03em',
            color: '#111827', textAlign: 'center', marginBottom: '64px',
          }}>
            It's Time to{' '}
            <span style={{ color: COPPER }}>Stop Chasing Clients</span>{' '}
            and Start Attracting Them
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Jared photo placeholder */}
            <div style={{
              background: '#e5e7eb', borderRadius: '20px',
              aspectRatio: '4/5', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#9ca3af', fontSize: '14px',
            }}>
              Jared photo
            </div>

            {/* Questions */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {[
                  "When was the last time you felt confident that your marketing was actually working?",
                  "Are you tired of throwing money at ads that cost more every month?",
                  "Frustrated with calling leads who don\u2019t know who you are, except they are the ones that signed up through your ads?",
                  "Fed up with networking events that eat up your time but only connect you with one person at a time?",
                ].map((q, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '16px', alignItems: 'flex-start',
                    background: '#fff', border: '1px solid #e5e7eb',
                    borderRadius: '16px', padding: '20px 24px',
                  }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: COPPER, marginTop: '7px', flexShrink: 0,
                    }} />
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'If you\'re a business owner who has been struggling to get consistent, quality clients — you\'re not alone.',
                  'The traditional marketing methods that used to work are becoming less effective and more expensive every day. Meanwhile, your competition is finding new ways to reach clients you\'ve been trying to attract.',
                  'The good news? There\'s a better way. One that builds trust before you ever say a word, positions you as the expert in your market, and works 24/7 — even while you sleep.',
                  'This free masterclass will show you exactly how to build that system using YouTube.',
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.75, margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE ALTERNATIVE ── */}
      <section style={{ background: '#F5F4F0', padding: 'clamp(80px,8vw,120px) 24px' }}>
        <div ref={alt.ref} style={{
          opacity: alt.visible ? 1 : 0,
          transform: alt.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          display: 'flex', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', borderRadius: '24px',
            maxWidth: '720px', width: '100%',
            padding: 'clamp(32px,5vw,56px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)',
              color: '#111827', lineHeight: 1.1, marginBottom: '28px',
            }}>
              <span style={{ color: COPPER }}>The alternative?</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px', textAlign: 'left' }}>
              {[
                'What if instead of chasing clients, they came to you — already knowing who you are, already trusting your expertise, already sold on working with you before you\'ve even spoken?',
                'Imagine a marketing system that works around the clock, reaches hundreds or thousands of potential clients simultaneously, and gets more powerful the longer you use it.',
                'YouTube done right isn\'t just a social media channel. It\'s the most powerful client-attraction system available to local business owners today — and it\'s virtually untapped in most markets.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '16px', color: '#374151', lineHeight: 1.75, margin: 0 }}>{p}</p>
              ))}
            </div>

            <p style={{
              fontSize: '18px', fontWeight: 700, color: '#111827',
              marginBottom: '36px',
            }}>
              That's exactly what this free training is designed to do.
            </p>

            <CTAButton onClick={openModal}>
              Yes! Reserve My Free Spot
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT YOU'LL DISCOVER ── */}
      <section style={{ background: '#1A1A1A', padding: 'clamp(80px,8vw,120px) 24px' }}>
        <div ref={discover.ref} className="container" style={{
          maxWidth: '1100px',
          opacity: discover.visible ? 1 : 0,
          transform: discover.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)',
            lineHeight: 1.1, letterSpacing: '-0.03em',
            textAlign: 'center', marginBottom: '64px',
          }}>
            <span style={{ color: COPPER }}>What You'll Discover</span>{' '}
            <span style={{ color: '#fff' }}>in This Free Training</span>
          </h2>

          {/* 3-top, 2-bottom bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <MistakeCard
              n={1}
              icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>}
              title="Not Seeing the YouTube Opportunity"
              desc="Most business owners scroll past the single biggest client-attraction channel available. We'll show you exactly what you're missing — and why it's still wide open in most markets."
            />
            <MistakeCard
              n={2}
              icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="2"/></svg>}
              title="Not Using AI in Your Business and Content"
              desc="AI isn't just a buzzword — it's a content multiplier that can cut your production time by 80%. Learn exactly which tools matter and how to integrate them into your workflow."
            />
            <MistakeCard
              n={3}
              icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>}
              title="Not Knowing What Makes Your Content Suck"
              desc="Most YouTube channels die not from lack of effort — but from fixable, technical mistakes. We'll diagnose the exact issues holding your channel back and how to fix them fast."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-16">
            <MistakeCard
              n={4}
              icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>}
              title="Not Attracting Your Perfect Client"
              desc="Random views won't build your business. You need a system that consistently puts your content in front of the exact people who are ready to hire you — and keeps them coming back."
            />
            <MistakeCard
              n={5}
              icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="11.5" x2="17" y2="6.5"/><line x1="7" y1="12.5" x2="17" y2="17.5"/></svg>}
              title="Not Having a Proven, Repeatable Strategy"
              desc="Winging it doesn't scale. Jared will walk you through the exact repeatable system that generated $3.99M+ in GCI — so you can replicate it in your own market."
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <CTAButton onClick={openModal}>
              Yes! I Want to Learn All 5 Mistakes
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT YOUR HOST ── */}
      <section style={{ background: '#FAFAF8', padding: 'clamp(80px,8vw,120px) 24px' }}>
        <div ref={about.ref} className="container" style={{
          maxWidth: '1100px',
          opacity: about.visible ? 1 : 0,
          transform: about.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Jared photo placeholder */}
            <div style={{
              background: '#e5e7eb', borderRadius: '20px',
              aspectRatio: '1/1', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#9ca3af', fontSize: '14px',
              maxWidth: '480px', width: '100%',
            }}>
              Jared headshot (arms crossed)
            </div>

            <div>
              <div style={{
                fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.12em', color: COPPER, marginBottom: '16px',
              }}>
                About Your Host
              </div>
              <h2 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)',
                lineHeight: 1.1, letterSpacing: '-0.03em',
                color: '#111827', marginBottom: '28px',
              }}>
                Meet{' '}
                <span style={{ color: COPPER }}>Jared Chamberlain</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  Built a multi-7-figure local business with his wife, dedicated dance dad to two teenage daughters, bald longer than he had hair, car enthusiast, and music lover who discovered the secret to turning YouTube into a client-attraction machine for his own local business.
                </p>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#111827', lineHeight: 1.6, margin: 0 }}>
                  In the past 4 years, Jared's YouTube strategy has generated $3,996,258+ in GCI.
                </p>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  Jared's proven systems focus specifically on local exposure (not national), work within the time constraints of busy business owners, and show you how to do this efficiently and effectively with AI — unlike anything you'll see anywhere else.
                </p>
              </div>

              <div style={{ marginTop: '36px' }}>
                <CTAButton onClick={openModal}>
                  Learn from Jared — It's Free
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE HARD WAY ── */}
      <section style={{ background: '#1A1A1A', padding: 'clamp(80px,8vw,120px) 24px' }}>
        <div ref={hardway.ref} className="container" style={{
          maxWidth: '900px',
          opacity: hardway.visible ? 1 : 0,
          transform: hardway.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)',
            lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '8px',
          }}>
            <span style={{ color: COPPER }}>You Can Do</span>{' '}
            <span style={{ color: '#fff' }}>It the Hard Way...</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginBottom: '48px', fontWeight: 600 }}>
            The Hard Way (Don't Do This!)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              'Start a YouTube Channel to reach new people, talking about what you like.',
              'You shoot random content that no one cares about or watches.',
              'You get too busy in your business to stay consistent, don\'t have a road map and there are no results!',
            ].map((text, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '20px', padding: '32px',
                textAlign: 'left', position: 'relative',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: COPPER, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 800, fontSize: '16px', marginBottom: '16px',
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '18px', color: '#fff', fontWeight: 600, marginBottom: '32px',
          }}>
            Want the easy way? Sign up for the masterclass!
          </p>

          <CTAButton onClick={openModal}>
            Yes, I Want the Easy Way
          </CTAButton>
        </div>
      </section>

      {/* ── 7. FINAL URGENCY CLOSE ── */}
      <section style={{ background: '#FAFAF8', padding: 'clamp(80px,8vw,120px) 24px' }}>
        <div ref={close.ref} className="container" style={{
          maxWidth: '1100px',
          opacity: close.visible ? 1 : 0,
          transform: close.visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Workspace photo placeholder */}
            <div style={{
              background: '#e5e7eb', borderRadius: '20px',
              aspectRatio: '4/3', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#9ca3af', fontSize: '14px',
            }}>
              Workspace / lifestyle photo
            </div>

            <div>
              <h2 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)',
                lineHeight: 1.1, letterSpacing: '-0.03em',
                color: '#111827', marginBottom: '28px',
              }}>
                <span style={{ color: COPPER }}>Don't Let</span> Another Day Pass By Without Taking Action
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                {[
                  'Your dream client-attraction system isn\'t going to build itself.',
                  'Every day you wait is another day your competition edges closer to the clients you deserve. Every day you wait is another day of expensive ads, cold calls, and inconsistent referrals.',
                  'The business owners who are thriving with YouTube were once exactly where you are now. They made a decision to do something different. They took action.',
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: '15px', color: '#374151', lineHeight: 1.75, margin: 0 }}>{p}</p>
                ))}
                <p style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: 0 }}>
                  Now it's your turn.
                </p>
              </div>

              <CTAButton onClick={openModal}>
                Reserve My Free Spot Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FOOTER ── */}
      <Footer />

      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500&f[]=satoshi@400,500,700&display=swap');
      `}</style>
    </div>
  );
}
