
import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "hamzairshad458@gmail.com",
      icon: Mail,
      link: "mailto:hamzairshad458@gmail.com",
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 28921706873",
      icon: Phone,
      link: "tel:+9128921706873",
    },
    {
      id: 3,
      title: "GitHub",
      value: "github.com/irshad0847",
      icon: Github,
      link: "https://github.com/irshad0847",
    },
    {
      id: 4,
      title: "LinkedIn",
      value: "linkedin.com/in/irshadirshal",
      icon: Linkedin,
      link: "https://linkedin.com/in/irshadirshal",
    },
  ];

  return (
    <section className="section-padding bg-background" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently open for new opportunities. Feel free to reach out if you
            want to connect or discuss potential collaborations.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.id} className="bg-secondary/50 border-border card-hover animate-fade-in">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <info.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-3">
                  {info.value}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            I'm always interested in hearing about new projects and opportunities.
            If you'd like to collaborate, please don't hesitate to get in touch.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:hamzairshad458@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send me a message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
