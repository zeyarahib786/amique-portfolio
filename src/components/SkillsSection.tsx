import { Code, Database, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Redux.js",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "EJS"],
  },
  {
    title: "API & Data",
    icon: Globe,
    skills: ["REST APIs", "Axios", "Fetch", "AJAX", "JSON", "Promises", "Async/Await"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "DOM Manipulation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Always learning and expanding my skill set
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Quick Learner", "Problem Solver", "Team Player", "Detail Oriented"].map(
              (trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
