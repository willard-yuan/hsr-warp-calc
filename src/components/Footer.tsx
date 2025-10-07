"use client";

import React from 'react';
import { Heart, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">HSR Warp Calculator</h3>
            <p className="text-sm text-muted-foreground">
              Calculate your chances of getting characters and weapons in HoYoverse games with our advanced probability calculator.
            </p>
            <div 
              className="flex items-center space-x-2 text-sm text-muted-foreground cursor-pointer hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 group"
              onClick={() => window.location.href = '/'}
            >
              <span className="group-hover:animate-pulse">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current group-hover:animate-bounce transition-transform duration-300" />
              <span className="group-hover:animate-pulse">for the gacha community</span>
            </div>
          </div>

          {/* Games Section */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Supported Games</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="?game=hsr" className="hover:text-primary transition-colors">
                  Honkai: Star Rail
                </a>
              </li>
              <li>
                <a href="?game=genshin" className="hover:text-primary transition-colors">
                  Genshin Impact
                </a>
              </li>
              <li>
                <a href="?game=zzz" className="hover:text-primary transition-colors">
                  Zenless Zone Zero
                </a>
              </li>
              <li>
                <a href="?game=custom" className="hover:text-primary transition-colors">
                  Custom Game
                </a>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Accurate Pity System</li>
              <li>50/50 Mechanics</li>
              <li>Monte Carlo Simulation</li>
              <li>Multi-Game Support</li>
              <li>Real-time Calculations</li>
              <li>Mobile Responsive</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Have suggestions or found a bug?</p>
              <p>We'd love to hear from you!</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 HSR Warp Calculator. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 text-xs text-muted-foreground text-center">
            <p>
              This calculator is a fan-made tool and is not affiliated with HoYoverse. 
              All game names, characters, and assets are trademarks of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}