import { Button } from "@/components/ui/button";
import Timeline from "@/components/Timeline";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <Link to="/" className="inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                Project: Le Manège de Paséidon
              </span>
            </Link>
          </h1>

          <img src="/placeholder.svg" alt="Finished fish carousel" className="w-full h-auto rounded-lg mb-4" />

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our project is a manual fish carousel. The goal is to create a fluid, organic movement that simulates swimming. The fish,
            made from folded cardstock (cut on the Cricut), are attached to a central wooden piece. This main structure, laser-cut,
            features scoring lines to facilitate folding into a wave shape, adding visual depth to the movement. The assembly is driven
            by a central rotating pillar, made of two nested parts, which is operated manually by a crank.
          </p>

          <h2 className="text-2xl font-semibold mt-4">Key Components & Techniques</h2>
          <ul className="text-muted-foreground max-w-2xl mx-auto list-disc list-inside">
            <li>Wave Structure: Laser-cut central wooden piece with score lines for folding.</li>
            <li>Fish: Cardstock silhouettes (cut and scored via Cricut).</li>
            <li>Mechanism: Two-part manual rotating pillar with a crank.</li>
            <li>Tools: Rhino, Fusion 360, Laser Cutter, Cricut, Bambu Lab.</li>
          </ul>

          <hr className="my-8" />

          <div className="flex gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              onClick={scrollToTimeline}
              className="gradient-hero shadow-elegant hover:shadow-2xl transition-smooth text-primary-foreground"
            >
              Discover the project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:border-primary transition-smooth"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <div id="timeline" className="bg-secondary/30">
        <Timeline />
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
         <p>Project created with passion · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
