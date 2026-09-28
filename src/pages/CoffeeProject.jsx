import React, { useState, useEffect } from 'react';
import {
  IndustrySizeChart,
  RegionalChart,
  GenderDonut,
  AgeBar,
  MarketShareDonut,
  CityTierBar,
  PerCapitaBar,
} from '../components/charts/Charts.jsx';
import {
  industrySizeData,
  regionalData,
  genderData,
  ageData,
  marketShareData,
  cityTierData,
  perCapitaData,
  brandCompare,
} from '../utils/chartData.js';

// Map section id → chart component, by language.
function ChartFor({ id, lang }) {
  const isEn = lang === 'en';
  switch (id) {
    case 'industry':
      return <IndustrySizeChart data={industrySizeData} />;
    case 'regional':
      return <RegionalChart data={isEn ? [...regionalData].sort((a, b) => b.stores - a.stores) : regionalData} />;
    case 'consumer':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GenderDonut data={genderData} />
          <AgeBar data={ageData} />
        </div>
      );
    case 'competition':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MarketShareDonut data={marketShareData} />
          <CityTierBar data={cityTierData} />
        </div>
      );
    case 'investment':
      return <PerCapitaBar data={perCapitaData} />;
    default:
      return null;
  }
}

export default function CoffeeProject({ t, navT, onBack }) {
  // Sticky section nav highlights the section currently in view.
  const [activeId, setActiveId] = useState(t.sections[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = t.sections.map((s) => document.getElementById(`s-${s.id}`)).filter(Boolean);
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id.replace('s-', ''));
      },
      { threshold: [0.2, 0.5], rootMargin: '-25% 0px -45% 0px' }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [t]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(`s-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-16">
      {/* ===================== HEADER ===================== */}
      <header className="mx-auto max-w-page px-5 md:px-8 pt-10 md:pt-16 pb-10">
        <div className="reveal flex items-center gap-2 text-[12.5px] text-ink-muted">
          <button onClick={onBack} className="link-underline">
            {t.backToHome}
          </button>
        </div>
        <div className="mt-8 reveal">
          <div className="section-eyebrow">{t.eyebrow} · {t.period}</div>
          <h1 className="mt-3 text-[34px] md:text-[48px] font-medium tracking-tightish leading-[1.1] text-ink">
            {t.title}
          </h1>
          <div className="mt-2 text-[14.5px] text-ink-muted">{t.subtitle}</div>
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-ink-faint">
            <span className="inline-block h-1 w-1 rounded-full bg-accent"></span>
            {t.shareBadge}
          </div>
        </div>
      </header>

      <div className="rule mx-auto max-w-page" />

      {/* ===================== STICKY IN-PAGE NAV ===================== */}
      <nav
        className={[
          'sticky top-16 z-30 transition-all duration-300 ease-editorial border-b border-paper-line',
          scrolled ? 'bg-paper/90 backdrop-blur-md' : 'bg-paper/0 border-b-transparent',
        ].join(' ')}
      >
        <div className="mx-auto max-w-page px-5 md:px-8">
          <ul className="flex gap-6 md:gap-8 overflow-x-auto py-3 text-[12.5px] text-ink-muted">
            {t.sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={[
                    'whitespace-nowrap transition-colors',
                    activeId === s.id ? 'text-ink font-medium' : 'hover:text-ink',
                  ].join(' ')}
                >
                  <span className="text-ink-faint mr-1.5 tabular">{s.index}</span>
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ===================== SECTIONS ===================== */}
      <div className="mx-auto max-w-page px-5 md:px-8 py-10 md:py-16 space-y-24 md:space-y-32">
        {t.sections.map((s) => (
          <section id={`s-${s.id}`} key={s.id} className="scroll-mt-32">
            <div className="reveal">
              <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-10">
                <div>
                  <div className="text-[44px] md:text-[56px] leading-none font-medium text-ink-faint tabular tracking-tightish">
                    {s.index}
                  </div>
                </div>
                <div>
                  <h2 className="text-[24px] md:text-[30px] font-medium tracking-tightish text-ink leading-tight">
                    {s.title}
                  </h2>

                  <div className="mt-5 max-w-2xl space-y-3 text-[15px] leading-[1.8] text-ink-soft">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {s.meta && (
                    <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 max-w-2xl">
                      {s.meta.map((m) => (
                        <div key={m.label}>
                          <dt className="text-[11px] uppercase tracking-editorial text-ink-faint">{m.label}</dt>
                          <dd className="text-[14px] text-ink-soft mt-0.5">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {s.chartCaption && (
                    <div className="mt-10">
                      <ChartFor id={s.id} lang="en" />
                      <div className="mt-3 flex items-baseline justify-between gap-4 text-[12px] text-ink-muted">
                        <span className="italic">{s.chartCaption}</span>
                        <span className="text-ink-faint">{s.chartSource}</span>
                      </div>
                    </div>
                  )}

                  {/* Special: takeaways list */}
                  {s.takeaways && (
                    <ol className="mt-8 space-y-6">
                      {s.takeaways.map((tk, i) => (
                        <li key={i} className="grid grid-cols-1 md:grid-cols-[2rem_1fr] gap-x-4">
                          <div className="text-[13px] tabular text-ink-faint pt-1">{String(i + 1).padStart(2, '0')}</div>
                          <div>
                            <div className="text-[15.5px] font-medium text-ink">{tk.headline}</div>
                            <div className="mt-1.5 text-[14px] leading-[1.7] text-ink-soft">{tk.body}</div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Special: competition comparison cards */}
                  {s.id === 'competition' && (
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[brandCompare.starbucks, brandCompare.luckin].map((b) => (
                        <div key={b.name} className="border border-paper-line rounded-lg p-6 bg-paper-alt/40">
                          <div className="text-[12px] uppercase tracking-editorial text-ink-faint">{b.sub}</div>
                          <div className="mt-1 text-[18px] font-medium text-ink">{b.name}</div>
                          <dl className="mt-4 space-y-2.5 text-[13px]">
                            {[
                              ['门店数', b.storeCount],
                              ['覆盖', b.cityCoverage],
                              ['市场份额', b.marketShare],
                              ['客单价', b.avgTicket],
                              ['门店面积', b.storeArea],
                              ['商业模式', b.model],
                              ['单店日均销量', b.dailyCups],
                              ['单店日均营业额', b.dailyRevenue],
                              ['Q3 营收', b.q3Revenue],
                            ].map(([k, v]) => (
                              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3">
                                <dt className="text-ink-faint">{k}</dt>
                                <dd className="text-ink-soft">{v}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ===================== FOOTER CTA ===================== */}
      <section className="mx-auto max-w-page px-5 md:px-8 pb-16">
        <div className="border-t border-paper-line pt-10 flex items-center justify-between">
          <button onClick={onBack} className="link-underline text-[14px] text-ink">
            {t.nextCta}
          </button>
          <div className="text-[12px] text-ink-faint">Alvina Hu · 2025</div>
        </div>
      </section>
    </div>
  );
}