"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Calculator, BarChart3, Sparkles } from 'lucide-react';

export default function HowTo() {
  const steps = [
    {
      icon: Settings,
      title: "Choose Your Game",
      description: "Select from Honkai Star Rail, Zenless Zone Zero, or Genshin Impact. Each game has its own pity system and rates.",
      color: "text-blue-500"
    },
    {
      icon: Calculator,
      title: "Set Your Parameters",
      description: "Input your current pity count, guaranteed status, available currency, and desired characters or weapons.",
      color: "text-purple-500"
    },
    {
      icon: BarChart3,
      title: "Run Simulation",
      description: "Our advanced algorithm runs thousands of simulations to calculate your exact probability of success.",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      title: "Get Results",
      description: "View detailed statistics including success rate, average pulls needed, and cost analysis.",
      color: "text-yellow-500"
    }
  ];

  return (
    <section id="how-to" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get accurate gacha probability calculations in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-background to-muted mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}