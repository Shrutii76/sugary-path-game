import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { IslandMap } from "@/components/IslandMap";
import { AboutModal } from "@/components/AboutModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showMap, setShowMap] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const { toast } = useToast();

  const handleStartAdventure = () => {
    setShowMap(true);
    toast({
      title: "Adventure Started! 🎮",
      description: "Welcome to your candy-filled journey!",
    });
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  const handlePlayGame = (gameId: number) => {
    toast({
      title: `Game ${gameId} Selected! 🍭`,
      description: "Game functionality coming soon!",
    });
  };

  return (
    <div className="min-h-screen">
      {!showMap ? (
        <HeroSection 
          onStartAdventure={handleStartAdventure}
          onShowAbout={handleShowAbout}
        />
      ) : (
        <IslandMap onPlayGame={handlePlayGame} />
      )}
      
      <AboutModal 
        isOpen={showAbout} 
        onClose={() => setShowAbout(false)} 
      />
    </div>
  );
};

export default Index;
