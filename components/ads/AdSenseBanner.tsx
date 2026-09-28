'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/utils/functions';

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const ADSENSE_SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;
const ADSENSE_ARTICLE_SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT_ID;

export type AdSenseFormat = 'auto' | 'horizontal' | 'vertical' | 'rectangle';
export type AdSenseVariant = 'display' | 'in-article';

export interface AdSenseBannerProps {
  /**
   * `display`: bloco responsivo (usa `NEXT_PUBLIC_ADSENSE_SLOT_ID`).
   * `in-article`: bloco fluido entre seções (usa `NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT_ID`).
   */
  variant?: AdSenseVariant;
  /** ID do bloco de anúncio no AdSense (data-ad-slot). Sobrescreve o slot padrão da variante. */
  slot?: string;
  format?: AdSenseFormat;
  fullWidthResponsive?: boolean;
  className?: string;
}

export function AdSenseBanner({
  variant = 'display',
  slot = variant === 'in-article' ? ADSENSE_ARTICLE_SLOT_ID : ADSENSE_SLOT_ID,
  format = 'auto',
  fullWidthResponsive = true,
  className,
}: AdSenseBannerProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!ADSENSE_CLIENT_ID || !slot || initialized.current) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
      initialized.current = true;
    } catch {
      // Script ainda não carregou ou unidade já inicializada
    }
  }, [slot]);

  if (!ADSENSE_CLIENT_ID || !slot) {
    return null;
  }

  const isInArticle = variant === 'in-article';

  return (
    <aside
      className={cn(
        isInArticle ? 'py-8' : 'border-border border-t bg-zinc-50/50 py-8',
        className,
      )}
      aria-label="Publicidade"
    >
      <div
        className={cn(
          'container mx-auto px-4 sm:px-6 lg:px-8',
          isInArticle && 'max-w-4xl',
        )}
      >
        {isInArticle ? (
          <ins
            className="adsbygoogle block w-full"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client={ADSENSE_CLIENT_ID}
            data-ad-slot={slot}
          />
        ) : (
          <ins
            className="adsbygoogle block min-h-[90px] w-full"
            style={{ display: 'block' }}
            data-ad-client={ADSENSE_CLIENT_ID}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={
              fullWidthResponsive ? 'true' : 'false'
            }
          />
        )}
      </div>
    </aside>
  );
}
