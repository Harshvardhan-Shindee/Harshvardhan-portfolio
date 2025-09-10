import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Briefcase, Code2, Database, Globe } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "Full Stack Developer (MERN Stack)",
      company: "Ypsilon IT Solutions Pvt. Ltd.",
      period: "Mar 2025 – Apr 2025",
      achievements: [
        "Built QuickTickets, an event booking app with secure payments and real-time updates",
        "Designed comprehensive admin dashboard for event and booking management",
        "Project secured 2nd place among all internship submissions"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      icon: <Briefcase className="w-6 h-6" />,
      highlight: "🏆 2nd Place Award"
    },
    {
      type: "project",
      title: "ProNest - Service Marketplace",
      company: "Academic Project",
      period: "Java Web Application",
      achievements: [
        "Built a comprehensive service marketplace with booking functionality",
        "Implemented secure authentication and request management system",
        "Strengthened backend development and OOP skills through practical application"
      ],
      technologies: ["Java", "JSP", "MySQL"],
      icon: <Code2 className="w-6 h-6" />,
      highlight: "Full Stack Java"
    }
  ];

  const skills = [
    {
      category: "Programming",
      items: ["C/C++", "Java", "JavaScript", "HTML/CSS", "React.js"],
      icon: <Code2 className="w-5 h-5" />
    },
    // {
    //   category: "Frameworks & Stacks",
    //   items: ["MERN Stack", "Express.js", "React.js", "Node.js"],
    //   icon: <Globe className="w-5 h-5" />
    // },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
      icon: <Database className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience & <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world impact through innovative solutions and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-glass border-glass-border shadow-elegant hover:shadow-accent-glow transition-smooth">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and Period */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-glow">
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    {exp.highlight && (
                      <Badge className="mt-2 bg-primary text-white">
                        {exp.highlight}
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-glass border-glass-border shadow-elegant hover:shadow-accent-glow transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce shadow-glow">
                  <div className="text-white">
                    {skillGroup.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-glass-border text-muted-foreground m-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;