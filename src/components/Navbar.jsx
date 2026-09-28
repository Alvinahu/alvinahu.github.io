import React, { useState, useEffect } from 'react';
import LangToggle from './LangToggle.jsx';
import CvButton from './CvButton.jsx';

export default function Navbar({ t, ui, lang, page, onSwitchLang, onLogoClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on hashchange (when language toggles or navigation happens).
  useEffect(() => {
    setMobileOpen(false);
  }, [lang, page]);

  const sectionLinks = [
    { id: 'about', label: t.about },
    { id: 'education', label: t.education },
    { id: 'experience', label: t.experience },
    { id: 'projects', label: t.projects },
    { id: 'contact', label: t.contact },
  ];

  const onAnchorClick = (e, id) => {
    e.preventDefault();
    if (page !== 'home') {
      // If we're on project page, switch to home first, then scroll.
      window.location.hash = lang === 'en' ? '#/en/' : '#/';
      // Wait for next paint before scrolling.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-editorial',
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-paper-line'
          : 'bg-paper/0 border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-page px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            onLogoClick();
          }}
          className="font-semibold tracking-tightish text-ink text-[15px]"
        >
          ALVINA HU
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-ink-soft">
          {sectionLinks.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => onAnchorClick(e, s.id)}
              className="link-underline text-ink-soft hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-5">
          <CvButton ui={ui} compact />
          <LangToggle label={t.langToggle} onClick={onSwitchLang} />
          <button
            type="button"
            className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center text-ink-soft"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t.mobileMenu}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-paper-line bg-paper/95 backdrop-blur-md">
          <div className="mx-auto max-w-page px-5 py-4 flex flex-col gap-3 text-[15px]">
            {sectionLinks.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => onAnchorClick(e, s.id)}
                className="text-ink-soft hover:text-ink py-1"
              >
                {s.label}
              </a>
            ))}
            <div className="pt-3 border-t border-paper-line mt-1">
              <CvButton ui={ui} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}