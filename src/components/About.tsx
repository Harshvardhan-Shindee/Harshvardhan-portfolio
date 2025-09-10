import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Passionate about tackling complex challenges with innovative solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Always Learning",
      description: "Constantly exploring new technologies and improving skills"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Strong foundation in Computer Science and Engineering"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future through code, one project at a time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="bg-glass border-glass-border shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am currently pursuing a <strong className="text-foreground">B.Tech in Computer Science and Engineering</strong> 
                    with a strong focus on Java development. My passion for coding and problem-solving drives me to 
                    constantly explore new technologies and push the boundaries of what's possible.
                  </p>
                  <p>
                    I aspire to build a successful career in software development, contributing to impactful projects 
                    and innovative solutions. Beyond technical skills, I am approachable, enjoy connecting with people, 
                    and believe in maintaining a positive work environment.
                  </p>
                  <p>
                    Every line of code I write is an opportunity to learn something new and create solutions that 
                    make a difference. I'm always eager to take on new challenges and collaborate with like-minded 
                    individuals who share the same passion for technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-glass border-glass-border shadow-elegant hover:shadow-accent-glow transition-smooth group cursor-default"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-bounce shadow-glow">
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <Card className="bg-glass border-glass-border shadow-elegant mt-12">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-primary">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Chameli Devi Group of Institutions, Indore
                  </p>
                  <p className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full inline-block">
                    2022 – 2026 (Pursuing)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;