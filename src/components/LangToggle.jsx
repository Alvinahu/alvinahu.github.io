import React from 'react';

// Top-right language toggle. Compact two-letter label (EN / 中文).
export default function LangToggle({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[12.5px] tracking-wide text-ink-soft hover:text-ink transition-colors px-2 py-1 rounded"
      aria-label="Toggle language"
    >
      {label}
    </button>
  );
}