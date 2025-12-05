'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useT, useTranslation } from '../contexts/TranslationContext';
import { defaultLocale } from '../lib/translations';

const NAV_ITEMS = [
  { href: '/', key: 'home' },
  { href: '/courses', key: 'courses' },
  { href: '/case-studies', key: 'caseStudies' },
  { href: '/blog', key: 'blog' },
  { href: '/about', key: 'about' },
];

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useT();
  const { locale, setLocale } = useTranslation?.() || { locale: defaultLocale };

  // Genera SIEMPRE una ruta absoluta desde la raíz, con locale opcional
  const buildHref = (href) => {
    // Asegurar que empieza con "/"
    const base = href.startsWith('/') ? href : `/${href}`;

    // Sin locale o locale por defecto → ruta normal
    if (!locale || locale === defaultLocale) {
      return base;
    }

    // Evitar duplicar el locale si ya viene incluido
    if (base === `/${locale}` || base.startsWith(`/${locale}/`)) {
      return base;
    }

    // Home con locale
    if (base === '/') {
      return `/${locale}`;
    }

    // Rutas normales con locale
    return `/${locale}${base}`;
  };

  const switchLanguage = (newLocale) => {
    if (!newLocale || newLocale === locale) return;

    // Cambiar solo el locale en la URL actual de forma muy simple:
    // Tomamos la ruta actual del browser
    const currentPath = window.location.pathname;

    // Quitamos locale actual si está al principio
    const pathWithoutLocale = (() => {
      if (locale && currentPath === `/${locale}`) return '/';
      if (locale && currentPath.startsWith(`/${locale}/`)) {
        return currentPath.slice(locale.length + 1) || '/';
      }
      return currentPath || '/';
    })();

    const targetBase =
      pathWithoutLocale === '/' ? '/' : pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;

    const newPath =
      newLocale === defaultLocale
        ? targetBase
        : targetBase === '/'
        ? `/${newLocale}`
        : `/${newLocale}${targetBase}`;

    // Actualizar contexto (si tu TranslationContext lo soporta)
    if (setLocale) {
      setLocale(newLocale);
    }

    window.location.href = newPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-zinc-200">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo → siempre a home (con locale si aplica) */}
          <Link
            href={buildHref('/')}
            className="flex items-center h-16"
          >
            <Image
              src="/logo_aikialabs.png"
              alt="Aikia Labs"
              width={420}
              height={160}
              className="h-16 w-auto object-contain drop-shadow-sm origin-left scale-[1.5]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={buildHref(item.href)}
                className="text-zinc-700 hover:text-black rounded-full px-3 py-2 hover:bg-zinc-100 transition-colors relative after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-zinc-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform cursor-pointer"
              >
                {t(`common.${item.key}`)}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="ml-4 relative">
              <select
                value={locale}
                onChange={(e) => switchLanguage(e.target.value)}
                className="text-zinc-700 hover:text-black rounded-full px-3 py-2 hover:bg-zinc-100 transition-colors border border-zinc-200 bg-white cursor-pointer text-lg"
                title={LANGUAGES.find((l) => l.code === locale)?.name}
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-700"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={buildHref(item.href)}
                className="block text-zinc-700 rounded-md px-3 py-2 hover:bg-zinc-100 transition-all duration-150 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`common.${item.key}`)}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <select
                value={locale}
                onChange={(e) => {
                  setIsMenuOpen(false);
                  switchLanguage(e.target.value);
                }}
                className="w-full text-zinc-700 rounded-md px-3 py-2 border border-zinc-200 bg-white cursor-pointer text-lg"
                title={LANGUAGES.find((l) => l.code === locale)?.name}
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
