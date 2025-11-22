import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-from))]/10 via-transparent to-[hsl(var(--gradient-to))]/10" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-mono">
                Full Stack Developer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Yash Goyal</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Building scalable web solutions with modern technologies
              </p>
            </div>

            <p className="text-base text-foreground/80 leading-relaxed max-w-lg">
              ICPC Regionalist & competitive programmer specializing in Node.js, React, and distributed systems. 
              Passionate about creating efficient, user-centric applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group">
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/YashGoyal369" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yash-goyal-bba236246/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:yashgo9878@gmail.com"
                className="p-3 rounded-lg glass-card hover:bg-primary/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex justify-center pt-2">
              <div className="w-50 h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105 ring-4 ring-primary/10">
                <img 
                  src="/yash11 (1).jpg" 
                  alt="Yash Goyal" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative aspect-square max-w-md lg:max-w-lg mx-auto">
                {/* Gradient orb */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-from))] via-[hsl(var(--gradient-via))] to-[hsl(var(--gradient-to))] rounded-full blur-3xl opacity-20 animate-pulse" />
                
                {/* Code window mockup */}
                <div className="relative glass-card rounded-2xl p-6 md:p-8 space-y-4 overflow-hidden">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="space-y-3 font-mono text-sm md:text-base">
                    <div className="flex gap-2">
                      <span className="text-muted-foreground">const</span>
                      <span className="text-primary">developer</span>
                      <span className="text-muted-foreground">=</span>
                      <span className="text-foreground">{'{'}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-primary">name:</span> <span className="text-green-400">"Yash Goyal"</span>,</div>
                      <div><span className="text-primary">role:</span> <span className="text-green-400">"Full Stack"</span>,</div>
                      <div><span className="text-primary">skills:</span> <span className="text-yellow-400">[</span><span className="text-green-400">"Node.js", "React", "MongoDB"</span><span className="text-yellow-400">]</span>,</div>
                      <div><span className="text-primary">passion:</span> <span className="text-green-400">"Problem Solving"</span></div>
                    </div>
                    <div className="text-foreground">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile photo - below the floating card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
