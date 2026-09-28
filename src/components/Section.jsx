import React from 'react';

// Editorial section wrapper.
// Props: id, eyebrow, title, optional subtitle, optional children, optional meta.
export default function Section({ id, eyebrow, title, subtitle, meta, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="reveal">
        {eyebrow && (
          <div className="section-eyebrow mb-3">
            {eyebrow}
          </div>
        )}
        {title && <h2 className="h-editorial">{title}</h2>}
        {subtitle && (
          <p className="mt-2 text-ink-muted text-[15px] max-w-prose leading-relaxed">
            {subtitle}
          </p>
        )}
        {meta && (
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 max-w-2xl">
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col">
                <dt className="text-[11px] uppercase tracking-editorial text-ink-faint">{m.label}</dt>
                <dd className="text-[14px] text-ink-soft mt-0.5">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}