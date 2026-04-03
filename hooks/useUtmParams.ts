'use client';

import { useState, useEffect } from 'react';

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_referrer',
  'gclid',
  'fbclid',
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const SESSION_KEY = 'mmdress_utm_params';

export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}

const UTM_UPDATED_EVENT = 'mmdress:utm-updated';

export function storeUtmParams(params: UtmParams): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getStoredUtmParams();
    const merged = { ...existing, ...params };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(merged));
    window.dispatchEvent(new Event(UTM_UPDATED_EVENT));
  } catch {
    // silently fail if sessionStorage is unavailable
  }
}

export function useUtmParams(): UtmParams {
  const [utmParams, setUtmParams] = useState<UtmParams>(getStoredUtmParams);

  useEffect(() => {
    const handler = () => setUtmParams(getStoredUtmParams());
    window.addEventListener(UTM_UPDATED_EVENT, handler);

    return () => window.removeEventListener(UTM_UPDATED_EVENT, handler);
  }, []);

  return utmParams;
}
