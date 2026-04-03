'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { UTM_KEYS, storeUtmParams, type UtmParams } from '@/hooks/useUtmParams';

export function UtmCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const found: UtmParams = {};
    let hasAny = false;

    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) {
        found[key] = value;
        hasAny = true;
      }
    }

    if (hasAny) {
      storeUtmParams(found);
    }
  }, [searchParams]);

  return null;
}
