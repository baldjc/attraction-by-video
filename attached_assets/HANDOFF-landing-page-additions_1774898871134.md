# Landing Page (www.attractionbyvideo.com) — Additional Pages

## Context

This project already has the main landing page being built from the implementation plan. This document adds:
1. **Webinar Registration page** (`/webinar-registration`)
2. **Webinar Thank-You page** (`/webinar-thank-you`)
3. **Audit Thank-You page** (`/thank-you`)
4. **Fetching dynamic config** from the tracker site API

All pages use the same minimalist taste-skill design system already established in the main landing page build.

---

## Fetching Dynamic Config

The webinar date, time, links, and other dynamic values are managed from the tracker site admin panel and exposed via a public API.

**On any page that needs webinar config:**

```typescript
async function getWebinarConfig() {
  const res = await fetch('https://members.attractionbyvideo.com/api/public/site-config', {
    next: { revalidate: 60 }, // Cache for 60 seconds (Next.js)
  })
  return res.json()
}

// Returns:
// {
//   webinar: {
//     date: "May 14th 2026",
//     time: "11:00 AM MST",
//     name: "5 YouTube Mistakes Keeping You Invisible to Your Best Clients",
//     price: "Absolutely FREE!",
//     link: "https://us06web.zoom.us/...",
//     replayLink: "https://youtu.be/...",
//     group: "https://www.skool.com/bcmng",
//     calendarLink: "https://evt.to/...",
//     bookingLink: "https://api.leadconnectorhq.com/...",
//     offerLink: "https://attractionbyvideo.com/...",
//     spotsAvailable: true,
//     registrationOpen: true
//   }
// }
```

**Fallback:** If the API is unreachable, use hardcoded defaults so the page still renders.

---

## Page 1: Webinar Registration (`/webinar-registration`)

### Design

Same taste-skill aesthetic as the main landing page: Cabinet Grotesk headlines, Satoshi body, warm neutrals, scroll-triggered animations, no emojis (use SVG icons).

### Structure (8 sections, top to bottom)

