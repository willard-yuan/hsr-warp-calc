"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Calculator, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 group"
            onClick={() => window.location.href = '/'}
          >
            <div className="relative">
              <Calculator className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse group-hover:animate-spin" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:animate-pulse">
              HSR Warp Calculator
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#calculator" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Calculator
            </a>
            <a 
              href="#how-to" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              How to Use
            </a>
            <a 
              href="#reviews" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Reviews
            </a>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden group"
          >
            <div className="relative w-5 h-5">
              <Sun className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
              }`} />
              <Moon className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
              }`} />
            </div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}