import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, RefreshCw, Shield, Zap } from "lucide-react";
import { useRealTimeForexData } from "@/hooks/useForexData";
import { LiveDataIndicator } from "@/components/LiveDataIndicator";

const featuredSymbols = [
  "EURUSD",
  "USDJPY",
  "GBPUSD",
  "AUDUSD",
  "USDCAD",
  "USDCHF",
];

const features = [
  {
    icon: Shield,
    title: "Regulated Broker",
    description: "Trade forex with a fully regulated and secure broker.",
  },
  {
    icon: Zap,
    title: "Tight Spreads",
    description: "Benefit from ultra-low spreads and fast execution.",
  },
];

const Forex = () => {
  const {
    data: featuredForex,
    isLoading,
    isRefetching,
  } = useRealTimeForexData(featuredSymbols);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Forex{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Trading
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trade major currency pairs with real-time rates and institutional
              liquidity.
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
                        <div className="h-6 bg-muted rounded w-24 animate-pulse" />
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
              : featuredForex?.map((forex, idx) => (
                  <Card
                    key={idx}
                    className="bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{forex.name}</CardTitle>
                        {forex.trending === "up" ? (
                          <TrendingUp className="w-6 h-6 text-success" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-destructive" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold">{forex.price}</div>
                        <div
                          className={`text-sm font-medium ${
                            forex.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {forex.change}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`text-sm ${
                            forex.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {forex.changeAmount}
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
              Why Trade Forex?
            </h2>
            <p className="text-xl text-muted-foreground">
              Access the world’s largest and most liquid financial market.
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

export default Forex;
