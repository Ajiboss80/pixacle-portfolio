import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ImageCarousel from "@/components/ImageCarousel";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Portfolio />
      <ImageCarousel />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="py-4 text-center text-muted-foreground border-t border-border/50">
        <p>&copy; 2025 Pixacle. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