#### 1. Hero
- **Background:** Dark (#1A1A1A), full width, centred text
- Eyebrow: "STOP BEING INVISIBLE TO YOUR DREAM CLIENTS" — 13px, 600 weight, uppercase, letter-spacing 0.12em, white
- Headline: "5 YouTube Mistakes Making You Invisible to Clients and Costing You Millions" — Cabinet Grotesk 800, clamp(36px, 5vw, 64px)
  - "5 YouTube Mistakes" in accent colour (#d3753d copper — matches the webinar brand)
  - Rest in white
- Subheadline: "Join Jared Chamberlain for this powerful, FREE masterclass where he'll show you exactly how to transform your YouTube strategy to attract clients instead of chasing them." — 17px, rgba(255,255,255,0.7), max-width 720px
- **Dynamic line:** `Date: ${config.webinar.date}  ||  Time: ${config.webinar.time}  ||  Price: ${config.webinar.price}` — 16px, 600 weight, accent colour
- CTA button: "YES! REGISTER MY SPOT NOW!" — accent-azure bg (#3dc3ff), white text, 18px 700 weight, rounded-lg, padding 18px 48px. Opens registration modal.
  - Subtext: "LIMITED SPOTS AVAILABLE" (only shown if `config.webinar.spotsAvailable === true`)

#### 2. Problem / Empathy
- **Background:** Light (#FAFAF8)
- Headline: "It's Time to Stop Chasing Clients and Start Attracting Them" — "Stop Chasing Clients" in accent
- Split layout: Jared photo left, 4 questions right:
  1. "When was the last time you felt confident that your marketing was actually working?"
  2. "Are you tired of throwing money at ads that cost more every month?"
  3. "Frustrated with calling leads who don't know who you are, except they are the ones that signed up through your ads?"
  4. "Fed up with networking events that eat up your time but only connect you with one person at a time?"
- Below: 4 paragraphs of body copy (see full spec doc for exact text). Max-width 800px, centred.

#### 3. The Alternative (Card)
- **Background:** Warm (#F5F4F0)
- Centred white card (max-width 720px, rounded-xl, padding 48px, shadow-md)
- Headline: "The alternative?" in accent
- Body copy about transformation (see spec for full text)
- Bold closer: "That's exactly what this free training is designed to do."
- CTA button (same style, opens modal)

#### 4. What You'll Discover (5 Mistakes)
- **Background:** Dark (#1A1A1A)
- Headline: "What You'll Discover in This Free Training" — "What You'll Discover" in accent
- Asymmetric card grid (3 top, 2 bottom centred — NOT equal 3-col, use bento-style):
  1. Mistake #1: "Not Seeing the YouTube Opportunity" — magnifying glass icon
  2. Mistake #2: "Not Using AI in Your Business and Content" — sparkle/AI icon
  3. Mistake #3: "Not Knowing What Makes Your Content Suck" — person icon
  4. Mistake #4: "Not Attracting Your Perfect Client" — target/person icon
  5. Mistake #5: "Not Having a Proven, Repeatable Strategy" — connected nodes icon
- Each card: white, rounded-xl, padding 32px. SVG icon (accent colour, 48-64px), label "MISTAKE #N" in accent uppercase, title in Cabinet Grotesk 700, description 14px text-secondary.
- CTA button below grid

#### 5. About Your Host
- **Background:** Light (#FAFAF8)
- Split: Jared headshot (arms crossed) left, bio right
- Headline: "About Your Host" — "Your Host" in accent
- Bio text:
  - "Meet Jared Chamberlain — built a multi-7-figure local business with his wife, dedicated dance dad to two teenage daughters, bald longer than he had hair, car enthusiast, and music lover who discovered the secret to turning YouTube into a client-attraction machine for his own local business."
  - **Bold:** "In the past 4 years, Jared's YouTube strategy has generated $3,996,258+ in GCI."
  - "Jared's proven systems focus specifically on local exposure (not national), work within the time constraints of busy business owners, and show you how to do this efficiently and effectively with AI — unlike anything you'll see anywhere else."

#### 6. The Hard Way (3-Step Warning)
- **Background:** Dark (#1A1A1A)
- Headline: "You Can Do It the Hard Way..." — "You Can Do" in accent
- Subheadline: "The Hard Way (Don't Do This!)"
- 3 white cards with numbered circles (copper/orange bg, white text):
  1. "Start a YouTube Channel to reach new people, talking about what you like."
  2. "You shoot random content that no one cares about or watches."
  3. "You get too busy in your business to stay consistent, don't have a road map and there are no results!"
- "Want the easy way? Sign up for the masterclass!" — white text, centred
- CTA: "YES, I WANT THE EASY WAY"

#### 7. Final Urgency Close
- **Background:** Light with subtle texture
- Headline: "Don't Let Another Day Pass By Without Taking Action" — "Don't Let" in accent
- Split: workspace photo left, copy right:
  - "Your dream client-attraction system isn't going to build itself..."
  - "The business owners who are thriving with YouTube were once exactly where you are now..."
  - **Bold:** "Now it's your turn."
- CTA: "RESERVE MY FREE SPOT NOW"

#### 8. Footer
- Dark, "© 2026 Jared Chamberlain - All Rights Reserved", centred, 13px

### Registration Modal

All CTA buttons open the same modal (not a separate page section):

- Overlay: rgba(0,0,0,0.6), centred modal
- Modal: white, rounded-xl, max-width 480px, padding 40px
- Close X button top-right
- Headline: "Reserve Your Free Spot" — Cabinet Grotesk 700, 28px
- Dynamic: `${config.webinar.date} at ${config.webinar.time}` — accent colour, 14px 600 weight
- Fields:
  1. Full Name (text, required)
  2. Email (email, required)
  3. Cell Phone (tel, required)
- Submit: "REGISTER NOW — IT'S FREE" — full-width accent-azure button
- Subtext: "We'll send you a confirmation and reminder before the event."
- Form POSTs to GHL webhook:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitting(true)

  const params = new URLSearchParams(window.location.search)

  const response = await fetch('GHL_WEBINAR_WEBHOOK_URL_HERE', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      tags: ['webinar-registration'],
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    }),
  })

  if (response.ok) {
    window.location.href = '/webinar-thank-you'
  } else {
    setError('Something went wrong. Please try again.')
    setSubmitting(false)
  }
}
```

`{/* TODO: Replace GHL_WEBINAR_WEBHOOK_URL_HERE with actual webhook URL */}`

---

## Page 2: Webinar Thank-You (`/webinar-thank-you`)

- Same design system, centred layout
- Nav (same as main pages)
- Centred content (max-width 640px, vertically centred, min-height 100dvh):
  - Animated checkmark (accent-azure, SVG draw animation)
  - h1: "You're registered!" — Cabinet Grotesk 800, 48px
  - Dynamic: `${config.webinar.date} at ${config.webinar.time}` — accent colour, 18px
  - "What happens next:" card (bg-card, border, rounded, padding 32px):
    - Timeline with vertical line + dots:
      1. "Right now" — "Check your phone — we just sent you a confirmation."
      2. "Before the event" — "We'll send you a reminder with the Zoom link."
      3. "On the day" — "Show up, take notes, and get ready to transform your YouTube strategy."
  - Calendar add button: "Add to Calendar" — links to `config.webinar.calendarLink`
  - Secondary link: "Join the community while you wait" — links to `config.webinar.group`
- Footer
- **Conversion pixel placeholder:** `{/* TODO: Add Google Ads / Meta conversion tracking pixel here */}`

---

## Page 3: Audit Thank-You (`/thank-you`)

- Same design system, centred layout
- Nav
- Centred content (max-width 640px, min-height 100dvh):
  - Animated checkmark
  - h1: "Your audit is underway." — Cabinet Grotesk 800, 48px
  - Subtext: "We need 48 hours to analyse your channel across our 16-point Attraction system. We'll text you to book your walkthrough call as soon as it's ready." — 17px, text-secondary
  - "What happens next:" card:
    - Timeline:
      1. "Right now" — "Check your phone — we just sent you a confirmation text."
      2. "Next 48 hours" — "We run your full 16-point Attraction Audit."
      3. "When it's ready" — "We'll text you a link to book your 15-minute walkthrough call."
  - CTA: "While you wait, watch this" — links to Jared's YouTube channel or VSL
  - Small text: "Questions? Email jared@attractionbyvideo.com"
- Footer
- **Conversion pixel placeholder:** `{/* TODO: Add Google Ads / Meta conversion tracking pixel here */}`

---

## Accent Colour Note

The webinar page uses a **copper/orange accent (#d3753d)** to differentiate from the main landing page's azure (#3dc3ff). Define it as a CSS variable on the webinar page:

```css
/* On /webinar-registration only */
:root {
  --accent-page: #d3753d;
}
```

The main landing page and thank-you pages continue using `--accent-azure: #3dc3ff`.

---

## File Structure (additions to existing project)

```
app/
├── webinar-registration/
│   └── page.tsx          # Webinar registration page
├── webinar-thank-you/
│   └── page.tsx          # Webinar thank-you page
├── thank-you/
│   └── page.tsx          # Audit thank-you page
├── lib/
│   └── site-config.ts    # Fetch config from tracker site API
├── components/
│   ├── RegistrationModal.tsx  # Shared webinar registration modal
│   └── ThankYouLayout.tsx     # Shared thank-you page layout
```

### `lib/site-config.ts`

```typescript
const CONFIG_URL = 'https://members.attractionbyvideo.com/api/public/site-config'

const DEFAULTS = {
  webinar: {
    date: 'May 14th 2026',
    time: '11:00 AM MST',
    name: '5 YouTube Mistakes Keeping You Invisible to Your Best Clients',
    price: 'Absolutely FREE!',
    link: '',
    replayLink: '',
    group: '',
    calendarLink: '',
    bookingLink: '',
    offerLink: '',
    spotsAvailable: true,
    registrationOpen: true,
  },
}

export async function getSiteConfig() {
  try {
    const res = await fetch(CONFIG_URL, { next: { revalidate: 60 } })
    if (!res.ok) return DEFAULTS
    return await res.json()
  } catch {
    return DEFAULTS
  }
}
```
