import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yashgo9878@gmail.com",
    href: "mailto:yashgo9878@gmail.com",
    description: "Drop me a line anytime"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/YashGoyal369",
    username: "@YashGoyal369",
    color: "hover:text-[#181717] dark:hover:text-[#f5f5f5]",
    bgColor: "hover:bg-[#181717]/10 dark:hover:bg-[#f5f5f5]/10"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-goyal-bba236246/",
    username: "yash-goyal",
    color: "hover:text-[#0077B5] dark:hover:text-[#0077B5]",
    bgColor: "hover:bg-[#0077B5]/10"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--gradient-to))]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="space-y-16">
          {/* Section header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, opportunities, or just having a tech chat!
              <br />
              <span className="text-base">Feel free to reach out through any of the channels below.</span>
            </p>
          </div>

          {/* Contact cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email card */}
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-lg font-semibold hover:text-primary transition-colors block group-hover:scale-105"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold">{contact.value}</div>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">{contact.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick contact card */}
            <Card className="glass-card hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-6 flex flex-col justify-center h-full">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[hsl(var(--gradient-from))]/20 to-[hsl(var(--gradient-to))]/10 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Send className="h-8 w-8 text-[hsl(var(--gradient-from))]" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Quick Response
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social links */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Connect on Social Media</h3>
              <p className="text-muted-foreground">Let's stay connected and share ideas</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
                  >
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 min-w-[200px]">
                          <div className={`p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors ${social.bgColor}`}>
                            <Icon className={`h-6 w-6 text-primary transition-colors ${social.color}`} />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                              {social.label}
                            </div>
                            <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                              {social.username}
                            </div>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Send className="h-4 w-4 text-muted-foreground" />
                          </div>
                      </div>
                      </CardContent>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button 
              size="lg" 
              className="gap-3 px-8 py-6 text-base group shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105" 
              asChild
            >
              <a href="mailto:yashgo9878@gmail.com">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Send me an email
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
