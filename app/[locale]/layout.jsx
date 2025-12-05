'use client';

import { TranslationProvider } from '../../contexts/TranslationContext';
import { useParams } from 'next/navigation';

export default function LocaleLayout({ children }) {
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <TranslationProvider locale={locale}>
      {children}
    </TranslationProvider>
  );
}

