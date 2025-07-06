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
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart,
  Shield,
  Zap,
  ChartLine,
  PieChart,
  RefreshCw,
} from "lucide-react";
import { useRealTimeStockData, useMarketIndices } from "@/hooks/useStockData";
import { LiveDataIndicator } from "@/components/LiveDataIndicator";

const Stocks = () => {
  const {
    data: featuredStocks,
    isLoading: stocksLoading,
    isRefetching: stocksRefetching,
  } = useRealTimeStockData(["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN", "NVDA"]);

  const { data: marketIndices, isLoading: indicesLoading } = useMarketIndices();

  const marketSectors = [
    {
      name: "Technology",
      change: "+2.1%",
      companies: "AAPL, MSFT, GOOGL",
      trending: "up",
    },
    {
      name: "Healthcare",
      change: "+0.8%",
      companies: "JNJ, PFE, UNH",
      trending: "up",
    },
    {
      name: "Financial",
      change: "-0.3%",
      companies: "JPM, BAC, WFC",
      trending: "down",
    },
    {
      name: "Energy",
      change: "+1.4%",
      companies: "XOM, CVX, COP",
      trending: "up",
    },
    {
      name: "Consumer",
      change: "+0.6%",
      companies: "AMZN, HD, MCD",
      trending: "up",
    },
    {
      name: "Industrial",
      change: "-0.1%",
      companies: "BA, CAT, GE",
      trending: "down",
    },
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Zero Commission Trading",
      description:
        "Trade stocks with no commission fees, keeping more of your profits.",
    },
    {
      icon: Zap,
      title: "Instant Execution",
      description: "Lightning-fast order execution with real-time market data.",
    },
    {
      icon: ChartLine,
      title: "Advanced Analytics",
      description: "Professional-grade charts and technical analysis tools.",
    },
    {
      icon: Shield,
      title: "SIPC Protected",
      description:
        "Your investments are protected up to $500,000 by SIPC insurance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stock{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trading
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trade thousands of stocks from major exchanges with zero
              commissions, real-time data, and professional-grade tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {indicesLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-8 h-8 bg-muted rounded-full mx-auto mb-4 animate-pulse" />
                      <div className="h-8 bg-muted rounded mb-2 animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </CardContent>
                  </Card>
                ))
              : marketIndices?.map((index, idx) => (
                  <Card
                    key={index.name}
                    className="bg-gradient-card border-border/50"
                  >
                    <CardContent className="p-6 text-center">
                      {index.trending === "up" ? (
                        <TrendingUp className="w-8 h-8 text-success mx-auto mb-4" />
                      ) : index.trending === "down" ? (
                        <TrendingDown className="w-8 h-8 text-destructive mx-auto mb-4" />
                      ) : (
                        <BarChart className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                      )}
                      <div
                        className={`text-2xl font-bold mb-2 ${
                          index.trending === "up"
                            ? "text-success"
                            : index.trending === "down"
                            ? "text-destructive"
                            : "text-foreground"
                        }`}
                      >
                        {index.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {index.value} ({index.changePercent}%)
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">Popular Stocks</h2>
              <LiveDataIndicator
                isRefetching={stocksRefetching}
                isOnline={!stocksLoading}
                lastUpdate={new Date().toLocaleTimeString()}
              />
            </div>
            <p className="text-xl text-muted-foreground">
              Most traded stocks on our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocksLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-6 bg-muted rounded mb-2 animate-pulse" />
                          <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                        </div>
                        <div className="w-6 h-6 bg-muted rounded animate-pulse" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-8 bg-muted rounded w-20 animate-pulse" />
                        <div className="h-4 bg-muted rounded w-16 animate-pulse" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="h-4 bg-muted rounded w-16 animate-pulse" />
                        <div className="h-8 bg-muted rounded w-16 animate-pulse" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : featuredStocks?.map((stock, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {stock.symbol}
                          </CardTitle>
                          <CardDescription>{stock.name}</CardDescription>
                        </div>
                        {stock.trending === "up" ? (
                          <TrendingUp className="w-6 h-6 text-success" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-destructive" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold">{stock.price}</div>
                        <div
                          className={`text-sm font-medium ${
                            stock.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {stock.change}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`text-sm ${
                            stock.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {stock.changeAmount}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground"
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

      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Market Sectors
            </h2>
            <p className="text-xl text-muted-foreground">
              Track performance across different industry sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketSectors.map((sector, index) => (
              <Card
                key={index}
                className="bg-background border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{sector.name}</CardTitle>
                    <Badge
                      className={
                        sector.trending === "up"
                          ? "bg-success/10 text-success"
                          : "bg-destructive/10 text-destructive"
                      }
                    >
                      {sector.change}
                    </Badge>
                  </div>
                  <CardDescription>
                    Top stocks: {sector.companies}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Explore Sector
                  </Button>
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
              Why Trade Stocks with TradePro?
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional tools and features for serious investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border/50">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Trading Stocks Today
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of investors who trust TradePro for their stock
              trading needs. Get started with just $1 and access thousands of
              stocks with zero commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Open Trading Account
              </Button>
              <Button variant="outline" size="lg">
                Learn Stock Trading
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stocks;
