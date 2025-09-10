import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "harshshinde758@gmail.com",
      link: "mailto:harshshinde758@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8770308351",
      link: "tel:+918770308351",
      description: "Let's have a conversation"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Indore, India",
      link: "#",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "www.linkedin.com/in/harshvardhan-shindee",
      description: "Professional network"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Harshvardhan-Shindee",
      description: "Code repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-glass border-glass-border shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology. Whether you're looking 
                  for a developer, have a question, or want to connect, feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-smooth group"
                    >
                      <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-primary font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA and Social Links */}
          <div className="space-y-8">
            {/* Call to Action Card */}
            <Card className="bg-glass border-glass-border shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-8">
                  Let's discuss how we can work together to bring your ideas to life. 
                  I'm excited to hear about your project!
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-accent text-white hover:shadow-glow transition-smooth px-8 py-3"
                  asChild
                >
                  <a href="mailto:harshshinde758@gmail.com">
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-glass border-glass-border shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">Connect Online</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-smooth group"
                    >
                      <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                        <div className="text-white">
                          {social.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;