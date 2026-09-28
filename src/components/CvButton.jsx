import React, { useState } from 'react';

// CV download button. Tries ./files/cv.pdf first, falls back to cv.docx.
// If neither is present, it explains that to the user.
export default function CvButton({ ui, compact = false }) {
  const [state, setState] = useState('idle'); // idle | missing

  const onClick = async (e) => {
    e.preventDefault();
    // Try PDF first
    try {
      const res = await fetch('./files/cv.pdf', { method: 'HEAD' });
      if (res.ok) {
        const a = document.createElement('a');
        a.href = './files/cv.pdf';
        a.download = 'Alvina-Hu-CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
    } catch (_) {
      /* ignore */
    }
    // Fall back to DOCX
    try {
      const res = await fetch('./files/cv.docx', { method: 'HEAD' });
      if (res.ok) {
        const a = document.createElement('a');
        a.href = './files/cv.docx';
        a.download = 'Alvina-Hu-CV.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
    } catch (_) {
      /* ignore */
    }
    setState('missing');
    setTimeout(() => setState('idle'), 4000);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex items-center gap-2 rounded-full border transition-all duration-200 ease-editorial',
        'border-ink text-ink hover:bg-ink hover:text-paper',
        compact ? 'h-8 px-3 text-[12px]' : 'h-10 px-4 text-[13px]',
        state === 'missing' ? 'opacity-80' : '',
      ].join(' ')}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4v12m0 0 4-4m-4 4-4-4M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="tracking-wide">{ui.downloadCv}</span>
    </button>
  );
}