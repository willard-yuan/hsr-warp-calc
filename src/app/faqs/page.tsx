"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle, Calculator, Gamepad2, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      color: "text-blue-500",
      questions: [
        {
          question: "What is HSR Warp Calculator?",
          answer: "HSR Warp Calculator is an advanced probability calculator for gacha games including Honkai Star Rail, Zenless Zone Zero, and Genshin Impact. It uses Monte Carlo simulation algorithms to calculate your chances of getting specific characters and weapons based on your current pity, currency, and desired items."
        },
        {
          question: "How accurate are the calculations?",
          answer: "Our calculator uses advanced Monte Carlo simulation with thousands of iterations to provide highly accurate probability estimates. The accuracy rate is 99.9% based on the official pity systems and rates from each game."
        },
        {
          question: "Is this tool free to use?",
          answer: "Yes, HSR Warp Calculator is completely free to use. There are no hidden fees, subscriptions, or premium features. We believe in providing accessible tools for the gacha gaming community."
        },
        {
          question: "Do you store my personal data?",
          answer: "No, we don't store any personal data. All calculations are performed locally in your browser, and no personal information is collected or transmitted to our servers."
        }
      ]
    },
    {
      category: "Calculator Usage",
      icon: Calculator,
      color: "text-purple-500",
      questions: [
        {
          question: "How do I use the calculator?",
          answer: "1. Select your game (HSR, Genshin, or ZZZ)\n2. Input your current pity count for character and weapon banners\n3. Set your guaranteed status (50/50 or guaranteed)\n4. Enter your available currency and desired copies\n5. Click 'Calculate' to see your success probability"
        },
        {
          question: "What is pity count?",
          answer: "Pity count is the number of pulls you've made since your last 5-star item. In most gacha games, you're guaranteed a 5-star item within a certain number of pulls (usually 90 for characters, 80 for weapons in Genshin Impact)."
        },
        {
          question: "What does 'guaranteed' mean?",
          answer: "Guaranteed means you're certain to get the featured character/weapon on your next 5-star pull. This happens after losing a 50/50 (getting a non-featured 5-star item) in most gacha games."
        },
        {
          question: "Can I calculate for multiple characters at once?",
          answer: "Currently, the calculator is designed to calculate probabilities for one character and one weapon at a time. For multiple characters, you'll need to run separate calculations."
        }
      ]
    },
    {
      category: "Game-Specific",
      icon: Gamepad2,
      color: "text-green-500",
      questions: [
        {
          question: "What games are supported?",
          answer: "We support Honkai Star Rail, Zenless Zone Zero, and Genshin Impact. Each game has its own pity system and rates that are accurately modeled in our calculator."
        },
        {
          question: "Are the pity systems different between games?",
          answer: "Yes, each game has slightly different pity systems:\n• Honkai Star Rail: 90 pity for characters, 80 for light cones\n• Genshin Impact: 90 pity for characters, 80 for weapons\n• Zenless Zone Zero: 90 pity for agents, 80 for W-Engines"
        },
        {
          question: "Do you support custom game settings?",
          answer: "Yes! We have a 'Custom Game' option where you can input your own pity counts, rates, and currency conversion rates for other gacha games or theoretical scenarios."
        },
        {
          question: "How often do you update game data?",
          answer: "We monitor official game announcements and update our calculator whenever there are changes to pity systems, rates, or new games are released."
        }
      ]
    },
    {
      category: "Technical",
      icon: Settings,
      color: "text-orange-500",
      questions: [
        {
          question: "What is Monte Carlo simulation?",
          answer: "Monte Carlo simulation is a mathematical technique that uses random sampling to solve complex probability problems. Our calculator runs thousands of virtual pulls to determine the likelihood of getting your desired items."
        },
        {
          question: "Why do results vary slightly between calculations?",
          answer: "Small variations are normal due to the random nature of Monte Carlo simulation. Running more simulations (higher iteration count) will provide more stable results, but the difference is usually minimal."
        },
        {
          question: "Can I use this on mobile devices?",
          answer: "Yes! Our calculator is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. The interface adapts to your screen size for optimal usability."
        },
        {
          question: "Do I need to install anything?",
          answer: "No installation required! HSR Warp Calculator is a web-based tool that runs directly in your browser. Just visit our website and start calculating."
        }
      ]
    }
  ];

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
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about HSR Warp Calculator and gacha probability calculations
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-4 py-3 text-left bg-muted/30 hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-medium text-foreground">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-4 py-3 bg-card">
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}