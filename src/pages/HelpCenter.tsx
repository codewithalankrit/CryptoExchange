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
  Search,
  MessageCircle,
  Book,
  Shield,
  CreditCard,
  TrendingUp,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Getting Started",
      description: "Learn the basics of trading and setting up your account",
      articles: [
        "How to Create an Account",
        "First Trade Tutorial",
        "Account Verification",
        "Setting Up 2FA",
      ],
    },
    {
      icon: CreditCard,
      title: "Deposits & Withdrawals",
      description: "Managing your funds and payment methods",
      articles: [
        "How to Deposit Funds",
        "Withdrawal Process",
        "Supported Payment Methods",
        "Transaction Fees",
      ],
    },
    {
      icon: Shield,
      title: "Security",
      description: "Keep your account and investments secure",
      articles: [
        "Two-Factor Authentication",
        "Account Security Best Practices",
        "Suspicious Activity",
        "Password Reset",
      ],
    },
    {
      icon: Book,
      title: "Trading Guide",
      description: "Advanced trading concepts and strategies",
      articles: [
        "Market Orders vs Limit Orders",
        "Understanding Charts",
        "Risk Management",
        "Portfolio Diversification",
      ],
    },
  ];

  const popularArticles = [
    "How to place your first trade",
    "Understanding market hours",
    "What are crypto wallets?",
    "How to read stock charts",
    "Setting up price alerts",
    "Tax reporting for trades",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn about trading, and get the
              support you need.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              />
              <Button
                variant="hero"
                className="absolute right-2 top-2 bottom-2"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find help organized by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
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
                Popular Articles
              </h2>
              <p className="text-muted-foreground mb-8">
                The most frequently accessed help articles by our community.
              </p>

              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors duration-200 group"
                  >
                    <HelpCircle className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors duration-200" />
                    <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                      {article}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-3xl p-8 border border-border/50">
              <MessageCircle className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Our support team is here to
                help 24/7.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">support@tradepro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">1-800-TRADEPRO</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Live Chat Available</span>
                </div>
              </div>

              <Button variant="hero" className="w-full mt-6">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
