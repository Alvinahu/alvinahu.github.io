import React from 'react';

export default function Footer({ t, lang }) {
  const en = lang === 'en';
  return (
    <footer className="mt-24 border-t border-paper-line">
      <div className="mx-auto max-w-page px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12.5px] text-ink-muted">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-medium text-ink">{t.copyright}</span>
          <span className="text-ink-faint">·</span>
          <span>{t.lastUpdated}</span>
        </div>
        <div className="text-ink-faint">{t.builtWith}</div>
      </div>
    </footer>
  );
}