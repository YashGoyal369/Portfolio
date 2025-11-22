import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/20">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Experience card */}
          <Card className="glass-card border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    TechNova Solutions
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    Full Stack Engineering Intern
                  </CardDescription>
                </div>
                <Badge variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  June 2024 - Sep 2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Worked on end-to-end development of scalable web modules using Node.js, Express.js, React.js, and MongoDB</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Implemented REST + WebSocket APIs improving system responsiveness and reducing latency for real-time features</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Built automation scripts and optimized backend workflows, reducing manual operations by 20%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>Performed debugging and root-cause analysis, improving correctness and reinforcing principles used in distributed, fault-tolerant systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
