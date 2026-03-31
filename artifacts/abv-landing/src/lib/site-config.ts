export interface WebinarConfig {
  date: string;
  time: string;
  name: string;
  price: string;
  link: string;
  replayLink: string;
  group: string;
  calendarLink: string;
  bookingLink: string;
  offerLink: string;
  spotsAvailable: boolean;
  registrationOpen: boolean;
}

export interface SiteConfig {
  webinar: WebinarConfig;
}

export const SITE_CONFIG_DEFAULTS: SiteConfig = {
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
};

// In production both the landing page and API share the same domain,
// so we use a root-relative path. The Vite dev proxy forwards this to
// the API server during development.
const LOCAL_API = '/api/public/site-config';

// Legacy external URL kept as last-resort fallback.
const EXTERNAL_API = 'https://members.attractionbyvideo.com/api/public/site-config';

export async function getSiteConfig(): Promise<SiteConfig> {
  // Try local API first (works in both dev via proxy and in production)
  try {
    const res = await fetch(LOCAL_API, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      return {
        webinar: { ...SITE_CONFIG_DEFAULTS.webinar, ...data?.webinar },
      };
    }
  } catch {
    // fall through
  }

  // Fall back to external tracker-site API
  try {
    const res = await fetch(EXTERNAL_API);
    if (res.ok) {
      const data = await res.json();
      return {
        webinar: { ...SITE_CONFIG_DEFAULTS.webinar, ...data?.webinar },
      };
    }
  } catch {
    // fall through
  }

  return SITE_CONFIG_DEFAULTS;
}
