import { MapPin, Download, ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">Open to work</span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Hi, I'm</span>{" "}
            <span className="gradient-text">Md Amique Zeya</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Frontend Developer
          </h2>

          <div className="flex items-center gap-2 text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <MapPin size={18} className="text-primary" />
            <span>Bengaluru, Karnataka, India</span>
          </div>

          <p className="max-w-2xl text-muted-foreground text-lg mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Frontend Developer fresher skilled in HTML, CSS, JavaScript (ES6+), and React.js. 
            Passionate about building responsive UI, working with REST APIs, and learning modern frontend technologies. 
            Actively looking for entry-level frontend opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 glow-effect"
              onClick={() => scrollToSection("#contact")}
            >
              <Download size={18} />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary/50"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
