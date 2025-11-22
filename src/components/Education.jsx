import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (CSE)",
    institution: "Indian Institute of Information Technology, Kota",
    period: "2022 - Present",
    score: null
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Senior Secondary Education",
    period: "2021",
    score: "Percentage: 96.4%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          {/* Education cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass-card border-2 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      </div>
                      <p className="text-muted-foreground pl-14">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      {edu.score && (
                        <div className="text-lg font-bold gradient-text">
                          {edu.score}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
