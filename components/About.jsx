'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useT, useTranslation } from '../contexts/TranslationContext';
import { getLocalizedPath } from '../lib/translations';

export default function About() {
  const t = useT();
  const { locale } = useTranslation();

  const getLinkHref = (href) => {
    return getLocalizedPath(href, locale);
  };

  return (
    <section id="about" className="py-20 px-6 bg-zinc-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">{t('about.title')}</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-black">{t('about.subtitle')}</h3>
              <p className="text-lg text-zinc-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
            </div>

            <div className="space-y-4 text-zinc-600 mb-6">
              <div className="bg-zinc-50 rounded-lg p-4 border-l-4 border-blue-600">
                <strong className="text-black block mb-1">{t('about.background')}</strong> 
                <span>{t('about.backgroundText')}</span>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border-l-4 border-blue-600">
                <strong className="text-black block mb-1">{t('about.approach')}</strong> 
                <span>{t('about.approachText')}</span>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border-l-4 border-blue-600">
                <strong className="text-black block mb-1">{t('about.promise')}</strong> 
                <span>{t('about.promiseText')}</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={getLinkHref('/about')}
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150"
              >
                {t('about.readFullStory')}
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl opacity-20 blur-xl"></div>
              <Image
                src="/frank.png"
                alt="Frank Sellingsloh"
                width={500}
                height={600}
                className="relative w-full max-w-md h-auto rounded-xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

