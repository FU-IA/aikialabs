'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useT, useTranslation } from '../contexts/TranslationContext';
import { getLocalizedPath } from '../lib/translations';

export default function CaseStudies() {
  const t = useT();
  const { locale } = useTranslation();
  
  const studies = [
    {
      category: 'education',
      titleKey: 'caseStudies.education.description',
    },
    {
      category: 'hospitality',
      titleKey: 'caseStudies.hospitality.description',
    },
    {
      category: 'operations',
      titleKey: 'caseStudies.operations.description',
    },
    {
      category: 'careerServices',
      titleKey: 'caseStudies.careerServices.description',
    },
  ];

  const imageMap = {
    'education': '/estudiantes.webp',
    'hospitality': '/hospitality.webp',
    'operations': '/operations.webp',
    'careerServices': '/career_services.webp',
  };

  const getLinkHref = (href) => {
    return getLocalizedPath(href, locale);
  };

  return (
    <section id="case-studies" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">{t('caseStudies.title')}</h2>
          <p className="text-lg text-zinc-600">
            {t('caseStudies.subtitle')}
          </p>
          <p className="text-zinc-700 mt-2">
            {t('caseStudies.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {studies.map((study, index) => (
            <div
              key={index}
              className="border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150"
            >
              {imageMap[study.category] && (
                <div className="mb-8">
                  <Image
                    src={imageMap[study.category]}
                    alt={`${t(`caseStudies.${study.category}.title`)} case study`}
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg object-cover scale-110"
                  />
                </div>
              )}
              <div className="text-xl font-bold text-black mb-3 uppercase tracking-wide text-center italic underline">
                {t(`caseStudies.${study.category}.title`)}
              </div>
              <p className="text-black text-lg">{t(study.titleKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={getLinkHref('/case-studies')}
            className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            {t('caseStudies.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}

