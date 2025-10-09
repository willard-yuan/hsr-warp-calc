import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hsr-warp-calculator.pro'
  
  // Use fixed dates for better consistency
  const recentUpdate = new Date('2025-10-09') // Updated for social media sharing feature
  const contentUpdate = new Date('2025-10-01')
  
  return [
    // Main homepage - highest priority
    {
      url: baseUrl,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Simulation results page - high priority as it's a key feature
    {
      url: `${baseUrl}/simulation_results`,
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
      priority: 0.7,
    },
  ]
}