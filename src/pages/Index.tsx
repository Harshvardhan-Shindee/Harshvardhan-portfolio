import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-glass border-t border-glass-border py-8 text-center text-muted-foreground">
        <p>© 2025 Harshvardhan Shinde. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
