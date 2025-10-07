"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BannerSettingsCard from "@/components/BannerSettingsCard";
import SimulationSettingsCard from "@/components/SimulationSettingsCard";
import SimulationResultsCard from "@/components/SimulationResultsCard";
import { CUSTOM_GAME, GAMES, IGame } from "@/lib/games";
import { useForm } from "@/hooks/useForm";
import { Settings2, Sword, User } from "lucide-react";
import {
  ISimulatorGameSettings,
  ISimulatorInput,
  Simulator,
} from "@/lib/simulator";
import { useSearchParams } from "next/navigation";
import CustomGameSettingsCard from "@/components/CustomGameSettingsCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import UserReviews from "@/components/UserReviews";
import Footer from "@/components/Footer";

function Page() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("game");

  const [selectedGame, setSelectedGame] = useState<IGame>(
    GAMES.find((g) => g.id === gameId) ||
      (gameId === "custom" ? CUSTOM_GAME : GAMES[0])
  );

  const [customSimulationSettings, setCustomSimulationSettings] =
    useState<ISimulatorGameSettings>(CUSTOM_GAME.simulationSettings);

  const [successRate, setSuccessRate] = useState(-1);

  const [formData, updateForm] = useForm<ISimulatorInput>({
    characterCopies: 0,
    characterPity: 0,
    isCharacterGuaranteed: false,
    isWeaponGuaranteed: false,
    numSimulations: 10000,
    pulls: 0,
    currency: 0,
    weaponCopies: 0,
    weaponPity: 0,
  });

  function updateFormData(key: keyof ISimulatorInput, value: number | boolean) {
    setSuccessRate(-1);
    updateForm(key, value);
  }

  function handleGameChange(gameId: string) {
    const url = new URL(window.location.href);
    url.searchParams.set("game", gameId); // Change or add the 'page' param
    window.history.pushState({}, "", url); // Update the URL without reloading

    setSuccessRate(-1);

    if (gameId === "custom") setSelectedGame(CUSTOM_GAME);
    else setSelectedGame(GAMES.find((game) => game.id === gameId)!);
  }

  function handleCalculate() {
    const simulator = new Simulator(
      selectedGame.id === "custom"
        ? customSimulationSettings
        : selectedGame.simulationSettings
    );

    const res = simulator.run({
      characterCopies: formData.characterCopies,
      characterPity: formData.characterPity,
      isCharacterGuaranteed: formData.isCharacterGuaranteed,
      isWeaponGuaranteed: formData.isWeaponGuaranteed,
      numSimulations: formData.numSimulations,
      pulls: formData.pulls,
      currency: formData.currency,
      weaponCopies: formData.weaponCopies,
      weaponPity: formData.weaponPity,
    });
    setSuccessRate(res);

    // Scroll to the results section after calculation
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  }

  const conversionRate =
    selectedGame.id === "custom"
      ? customSimulationSettings.conversionRate
      : selectedGame.simulationSettings.conversionRate;

  function validateForm() {
    return (
      (formData.pulls > 0
        ? formData.currency >= 0
        : formData.currency >= conversionRate) &&
      formData.characterPity >= 0 &&
      formData.weaponPity >= 0 &&
      formData.numSimulations > 0 &&
      (formData.characterCopies > 0 || formData.weaponCopies > 0)
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-5xl p-6 mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Gacha Calculator
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Calculate your probability of getting desired characters and weapons with our advanced simulation engine
            </p>
          </div>

          {/* Main Calculator Card */}
          <Card className="shadow-2xl bg-card/50 border-border backdrop-blur-xl overflow-hidden">
          <CardContent className="space-y-8 p-8">
            {/* Game Selection Header */}
            <div className="text-center pb-6 border-b border-border/50">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Choose Your Game</h3>
              <p className="text-muted-foreground">Select the game you want to calculate probabilities for</p>
            </div>

            {/* Game Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-medium text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Game Selection
              </Label>
              <Select
                value={selectedGame.id}
                onValueChange={(v) => {
                  handleGameChange(v);
                }}
              >
                <SelectTrigger className="cursor-pointer w-full h-14 transition-all duration-200 text-foreground bg-background border-2 border-border hover:border-primary/50 focus:border-primary">
                  <SelectValue placeholder="Choose your game" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border cursor-pointer">
                  {GAMES.map((game, i) => (
                    <SelectItem
                      key={i}
                      value={game.id}
                      className="text-foreground focus:bg-muted focus:text-foreground cursor-pointer py-3"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={game.icon}
                          alt="Icon"
                          width={160}
                          height={160}
                          className="w-8 h-8 rounded-full border-2 border-border"
                        />
                        <span className="font-medium">{game.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                  <SelectItem
                    value={"custom"}
                    className="text-foreground focus:bg-muted focus:text-foreground cursor-pointer py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <Settings2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Custom Game</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Custom Game Settings */}
            {selectedGame.id === "custom" && (
              <CustomGameSettingsCard
                simulationSettings={customSimulationSettings}
                setSimulationSettings={setCustomSimulationSettings}
              />
            )}

            {/* Settings*/}
            <SimulationSettingsCard
              numSimulations={formData.numSimulations}
              setNumSimulations={(value) =>
                updateFormData("numSimulations", value)
              }
              pullName={
                selectedGame.gameTerms.pullName +
                selectedGame.gameTerms.pullConjugation
              }
              pulls={formData.pulls}
              setPulls={(value) => updateFormData("pulls", value)}
              currencyName={
                selectedGame.gameTerms.currencyName +
                selectedGame.gameTerms.currencyConjugation
              }
              currency={formData.currency}
              setCurrency={(value) => updateFormData("currency", value)}
            />

            {/* Banner Configuration */}
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {/* Character Banner */}
              <BannerSettingsCard
                icon={User}
                currentPity={formData.characterPity}
                setCurrentPity={(value) =>
                  updateFormData("characterPity", value)
                }
                desiredCopies={formData.characterCopies}
                setDesiredCopies={(value) =>
                  updateFormData("characterCopies", value)
                }
                guaranteed={formData.isCharacterGuaranteed}
                setGuaranteed={(value) =>
                  updateFormData("isCharacterGuaranteed", value)
                }
                gameTerms={selectedGame.gameTerms}
                type="character"
              />

              {/* Weapon Banner */}
              <BannerSettingsCard
                icon={Sword}
                currentPity={formData.weaponPity}
                setCurrentPity={(value) => updateFormData("weaponPity", value)}
                desiredCopies={formData.weaponCopies}
                setDesiredCopies={(value) =>
                  updateFormData("weaponCopies", value)
                }
                guaranteed={formData.isWeaponGuaranteed}
                setGuaranteed={(value) =>
                  updateFormData("isWeaponGuaranteed", value)
                }
                gameTerms={selectedGame.gameTerms}
                type="weapon"
              />
            </div>

            {/* Calculate Button */}
            <div className="pt-6 border-t border-border/50">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Ready to Calculate?</h4>
                <p className="text-sm text-muted-foreground">Run advanced Monte Carlo simulation to get your probability</p>
              </div>
              <Button
                disabled={!validateForm()}
                onClick={handleCalculate}
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  Calculate Probability
                  <span className="text-sm opacity-80">✨</span>
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>

            {/* Results Section */}
            {successRate >= 0 && (
              <div id="results-section">
                <SimulationResultsCard
                  characterCopies={formData.characterCopies}
                  gameTerms={selectedGame.gameTerms}
                  numSimulations={formData.numSimulations}
                  totalPulls={
                    formData.pulls + Math.floor(formData.currency / conversionRate)
                  }
                  pulls={formData.pulls}
                  currencyPulls={Math.floor(formData.currency / conversionRate)}
                  successRate={successRate}
                  weaponCopies={formData.weaponCopies}
                />
              </div>
            )}
          </div>
        </section>
        
        {/* How To Section */}
        <HowTo />
        
        {/* User Reviews Section */}
        <UserReviews />
        
        {/* Footer Section */}
        <Footer />
      </div>
    );
}

export default function page() {
  return (
    //Suspense to fix this error: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <Suspense>
      <Page />
    </Suspense>
  );
}
