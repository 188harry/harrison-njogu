import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Git",
    "REST APIs", "GraphQL", "Tailwind CSS", "Bootstrap"
  ];

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Tech Innovations Ltd",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      description: "Developed and maintained web applications, collaborated with cross-functional teams."
    },
    {
      title: "Junior Developer",
      company: "StartUp Kenya",
      period: "2019 - 2020",
      description: "Built responsive websites and mobile applications, gained experience in full-stack development."
    }
  ];

  const expertiseAreas = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern web applications using React, Vue.js, and Node.js"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and Flutter"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable APIs and database design with various technologies"
    },
    {
      icon: Code,
      title: "DevOps & Cloud",
      description: "CI/CD pipelines, containerization, and cloud deployment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies.
            I love creating efficient, scalable solutions and staying up-to-date with the latest industry trends.
          </p>
        </div>

        {/* Biography */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">My Journey</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Born and raised in Kenya, I discovered my passion for technology early in life. 
                  What started as curiosity about how websites work evolved into a deep love for 
                  software development and problem-solving through code.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I hold a Bachelor's degree in Computer Science and have been professionally 
                  developing software for over 4 years. My experience spans across various 
                  industries, from startups to established companies, where I've contributed 
                  to projects that impact thousands of users.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge through technical writing and 
                  mentoring aspiring developers.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Expertise Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <area.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Technical Skills
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;