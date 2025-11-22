import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Target, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "ICPC Regionalist 2022",
    description: "Global Rank 193",
    color: "text-yellow-500"
  },
  {
    icon: Award,
    title: "IIT Bombay Meshmerize",
    description: "Top 5 Zonals Finalist",
    color: "text-blue-500"
  },
  {
    icon: Target,
    title: "Meta Hacker Cup",
    description: "Round 1 - Rank 2363 Global",
    color: "text-purple-500"
  },
  {
    icon: Code,
    title: "Flipkart Grid 7.0",
    description: "Semifinalist",
    color: "text-green-500"
  }
];

const cpStats = [
  { platform: "Codeforces", rating: "1412", level: "Specialist" },
  { platform: "CodeChef", rating: "1832", level: "4-star" },
  { platform: "Coding Ninjas", rating: "1828", level: "Specialist" },
  { platform: "LeetCode", rating: "1800+", level: "Contest Rating" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-card/20 to-transparent">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition in competitive programming and hackathons
            </p>
          </div>

          {/* Major achievements */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className={`p-3 rounded-lg bg-primary/10 w-fit ${achievement.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CP Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">
              <span className="gradient-text">Competitive Programming Stats</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cpStats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 text-center space-y-2 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.rating}</div>
                  <div className="text-sm font-medium">{stat.platform}</div>
                  <div className="text-xs text-muted-foreground">{stat.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
