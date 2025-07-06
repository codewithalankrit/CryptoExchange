export interface StockData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeAmount: string;
  changePercent: string;
  trending: "up" | "down" | "neutral";
  previousClose: string;
  open: string;
  high: string;
  low: string;
  volume: string;
  marketCap?: string;
}

export interface MarketIndex {
  name: string;
  value: string;
  change: string;
  changePercent: string;
  trending: "up" | "down" | "neutral";
}

import { config } from "./config";

const API_BASE_URL = config.alphaVantage.baseUrl;
const API_KEY = config.alphaVantage.apiKey;

const FALLBACK_STOCKS: StockData[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$185.64",
    change: "+2.34%",
    changeAmount: "+$4.25",
    changePercent: "2.34",
    trending: "up",
    previousClose: "$181.39",
    open: "$182.50",
    high: "$186.20",
    low: "$181.80",
    volume: "45.2M",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: "$378.85",
    change: "+1.87%",
    changeAmount: "+$6.97",
    changePercent: "1.87",
    trending: "up",
    previousClose: "$371.88",
    open: "$373.20",
    high: "$380.10",
    low: "$372.50",
    volume: "28.7M",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "$135.42",
    change: "-0.84%",
    changeAmount: "-$1.15",
    changePercent: "-0.84",
    trending: "down",
    previousClose: "$136.57",
    open: "$137.20",
    high: "$138.50",
    low: "$135.10",
    volume: "32.1M",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: "$248.50",
    change: "+3.21%",
    changeAmount: "+$7.74",
    changePercent: "3.21",
    trending: "up",
    previousClose: "$240.76",
    open: "$242.30",
    high: "$250.20",
    low: "$241.80",
    volume: "89.5M",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "$155.89",
    change: "+0.96%",
    changeAmount: "+$1.48",
    changePercent: "0.96",
    trending: "up",
    previousClose: "$154.41",
    open: "$155.20",
    high: "$157.80",
    low: "$154.90",
    volume: "52.3M",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    price: "$465.23",
    change: "+5.47%",
    changeAmount: "+$24.12",
    changePercent: "5.47",
    trending: "up",
    previousClose: "$441.11",
    open: "$445.60",
    high: "$468.90",
    low: "$444.20",
    volume: "67.8M",
  },
];

const FALLBACK_INDICES: MarketIndex[] = [
  {
    name: "S&P 500",
    value: "4,567.89",
    change: "+54.32",
    changePercent: "+1.20",
    trending: "up",
  },
  {
    name: "NASDAQ",
    value: "14,321.45",
    change: "+112.67",
    changePercent: "+0.79",
    trending: "up",
  },
  {
    name: "DOW JONES",
    value: "35,678.12",
    change: "+178.45",
    changePercent: "+0.50",
    trending: "up",
  },
];

const simulatePriceUpdate = (
  basePrice: number,
  volatility: number = 0.02
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
    maximumFractionDigits: 2,
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

export const fetchStockData = async (symbol: string): Promise<StockData> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    if (data["Error Message"] || !data["Global Quote"]) {
      throw new Error("Invalid API response");
    }

    const quote = data["Global Quote"];
    const currentPrice = parseFloat(quote["05. price"]);
    const previousClose = parseFloat(quote["08. previous close"]);
    const { change, changeAmount, changePercent, trending } = calculateChange(
      currentPrice,
      previousClose
    );

    return {
      symbol: quote["01. symbol"],
      name: quote["01. symbol"],
      price: formatPrice(currentPrice),
      change: changePercent,
      changeAmount,
      changePercent: changePercent.replace("%", ""),
      trending,
      previousClose: formatPrice(previousClose),
      open: formatPrice(parseFloat(quote["02. open"])),
      high: formatPrice(parseFloat(quote["03. high"])),
      low: formatPrice(parseFloat(quote["04. low"])),
      volume: new Intl.NumberFormat("en-US").format(
        parseInt(quote["06. volume"])
      ),
    };
  } catch (error) {
    console.warn(`Failed to fetch data for ${symbol}:`, error);

    const fallbackStock = FALLBACK_STOCKS.find(
      (stock) => stock.symbol === symbol
    );
    if (fallbackStock) {
      const basePrice = parsePrice(fallbackStock.price);
      const newPrice = simulatePriceUpdate(basePrice);
      const previousPrice = parsePrice(fallbackStock.previousClose);
      const { change, changeAmount, changePercent, trending } = calculateChange(
        newPrice,
        previousPrice
      );

      return {
        ...fallbackStock,
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

export const fetchMultipleStocks = async (
  symbols: string[]
): Promise<StockData[]> => {
  try {
    const promises = symbols.map((symbol) => fetchStockData(symbol));
    const results = await Promise.allSettled(promises);

    return results
      .map((result, index) => {
        if (result.status === "fulfilled") {
          return result.value;
        } else {
          console.warn(`Failed to fetch ${symbols[index]}:`, result.reason);
          const fallbackStock = FALLBACK_STOCKS.find(
            (stock) => stock.symbol === symbols[index]
          );
          if (fallbackStock) {
            const basePrice = parsePrice(fallbackStock.price);
            const newPrice = simulatePriceUpdate(basePrice);
            const previousPrice = parsePrice(fallbackStock.previousClose);
            const { change, changeAmount, changePercent, trending } =
              calculateChange(newPrice, previousPrice);

            return {
              ...fallbackStock,
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
      .filter((stock): stock is StockData => stock !== null);
  } catch (error) {
    console.error("Failed to fetch multiple stocks:", error);
    return FALLBACK_STOCKS.map((stock) => {
      const basePrice = parsePrice(stock.price);
      const newPrice = simulatePriceUpdate(basePrice);
      const previousPrice = parsePrice(stock.previousClose);
      const { change, changeAmount, changePercent, trending } = calculateChange(
        newPrice,
        previousPrice
      );

      return {
        ...stock,
        price: formatPrice(newPrice),
        change: changePercent,
        changeAmount,
        changePercent: changePercent.replace("%", ""),
        trending,
      };
    });
  }
};

export const fetchMarketIndices = async (): Promise<MarketIndex[]> => {
  try {
    return FALLBACK_INDICES.map((index) => {
      const baseValue = parseFloat(index.value.replace(/,/g, ""));
      const newValue = simulatePriceUpdate(baseValue, 0.01);
      const baseChange = parseFloat(index.change);
      const newChange = simulatePriceUpdate(baseChange, 0.05);
      const changePercent = (
        (newChange / (baseValue - baseChange)) *
        100
      ).toFixed(2);
      const trending: "up" | "down" | "neutral" =
        newChange > 0 ? "up" : newChange < 0 ? "down" : "neutral";

      return {
        name: index.name,
        value: new Intl.NumberFormat("en-US").format(newValue),
        change: `${newChange >= 0 ? "+" : ""}${newChange.toFixed(2)}`,
        changePercent: `${newChange >= 0 ? "+" : ""}${changePercent}`,
        trending,
      };
    });
  } catch (error) {
    console.error("Failed to fetch market indices:", error);
    return FALLBACK_INDICES;
  }
};

export const getFeaturedStocks = (): string[] => {
  return FALLBACK_STOCKS.map((stock) => stock.symbol);
};
