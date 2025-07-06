import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Trading Platform"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-primary/20">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                #1 Trading Platform
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trade{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Smarter
                </span>
                <br />
                Invest{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Better
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Access stocks, crypto, and commodities all in one platform.
                Start your trading journey with advanced tools and zero
                commissions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Trading Now
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">
                  Bank-level Security
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Instant Execution
                </span>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-elegant">
                <div className="text-3xl font-bold text-accent mb-2">
                  $2.1B+
                </div>
                <div className="text-sm text-muted-foreground">
                  Daily Volume
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-elegant">
                <div className="text-3xl font-bold text-success mb-2">
                  500K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Traders
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-elegant">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Market Access
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-elegant">
                <div className="text-3xl font-bold text-trading-gold mb-2">
                  0%
                </div>
                <div className="text-sm text-muted-foreground">Commission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
