export interface ForexData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeAmount: string;
  changePercent: string;
  trending: "up" | "down" | "neutral";
}

const API_BASE_URL = "https://api.exchangerate.host";

const FALLBACK_FOREX: ForexData[] = [
  {
    symbol: "EURUSD",
    name: "Euro / US Dollar",
    price: "1.0852",
    change: "+0.12%",
    changeAmount: "+0.0013",
    changePercent: "0.12",
    trending: "up",
  },
  {
    symbol: "USDJPY",
    name: "US Dollar / Japanese Yen",
    price: "156.23",
    change: "-0.08%",
    changeAmount: "-0.13",
    changePercent: "-0.08",
    trending: "down",
  },
  {
    symbol: "GBPUSD",
    name: "British Pound / US Dollar",
    price: "1.2734",
    change: "+0.09%",
    changeAmount: "+0.0011",
    changePercent: "0.09",
    trending: "up",
  },
  {
    symbol: "AUDUSD",
    name: "Australian Dollar / US Dollar",
    price: "0.6681",
    change: "+0.15%",
    changeAmount: "+0.0010",
    changePercent: "0.15",
    trending: "up",
  },
  {
    symbol: "USDCAD",
    name: "US Dollar / Canadian Dollar",
    price: "1.3642",
    change: "-0.05%",
    changeAmount: "-0.0007",
    changePercent: "-0.05",
    trending: "down",
  },
  {
    symbol: "USDCHF",
    name: "US Dollar / Swiss Franc",
    price: "0.8998",
    change: "+0.03%",
    changeAmount: "+0.0003",
    changePercent: "0.03",
    trending: "up",
  },
];

const simulatePriceUpdate = (
  basePrice: number,
  volatility: number = 0.001
): number => {
  const change = (Math.random() - 0.5) * volatility * basePrice;
  return Math.max(0, basePrice + change);
};

const parsePrice = (priceStr: string): number =>
  parseFloat(priceStr.replace(/[$,]/g, ""));
const formatPrice = (price: number, decimals: number = 4): string =>
  price.toFixed(decimals);

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

export const fetchForexData = async (symbol: string): Promise<ForexData> => {
  try {
    const fallback = FALLBACK_FOREX.find((f) => f.symbol === symbol);
    if (fallback) {
      const basePrice = parsePrice(fallback.price);
      const newPrice = simulatePriceUpdate(basePrice, 0.001);
      const previousPrice =
        basePrice / (1 + parseFloat(fallback.changePercent) / 100);
      const { change, changeAmount, changePercent, trending } = calculateChange(
        newPrice,
        previousPrice
      );
      return {
        ...fallback,
        price: formatPrice(newPrice, 4),
        change: changePercent,
        changeAmount,
        changePercent: changePercent.replace("%", ""),
        trending,
      };
    }
    throw new Error("No data available");
  } catch (error) {
    throw new Error(`No data available for ${symbol}`);
  }
};

export const fetchMultipleForex = async (
  symbols: string[]
): Promise<ForexData[]> => {
  return Promise.all(symbols.map(fetchForexData));
};

export const getFeaturedForex = (): string[] =>
  FALLBACK_FOREX.map((f) => f.symbol);
