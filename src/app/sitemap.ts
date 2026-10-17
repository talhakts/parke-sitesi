import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';
import { isDistrictIndexable } from '@/lib/districtData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.parkeustam.com';
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
      url: `${baseUrl}/hizmetler/supurgelik-montaji`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/parke-tamiri`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/eski-parke-sokumu`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/pvc-lvt-spc-zemin`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/masif-parke-ve-sistre-cila`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hizmetler/ofis-ticari-zemin`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hizmetler/yerden-isitmali-zemin-parke`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/parke-doseme-fiyatlari`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/aydinlatma-metni`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  const priorityAsianDistricts = [
    'pendik', 'kartal', 'maltepe', 'tuzla', 'kadikoy',
    'umraniye', 'atasehir', 'sancaktepe', 'sultanbeyli',
    'cekmekoy', 'uskudar'
  ];

  // Sadece indexable: true olan ilçeler sitemap'e dahil edilir
  const indexableDistricts = districts.filter(d => isDistrictIndexable(d.slug));

  const districtUrls: MetadataRoute.Sitemap = indexableDistricts.map((district) => {
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
