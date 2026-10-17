import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.parkeustam.com';
  // Fixed accurate content update timestamp, not generated on each request
  const lastUpdated = new Date('2026-03-15T00:00:00.000Z');

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hizmetler/laminat-parke-doseme`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/hizmetler/parke-tamiri`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/supurgelik-montaji`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parke-doseme-fiyatlari`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  const priorityAsianDistricts = [
    'pendik', 'kartal', 'maltepe', 'tuzla', 'kadikoy',
    'umraniye', 'atasehir', 'sancaktepe', 'sultanbeyli',
    'cekmekoy', 'uskudar'
  ];

  const districtUrls: MetadataRoute.Sitemap = districts.map((district) => {
    const isIstanbul = district.region !== 'Kocaeli';
    const regionPath = isIstanbul ? 'istanbul' : 'kocaeli';
    const isPendik = district.slug === 'pendik';
    const isPriorityAsian = priorityAsianDistricts.includes(district.slug);

    let priority = 0.7;
    let changeFreq: 'weekly' | 'monthly' = 'monthly';

    if (isPendik) {
      priority = 0.95;
      changeFreq = 'weekly';
    } else if (isPriorityAsian) {
      priority = 0.9;
      changeFreq = 'weekly';
    } else if (isIstanbul) {
      priority = 0.8;
      changeFreq = 'monthly';
    } else if (district.slug === 'gebze') {
      priority = 0.85;
      changeFreq = 'weekly';
    }

    return {
      url: `${baseUrl}/${regionPath}/${district.slug}`,
      lastModified: lastUpdated,
      changeFrequency: changeFreq,
      priority,
    };
  });

  return [
    ...staticRoutes,
    ...districtUrls,
  ];
}
