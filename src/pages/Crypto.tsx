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
  Bitcoin,
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
  Wallet,
  ChartLine,
  DollarSign,
  RefreshCw,
} from "lucide-react";
import {
  useRealTimeCryptoData,
  useMarketStats,
  useCryptoCategories,
} from "@/hooks/useCryptoData";
import { LiveDataIndicator } from "@/components/LiveDataIndicator";

const featuredSymbols = ["btc", "eth", "bnb", "ada", "sol", "dot"];

const Crypto = () => {
  const {
    data: featuredCrypto,
    isLoading: cryptoLoading,
    isRefetching: cryptoRefetching,
  } = useRealTimeCryptoData(featuredSymbols);
  const { data: marketStats, isLoading: statsLoading } = useMarketStats();
  const { data: cryptoCategories, isLoading: categoriesLoading } =
    useCryptoCategories();

  const features = [
    {
      icon: Bitcoin,
      title: "100+ Cryptocurrencies",
      description: "Trade Bitcoin, Ethereum, and 100+ other digital assets.",
    },
    {
      icon: Shield,
      title: "Cold Storage Security",
      description:
        "95% of crypto assets stored in offline cold storage wallets.",
    },
    {
      icon: Zap,
      title: "Instant Trading",
      description:
        "Execute trades instantly with competitive spreads and deep liquidity.",
    },
    {
      icon: Wallet,
      title: "Secure Wallet",
      description:
        "Built-in wallet to store, send, and receive cryptocurrencies safely.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crypto{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Trading
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with advanced
              security, low fees, and institutional-grade infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {statsLoading
              ? Array.from({ length: 4 }).map((_, idx) => (
                  <Card key={idx} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="h-8 bg-muted rounded mb-2 animate-pulse" />
                      <div className="h-4 bg-muted rounded mb-1 animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </CardContent>
                  </Card>
                ))
              : marketStats
              ? [
                  {
                    label: "Total Market Cap",
                    value: marketStats.totalMarketCap,
                    change: marketStats.marketCapChange,
                  },
                  {
                    label: "24h Trading Volume",
                    value: marketStats.totalVolume24h,
                    change: marketStats.volumeChange,
                  },
                  {
                    label: "Bitcoin Dominance",
                    value: marketStats.bitcoinDominance,
                    change: "",
                  },
                  {
                    label: "Active Cryptocurrencies",
                    value: marketStats.activeCryptocurrencies,
                    change: "",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {stat.label}
                      </div>
                      {stat.change && (
                        <div
                          className={`text-xs ${
                            stat.change.startsWith("+")
                              ? "text-success"
                              : stat.change.startsWith("-")
                              ? "text-destructive"
                              : "text-muted-foreground"
                          }`}
                        >
                          {stat.change}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Top Cryptocurrencies
              </h2>
              <LiveDataIndicator
                isRefetching={cryptoRefetching}
                isOnline={!cryptoLoading}
                lastUpdate={new Date().toLocaleTimeString()}
              />
            </div>
            <p className="text-xl text-muted-foreground">
              Most popular digital assets on our platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <Card key={idx} className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded-full animate-pulse" />
                          <div>
                            <div className="h-6 bg-muted rounded mb-2 animate-pulse w-16" />
                            <div className="h-4 bg-muted rounded w-20 animate-pulse" />
                          </div>
                        </div>
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
              : featuredCrypto?.map((crypto, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                            <span className="text-accent font-bold text-sm">
                              {crypto.icon}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              {crypto.symbol}
                            </CardTitle>
                            <CardDescription>{crypto.name}</CardDescription>
                          </div>
                        </div>
                        {crypto.trending === "up" ? (
                          <TrendingUp className="w-6 h-6 text-success" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-destructive" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold">{crypto.price}</div>
                        <div
                          className={`text-sm font-medium ${
                            crypto.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {crypto.change}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`text-sm ${
                            crypto.trending === "up"
                              ? "text-success"
                              : "text-destructive"
                          }`}
                        >
                          {crypto.changeAmount}
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

      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crypto Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore different sectors of the cryptocurrency market
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <Card key={idx} className="bg-background border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-muted rounded w-24 animate-pulse" />
                        <div className="h-6 bg-muted rounded w-12 animate-pulse" />
                      </div>
                      <div className="h-4 bg-muted rounded w-32 animate-pulse mt-2" />
                    </CardHeader>
                    <CardContent>
                      <div className="h-8 bg-muted rounded w-full animate-pulse" />
                    </CardContent>
                  </Card>
                ))
              : cryptoCategories?.map((category, index) => (
                  <Card
                    key={index}
                    className="bg-background border-border/50 hover:border-accent/30 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {category.name}
                        </CardTitle>
                        <Badge
                          className={
                            category.trending === "up"
                              ? "bg-success/10 text-success"
                              : "bg-destructive/10 text-destructive"
                          }
                        >
                          {category.change}
                        </Badge>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Explore {category.name}
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
              Why Choose TradePro for Crypto?
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading security and features for crypto trading
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300 text-center group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                New to Cryptocurrency?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Learn the basics of cryptocurrency trading with our
                comprehensive educational resources. From understanding
                blockchain technology to advanced trading strategies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <ChartLine className="w-5 h-5 text-accent" />
                  <span>Interactive trading tutorials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Security best practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <span>Risk management strategies</span>
                </div>
              </div>

              <Button variant="accent" size="lg">
                Start Learning
              </Button>
            </div>

            <div className="bg-background rounded-3xl p-8 border border-border/50">
              <div className="text-center mb-6">
                <Bitcoin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold">Crypto Portfolio Tracker</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor your investments in real-time
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">₿</span>
                    <span className="text-sm">Bitcoin</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">$12,450</div>
                    <div className="text-xs text-success">+$845</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">Ξ</span>
                    <span className="text-sm">Ethereum</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">$5,230</div>
                    <div className="text-xs text-success">+$312</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Portfolio</span>
                    <div className="text-right">
                      <div className="font-bold text-lg">$17,680</div>
                      <div className="text-sm text-success">
                        +$1,157 (+7.0%)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50">
            <Bitcoin className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Crypto Journey
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the future of finance with cryptocurrency trading. Buy your
              first Bitcoin or Ethereum in minutes with our secure and
              user-friendly platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Buy Crypto Now
              </Button>
              <Button variant="outline" size="lg">
                Learn About Crypto
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crypto;
