'use client';

import { TranslationProvider } from '../contexts/TranslationContext';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath, defaultLocale } from '../lib/translations';

export function TranslationWrapper({ children }) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  return (
    <TranslationProvider locale={locale}>
      {children}
    </TranslationProvider>
  );
}

