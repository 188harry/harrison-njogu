import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Mobile Apps", "APIs", "Open Source"];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
      category: "Web Apps",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      githubUrl: "https://github.com/harrisonmuchiri/ecommerce-platform",
      liveUrl: "https://demo-ecommerce.vercel.app",
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with user authentication, role-based access, and real-time updates.",
      category: "APIs",
      technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
      githubUrl: "https://github.com/harrisonmuchiri/task-api",
      liveUrl: "https://api-docs.taskmanager.com",
      featured: false
    },
    {
      title: "Weather Mobile App",
      description: "Cross-platform mobile app providing weather forecasts with location-based services and offline support.",
      category: "Mobile Apps",
      technologies: ["React Native", "TypeScript", "Redux", "AsyncStorage"],
      githubUrl: "https://github.com/harrisonmuchiri/weather-app",
      liveUrl: null,
      featured: true
    },
    {
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support, SEO optimization, and analytics.",
      category: "Web Apps",
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Vercel"],
      githubUrl: "https://github.com/harrisonmuchiri/blog-cms",
      liveUrl: "https://blog-cms-demo.vercel.app",
      featured: false
    },
    {
      title: "React Component Library",
      description: "Reusable UI component library built with TypeScript, Storybook, and comprehensive testing.",
      category: "Open Source",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      githubUrl: "https://github.com/harrisonmuchiri/ui-components",
      liveUrl: "https://ui-components.netlify.app",
      featured: true
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with price alerts and historical data visualization.",
      category: "Web Apps",
      technologies: ["Vue.js", "Chart.js", "CoinGecko API", "Firebase"],
      githubUrl: "https://github.com/harrisonmuchiri/crypto-tracker",
      liveUrl: "https://crypto-tracker-demo.netlify.app",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning web applications, mobile apps, APIs, and open-source contributions.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-foreground mb-4 sm:mb-0">
              All Projects
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;