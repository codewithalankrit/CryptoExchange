import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Shield, Zap } from "lucide-react";
import { useRealTimeCommoditiesData } from "@/hooks/useCommoditiesData";
import { LiveDataIndicator } from "@/components/LiveDataIndicator";

const featuredSymbols = ["XAU", "XAG", "WTI", "BRENT", "PLAT", "PALL"];

const features = [
  {
    icon: Shield,
    title: "Secure Trading",
    description: "Trade commodities with institutional-grade security.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Lightning-fast order execution for all commodity trades.",
  },
];

const Commodities = () => {
  const {
    data: featuredCommodities,
    isLoading,
    isRefetching,
  } = useRealTimeCommoditiesData(featuredSymbols);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Commodities{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Trading
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trade gold, silver, oil, and more with real-time prices and low
              spreads.
            </p>
          </div>
          <div className="text-center mb-8">
            <LiveDataIndicator
              isRefetching={isRefetching}
              isOnline={!isLoading}
              lastUpdate={new Date().toLocaleTimeString()}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <Card key={idx} className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-muted rounded w-20 animate-pulse" />
                        <div className="w-6 h-6 bg-muted rounded animate-pulse" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-8 bg-muted rounded w-24 animate-pulse" />
                        <div className="h-4 bg-muted rounded w-16 animate-pulse" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="h-4 bg-muted rounded w-16 animate-pulse" />
                        <div className="h-8 bg-muted rounded w-16 animate-pulse" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : featuredCommodities?.map((commodity, idx) => (
                  <Card
                    key={idx}
                    className="bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                          {commodity.name}
                        </CardTitle>
                        {commodity.trending === "up" ? (
                          <TrendingUp className="w-6 h-6 text-success" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-destructive" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold">
                          {commodity.price}{" "}
                          <span className="text-xs text-muted-foreground">
                            /{commodity.unit}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-medium ${
                            commodity.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {commodity.change}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`text-sm ${
                            commodity.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {commodity.changeAmount}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-accent group-hover:text-accent-foreground"
                        >
                          Trade
                        </Button>
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
              Why Trade Commodities?
            </h2>
            <p className="text-xl text-muted-foreground">
              Diversify your portfolio with precious metals and energy assets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-gradient-card border-border/50 text-center group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
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

export default Commodities;
