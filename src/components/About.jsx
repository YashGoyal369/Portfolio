import { Badge } from "@/components/ui/badge";

const skills = {
  languages: ["C++", "Python", "Java", "SQL"],
  backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "MongoDB"],
  tools: ["Git", "GitHub", "Postman", "VS Code"],
  concepts: ["DSA", "OOP", "System Design", "OS", "DBMS", "CN", "Distributed Systems"]
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building robust, scalable applications and solving complex algorithmic challenges
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                className="glass-card rounded-xl p-6 space-y-4 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-bold capitalize gradient-text">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">193</div>
              <div className="text-sm text-muted-foreground">ICPC Global Rank</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">1800+</div>
              <div className="text-sm text-muted-foreground">LeetCode Rating</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">4★</div>
              <div className="text-sm text-muted-foreground">CodeChef</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
