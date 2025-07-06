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
  Clock,
  ChartBar,
  Bitcoin,
  DollarSign,
  Zap,
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Cryptocurrency Trading: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends in crypto trading, from DeFi integration to institutional adoption, and how they're shaping the future of digital asset trading.",
    category: "Cryptocurrency",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "crypto-trends",
  };

  const blogPosts = [
    {
      title: "Stock Market Analysis: Q4 2024 Performance Review",
      excerpt:
        "A comprehensive analysis of Q4 market performance, key sector winners, and what to expect in the coming quarter.",
      category: "Market Analysis",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      icon: ChartBar,
    },
    {
      title: "Beginner's Guide to Portfolio Diversification",
      excerpt:
        "Learn the fundamentals of building a diversified investment portfolio that can weather market volatility.",
      category: "Education",
      readTime: "5 min read",
      date: "Dec 10, 2024",
      icon: TrendingUp,
    },
    {
      title: "Understanding Options Trading: Strategies for Success",
      excerpt:
        "Master the basics of options trading with practical strategies that can help maximize returns while managing risk.",
      category: "Trading Strategies",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      icon: DollarSign,
    },
    {
      title: "Market Volatility: How to Trade During Uncertain Times",
      excerpt:
        "Essential strategies for navigating volatile markets and turning uncertainty into opportunity.",
      category: "Risk Management",
      readTime: "7 min read",
      date: "Dec 5, 2024",
      icon: Zap,
    },
    {
      title: "Bitcoin ETF Approval: Impact on Crypto Markets",
      excerpt:
        "Analyzing the impact of Bitcoin ETF approvals on cryptocurrency markets and institutional adoption.",
      category: "Cryptocurrency",
      readTime: "9 min read",
      date: "Dec 2, 2024",
      icon: Bitcoin,
    },
    {
      title: "Technical Analysis 101: Reading Chart Patterns",
      excerpt:
        "Master the art of technical analysis with our comprehensive guide to reading and interpreting chart patterns.",
      category: "Education",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      icon: ChartBar,
    },
  ];

  const categories = [
    "All Posts",
    "Market Analysis",
    "Cryptocurrency",
    "Education",
    "Trading Strategies",
    "Risk Management",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead of the markets with expert analysis, trading
              strategies, and educational content from our team of professional
              traders and analysts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="bg-gradient-card border-border/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Bitcoin className="w-20 h-20 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">₿</div>
                    <div className="text-sm text-muted-foreground">
                      Featured Topic
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {featuredPost.date}
                    </span>
                    <Button variant="hero">Read Article</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>

            {/* Category Filter */}
            <div className="hidden md:flex items-center gap-2">
              {categories.slice(0, 4).map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "secondary" : "ghost"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-background border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <post.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Market Insights
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest trading insights, market analysis, and educational
              content delivered straight to your inbox. Join over 50,000 traders
              who trust our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
