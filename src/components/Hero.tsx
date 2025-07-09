import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Harrison Muchiri Njogu
            </h1>
            <div className="text-xl sm:text-2xl text-muted-foreground">
              <span className="block">Full-Stack Developer</span>
              <span className="block">& Technology Enthusiast</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. I build
            modern web applications and explore emerging technologies to solve
            real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/harrisonmuchiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:bg-muted rounded-full"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/harrison-njogu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:bg-muted rounded-full"
            >
              <Linkedin size={24} />
            </a>
            <Link
              to="/contact"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:bg-muted rounded-full"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;