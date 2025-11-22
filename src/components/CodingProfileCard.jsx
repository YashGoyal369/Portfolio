import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Calendar, ExternalLink } from "lucide-react";

const platforms = [
  { name: "LeetCode", url: "https://leetcode.com/yashgoyal", icon: Code2 },
  { name: "CodeChef", url: "https://codechef.com/users/yashgoyal", icon: Code2 },
  { name: "Codeforces", url: "https://codeforces.com/profile/yashgoyal", icon: Code2 },
  { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/yashgoyal", icon: Code2 }
];

const skills = ["C++", "Python", "Java", "DSA", "Problem Solving", "Algorithms"];

const CodingProfileCard = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <Card className="glass-card border-2 hover:border-primary/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl gradient-text">Coding Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="h-5 w-5" />
                  <span className="text-sm">Questions Solved</span>
                </div>
                <div className="text-3xl font-bold gradient-text">500+</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">Active Days</span>
                </div>
                <div className="text-3xl font-bold gradient-text">200+</div>
              </div>
            </div>

            {/* Platforms */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Platforms</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg glass-card hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodingProfileCard;
