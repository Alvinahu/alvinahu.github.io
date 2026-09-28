import React from 'react';

export default function ProjectCard({ item, onOpen, lang }) {
  const eyebrow = lang === 'en' ? 'Independent research' : '独立研究项目';
  return (
    <article className="group relative card-quiet border border-paper-line rounded-xl bg-paper-alt/50 p-6 md:p-8 hover:border-ink/30 hover:bg-paper-alt transition-colors">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="section-eyebrow">{eyebrow} · {item.period}</div>
          <h3 className="mt-2 text-[19px] md:text-[20px] font-medium text-ink tracking-tightish leading-snug">
            {item.title}
          </h3>
          {item.subtitle && (
            <div className="mt-0.5 text-[13px] text-ink-faint">{item.subtitle}</div>
          )}
          <p className="mt-4 text-[14.5px] leading-[1.75] text-ink-soft max-w-prose">
            {item.summary}
          </p>
          {item.highlights && (
            <ul className="mt-4 space-y-1.5 text-[13.5px] text-ink-muted list-outside pl-4 list-disc marker:text-ink-faint">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-6 pt-5 border-t border-paper-line flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-editorial text-ink-faint">{item.type}</span>
        <button
          type="button"
          onClick={onOpen}
          className="text-[13px] text-ink link-underline"
        >
          {item.cta}
        </button>
      </div>
    </article>
  );
}