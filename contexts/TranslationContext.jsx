'use client';

import { createContext, useContext } from 'react';
import { getTranslations } from '../lib/translations';

const TranslationContext = createContext(null);

export function TranslationProvider({ children, locale = 'en' }) {
  const translations = getTranslations(locale);

  return (
    <TranslationContext.Provider value={{ translations, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    // Fallback si no hay provider (para páginas sin traducción)
    return { t: (key) => key, locale: 'en' };
  }
  return context;
}

export function useT() {
  const { translations } = useTranslation();
  
  return (key, defaultValue = '') => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue || key;
      }
    }
    
    return value || defaultValue || key;
  };
}

