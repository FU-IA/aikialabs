'use client';

import { useT } from '../contexts/TranslationContext';

export default function Footer() {
  const t = useT();

  return (
    <footer className="py-12 px-6 bg-black dark:bg-zinc-950 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.getInTouch')}</h3>
            <div className="space-y-2 text-zinc-400">
              <div>
                <strong>{t('footer.email')}</strong>{' '}
                <a href="mailto:frank@aikialabs.com" className="hover:text-white">
                  frank@aikialabs.com
                </a>
              </div>
              <div>
                <strong>{t('footer.location')}</strong> {t('footer.locationValue')}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <div className="space-y-2 text-zinc-400">
              <a href="#" className="block hover:text-white">{t('footer.terms')}</a>
              <a href="#" className="block hover:text-white">{t('footer.privacy')}</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white">{t('footer.linkedin')}</a>
              <a href="#" className="text-zinc-400 hover:text-white">{t('footer.twitter')}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

