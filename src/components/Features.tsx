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
  Zap,
  ChartBar,
  Wallet,
  Bitcoin,
  DollarSign,
  ChartLine,
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Bitcoin,
      title: "Crypto Trading",
      description:
        "Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with real-time charts and advanced analytics.",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Stock Market",
      description:
        "Access global stock markets with fractional shares, dividend tracking, and portfolio insights.",
      color: "text-primary",
    },
    {
      icon: ChartBar,
      title: "Advanced Analytics",
      description:
        "Professional-grade charts, technical indicators, and market analysis tools for informed decisions.",
      color: "text-success",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description:
        "Bank-level encryption, cold storage, and regulatory compliance to protect your investments.",
      color: "text-trading-gold",
    },
    {
      icon: Zap,
      title: "Instant Execution",
      description:
        "Lightning-fast order execution with real-time market data and competitive spreads.",
      color: "text-primary-glow",
    },
    {
      icon: Wallet,
      title: "Multi-Asset Wallet",
      description:
        "Store, manage, and transfer your digital and traditional assets in one secure wallet.",
      color: "text-accent-glow",
    },
  ];

  const tradingTools = [
    {
      icon: ChartLine,
      title: "Real-time Charts",
      description: "Advanced charting with 50+ technical indicators",
    },
    {
      icon: DollarSign,
      title: "Zero Commissions",
      description: "No fees on stock trades, low crypto spreads",
    },
    {
      icon: TrendingUp,
      title: "Portfolio Tracking",
      description: "Comprehensive performance analytics and insights",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Trade Successfully
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner-friendly tools to advanced trading features, our
            platform grows with your expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-background to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Professional Trading Tools
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Access institutional-grade trading tools designed for both
                beginners and professional traders.
              </p>

              <div className="space-y-6 mb-8">
                {tradingTools.map((tool, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tool.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{tool.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="accent" size="lg">
                Explore Trading Tools
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Portfolio Value
                    </span>
                    <span className="text-2xl font-bold text-success">
                      +12.5%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-primary rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">
                        $24,890
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Crypto
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">
                        $18,240
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Stocks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
