import { useEffect } from 'react';

export function AdminVideo() {
  useEffect(() => {
    window.location.replace('https://members.attractionbyvideo.com/admin/settings');
  }, []);
  return null;
}
