"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Star, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 left-20 w-6 h-6 text-yellow-400 animate-bounce delay-300" />
        <Sparkles className="absolute top-32 right-32 w-8 h-8 text-purple-400 animate-pulse delay-700" />
        <Zap className="absolute bottom-32 left-32 w-7 h-7 text-blue-400 animate-bounce delay-1000" />
        <Star className="absolute bottom-20 right-20 w-5 h-5 text-pink-400 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Game Icons */}
          <div className="flex justify-center items-center space-x-8 mb-8 animate-fade-in-up">
            <div className="relative group">
              <Image 
                src="/icons/hsr.webp" 
                alt="Honkai Star Rail" 
                width={60} 
                height={60} 
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <Image 
                src="/icons/zzz.webp" 
                alt="Zenless Zone Zero" 
                width={60} 
                height={60} 
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <Image 
                src="/icons/genshin.webp" 
                alt="Genshin Impact" 
                width={60} 
                height={60} 
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Calculate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Gacha Luck
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-400">
            Advanced probability calculator for{' '}
            <span className="text-primary font-semibold">Honkai Star Rail</span>,{' '}
            <span className="text-purple-400 font-semibold">Zenless Zone Zero</span>, and{' '}
            <span className="text-blue-400 font-semibold">Genshin Impact</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
            <Button 
              size="lg" 
              onClick={scrollToCalculator}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Calculating
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('how-to')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-primary/10 transition-all duration-300"
            >
              Learn How
            </Button>
          </div>

          {/* Monte Carlo Algorithm Badge */}
          <div className="mt-12 animate-fade-in-up delay-700">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-6 py-3 backdrop-blur-sm border border-border/50">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-muted-foreground">
                Powered by advanced Monte Carlo simulation algorithms
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Calculations Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}