import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MapPin, Bus } from "lucide-react";

const projects = [
  {
    title: "Bin2Bite",
    description: "Real-time geo-enabled platform using Google Maps API for high-accuracy location updates",
    icon: MapPin,
    highlights: [
      "Integrated AI-powered automation (Gemini API) to streamline workflows and reduce manual work",
      "Delivered a reliable backend using Node.js, Express.js, MongoDB",
      "Focus on uptime, optimized queries, and scalable APIs"
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Google Maps API", "Gemini AI"],
    github: "#"
  },
  {
    title: "CityLink",
    description: "WebSocket-based bus tracking system supporting continuous, low-latency telemetry",
    icon: Bus,
    highlights: [
      "Implemented Dijkstra's algorithm for optimal routing, lowering user wait times by 45%",
      "Added Google Maps-based real-time navigator motion",
      "Enhanced observability and user experience with live tracking"
    ],
    tags: ["WebSocket", "Node.js", "Google Maps", "Dijkstra", "Real-time"],
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building real-world solutions with modern tech stacks
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card border-2 hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-0.5">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Source Code
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
