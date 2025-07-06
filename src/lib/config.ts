export const config = {
  alphaVantage: {
    baseUrl: "https://www.alphavantage.co/query",
    apiKey: import.meta.env.VITE_ALPHA_VANTAGE_API_KEY || "demo",
    rateLimit: {
      requestsPerMinute: 5,
      requestsPerDay: 500,
    },
  },

  updateIntervals: {
    stocks: 10000,
    indices: 30000,
    fallback: 30000,
  },

  featuredStocks: ["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN", "NVDA"],

  marketIndices: ["S&P 500", "NASDAQ", "DOW JONES"],

  endpoints: {
    alphaVantage: {
      globalQuote: "GLOBAL_QUOTE",
      intraday: "TIME_SERIES_INTRADAY",
      daily: "TIME_SERIES_DAILY",
    },

    iexCloud: {
      baseUrl: "https://cloud.iexapis.com/stable",
      quote: "/stock/{symbol}/quote",
    },

    polygon: {
      baseUrl: "https://api.polygon.io/v2",
      quote: "/snapshot/locale/us/markets/stocks/tickers/{symbol}",
    },
  },
};

export const getApiKey = (): string => {
  return config.alphaVantage.apiKey;
};

export const isDemoMode = (): boolean => {
  return config.alphaVantage.apiKey === "demo";
};

export const getUpdateInterval = (
  type: "stocks" | "indices" | "fallback"
): number => {
  return config.updateIntervals[type];
};
