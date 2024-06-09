import { baseUrl } from '@/lib/data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/eduardo_couto_resume.pdf`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
  ];
}
