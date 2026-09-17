import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parkeustam.com';

  const districtUrls = districts.map((district) => {
    const regionPath = district.region === 'Kocaeli' ? 'kocaeli' : 'istanbul';
    return {
      url: `${baseUrl}/${regionPath}/${district.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...districtUrls,
  ];
}
