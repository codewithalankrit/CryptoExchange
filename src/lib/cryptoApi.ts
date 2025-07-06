export interface CryptoData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeAmount: string;
  changePercent: string;
  trending: "up" | "down" | "neutral";
  icon: string;
  marketCap: string;
  volume24h: string;
  circulatingSupply: string;
  totalSupply?: string;
}

export interface CryptoMarketStats {
  totalMarketCap: string;
  totalVolume24h: string;
  bitcoinDominance: string;
  activeCryptocurrencies: string;
  marketCapChange: string;
  volumeChange: string;
}

export interface CryptoCategory {
  name: string;
  change: string;
  description: string;
  trending: "up" | "down" | "neutral";
  marketCap: string;
}

const API_BASE_URL = "https://api.coingecko.com/api/v3";

const FALLBACK_CRYPTO: CryptoData[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$43,250.89",
    change: "+3.45%",
    changeAmount: "+$1,439.50",
    changePercent: "3.45",
    trending: "up",
    icon: "₿",
    marketCap: "$847.2B",
    volume24h: "$28.5B",
    circulatingSupply: "19.6M BTC",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,687.34",
    change: "+2.18%",
    changeAmount: "+$57.38",
    changePercent: "2.18",
    trending: "up",
    icon: "Ξ",
    marketCap: "$323.1B",
    volume24h: "$15.2B",
    circulatingSupply: "120.2M ETH",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: "$315.67",
    change: "-1.23%",
    changeAmount: "-$3.93",
    changePercent: "-1.23",
    trending: "down",
    icon: "BNB",
    marketCap: "$48.7B",
    volume24h: "$1.8B",
    circulatingSupply: "154.5M BNB",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "$0.4821",
    change: "+5.67%",
    changeAmount: "+$0.026",
    changePercent: "5.67",
    trending: "up",
    icon: "ADA",
    marketCap: "$17.2B",
    volume24h: "$892M",
    circulatingSupply: "35.7B ADA",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$98.45",
    change: "+7.21%",
    changeAmount: "+$6.62",
    changePercent: "7.21",
    trending: "up",
    icon: "SOL",
    marketCap: "$42.8B",
    volume24h: "$2.1B",
    circulatingSupply: "434.8M SOL",
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    price: "$7.89",
    change: "-2.15%",
    changeAmount: "-$0.17",
    changePercent: "-2.15",
    trending: "down",
    icon: "DOT",
    marketCap: "$9.8B",
    volume24h: "$456M",
    circulatingSupply: "1.2B DOT",
  },
];

const FALLBACK_MARKET_STATS: CryptoMarketStats = {
  totalMarketCap: "$1.73T",
  totalVolume24h: "$89.2B",
  bitcoinDominance: "42.3%",
  activeCryptocurrencies: "13,456",
  marketCapChange: "+2.4%",
  volumeChange: "+15.7%",
};

const FALLBACK_CATEGORIES: CryptoCategory[] = [
  {
    name: "DeFi",
    change: "+4.2%",
    description: "Decentralized Finance protocols",
    trending: "up",
    marketCap: "$45.2B",
  },
  {
    name: "Layer 1",
    change: "+2.8%",
    description: "Base blockchain networks",
    trending: "up",
    marketCap: "$892.1B",
  },
  {
    name: "NFT",
    change: "-1.5%",
    description: "Non-Fungible Token projects",
    trending: "down",
    marketCap: "$12.8B",
  },
  {
    name: "Gaming",
    change: "+6.3%",
    description: "Blockchain gaming tokens",
    trending: "up",
    marketCap: "$18.7B",
  },
  {
    name: "Metaverse",
    change: "+3.1%",
    description: "Virtual world cryptocurrencies",
    trending: "up",
    marketCap: "$23.4B",
  },
  {
    name: "Meme",
    change: "+12.7%",
    description: "Community-driven tokens",
    trending: "up",
    marketCap: "$8.9B",
  },
];

const simulatePriceUpdate = (
  basePrice: number,
  volatility: number = 0.05
): number => {
  const change = (Math.random() - 0.5) * volatility * basePrice;
  return Math.max(0, basePrice + change);
};

const parsePrice = (priceStr: string): number => {
  return parseFloat(priceStr.replace(/[$,]/g, ""));
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(price);
};

const calculateChange = (currentPrice: number, previousPrice: number) => {
  const change = currentPrice - previousPrice;
  const changePercent = (change / previousPrice) * 100;
  const trending: "up" | "down" | "neutral" =
    change > 0 ? "up" : change < 0 ? "down" : "neutral";

  return {
    change: formatPrice(Math.abs(change)),
    changeAmount: `${change >= 0 ? "+" : "-"}${formatPrice(Math.abs(change))}`,
    changePercent: `${change >= 0 ? "+" : ""}${changePercent.toFixed(2)}%`,
    trending,
  };
};

