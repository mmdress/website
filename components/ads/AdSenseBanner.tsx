'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/utils/functions';

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const ADSENSE_SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

export type AdSenseFormat = 'auto' | 'horizontal' | 'vertical' | 'rectangle';

export interface AdSenseBannerProps {
  /** ID do bloco de anúncio no AdSense (data-ad-slot). Usa `NEXT_PUBLIC_ADSENSE_SLOT_ID` por padrão. */
  slot?: string;
  format?: AdSenseFormat;
  fullWidthResponsive?: boolean;
  className?: string;
}

export function AdSenseBanner({
  slot = ADSENSE_SLOT_ID,
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

  return (
    <aside
      className={cn(
        'border-border border-t bg-zinc-50/50 py-8',
        className,
      )}
      aria-label="Publicidade"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </aside>
  );
}
