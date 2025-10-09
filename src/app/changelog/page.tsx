"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Star, Sparkles, Zap, Users, BarChart3, Palette } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ChangelogPage() {
  const versions = [
    {
      version: "1.0.5",
      date: "2025-10-09",
      type: "minor",
      title: "Social Media Sharing Enhancement",
      description: "Added comprehensive social media sharing functionality for simulation results",
      changes: [
        {
          category: "🚀 New Features",
          items: [
            "Added social media sharing dropdown menu for simulation results",
            "Implemented sharing to X (Twitter) with formatted content",
            "Added Facebook sharing with custom post content",
            "Integrated Reddit sharing with subreddit-friendly formatting",
            "Enhanced copy-to-clipboard functionality with visual feedback"
          ]
        },
        {
          category: "🎨 UI/UX Improvements",
          items: [
            "Redesigned Share Results button with dropdown menu",
            "Added platform-specific icons (Twitter, Facebook, Reddit)",
            "Implemented smooth animations and hover effects for sharing options",
            "Added click-outside-to-close functionality for better user experience",
            "Enhanced button styling with gradient backgrounds and 3D effects"
          ]
        },
        {
          category: "🔧 Technical Enhancements",
          items: [
            "Intelligent content generation based on simulation results",
            "Dynamic URL sharing with proper encoding",
            "Responsive sharing menu design for all device sizes",
            "Added proper event handling for social media platform APIs",
            "Optimized sharing content for each platform's character limits"
          ]
        },
        {
          category: "📊 Content Features",
          items: [
            "Auto-generated sharing text with success rates and pull counts",
            "Platform-optimized hashtags and formatting",
            "Contextual sharing messages based on simulation outcomes",
            "Professional sharing templates for different social platforms"
          ]
        }
      ]
    },
    {
      version: "1.0.0",
      date: "2025-10-07",
      type: "major",
      title: "Initial Release - Complete Website Redesign",
      description: "Major overhaul with modern UI, new features, and enhanced user experience",
      changes: [
        {
          category: "🎨 Design & UI",
          items: [
            "Complete website redesign with modern, responsive layout",
            "Added dark/light theme switching with dark mode as default",
            "Implemented gradient backgrounds and glass morphism effects",
            "Added smooth animations and hover effects throughout the site",
            "Created professional navigation bar with logo and theme toggle"
          ]
        },
        {
          category: "✨ New Features",
          items: [
            "Hero section with game icons and call-to-action buttons",
            "How It Works section with step-by-step guide",
            "User testimonials section with reviews from real users",
            "Professional footer with links and contact information",
            "Interactive elements with click animations"
          ]
        },
        {
          category: "🔧 Technical Improvements",
          items: [
            "Added sitemap.xml for better SEO",
            "Implemented robots.txt for search engine optimization",
            "Added Google Analytics integration",
            "Updated meta tags and keywords for better discoverability",
            "Powered by advanced Monte Carlo simulation algorithms"
          ]
        },
        {
          category: "📱 User Experience",
          items: [
            "Improved mobile responsiveness across all devices",
            "Added smooth scrolling navigation between sections",
            "Enhanced accessibility with proper ARIA labels",
            "Optimized loading performance and animations",
            "Better visual hierarchy and content organization"
          ]
        },
        {
          category: "🎮 Game Support",
          items: [
            "Continued support for Honkai Star Rail",
            "Maintained Zenless Zone Zero calculations",
            "Preserved Genshin Impact functionality",
            "Custom game settings for advanced users"
          ]
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-red-500';
      case 'minor': return 'bg-blue-500';
      case 'patch': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'major': return <Star className="w-4 h-4" />;
      case 'minor': return <Sparkles className="w-4 h-4" />;
      case 'patch': return <Zap className="w-4 h-4" />;
      default: return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-background to-primary/5 border-b border-border pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="hover:bg-muted">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Changelog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track all updates, improvements, and new features added to HSR Warp Calculator
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {versions.map((version, index) => (
            <Card key={index} className="shadow-lg border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-3">
                    <Badge className={`${getTypeColor(version.type)} text-white flex items-center space-x-1`}>
                      {getTypeIcon(version.type)}
                      <span>v{version.version}</span>
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{version.date}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mt-2">
                  <h2 className="text-2xl font-bold">{version.title}</h2>
                </CardTitle>
                <p className="text-muted-foreground">
                  {version.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {version.changes.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                      <span>{category.category}</span>
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-6 py-3 backdrop-blur-sm">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Have suggestions for future updates? We'd love to hear from you!
            </span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}