export interface CommodityData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeAmount: string;
  changePercent: string;
  trending: "up" | "down" | "neutral";
  unit: string;
}

const API_BASE_URL = "https://metals-api.com/api";
const API_KEY = "demo";

const FALLBACK_COMMODITIES: CommodityData[] = [
  {
    symbol: "XAU",
    name: "Gold",
    price: "$2,350.12",
    change: "+0.45%",
    changeAmount: "+$10.56",
    changePercent: "0.45",
    trending: "up",
    unit: "oz",
  },
  {
    symbol: "XAG",
    name: "Silver",
    price: "$28.45",
    change: "-0.32%",
    changeAmount: "-$0.09",
    changePercent: "-0.32",
    trending: "down",
    unit: "oz",
  },
  {
    symbol: "WTI",
    name: "Crude Oil (WTI)",
    price: "$78.12",
    change: "+1.12%",
    changeAmount: "+$0.87",
    changePercent: "1.12",
    trending: "up",
    unit: "bbl",
  },
  {
    symbol: "BRENT",
    name: "Crude Oil (Brent)",
    price: "$82.45",
    change: "+0.98%",
    changeAmount: "+$0.80",
    changePercent: "0.98",
    trending: "up",
    unit: "bbl",
  },
  {
    symbol: "PLAT",
    name: "Platinum",
    price: "$1,050.33",
    change: "-0.21%",
    changeAmount: "-$2.21",
    changePercent: "-0.21",
    trending: "down",
    unit: "oz",
  },
  {
    symbol: "PALL",
    name: "Palladium",
    price: "$1,420.67",
    change: "+0.67%",
    changeAmount: "+$9.45",
    changePercent: "0.67",
    trending: "up",
    unit: "oz",
  },
];

const simulatePriceUpdate = (
  basePrice: number,
  volatility: number = 0.01
): number => {
  const change = (Math.random() - 0.5) * volatility * basePrice;
  return Math.max(0, basePrice + change);
};

const parsePrice = (priceStr: string): number =>
  parseFloat(priceStr.replace(/[$,]/g, ""));
const formatPrice = (price: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);

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

export const fetchCommoditiesData = async (
  symbol: string
): Promise<CommodityData> => {
  try {
    const fallback = FALLBACK_COMMODITIES.find((c) => c.symbol === symbol);
    if (fallback) {
      const basePrice = parsePrice(fallback.price);
      const newPrice = simulatePriceUpdate(basePrice, 0.01);
      const previousPrice =
        basePrice / (1 + parseFloat(fallback.changePercent) / 100);
      const { change, changeAmount, changePercent, trending } = calculateChange(
        newPrice,
        previousPrice
      );
      return {
        ...fallback,
        price: formatPrice(newPrice),
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

export const fetchMultipleCommodities = async (
  symbols: string[]
): Promise<CommodityData[]> => {
  return Promise.all(symbols.map(fetchCommoditiesData));
};

export const getFeaturedCommodities = (): string[] =>
  FALLBACK_COMMODITIES.map((c) => c.symbol);
