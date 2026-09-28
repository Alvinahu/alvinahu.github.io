import React, { useEffect, useState, useCallback, useRef } from 'react';
import zh from './i18n/zh.js';
import en from './i18n/en.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CoffeeProject from './pages/CoffeeProject.jsx';

const dict = { zh, en };

// ---------------------------------------------------------------------------
// Routing & language
// We use a tiny custom routing layer (no react-router) because GitHub Pages
// static hosting doesn't allow clean /en/ URLs without server config.
// Hash-based URLs work everywhere:
//   #/              → Home (Chinese)
//   #/en            → Home (English)
//   #/project/coffee      → Coffee project (Chinese)
//   #/en/project/coffee   → Coffee project (English)
// ---------------------------------------------------------------------------

function parseHash() {
  const raw = window.location.hash || '#/';
  const stripped = raw.replace(/^#/, '') || '/';
  const isEn = stripped.startsWith('/en');
  const path = isEn ? stripped.replace(/^\/en/, '') || '/' : stripped;
  const isProject = path === '/project/coffee';
  return { lang: isEn ? 'en' : 'zh', page: isProject ? 'project' : 'home' };
}

function buildHash(lang, page) {
  const prefix = lang === 'en' ? '/en' : '';
  if (page === 'project') {
    return `#${prefix}/project/coffee`;
  }
  return `#${prefix}/`;
}

function setDocumentMeta(lang) {
  const d = dict[lang].meta;
  document.title = d.title;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  const setMeta = (selector, attr, value) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      const [k, v] = selector.replace('meta[', '').replace(']', '').split('=');
      el.setAttribute(k, v.replace(/['"]/g, ''));
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', 'content', d.description);
  setMeta('meta[name="title"]', 'content', d.title);
  setMeta('meta[property="og:title"]', 'content', d.ogTitle);
  setMeta('meta[property="og:description"]', 'content', d.ogDescription);
  setMeta('meta[name="twitter:title"]', 'content', d.ogTitle);
  setMeta('meta[name="twitter:description"]', 'content', d.ogDescription);
}

export default function App() {
  const initial = parseHash();
  const [lang, setLang] = useState(initial.lang);
  const [page, setPage] = useState(initial.page);
  const mainRef = useRef(null);

  // Sync state with URL hash.
  useEffect(() => {
    const onHash = () => {
      const next = parseHash();
      setLang(next.lang);
      setPage(next.page);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Update <title> and meta when language changes.
  useEffect(() => {
    setDocumentMeta(lang);
  }, [lang]);

  const navigate = useCallback((target) => {
    if (typeof target === 'string') {
      window.location.hash = target;
      return;
    }
    const { lang: l, page: p } = target;
    window.location.hash = buildHash(l, p);
  }, []);

  const switchLang = useCallback(() => {
    const next = lang === 'zh' ? 'en' : 'zh';
    navigate({ lang: next, page });
  }, [lang, page, navigate]);

  const goToProject = useCallback(() => {
    navigate({ lang, page: 'project' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [lang, navigate]);

  const goToHome = useCallback(() => {
    navigate({ lang, page: 'home' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [lang, navigate]);

  // Scroll reveal observer (one observer for the whole app).
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window) || items.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [page, lang]);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navbar
        t={dict[lang].nav}
        ui={dict[lang].ui}
        lang={lang}
        page={page}
        onSwitchLang={switchLang}
        onLogoClick={goToHome}
      />

      <main ref={mainRef} className="flex-1">
        {page === 'home' && (
          <Home
            t={dict[lang]}
            ui={dict[lang].ui}
            lang={lang}
            onOpenProject={goToProject}
          />
        )}
        {page === 'project' && (
          <CoffeeProject t={dict[lang].coffee} navT={dict[lang].nav} onBack={goToHome} />
        )}
      </main>

      <Footer t={dict[lang].footer} lang={lang} />
    </div>
  );
}