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

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const res = await fetch('https://members.attractionbyvideo.com/api/public/site-config');
    if (!res.ok) return SITE_CONFIG_DEFAULTS;
    const data = await res.json();
    return {
      webinar: { ...SITE_CONFIG_DEFAULTS.webinar, ...data?.webinar },
    };
  } catch {
    return SITE_CONFIG_DEFAULTS;
  }
}
