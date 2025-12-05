'use client';

import { useT } from '../contexts/TranslationContext';

export default function Hero() {
  const t = useT();

  return (
    <section id="home" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
          {t('hero.title')}
        </h1>
        
        <div className="mb-10 text-lg text-zinc-700 leading-relaxed">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('hero.description') }} />
          <p className="text-sm text-zinc-600">
            <strong>{t('hero.credentials')}</strong>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#courses"
            className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150"
          >
            {t('hero.viewCourses')}
          </a>
          <a
            href="#case-studies"
            className="inline-block px-6 py-3 border border-zinc-300 text-black rounded-md font-medium hover:bg-zinc-50 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150"
          >
            {t('hero.seeCaseStudies')}
          </a>
        </div>
      </div>
    </section>
  );
}

