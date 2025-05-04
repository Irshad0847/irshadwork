
import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, Check, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Define form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      
      await emailjs.send(
        'service_s7h4b9m',
        'template_rb55vtg',
        templateParams,
        'zRDMwaD_-PrKYws13'
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="max-w-3xl mx-auto bg-secondary/30 p-6 rounded-lg border border-border shadow-md animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message" 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending <span className="ml-2 animate-spin">...</span></>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
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
