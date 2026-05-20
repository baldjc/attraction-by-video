# Replit Fix Prompts — Audit Landing Page

*Created May 20, 2026. Fixes for the `/audit` landing page after the Round 1 build. From a design review of the first build. Run the prompt below as a single pass, then push live and test.*

---

## What the review found

The Round 1 build got the structure right: logo-only header, no nav, the proof strip, one CTA, the "what happens next" note. Four things need tightening, all layout and copy, none of them touching the form's data or its submission.

Two items were reviewed and deliberately left as-is for this round:

- **The "Full Name" label.** The form is reused from the existing audit pipeline. Relabelling or splitting that field risks breaking how the audit report uses the name. If we move to "First name," it should be a deliberate change made with the pipeline in mind, not bundled into a layout pass.
- **The two GCI fields staying optional.** The audit is a low-friction free offer. Making GCI required costs form fills, and an agent can be qualified on the 15-minute call anyway. Easy to flip later if Jared wants "current GCI" required.

---

## PROMPT — Audit Landing Page fixes, Round 1

Apply these fixes to the `/audit` landing page. They come from a design review of the first build. Run them all together as one pass.

**1. Form heading — remove the em dash.** The form card heading currently reads "TELL US WHERE TO SEND YOUR AUDIT — TAKES 60 SECONDS." Change the em dash to a period so it reads "TELL US WHERE TO SEND YOUR AUDIT. TAKES 60 SECONDS." Do not use em dashes anywhere on the page.

**2. Mobile form layout — single column.** On mobile the form fields currently sit two across, which makes them too narrow and truncates the YouTube Channel URL placeholder. On mobile and any narrow viewport, stack every form field in a single full-width column, one field per row. The two-across field layout is fine on desktop. The fields, in order, are: Full Name, Email, Mobile Phone, YouTube Channel URL, Current annual GCI, GCI goal.

**3. Desktop vertical balance.** On desktop the content sits in the top two-thirds of the page with a large empty band below it, which reads as unfinished. Keep the logo header pinned at the top. Below it, vertically centre the main content block (the headline column, the form card, and the "what happens next" note) within the remaining viewport height, so there is no large empty band below the content. On shorter viewports the page can scroll naturally. The "what happens next" note stays grouped directly under the form.

**4. Full Name input — no element inside the field.** Confirm the Full Name input is a plain text input with nothing rendered inside it: no icon, badge, or decorative element. If the build is rendering anything inside that input, remove it. (If nothing is found, no change is needed. The icon seen in review may have been a browser autofill artifact.)

**Leave these exactly as they are, do not change them:**

- The form fields, field labels, field order, validation rules, GCI dropdown options, and the form's submission endpoint. The form must keep submitting through the same path as the current audit form so the audit-production flow downstream is unchanged.
- The "Full Name" label and the optional status of the two GCI fields. Both are intentional for this round.

**Acceptance:**

- No em dash anywhere on the page.
- On a phone, every form field is full width, one per row, and no placeholder text is cut off.
- On desktop, the content is vertically balanced within the viewport with no large empty band below it.
- The Full Name input is a clean text field with nothing rendered inside it.
- The form still submits exactly as it did before these fixes.

---

## After this build: push live and test

Once the fixes are in and the page is republished, run a test submission through `/audit` using a recognisable test name (for example "ZZ Test Audit") with an email and phone you control. That single test confirms two things at once:

1. The form still submits and produces an audit record.
2. Whether the lead also lands in GoHighLevel. Check GHL Contacts for the test contact, confirm the fields and any source or tag, and check Conversations for a confirmation message.

If the lead does not appear in GHL, the next step is a separate prompt: add a GHL inbound webhook so the form forwards every submission to a GHL workflow that creates the contact, tags it, and fires the 48-hour nurture. There is no GoHighLevel MCP connector available, so this confirmation has to be done by hand in the GHL account.
