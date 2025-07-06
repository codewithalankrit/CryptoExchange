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
import {
  TrendingUp,
  Shield,
  Users,
  Target,
  Award,
  Globe,
  ChartBar,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "$2.1B+", label: "Daily Trading Volume", icon: ChartBar },
    { value: "500K+", label: "Active Users", icon: Users },
    { value: "99.9%", label: "Platform Uptime", icon: Zap },
    { value: "150+", label: "Countries Served", icon: Globe },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize the security of your investments with bank-level encryption, cold storage, and regulatory compliance.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Every feature we build is designed with our users in mind, ensuring the best possible trading experience.",
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description:
        "We continuously innovate to provide cutting-edge trading tools and technologies for modern investors.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from platform performance to customer support.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      background: "Former Goldman Sachs VP with 15+ years in fintech",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      background: "Ex-Google engineer, specialist in trading algorithms",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      background: "Former Robinhood product leader with UX expertise",
    },
    {
      name: "David Kim",
      role: "Chief Security Officer",
      background: "Cybersecurity expert from major financial institutions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                TradePro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're democratizing access to financial markets by providing
              professional-grade trading tools to everyone, from first-time
              investors to seasoned traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 text-center"
              >
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that everyone should have access to the same
                sophisticated trading tools and market insights that were once
                exclusive to Wall Street professionals. Our mission is to level
                the playing field and empower individuals to take control of
                their financial future.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Since our founding in 2020, we've helped over 500,000 users
                trade over $2 billion in assets, all while maintaining the
                highest standards of security and transparency.
              </p>
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
            </div>

            <div className="bg-gradient-card rounded-3xl p-8 border border-border/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Founded in 2020</h3>
                    <p className="text-sm text-muted-foreground">
                      Started with a vision to democratize trading
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">SEC Regulated</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully compliant with financial regulations
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">
                      Recognized for innovation and user experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading TradePro's mission to
              democratize trading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 text-center"
              >
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
