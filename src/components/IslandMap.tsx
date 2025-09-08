import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Lock, 
  Play, 
  CheckCircle, 
  Trophy, 
  Candy,
  Heart,
  Zap,
  Sparkles,
  Crown,
  Gift,
  Gamepad2
} from "lucide-react";

interface GameLevel {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'locked' | 'available' | 'completed';
  stars: number;
  maxStars: number;
  position: { x: number; y: number };
  description: string;
}

interface IslandMapProps {
  onPlayGame: (gameId: number) => void;
}

export const IslandMap = ({ onPlayGame }: IslandMapProps) => {
  const [selectedGame, setSelectedGame] = useState<GameLevel | null>(null);

  const gameLevels: GameLevel[] = [
    {
      id: 1,
      name: "Candy Crush Quest",
      icon: Candy,
      status: 'completed',
      stars: 3,
      maxStars: 3,
      position: { x: 15, y: 75 },
      description: "Match colorful candies to clear the board!"
    },
    {
      id: 2,
      name: "Sweet Memory",
      icon: Heart,
      status: 'completed',
      stars: 2,
      maxStars: 3,
      position: { x: 35, y: 60 },
      description: "Test your memory with candy pairs!"
    },
    {
      id: 3,
      name: "Lightning Lollipops",
      icon: Zap,
      status: 'available',
      stars: 0,
      maxStars: 3,
      position: { x: 55, y: 45 },
      description: "Fast-paced candy collection challenge!"
    },
    {
      id: 4,
      name: "Sugar Rush Race",
      icon: Sparkles,
      status: 'available',
      stars: 0,
      maxStars: 3,
      position: { x: 75, y: 30 },
      description: "Race through candy obstacles!"
    },
    {
      id: 5,
      name: "Gummy Bear Kingdom",
      icon: Crown,
      status: 'locked',
      stars: 0,
      maxStars: 3,
      position: { x: 80, y: 55 },
      description: "Rule the gummy bear kingdom!"
    },
    {
      id: 6,
      name: "Chocolate Factory",
      icon: Gift,
      status: 'locked',
      stars: 0,
      maxStars: 3,
      position: { x: 65, y: 75 },
      description: "Manage your own chocolate factory!"
    },
    {
      id: 7,
      name: "Rainbow Bridge",
      icon: Trophy,
      status: 'locked',
      stars: 0,
      maxStars: 3,
      position: { x: 45, y: 85 },
      description: "Cross the magical rainbow bridge!"
    },
    {
      id: 8,
      name: "Candy Castle",
      icon: Gamepad2,
      status: 'locked',
      stars: 0,
      maxStars: 3,
      position: { x: 25, y: 85 },
      description: "Final challenge at the Candy Castle!"
    }
  ];

  const totalStars = gameLevels.reduce((sum, game) => sum + game.stars, 0);
  const maxTotalStars = gameLevels.reduce((sum, game) => sum + game.maxStars, 0);
  const completedGames = gameLevels.filter(game => game.status === 'completed').length;
  const progressPercentage = (completedGames / gameLevels.length) * 100;

  const getStatusColor = (status: GameLevel['status']) => {
    switch (status) {
      case 'locked': return 'text-game-locked';
      case 'available': return 'text-game-available';
      case 'completed': return 'text-game-completed';
      default: return 'text-game-locked';
    }
  };

  const getStatusBg = (status: GameLevel['status']) => {
    switch (status) {
      case 'locked': return 'bg-game-locked';
      case 'available': return 'bg-game-available';
      case 'completed': return 'bg-game-completed';
      default: return 'bg-game-locked';
    }
  };

  const renderPathBetweenLevels = () => {
    const paths = [];
    for (let i = 0; i < gameLevels.length - 1; i++) {
      const current = gameLevels[i];
      const next = gameLevels[i + 1];
      
      paths.push(
        <svg
          key={`path-${i}`}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <line
            x1={`${current.position.x}%`}
            y1={`${current.position.y}%`}
            x2={`${next.position.x}%`}
            y2={`${next.position.y}%`}
            stroke={current.status === 'completed' ? 'hsl(var(--game-completed))' : 'hsl(var(--game-locked))'}
            strokeWidth="4"
            strokeDasharray={current.status === 'completed' ? "0" : "10,5"}
            className="drop-shadow-sm"
          />
        </svg>
      );
    }
    return paths;
  };

  return (
    <section className="min-h-screen bg-gradient-island p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with progress */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg">
            Adventure Map
          </h2>
          
          {/* Progress section */}
          <Card className="max-w-md mx-auto shadow-candy">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Island Progress</span>
                <Badge variant="secondary" className="bg-candy-yellow text-foreground">
                  {completedGames}/{gameLevels.length} Games
                </Badge>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-candy-yellow fill-current" />
                  <span>{totalStars}/{maxTotalStars} Stars</span>
                </div>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Island map */}
        <div className="relative bg-candy-blue/20 rounded-3xl p-8 min-h-[600px] border-4 border-white/30 shadow-candy">
          {/* Render paths between levels */}
          {renderPathBetweenLevels()}
          
          {/* Game level nodes */}
          {gameLevels.map((game) => {
            const IconComponent = game.icon;
            return (
              <div
                key={game.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${game.position.x}%`,
                  top: `${game.position.y}%`,
                  zIndex: 10
                }}
              >
                <Button
                  variant="game"
                  size="icon"
                  className={`w-16 h-16 rounded-full ${getStatusBg(game.status)} shadow-game hover:scale-110 transition-all duration-300`}
                  onClick={() => {
                    if (game.status !== 'locked') {
                      setSelectedGame(game);
                    }
                  }}
                  disabled={game.status === 'locked'}
                >
                  {game.status === 'locked' ? (
                    <Lock className="w-8 h-8 text-white" />
                  ) : (
                    <IconComponent className={`w-8 h-8 ${getStatusColor(game.status)}`} />
                  )}
                </Button>
                
                {/* Game number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {game.id}
                </div>
                
                {/* Stars indicator */}
                {game.status === 'completed' && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {Array.from({ length: game.maxStars }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < game.stars
                            ? 'text-candy-yellow fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Game details modal/card */}
        {selectedGame && (
          <Card className="mt-8 max-w-md mx-auto shadow-candy animate-scale-in">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <selectedGame.icon className="w-8 h-8 text-candy-blue" />
                <h3 className="text-2xl font-bold">{selectedGame.name}</h3>
              </div>
              
              <p className="text-muted-foreground">{selectedGame.description}</p>
              
              {selectedGame.status === 'completed' && (
                <div className="flex justify-center gap-1">
                  {Array.from({ length: selectedGame.maxStars }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < selectedGame.stars
                          ? 'text-candy-yellow fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              <div className="flex gap-3 justify-center">
                <Button
                  variant="adventure"
                  onClick={() => onPlayGame(selectedGame.id)}
                  className="flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {selectedGame.status === 'completed' ? 'Play Again' : 'Play Now'}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedGame(null)}
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};