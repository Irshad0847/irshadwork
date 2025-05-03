
import React from "react";
import { Rocket, GraduationCap, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              Hi, I'm Irshad, a passionate developer with interests in coding and designing. 
              I'm constantly learning and building my skills with the goal of becoming a 
              successful software engineer.
            </p>
            <p className="text-muted-foreground mb-4">
              I enjoy creating clean, modern, and functional websites and applications
              that provide great user experiences. My approach combines technical skills with
              creative problem-solving to build effective solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, I'm exploring new technologies, contributing to open source
              projects, or expanding my knowledge through online courses and tutorials.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Education & Skills</h3>
            
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <GraduationCap className="text-primary mt-1" />
                <div>
                  <h4 className="font-medium">SSLC</h4>
                  <p className="text-sm text-muted-foreground">Udaya EMS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Diploma</h4>
                  <p className="text-sm text-muted-foreground">P.A. Polytechnic (Expected 2025)</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium mb-2">Technical Skills</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">Express</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary h-4 w-4" />
                <span className="text-sm">Strapi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
