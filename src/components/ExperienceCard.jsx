import React from 'react';

// Single experience row — keeps the layout editorial and quiet.
export default function ExperienceCard({ item, compact = false }) {
  return (
    <article className={`grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-y-2 gap-x-10 py-7 border-t border-paper-line`}>
      <header className="md:pt-1">
        <div className="text-[12.5px] tabular text-ink-muted tracking-tight">{item.period}</div>
        <div className="text-[12.5px] text-ink-faint mt-0.5">{item.location}</div>
      </header>
      <div>
        <h3 className="text-[16px] font-medium text-ink leading-snug">
          {item.org}
          {item.team ? <span className="text-ink-muted font-normal"> · {item.team}</span> : null}
        </h3>
        <div className="text-[13.5px] text-ink-muted mt-0.5">{item.role}</div>
        {!compact && item.bullets && item.bullets.length > 0 && (
          <ul className="mt-3 space-y-2 text-[14.5px] leading-[1.7] text-ink-soft list-outside pl-4 list-disc marker:text-ink-faint">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}