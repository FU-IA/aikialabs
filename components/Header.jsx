'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useT, useTranslation } from '../contexts/TranslationContext';
import { usePathname, useRouter } from 'next/navigation';
import { defaultLocale } from '../lib/translations';

// Idiomas soportados (ajusta si cambian)
const SUPPORTED_LOCALES = ['en', 'es', 'de'];

// Quitar /en, /es, /de del inicio de la ruta
function stripLocale(pathname) {
  const regex = new RegExp(`^/(${SUPPORTED_LOCALES.join('|')})(?=/|$)`);
  const cleaned = pathname.replace(regex, '');
  return cleaned === '' ? '/' : cleaned;
}

// Construir una URL absoluta con o sin locale
function buildLocalizedUrl(basePath, locale) {
  // basePath SIEMPRE viene como ruta absoluta: "/", "/blog", "/about", etc.
  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`;
  }

  // Normalizar doble barras
  basePath = basePath.replace(/\/+/g, '/');

  if (locale === defaultLocale) {
    // Idioma por defecto: sin prefijo
    return basePath === '/' ? '/' : basePath;
  }

  // Idiomas secundarios
  if (basePath === '/') {
    return `/${locale}`;
  }

  return `/${locale}${basePath}`;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useT();
  const { locale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const navItems = [
    { href: '/', key: 'home' },
    { href: '/courses', key: 'courses' },
    { href: '/case-studies', key: 'caseStudies' },
    { href: '/blog', key: 'blog' },
    { href: '/about', key: 'about' },
  ];

  const switchLanguage = (newLocale) => {
    // 1) Quitar el locale actual de la ruta (/es/blog -> /blog)
    const basePath = stripLocale(pathname);
    // 2) Construir ruta nueva con el nuevo locale
    const target = buildLocalizedUrl(basePath, newLocale);
    router.push(target);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-zinc-200">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={buildLocalizedUrl('/', locale)}
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
          
          {/* Menú escritorio */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={buildLocalizedUrl(item.href, locale)}
                className="text-zinc-700 hover:text-black rounded-full px-3 py-2 hover:bg-zinc-100 transition-colors relative after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-zinc-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform cursor-pointer"
              >
                {t(`common.${item.key}`)}
              </Link>
            ))}
            
            {/* Selector de idioma */}
            <div className="ml-4 relative">
              <select
                value={locale}
                onChange={(e) => switchLanguage(e.target.value)}
                className="text-zinc-700 hover:text-black rounded-full px-3 py-2 hover:bg-zinc-100 transition-colors border border-zinc-200 bg-white cursor-pointer text-lg"
                title={languages.find(l => l.code === locale)?.name}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-zinc-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={buildLocalizedUrl(item.href, locale)}
                className="block text-zinc-700 rounded-md px-3 py-2 hover:bg-zinc-100 transition-all duration-150 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`common.${item.key}`)}
              </Link>
            ))}
            
            {/* Selector idioma móvil */}
            <div className="px-3 py-2">
              <select
                value={locale}
                onChange={(e) => {
                  switchLanguage(e.target.value);
                  setIsMenuOpen(false);
                }}
                className="w-full text-zinc-700 rounded-md px-3 py-2 border border-zinc-200 bg-white cursor-pointer text-lg"
                title={languages.find(l => l.code === locale)?.name}
              >
                {languages.map((lang) => (
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
