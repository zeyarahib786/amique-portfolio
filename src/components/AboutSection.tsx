import { Code2, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful user interfaces",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working well in team environments",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Get to know more about me and what I do
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl" />
              
              {/* Main card */}
              <div className="relative glass-card p-8 rounded-2xl">
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold gradient-text mb-4">AZ</div>
                    <p className="text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              A passionate Frontend Developer based in Bengaluru, India
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a fresh graduate with a B.Tech in Computer Science, passionate about creating 
                beautiful and functional web applications. My journey in web development started 
                during my college years, and I've been hooked ever since.
              </p>
              <p>
                I specialize in building responsive user interfaces using React.js, modern JavaScript (ES6+), 
                and CSS frameworks like Tailwind CSS and Bootstrap. I love turning complex problems 
                into simple, beautiful, and intuitive designs.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enhancing my skills through online courses and tutorials.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
