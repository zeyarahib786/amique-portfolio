import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Project Title 1",
    description:
      "A brief description of the project. Explain what the project does and its main features. You can add more details about the problem it solves.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Project Title 2",
    description:
      "Another amazing project description. This could be an e-commerce site, a dashboard, or any web application you've built.",
    techStack: ["React.js", "Redux", "REST API", "Material-UI"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Project Title 3",
    description:
      "Description of your third project. Highlight the key features and technologies used to build this application.",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Project Title 4",
    description:
      "Your fourth project description goes here. Make sure to mention what makes this project unique and interesting.",
    techStack: ["React.js", "Express.js", "Axios", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Here are some of my recent works. Click on the links to see them live!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass-card overflow-hidden hover-lift group ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
