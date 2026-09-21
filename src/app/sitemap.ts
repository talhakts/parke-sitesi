import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parkeustam.com';

  const districtUrls = districts.map((district) => {
    const isIstanbul = district.region !== 'Kocaeli';
    const regionPath = isIstanbul ? 'istanbul' : 'kocaeli';
    return {
      url: `${baseUrl}/${regionPath}/${district.slug}`,
      lastModified: new Date(),
      changeFrequency: (isIstanbul ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: isIstanbul ? 0.9 : 0.6,
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
