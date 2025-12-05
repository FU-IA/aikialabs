import en from '../translations/en.json';
import es from '../translations/es.json';
import de from '../translations/de.json';

export const translations = {
  en,
  es,
  de,
};

export const locales = ['en', 'es', 'de'];
export const defaultLocale = 'en';

export function getTranslations(locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

export function getPathWithoutLocale(pathname) {
  const locale = getLocaleFromPath(pathname);
  if (locale === defaultLocale) {
    return pathname;
  }
  return pathname.replace(`/${locale}`, '') || '/';
}

export function getLocalizedPath(path, locale) {
  // Asegurar que la ruta siempre empiece con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si es el locale por defecto, devolver la ruta normalizada
  if (locale === defaultLocale) {
    return normalizedPath;
  }
  
  // Para otros locales, agregar el prefijo del locale
  return `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

