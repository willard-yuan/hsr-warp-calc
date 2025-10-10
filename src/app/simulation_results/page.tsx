"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Settings2, User, Sword, Calculator, Share2, Sparkles, RefreshCw, Twitter, Facebook, MessageCircle, Copy, ChevronDown } from "lucide-react";
import SimulationResultsCard from "@/components/SimulationResultsCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GAMES, CUSTOM_GAME, IGame } from "@/lib/games";

interface SimulationData {
  // 计算结果
  characterCopies: number;
  numSimulations: number;
  totalPulls: number;
  pulls: number;
  currencyPulls: number;
  successRate: number;
  weaponCopies: number;
  gameId: string;
  
  // 计算参数 - Settings
  currency: number;
  conversionRate: number;
  
  // 计算参数 - Character Banner
  characterPity: number;
  isCharacterGuaranteed: boolean;
  
  // 计算参数 - Weapon Banner
  weaponPity: number;
  isWeaponGuaranteed: boolean;
  
  // 游戏设置（用于自定义游戏）
  customSimulationSettings?: any;
}

function SimulationResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [simulationData, setSimulationData] = useState<SimulationData | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [selectedGame, setSelectedGame] = useState<IGame>(GAMES[0]);

  useEffect(() => {
    // 从 URL 参数中获取数据
    const data = searchParams.get('data');
    if (data) {
      try {
        const parsedData: SimulationData = JSON.parse(decodeURIComponent(data));
        setSimulationData(parsedData);
        
        // 设置游戏信息
        const game = GAMES.find(g => g.id === parsedData.gameId) || CUSTOM_GAME;
        setSelectedGame(game);
      } catch (error) {
        console.error('Error parsing simulation data:', error);
        router.push('/');
      }
    } else {
      // 如果没有数据，重定向到主页
      router.push('/');
    }
  }, [searchParams, router]);

  // 点击外部区域关闭分享菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showShareMenu) {
        const target = event.target as Element;
        if (!target.closest('.share-menu-container')) {
          setShowShareMenu(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareMenu]);

  // 生成分享内容
  const generateShareContent = () => {
    const successRate = Math.round(simulationData!.successRate * 100 * 1000) / 1000;
    const gameTerms = selectedGame.gameTerms;
    
    const title = `🎮 ${selectedGame.name} Simulation Results`;
    const content = `I just ran a gacha simulation and got a ${successRate}% success rate! 🎯\n\n` +
      `📊 ${simulationData!.numSimulations.toLocaleString()} simulations\n` +
      `🎯 Target: ${simulationData!.characterCopies} ${gameTerms.characterName} + ${simulationData!.weaponCopies} ${gameTerms.weaponName}\n` +
      `💎 Budget: ${simulationData!.totalPulls.toLocaleString()} ${gameTerms.pullName}${gameTerms.pullConjugation}\n\n` +
      `Try your own simulation at:`;
    
    return { title, content };
  };

  // 分享到 X (Twitter)
  const shareToX = () => {
    const { title, content } = generateShareContent();
    const url = window.location.origin;
    const text = `${title}\n\n${content}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  // 分享到 Facebook
  const shareToFacebook = () => {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  // 分享到 Reddit
  const shareToReddit = () => {
    const { title, content } = generateShareContent();
    const url = window.location.href;
    const text = `${content}\n\n${url}`;
    const shareUrl = `https://reddit.com/submit?title=${encodeURIComponent(title)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  // 复制链接
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // 这里可以添加一个 toast 通知
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  if (!simulationData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading simulation results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-background to-primary/5 border-b border-border pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-muted"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-muted"
              onClick={() => router.push('/')}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Simulation Results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your gacha probability calculation results for {selectedGame.name}
            </p>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Calculation Parameters Card */}
          <Card className="shadow-lg bg-card/50 border-border backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Settings2 className="w-6 h-6 text-primary" />
                Calculation Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Settings Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <Settings2 className="w-5 h-5 text-primary" />
                  Settings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Simulations</p>
                    <p className="text-lg font-semibold">{simulationData.numSimulations.toLocaleString()}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Current {selectedGame.gameTerms.pullName}s</p>
                    <p className="text-lg font-semibold">{simulationData.pulls}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Current {selectedGame.gameTerms.currencyName}s</p>
                    <p className="text-lg font-semibold">{(simulationData.currency || 0).toLocaleString()}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Total {selectedGame.gameTerms.pullName}s</p>
                    <p className="text-lg font-semibold">{simulationData.totalPulls}</p>
                  </div>
                </div>
              </div>

              {/* Character Banner Section */}
              {simulationData.characterCopies > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <User className="w-5 h-5 text-primary" />
                    {selectedGame.gameTerms.characterName} Banner
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Desired Copies</p>
                      <p className="text-lg font-semibold">{simulationData.characterCopies}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Current Pity</p>
                      <p className="text-lg font-semibold">{simulationData.characterPity || 0}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Guaranteed</p>
                      <p className="text-lg font-semibold">{simulationData.isCharacterGuaranteed ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Weapon Banner Section */}
              {simulationData.weaponCopies > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <Sword className="w-5 h-5 text-primary" />
                    {selectedGame.gameTerms.weaponName} Banner
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Desired Copies</p>
                      <p className="text-lg font-semibold">{simulationData.weaponCopies}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Current Pity</p>
                      <p className="text-lg font-semibold">{simulationData.weaponPity || 0}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Guaranteed</p>
                      <p className="text-lg font-semibold">{simulationData.isWeaponGuaranteed ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Simulation Results Card */}
          <SimulationResultsCard
            characterCopies={simulationData.characterCopies}
            gameTerms={selectedGame.gameTerms}
            numSimulations={simulationData.numSimulations}
            totalPulls={simulationData.totalPulls}
            pulls={simulationData.pulls}
            currencyPulls={simulationData.currencyPulls}
            successRate={simulationData.successRate}
            weaponCopies={simulationData.weaponCopies}
          />
          
          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Calculate Again Button */}
            <Button 
              onClick={() => router.push('/#calculator')}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Calculate Again</span>
                <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              </div>
            </Button>

            {/* Share Results Menu */}
            <div className="relative share-menu-container">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="group relative overflow-hidden border-2 border-primary/40 hover:border-primary bg-background/80 backdrop-blur-sm hover:bg-primary/5 text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg">Share Results</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showShareMenu ? 'rotate-180' : ''}`} />
                </div>
              </Button>

              {/* Share Menu Dropdown */}
              {showShareMenu && (
                <div className="absolute top-full mt-2 right-0 bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-2xl p-2 min-w-[200px] z-50">
                  <div className="space-y-1">
                    {/* Share to X */}
                    <button
                      onClick={() => {
                        shareToX();
                        setShowShareMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                    >
                      <Twitter className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">Share to X</span>
                    </button>

                    {/* Share to Facebook */}
                    <button
                      onClick={() => {
                        shareToFacebook();
                        setShowShareMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                    >
                      <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">Share to Facebook</span>
                    </button>

                    {/* Share to Reddit */}
                    <button
                      onClick={() => {
                        shareToReddit();
                        setShowShareMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                    >
                      <MessageCircle className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">Share to Reddit</span>
                    </button>

                    {/* Copy Link */}
                    <button
                      onClick={() => {
                        copyLink();
                        setShowShareMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                    >
                      <Copy className="w-5 h-5 text-gray-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">Copy Link</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action Text */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Try different parameters or share your results with friends!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function SimulationResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <SimulationResultsContent />
    </Suspense>
  );
}