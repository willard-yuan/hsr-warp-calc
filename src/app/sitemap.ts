import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hsr-warp-calculator.pro'
  
  // Use fixed dates for better consistency
  const recentUpdate = new Date('2025-10-07')
  const contentUpdate = new Date('2025-10-01')
  
  return [
    // Main homepage - highest priority
    {
      url: baseUrl,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Information and support pages
    {
      url: `${baseUrl}/faqs`,
      lastModified: contentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}