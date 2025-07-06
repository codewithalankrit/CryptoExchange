import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "Trading", href: "/stocks" },
      { name: "Mobile App", href: "#mobile" },
    ],
    Markets: [
      { name: "Stocks", href: "/stocks" },
      { name: "Crypto", href: "/crypto" },
      { name: "Commodities", href: "/commodities" },
      { name: "Forex", href: "/forex" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Status", href: "/status" },
    ],
  };

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">TradePro</span>
              </div>

              <p className="text-muted-foreground mb-8 max-w-md">
                The most trusted platform for trading stocks, crypto, and
                commodities. Start your investment journey with
                professional-grade tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">Start Trading</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-foreground">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">
                  SEC Regulated
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  99.9% Uptime
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                SIPC Protected up to $500K
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2024 TradePro. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
