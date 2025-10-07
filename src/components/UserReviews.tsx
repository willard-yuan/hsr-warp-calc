"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function UserReviews() {
  const reviews = [
    {
      name: "Alex Chen",
      role: "HSR Player",
      avatar: "AC",
      rating: 5,
      review: "This calculator saved me so much money! I was able to plan my pulls perfectly for Kafka and got her within my budget. The accuracy is incredible!",
      game: "Honkai Star Rail"
    },
    {
      name: "Sarah Kim",
      role: "Genshin Enthusiast", 
      avatar: "SK",
      rating: 5,
      review: "Finally, a calculator that actually understands the pity system! Used it for Raiden Shogun and the predictions were spot on. Highly recommended!",
      game: "Genshin Impact"
    },
    {
      name: "Mike Rodriguez",
      role: "ZZZ Beta Tester",
      avatar: "MR", 
      rating: 5,
      review: "The ZZZ calculations are already so accurate even in beta! This tool is going to be essential for the full release. Love the clean interface too.",
      game: "Zenless Zone Zero"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              What Our Users Say about HSR Warp Calculator
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied players who trust our calculations for their gacha planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>

                {/* Game Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {review.game}
                  </span>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50,000+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-500">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-500">10M+</div>
            <div className="text-muted-foreground">Calculations Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
}