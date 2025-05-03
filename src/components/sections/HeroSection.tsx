
import React from "react";
import { ArrowRight, Github, Linkedin, Mail, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return <section className="hero-gradient min-h-screen flex items-center pt-16" id="home">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="py-1">Available for work</Badge>
              <Badge variant="outline" className="py-1">Full-Stack Developer</Badge>
            </div>
            
            <div>
              <p className="text-primary mb-2 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 heading-gradient">
                Muhammad Irshad
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
                Passionate <span className="text-primary">Full-Stack Developer</span> creating 
                modern, responsive web applications.
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-lg border-l-4 border-primary/50 pl-4">
              I build intuitive and efficient web solutions using modern technologies,
              constantly learning and evolving my skills to create exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <a href="https://github.com/irshad0847" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/irshadirshal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hamzairshad458@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-slide-up relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-30 rounded-full"></div>
              <div className="w-72 h-72 rounded-full border-4 border-primary/20 p-2 backdrop-blur-sm relative z-10">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/80 to-accent overflow-hidden ring-2 ring-white/10">
                  <img src="/lovable-uploads/0f2904c6-0174-491f-ade0-a1cd6a871412.png" alt="Muhammad Irshad" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-lg z-20 flex items-center gap-2">
                <Award className="text-primary h-4 w-4" />
                <p className="text-xs font-medium">2+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
