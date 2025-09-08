import { Button } from "@/components/ui/button";
import { Sparkles, Map } from "lucide-react";
import candyIslandBg from "@/assets/candy-island-bg.jpg";

interface HeroSectionProps {
  onStartAdventure: () => void;
  onShowAbout: () => void;
}

export const HeroSection = ({ onStartAdventure, onShowAbout }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-sky overflow-hidden"
      style={{
        backgroundImage: `url(${candyIslandBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating candy decorations */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-candy-pink rounded-full animate-float opacity-80" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-candy-yellow rounded-full animate-bounce-gentle opacity-80" />
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-candy-blue rounded-full animate-float opacity-80" />
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-candy-purple rounded-full animate-bounce-gentle opacity-80" />
      
      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        {/* Title with sparkle icon */}
        <div className="space-y-4">
          <Sparkles className="mx-auto w-16 h-16 text-candy-yellow animate-pulse-candy" />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-candy bg-clip-text text-transparent animate-pulse-candy">
            Welcome to
          </h1>
          <h2 className="text-7xl md:text-9xl font-extrabold text-candy-blue drop-shadow-lg animate-bounce-gentle">
            Candy Island
          </h2>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
          Embark on a sweet adventure through magical candy lands filled with challenging puzzles and delicious surprises!
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button 
            variant="adventure" 
            size="lg" 
            onClick={onStartAdventure}
            className="text-lg px-8 py-4 rounded-2xl"
          >
            <Map className="w-6 h-6 mr-2" />
            Start Adventure
          </Button>
          <Button 
            variant="candy" 
            size="lg" 
            onClick={onShowAbout}
            className="text-lg px-8 py-4 rounded-2xl"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            About Island
          </Button>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};