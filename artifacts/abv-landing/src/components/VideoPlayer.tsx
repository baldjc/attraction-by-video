import React, { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  /** Label shown in the unmute overlay, e.g. "Click to hear Jared" */
  unmuteLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function VideoPlayer({ unmuteLabel = 'Click to hear Jared', className, style }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch('/api/public/video-config')
      .then(r => r.json())
      .then((d: { objectPath: string | null }) => {
        if (d.objectPath) {
          setVideoUrl(`/api/storage${d.objectPath}`);
        }
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [videoUrl]);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    if (!playing) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (loading) {
    return (
      <div style={{ ...wrapperStyle, ...style }} className={className}>
        <div style={placeholderStyle}>
          <div style={spinnerStyle} />
        </div>
      </div>
    );
  }

  if (error || !videoUrl) {
    return (
      <div style={{ ...wrapperStyle, ...style }} className={className}>
        <div style={{ ...placeholderStyle, color: '#6b7280', fontSize: '14px' }}>
          No video uploaded yet.{' '}
          <a href="/admin/video" style={{ color: 'var(--accent-azure)' }}>Upload one →</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...wrapperStyle, ...style }} className={className}>
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        autoPlay
        loop
        playsInline
        style={videoStyle}
      />

      {/* Muted overlay */}
      {muted && (
        <button onClick={handleUnmute} style={overlayStyle} aria-label="Unmute video">
          <div style={overlayInnerStyle}>
            <span style={soundIconStyle}>🔊</span>
            <span style={overlayLabelStyle}>{unmuteLabel}</span>
          </div>
        </button>
      )}
    </div>
  );
}

const wrapperStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  background: '#0d0d0d',
  aspectRatio: '16 / 9',
};

const videoStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const placeholderStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#111',
};

const spinnerStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  border: '3px solid rgba(255,255,255,0.15)',
  borderTopColor: 'var(--accent-azure)',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
};

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
};

const overlayInnerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

const soundIconStyle: React.CSSProperties = {
  fontSize: '48px',
  lineHeight: 1,
  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
};

const overlayLabelStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '16px',
  fontWeight: 700,
  fontFamily: "'Cabinet Grotesk', sans-serif",
  letterSpacing: '-0.01em',
  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
};
