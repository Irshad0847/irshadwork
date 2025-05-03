
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  purpose: string;
  technologies: string[];
  impact: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Mobile Website",
      description: "A mobile-responsive e-commerce platform with a modern UI and secure payment processing.",
      purpose: "Developed a mobile-responsive e-commerce website for showcasing and selling products.",
      technologies: ["React", "ShadCN", "Strapi", "PostgreSQL", "Tailwind CSS", "JavaScript"],
      impact: "Enhanced skills in full-stack development and created a user-friendly platform for secure online transactions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "https://github.com/irshad0847/ecommerce-project",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Online Quiz App",
      description: "Interactive quiz application that tests users' knowledge on various topics.",
      purpose: "A quiz app for testing knowledge on various topics.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      impact: "Improved understanding of full-stack development while creating an educational app.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "https://github.com/irshad0847/quiz-app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio website built with modern technologies.",
      purpose: "Showcase my skills, projects and professional information.",
      technologies: ["React", "Tailwind CSS", "Vite", "TypeScript"],
      impact: "Created a professional online presence to display my work and skills.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "https://github.com/irshad0847/portfolio",
      liveUrl: "#",
    },
  ];

  return (
    <section className="section-padding bg-secondary" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and
            experience in full-stack development.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-background border-border card-hover animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Purpose:</p>
                  <p className="text-sm text-muted-foreground">{project.purpose}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Impact:</p>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
