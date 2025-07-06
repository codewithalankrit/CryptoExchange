import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Shield,
} from "lucide-react";

const Status = () => {
  const systemStatus = [
    {
      name: "Trading Platform",
      status: "operational",
      uptime: "99.98%",
      icon: Activity,
      description: "Core trading functionality and order execution",
    },
    {
      name: "Market Data",
      status: "operational",
      uptime: "99.99%",
      icon: Globe,
      description: "Real-time price feeds and market information",
    },
    {
      name: "User Authentication",
      status: "operational",
      uptime: "99.97%",
      icon: Shield,
      description: "Login, registration, and security services",
    },
    {
      name: "Payment Processing",
      status: "degraded",
      uptime: "98.45%",
      icon: Database,
      description: "Deposits, withdrawals, and payment methods",
    },
    {
      name: "Mobile Apps",
      status: "operational",
      uptime: "99.95%",
      icon: Server,
      description: "iOS and Android mobile applications",
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.92%",
      icon: Server,
      description: "Third-party integrations and developer API",
    },
  ];

  const recentIncidents = [
    {
      title: "Payment Processing Delays",
      status: "investigating",
      time: "2 hours ago",
      description:
        "We're experiencing delays in payment processing. Our team is working to resolve this issue.",
      updates: [
        {
          time: "2 hours ago",
          message: "Issue identified with payment gateway",
        },
        {
          time: "1 hour ago",
          message: "Working with payment provider to resolve",
        },
        { time: "30 min ago", message: "Partial restoration of service" },
      ],
    },
    {
      title: "Scheduled Maintenance - Trading Platform",
      status: "resolved",
      time: "1 day ago",
      description:
        "Completed scheduled maintenance to improve platform performance.",
      updates: [
        { time: "1 day ago", message: "Maintenance window started" },
        { time: "1 day ago", message: "All systems restored" },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-accent" />;
      case "outage":
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge className="bg-success/10 text-success border-success/20">
            Operational
          </Badge>
        );
      case "degraded":
        return (
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Degraded Performance
          </Badge>
        );
      case "outage":
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20">
            Major Outage
          </Badge>
        );
      case "investigating":
        return (
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Investigating
          </Badge>
        );
      case "resolved":
        return (
          <Badge className="bg-success/10 text-success border-success/20">
            Resolved
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Status
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time status and uptime information for all TradePro services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-success/30">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                  <h2 className="text-2xl font-bold text-success">
                    All Systems Operational
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  All core systems are running smoothly. Minor degradation in
                  payment processing is being addressed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              System Components
            </h2>
            <p className="text-xl text-muted-foreground">
              Current status of all platform services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {systemStatus.map((system, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <system.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{system.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {system.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusIcon(system.status)}
                      <div className="text-sm text-muted-foreground mt-1">
                        {system.uptime}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    {getStatusBadge(system.status)}
                    <div className="text-sm text-muted-foreground">
                      Last 30 days uptime
                    </div>
                  </div>
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
              Recent Incidents
            </h2>
            <p className="text-xl text-muted-foreground">
              Latest updates on system incidents and maintenance
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentIncidents.map((incident, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {incident.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {incident.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(incident.status)}
                      <div className="text-sm text-muted-foreground mt-2">
                        {incident.time}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Updates:</h4>
                    {incident.updates.map((update, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-muted-foreground">
                            {update.time}
                          </div>
                          <div className="text-foreground">
                            {update.message}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
              Performance Metrics
            </h2>
            <p className="text-xl text-muted-foreground">
              Key performance indicators for the last 30 days
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-success mb-2">
                  99.97%
                </div>
                <div className="text-sm text-muted-foreground">
                  Overall Uptime
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">12ms</div>
                <div className="text-sm text-muted-foreground">
                  Avg Response Time
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">2.1M</div>
                <div className="text-sm text-muted-foreground">
                  API Requests/Day
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-trading-gold mb-2">
                  0.003%
                </div>
                <div className="text-sm text-muted-foreground">Error Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Status;
