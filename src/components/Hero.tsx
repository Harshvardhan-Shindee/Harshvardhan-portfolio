import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-glass-border bg-glass relative">
              <img 
                src={profilePhoto} 
                alt="Harshvardhan Shinde - Java Developer" 
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-smooth"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="text-lg text-primary font-medium tracking-wide">
                Hello, I'm
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Harshvardhan Shinde
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                | JAVA Developer |
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Passionate about building scalable solutions and learning new technologies. 
                Always eager to turn innovative ideas into reality through clean, efficient code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-white hover:shadow-glow transition-smooth px-8 py-3 text-lg font-medium"
              >
                <a href="#experience">View Projects</a>                
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-glass-border bg-glass text-foreground hover:bg-secondary transition-bounce px-8 py-3 text-lg"
              >
                <a href="#contact">Contact Me</a>                
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8">
              <a 
                href="mailto:harshshinde758@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-bounce" />
                <span className="font-medium">harshshinde758@gmail.com</span>
              </a>
              <a 
                href="tel:+918770308351" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-bounce" />
                <span className="font-medium">+91 8770308351</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="www.linkedin.com/in/harshvardhan-shindee" 
                className="w-12 h-12 bg-glass rounded-full flex items-center justify-center hover:bg-primary hover:shadow-glow transition-bounce group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110" />
              </a>
              <a 
                href="https://github.com/Harshvardhan-Shindee" 
                className="w-12 h-12 bg-glass rounded-full flex items-center justify-center hover:bg-primary hover:shadow-glow transition-bounce group"
              >
                <Github className="w-5 h-5 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;