import { useQuery } from "@tanstack/react-query";
import {
  fetchStockData,
  fetchMultipleStocks,
  fetchMarketIndices,
  type StockData,
  type MarketIndex,
} from "@/lib/stockApi";

export const useStockData = (symbol: string) => {
  return useQuery({
    queryKey: ["stock", symbol],
    queryFn: () => fetchStockData(symbol),
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    staleTime: 10000,
    gcTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useMultipleStocks = (symbols: string[]) => {
  return useQuery({
    queryKey: ["stocks", symbols],
    queryFn: () => fetchMultipleStocks(symbols),
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    staleTime: 10000,
    gcTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: symbols.length > 0,
  });
};

export const useMarketIndices = () => {
  return useQuery({
    queryKey: ["market-indices"],
    queryFn: fetchMarketIndices,
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
    staleTime: 30000,
    gcTime: 10 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useFeaturedStocks = () => {
  const { getFeaturedStocks } = require("@/lib/stockApi");
  const symbols = getFeaturedStocks();

  return useMultipleStocks(symbols);
};

export const useRealTimeStockData = (symbols: string[]) => {
  const {
    data: stocks,
    isLoading,
    error,
    refetch,
  } = useMultipleStocks(symbols);

  const realTimeQuery = useQuery({
    queryKey: ["real-time-stocks", symbols],
    queryFn: () => fetchMultipleStocks(symbols),
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    staleTime: 5000,
    gcTime: 2 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 15000),
    enabled: symbols.length > 0,
  });

  return {
    data: realTimeQuery.data || stocks,
    isLoading: realTimeQuery.isLoading || isLoading,
    error: realTimeQuery.error || error,
    refetch: realTimeQuery.refetch || refetch,
    isRefetching: realTimeQuery.isRefetching,
  };
};
