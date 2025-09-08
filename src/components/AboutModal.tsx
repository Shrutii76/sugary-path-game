import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Heart, 
  Star, 
  Trophy, 
  Target,
  Users,
  Clock,
  Gift
} from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const features = [
    {
      icon: Target,
      title: "8 Unique Games",
      description: "Each level offers different candy-themed challenges"
    },
    {
      icon: Star,
      title: "Star Collection",
      description: "Earn up to 3 stars per level based on your performance"
    },
    {
      icon: Trophy,
      title: "Progressive Difficulty",
      description: "Unlock new levels as you master each challenge"
    },
    {
      icon: Heart,
      title: "Family Friendly",
      description: "Fun for all ages with colorful, engaging gameplay"
    }
  ];

  const stats = [
    { label: "Total Levels", value: "8", icon: Target },
    { label: "Max Stars", value: "24", icon: Star },
    { label: "Game Types", value: "8", icon: Gift },
    { label: "Play Time", value: "∞", icon: Clock }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-candy-yellow" />
            About Candy Island
            <Sparkles className="w-8 h-8 text-candy-yellow" />
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Welcome message */}
          <Card className="bg-gradient-candy text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Welcome to the Sweetest Adventure!</h3>
              <p className="leading-relaxed">
                Candy Island is a magical place where sweet dreams come true! Journey through 
                8 exciting game levels, each more delicious than the last. Collect stars, 
                unlock new areas, and become the ultimate candy champion!
              </p>
            </CardContent>
          </Card>

          {/* Game stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-candy-blue" />
                  <div className="text-2xl font-bold text-candy-pink">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Game Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-candy-pink">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <feature.icon className="w-6 h-6 text-candy-blue mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Game types preview */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-center">Available Games</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Candy Crush Quest",
                  "Sweet Memory", 
                  "Lightning Lollipops",
                  "Sugar Rush Race",
                  "Gummy Bear Kingdom",
                  "Chocolate Factory",
                  "Rainbow Bridge",
                  "Candy Castle"
                ].map((game, index) => (
                  <Badge key={index} variant="secondary" className="bg-candy-yellow/20 text-foreground">
                    {game}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center">
            <Button 
              variant="candy" 
              size="lg" 
              onClick={onClose}
              className="text-lg px-8 py-4 rounded-2xl"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Your Sweet Adventure!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};