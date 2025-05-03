
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16" id="home">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 animate-fade-in">
            <p className="text-primary mb-2 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Muhammad Irshad
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
              Passionate <span className="text-primary">Full-Stack Developer</span> focused on creating 
              modern, responsive web applications.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I build intuitive and efficient web solutions using modern technologies,
              constantly learning and evolving my skills to create exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-slide-up">
            <div className="w-72 h-72 rounded-full border-4 border-primary/20 p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/80 to-accent overflow-hidden">
                <img 
                  src="/lovable-uploads/0f2904c6-0174-491f-ade0-a1cd6a871412.png" 
                  alt="Muhammad Irshad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
