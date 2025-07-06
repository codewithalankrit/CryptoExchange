import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Code,
  BarChart,
  Headphones,
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: TrendingUp,
      title: "Equity & Growth",
      description:
        "Stock options, performance bonuses, and clear career advancement paths.",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and unlimited PTO policy.",
    },
    {
      icon: Users,
      title: "Learning & Development",
      description:
        "Conference budgets, online courses, and mentorship programs.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "New York, NY / Remote",
      type: "Full-time",
      icon: Code,
      description:
        "Join our frontend team to build the next generation of trading interfaces using React, TypeScript, and modern web technologies.",
      requirements: [
        "5+ years React experience",
        "TypeScript proficiency",
        "Financial markets knowledge preferred",
      ],
    },
    {
      title: "Quantitative Analyst",
      department: "Trading",
      location: "Chicago, IL",
      type: "Full-time",
      icon: BarChart,
      description:
        "Develop algorithmic trading strategies and risk models to optimize our trading platform's performance.",
      requirements: [
        "PhD in Math/Physics/Finance",
        "Python/R expertise",
        "Options pricing knowledge",
      ],
    },
    {
      title: "Product Manager - Trading Platform",
      department: "Product",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      icon: TrendingUp,
      description:
        "Lead product strategy for our core trading platform, working closely with engineering and design teams.",
      requirements: [
        "5+ years product management",
        "Fintech experience",
        "Strong analytical skills",
      ],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX / Remote",
      type: "Full-time",
      icon: Headphones,
      description:
        "Help our users succeed in their trading journey by providing excellent support and educational resources.",
      requirements: [
        "3+ years customer success",
        "Trading knowledge helpful",
        "Excellent communication skills",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      icon: Shield,
      description:
        "Ensure our platform's reliability and security with modern DevOps practices and cloud infrastructure.",
      requirements: [
        "AWS/GCP experience",
        "Kubernetes knowledge",
        "Security best practices",
      ],
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Boston, MA / Remote",
      type: "Full-time",
      icon: BarChart,
      description:
        "Analyze trading patterns and user behavior to improve our platform and develop new features.",
      requirements: [
        "PhD in relevant field",
        "Machine learning expertise",
        "Python/SQL proficiency",
      ],
    },
  ];

  const departments = [
    "All",
    "Engineering",
    "Trading",
    "Product",
    "Customer Success",
    "Data",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Trading
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us democratize access to financial markets and build the next
              generation of trading technology. Work with a team of passionate
              professionals who are reshaping the fintech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">
                  Team Members
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <div className="text-sm text-muted-foreground">
                  Global Offices
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-success mb-2">95%</div>
                <div className="text-sm text-muted-foreground">
                  Employee Satisfaction
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-trading-gold mb-2">
                  4.8★
                </div>
                <div className="text-sm text-muted-foreground">
                  Glassdoor Rating
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work at TradePro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that great people do their best work when they're
              supported, challenged, and inspired. Here's what we offer our
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our team and help build the future of trading technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={dept === "All" ? "secondary" : "ghost"}
                size="sm"
              >
                {dept}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="bg-background border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <position.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {position.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline">{position.department}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {position.description}
                  </CardDescription>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="hero" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for exceptional
              talent.
            </p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Shape the Future of Trading?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join a team of innovators, builders, and financial technology
              enthusiasts who are passionate about democratizing access to
              global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                View All Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
