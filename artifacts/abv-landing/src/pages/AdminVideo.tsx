import React, { useState, useRef } from 'react';

export function AdminVideo() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'saving' | 'done' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [savedPath, setSavedPath] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState('');

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) { setErrorMsg('Please select a video file.'); return; }
    if (!token) { setErrorMsg('Enter the admin token first.'); return; }

    setStatus('uploading');
    setProgress(0);
    setErrorMsg('');

    try {
      // Step 1: request presigned URL
      const urlRes = await fetch('/api/storage/uploads/request-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: file.name, size: file.size, contentType: file.type }),
      });
      if (!urlRes.ok) throw new Error('Failed to get upload URL');
      const { uploadURL, objectPath } = await urlRes.json() as { uploadURL: string; objectPath: string };

      // Step 2: upload directly to GCS using XHR for progress tracking
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', uploadURL);
        xhr.setRequestHeader('Content-Type', file.type);
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload = () => xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(new Error(`GCS error ${xhr.status}`));
        xhr.onerror = () => reject(new Error('Network error during upload'));
        xhr.send(file);
      });

      setProgress(100);
      setStatus('saving');

      // Step 3: save objectPath to video config
      const saveRes = await fetch('/api/admin/video-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
        body: JSON.stringify({ objectPath }),
      });
      if (!saveRes.ok) throw new Error('Upload succeeded but failed to save config');

      setSavedPath(objectPath);
      setStatus('done');
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Upload failed');
      setStatus('error');
    }
  };

  const label = (s: typeof status) => ({
    idle: 'Upload Video',
    uploading: `Uploading… ${progress}%`,
    saving: 'Saving…',
    done: 'Done!',
    error: 'Try again',
  }[s]);

  return (
    <div style={{
      minHeight: '100vh', background: '#FAFAF8',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{
        width: '100%', maxWidth: '480px',
        background: '#fff', border: '1px solid #e5e7eb',
        borderRadius: '18px', padding: '36px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      }}>
        <h1 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 900, fontSize: '24px',
          marginBottom: '8px', color: '#1A1A1A',
        }}>Upload Site Video</h1>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '28px' }}>
          This video will auto-play (muted) on the homepage and audit page.
          Visitors click to unmute.
        </p>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Admin token</label>
          <input
            type="password"
            value={token}
            onChange={e => setToken(e.target.value)}
            placeholder="Your SESSION_SECRET value"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Video file (MP4 recommended)</label>
          <input
            ref={fileRef}
            type="file"
            accept="video/mp4,video/webm,video/quicktime,video/*"
            style={{ ...inputStyle, padding: '8px 12px', cursor: 'pointer' }}
          />
        </div>

        {status === 'uploading' && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              height: '6px', background: '#e5e7eb', borderRadius: '99px', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                background: 'var(--accent-azure)',
                transition: 'width 0.2s ease',
                borderRadius: '99px',
              }} />
            </div>
            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>
              {progress}% uploaded
            </p>
          </div>
        )}

        {errorMsg && (
          <div style={{
            marginBottom: '16px', padding: '10px 14px',
            background: 'rgba(255,0,51,0.06)', border: '1px solid rgba(255,0,51,0.2)',
            borderRadius: '8px', fontSize: '13px', color: '#ff0033',
          }}>{errorMsg}</div>
        )}

        {status === 'done' && savedPath && (
          <div style={{
            marginBottom: '16px', padding: '12px 14px',
            background: 'rgba(61,195,255,0.06)', border: '1px solid rgba(61,195,255,0.2)',
            borderRadius: '8px', fontSize: '13px', color: '#1A1A1A',
          }}>
            <strong style={{ display: 'block', marginBottom: '4px' }}>✓ Video live</strong>
            <code style={{ fontSize: '11px', color: '#6b7280', wordBreak: 'break-all' }}>{savedPath}</code>
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
              <a href="/" style={linkStyle}>View homepage →</a>
              <a href="/audit" style={linkStyle}>View audit page →</a>
            </div>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={status === 'uploading' || status === 'saving'}
          style={{
            width: '100%', padding: '14px',
            background: status === 'done' ? '#16a34a' : status === 'error' ? '#dc2626' : '#1A1A1A',
            color: '#fff', borderRadius: '8px',
            fontSize: '15px', fontWeight: 600, border: 'none',
            cursor: status === 'uploading' || status === 'saving' ? 'not-allowed' : 'pointer',
            fontFamily: "'Satoshi', sans-serif",
            opacity: status === 'uploading' || status === 'saving' ? 0.7 : 1,
          }}
        >
          {label(status)}
        </button>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '12px', fontWeight: 600,
  color: '#1A1A1A', marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1px solid #d1d5db', borderRadius: '8px',
  fontSize: '14px', fontFamily: "'Satoshi', sans-serif",
  outline: 'none', boxSizing: 'border-box', color: '#1A1A1A',
};

const linkStyle: React.CSSProperties = {
  color: 'var(--accent-azure)', fontSize: '13px', fontWeight: 600, textDecoration: 'none',
};
