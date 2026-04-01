import type { MetadataRoute } from 'next';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mmdress.arq.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/equipe`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/como-funciona`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  return staticRoutes;
}
