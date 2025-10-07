import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hsr-warp-calculator.pro'
  const currentDate = new Date()
  
  // Define different last modified dates for different content types
  const recentUpdate = new Date('2025-10-07') // Recent major update
  const contentUpdate = new Date('2025-10-01') // Content updates
  
  return [
    // Main homepage - highest priority
    {
      url: baseUrl,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Core game calculator pages - high priority
    {
      url: `${baseUrl}?game=hsr`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}?game=genshin`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}?game=zzz`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
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
      priority: 0.75,
    },
    
    // Advanced features
    {
      url: `${baseUrl}?game=custom`,
      lastModified: contentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    
    // Additional useful landing pages
    {
      url: `${baseUrl}/#calculator`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#how-to`,
      lastModified: contentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#reviews`,
      lastModified: contentUpdate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
  ]
}