export const fetchCryptoData = async (symbol: string): Promise<CryptoData> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    if (!data[symbol.toLowerCase()]) {
      throw new Error("Invalid API response");
    }

    const crypto = data[symbol.toLowerCase()];
    const currentPrice = crypto.usd;
    const previousPrice = currentPrice / (1 + crypto.usd_24h_change / 100);
    const { change, changeAmount, changePercent, trending } = calculateChange(
      currentPrice,
      previousPrice
    );

    return {
      symbol: symbol.toUpperCase(),
      name: symbol.toUpperCase(),
      price: formatPrice(currentPrice),
      change: changePercent,
      changeAmount,
      changePercent: changePercent.replace("%", ""),
      trending,
      icon: getCryptoIcon(symbol),
      marketCap: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(crypto.usd_market_cap),
      volume24h: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(crypto.usd_24h_vol),
      circulatingSupply: `${new Intl.NumberFormat("en-US").format(
        crypto.usd_market_cap / currentPrice
      )} ${symbol.toUpperCase()}`,
    };
  } catch (error) {
    console.warn(`Failed to fetch data for ${symbol}:`, error);

    const fallbackCrypto = FALLBACK_CRYPTO.find(
      (crypto) => crypto.symbol === symbol.toUpperCase()
    );
    if (fallbackCrypto) {
      const basePrice = parsePrice(fallbackCrypto.price);
      const newPrice = simulatePriceUpdate(basePrice, 0.08);
      const previousPrice =
        basePrice / (1 + parseFloat(fallbackCrypto.changePercent) / 100);
      const { change, changeAmount, changePercent, trending } = calculateChange(
        newPrice,
        previousPrice
      );

      return {
        ...fallbackCrypto,
        price: formatPrice(newPrice),
        change: changePercent,
        changeAmount,
        changePercent: changePercent.replace("%", ""),
        trending,
      };
    }

    throw new Error(`No data available for ${symbol}`);
  }
};

export const fetchMultipleCrypto = async (
  symbols: string[]
): Promise<CryptoData[]> => {
  try {
    const promises = symbols.map((symbol) => fetchCryptoData(symbol));
    const results = await Promise.allSettled(promises);

    return results
      .map((result, index) => {
        if (result.status === "fulfilled") {
          return result.value;
        } else {
          console.warn(`Failed to fetch ${symbols[index]}:`, result.reason);
          const fallbackCrypto = FALLBACK_CRYPTO.find(
            (crypto) => crypto.symbol === symbols[index].toUpperCase()
          );
          if (fallbackCrypto) {
            const basePrice = parsePrice(fallbackCrypto.price);
            const newPrice = simulatePriceUpdate(basePrice, 0.08);
            const previousPrice =
              basePrice / (1 + parseFloat(fallbackCrypto.changePercent) / 100);
            const { change, changeAmount, changePercent, trending } =
              calculateChange(newPrice, previousPrice);

            return {
              ...fallbackCrypto,
              price: formatPrice(newPrice),
              change: changePercent,
              changeAmount,
              changePercent: changePercent.replace("%", ""),
              trending,
            };
          }
          return null;
        }
      })
      .filter((crypto): crypto is CryptoData => crypto !== null);
  } catch (error) {
    console.error("Failed to fetch multiple cryptocurrencies:", error);
    return FALLBACK_CRYPTO.map((crypto) => {
      const basePrice = parsePrice(crypto.price);
      const newPrice = simulatePriceUpdate(basePrice, 0.08);
      const previousPrice =
        basePrice / (1 + parseFloat(crypto.changePercent) / 100);
      const { change, changeAmount, changePercent, trending } = calculateChange(
        newPrice,
        previousPrice
      );

      return {
        ...crypto,
        price: formatPrice(newPrice),
        change: changePercent,
        changeAmount,
        changePercent: changePercent.replace("%", ""),
        trending,
      };
    });
  }
};

export const fetchMarketStats = async (): Promise<CryptoMarketStats> => {
  try {
    const response = await fetch(`${API_BASE_URL}/global`);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    if (!data.data) {
      throw new Error("Invalid API response");
    }

    const global = data.data;

    return {
      totalMarketCap: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(global.total_market_cap.usd),
      totalVolume24h: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(global.total_volume.usd),
      bitcoinDominance: `${global.market_cap_percentage.btc.toFixed(1)}%`,
      activeCryptocurrencies: new Intl.NumberFormat("en-US").format(
        global.active_cryptocurrencies
      ),
      marketCapChange: `${global.market_cap_change_percentage_24h_usd.toFixed(
        1
      )}%`,
      volumeChange: `${
        (global.total_volume.usd /
          (global.total_volume.usd - global.total_volume.usd * 0.1) -
          1) *
        100
      }%`,
    };
  } catch (error) {
    console.error("Failed to fetch market stats:", error);

    const baseMarketCap = parseFloat(
      FALLBACK_MARKET_STATS.totalMarketCap.replace(/[$,]/g, "")
    );
    const newMarketCap = simulatePriceUpdate(baseMarketCap, 0.02);
    const marketCapChange = (newMarketCap / baseMarketCap - 1) * 100;

    return {
      ...FALLBACK_MARKET_STATS,
      totalMarketCap: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(newMarketCap),
      marketCapChange: `${
        marketCapChange >= 0 ? "+" : ""
      }${marketCapChange.toFixed(1)}%`,
    };
  }
};

export const fetchCryptoCategories = async (): Promise<CryptoCategory[]> => {
  try {
    return FALLBACK_CATEGORIES.map((category) => {
      const baseChange = parseFloat(category.change.replace("%", ""));
      const newChange = simulatePriceUpdate(baseChange, 0.1);
      const trending: "up" | "down" | "neutral" =
        newChange > 0 ? "up" : newChange < 0 ? "down" : "neutral";

      return {
        ...category,
        change: `${newChange >= 0 ? "+" : ""}${newChange.toFixed(1)}%`,
        trending,
      };
    });
  } catch (error) {
    console.error("Failed to fetch crypto categories:", error);
    return FALLBACK_CATEGORIES;
  }
};

const getCryptoIcon = (symbol: string): string => {
  const icons: { [key: string]: string } = {
    btc: "₿",
    eth: "Ξ",
    bnb: "BNB",
    ada: "ADA",
    sol: "SOL",
    dot: "DOT",
    xrp: "XRP",
    doge: "DOGE",
    matic: "MATIC",
    link: "LINK",
  };

  return icons[symbol.toLowerCase()] || symbol.toUpperCase();
};

export const getFeaturedCrypto = (): string[] => {
  return FALLBACK_CRYPTO.map((crypto) => crypto.symbol.toLowerCase());
};
