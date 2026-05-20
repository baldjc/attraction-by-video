# Audit Landing Page — Blueprint & Build Prompt

*Created May 20, 2026. The dedicated front-door page for the Attraction Audit funnel, built as a new page in the front-end repo. One job: turn a warm click into a submitted audit form. No video, no nav, no pricing, no membership pitch. The selling happens one step later, inside the audit report.*

---

## Why this page is deliberately bare

The Attraction Audit funnel runs on the Taki Moore model. A reel gets an agent to comment "AUDIT," an automated DM sends them a link, and the link brings them here. By the time someone lands on this page, they have already raised their hand twice. They commented, and they tapped the link in the DM. They are warm. They do not need to be sold again. They need to be collected.

A marketing website and a funnel landing page have opposite jobs. attractionbyvideo.com is a menu. It lets every kind of visitor self-select, which is exactly right for a website. This page is not a menu. It has one visitor, the agent who just clicked, and one next step, the submitted form. Every other element on the page, a nav bar, a pricing table, a "Join Now" button, a link back to the main site, is a place for that visitor to leak out before they convert.

The selling does not happen here. It happens inside the audit report, where a short video does the membership pitch after the agent has seen their own score. That is the right place for it. This page stays bare on purpose, and the simplicity is the strategy, not a compromise.

## Page rules (non-negotiable)

- No top navigation. No footer links. A logo is fine, but it does not link anywhere.
- No "Join Now," no pricing, no membership tiers, no Done-For-You mention.
- No video.
- One call to action only: submit the audit form.
- Single column. Mobile first. Fast load.
- Use the existing Attraction brand colours and type so the page feels like home, just stripped down.

## The page, top to bottom

A short eyebrow line, a headline, a one-line subhead, the form with a three-point proof strip, and a short "what happens next" note under the form. That is the entire page. Nothing else.

### Final copy (paste-ready)

**Eyebrow (small, uppercase):**

> A FREE YOUTUBE CHANNEL AUDIT FOR REAL ESTATE AGENTS

**Headline:**

> Find out exactly what's stopping your YouTube channel from bringing you leads.

**Subhead (one line):**

> Get your free Attraction Audit. We score your channel against the 16 principles that turn views into real estate clients, then send you a personalised report within 48 hours. No call required to get it.

**Form heading (small, above the fields):**

> Tell us where to send your audit. Takes about 60 seconds.

**Form fields:**

- First name
- Email
- Mobile phone
- Your YouTube channel URL
- Your current annual GCI
- Your GCI goal

**Button:**

> Send Me My Free Audit

**Proof strip (three points, beside or directly below the form):**

- $45M+ in real estate sold from YouTube leads in 2025
- A new video every week since June 2020
- The same 16-principle system 22 agents now run

**What happens next (short note under the form):**

> Once you submit, we build your audit by hand. Within 48 hours you'll get a personalised report on your channel, scored across all 16 principles, with the three biggest gaps holding your leads back. Keep an eye on your inbox.

## Notes on the form

The funnel currently runs a 7-field audit form, and the downstream audit-production flow depends on it. The build prompt below reuses that existing form rather than redesigning it, so nothing breaks behind the scenes. The field list above is the target shape if the form is ever rebuilt: lean, six fields, every one of them earning its place. The two GCI fields are the qualifier, and the phone number is the recovery channel for the 48-hour wait. If the current form has extra fields beyond these, that is a separate conversation, not a change to make inside this build.

## Replit Build Prompt (paste-ready)

Build a new standalone landing page in the front-end repo at the route `/audit`. This is a dedicated funnel landing page, not part of the main site navigation.

**Layout and behaviour:**

- The page does not render the global site header/nav or the global footer. If a header is needed, show only the Attraction logo, not linked to anything and not clickable through to the main site.
- Single column, centred, mobile first. Generous spacing. Fast load, no heavy assets.
- Use the existing Attraction brand colours, fonts, and button styling so it is visually consistent with attractionbyvideo.com.
- No video embeds. No pricing. No membership or Done-For-You content. No links that leave the page. The only interactive element is the audit form and its submit button.

**Page content, in order:**

1. Eyebrow line, small uppercase: `A FREE YOUTUBE CHANNEL AUDIT FOR REAL ESTATE AGENTS`
2. Headline (H1): `Find out exactly what's stopping your YouTube channel from bringing you leads.`
3. Subhead, one line: `Get your free Attraction Audit. We score your channel against the 16 principles that turn views into real estate clients, then send you a personalised report within 48 hours. No call required to get it.`
4. The audit form. Reuse the exact fields, validation, and submission endpoint from the current audit form so the existing audit-production flow downstream is unchanged. Submit button label: `Send Me My Free Audit`. Do not redesign the form or change its field set or GCI brackets.
5. A three-item proof strip near the form, as small stat chips: `$45M+ in real estate sold from YouTube leads in 2025`, `A new video every week since June 2020`, `The same 16-principle system 22 agents now run`.
6. A short note directly under the form: `Once you submit, we build your audit by hand. Within 48 hours you'll get a personalised report on your channel, scored across all 16 principles, with the three biggest gaps holding your leads back. Keep an eye on your inbox.`

**Acceptance:**

- Visiting `/audit` shows only the elements above, with no global nav or footer and no outbound links.
- The form submits through the same backend path as the current audit form, and a test submission still produces an audit record.
- The page is fully responsive and reads cleanly on a phone.
- Nothing on the page mentions price, membership tiers, or Done-For-You.

**Before publishing:** if a page already exists at `/audit`, this replaces it. Confirm the route with Jared before publishing if `/audit` is currently in use elsewhere.

---

*Voice principles applied: no em dashes, Canadian spelling, plain language, no hype. Copy is a first draft for Jared's review.*
