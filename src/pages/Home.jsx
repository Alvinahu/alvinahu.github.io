import React from 'react';
import Section from '../components/Section.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const AVATAR = './images/avatar.jpg';

export default function Home({ t, ui, lang, onOpenProject }) {
  const en = lang === 'en';

  return (
    <div className="pt-16">
      {/* ===================== HERO ===================== */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-page px-5 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
            <div className="reveal">
              <div className="section-eyebrow">{en ? 'Finance · Shanghai, China' : '金融 · 中国上海'}</div>
              <h1 className="mt-4 text-[40px] md:text-[56px] leading-[1.05] font-medium tracking-tightish text-ink">
                {t.hero.name}
              </h1>
              <div className="mt-2 text-[15px] md:text-[16px] text-ink-muted tracking-tight">
                {t.hero.role}
              </div>

              <div className="mt-8 max-w-prose">
                <div className="section-eyebrow mb-2">{t.hero.aboutEyebrow}</div>
                <p className="prose-body">{t.hero.aboutBody}</p>
              </div>

              <div className="mt-8 max-w-prose">
                <div className="section-eyebrow mb-2">{t.hero.interestTitle}</div>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink-soft">
                  {t.hero.interestList.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="inline-block h-1 w-1 rounded-full bg-ink-muted"></span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Avatar */}
            <div className="reveal md:order-last order-first mx-auto md:mx-0">
              <div className="relative w-44 h-56 md:w-56 md:h-72 overflow-hidden rounded-sm shadow-[0_2px_20px_-12px_rgba(0,0,0,0.25)]">
                <img
                  src={AVATAR}
                  alt={en ? 'Alvina Hu' : '胡沛杉'}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-[12px] text-ink-faint tabular tracking-tight">
                {en ? 'Shanghai · 2026' : '上海 · 2026'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule mx-auto max-w-page" />

      {/* ===================== EDUCATION ===================== */}
      <section className="mx-auto max-w-page px-5 md:px-8 py-16 md:py-24">
        <Section id="education" eyebrow={t.education.eyebrow} title={t.education.title}>
          {/* Primary */}
          <div className="reveal">
            <article className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-y-2 gap-x-10 py-4">
              <header className="md:pt-1">
                <div className="text-[12.5px] tabular text-ink-muted tracking-tight">{t.education.primaryPeriod}</div>
                <div className="text-[12.5px] text-ink-faint mt-0.5">{t.education.primaryLocation}</div>
              </header>
              <div>
                <h3 className="text-[17px] font-medium text-ink">{t.education.primaryTitle}</h3>
                <div className="text-[14px] text-ink-muted mt-0.5">{t.education.primarySchool} · {t.education.primaryDegree}</div>
              </div>
            </article>

            {/* Coursework */}
            <div className="mt-10">
              <div className="section-eyebrow mb-4">{t.education.courseworkTitle}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12">
                {t.education.coursework.map((g) => (
                  <div key={g.group}>
                    <div className="text-[13px] font-medium text-ink mb-3">{g.group}</div>
                    <ul className="space-y-1.5 text-[14px] text-ink-soft">
                      {g.items.map((c) => (
                        <li key={c} className="flex items-baseline gap-2">
                          <span className="text-ink-faint text-[10px]">·</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous */}
            <div className="mt-12 pt-8 border-t border-paper-line">
              <div className="section-eyebrow mb-3">{t.education.previousTitle}</div>
              <article className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-y-2 gap-x-10">
                <header>
                  <div className="text-[12.5px] tabular text-ink-muted tracking-tight">{t.education.previousPeriod}</div>
                  <div className="text-[12.5px] text-ink-faint mt-0.5">{t.education.previousLocation}</div>
                </header>
                <div>
                  <h3 className="text-[16px] font-medium text-ink">{t.education.previousSchool}</h3>
                </div>
              </article>
            </div>
          </div>
        </Section>
      </section>

      <div className="rule mx-auto max-w-page" />

      {/* ===================== EXPERIENCE ===================== */}
      <section className="mx-auto max-w-page px-5 md:px-8 py-16 md:py-24">
        <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
          <div className="reveal">
            {t.experience.items.map((it, i) => (
              <ExperienceCard key={i} item={it} />
            ))}
            <div className="border-b border-paper-line"></div>

            <div className="mt-12">
              <div className="section-eyebrow mb-3">{t.experience.campusTitle}</div>
              <div>
                {t.experience.campusItems.map((it, i) => (
                  <ExperienceCard key={i} item={it} compact />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      <div className="rule mx-auto max-w-page" />

      {/* ===================== PROJECTS ===================== */}
      <section className="mx-auto max-w-page px-5 md:px-8 py-16 md:py-24">
        <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.projects.items.map((it, i) => (
              <ProjectCard key={i} item={it} onOpen={onOpenProject} lang={lang} />
            ))}
          </div>
        </Section>
      </section>

      <div className="rule mx-auto max-w-page" />

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="scroll-mt-24 mx-auto max-w-page px-5 md:px-8 py-16 md:py-24">
        <div className="reveal">
          <div className="section-eyebrow mb-3">{t.contact.eyebrow}</div>
          <h2 className="h-editorial">{t.contact.title}</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
            <div>
              <div className="text-[18px] font-medium text-ink">{en ? t.contact.nameEn : t.contact.nameZh}</div>
              <div className="text-[14px] text-ink-muted mt-1">{t.contact.locationValue}</div>

              <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-ink-soft">
                {t.contact.blurb}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="section-eyebrow">{t.contact.emailLabel}</div>
                <ul className="mt-2 space-y-1.5">
                  {t.contact.emails.map((e) => (
                    <li key={e.value} className="flex items-baseline gap-3">
                      <a href={`mailto:${e.value}`} className="link-underline text-[14.5px] text-ink">
                        {e.value}
                      </a>
                      <span className="text-[12px] text-ink-faint">{e.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="section-eyebrow">{t.contact.phoneLabel}</div>
                <a href="tel:+8613146789766" className="mt-2 inline-block link-underline text-[14.5px] text-ink tabular">
                  +86 131 4678 9766
                </a>
              </div>

              <div>
                <div className="section-eyebrow">{t.contact.locationLabel}</div>
                <div className="mt-2 text-[14.5px] text-ink-soft">{t.contact.locationValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}