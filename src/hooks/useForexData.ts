import { useQuery } from "@tanstack/react-query";
import {
  fetchForexData,
  fetchMultipleForex,
  getFeaturedForex,
  type ForexData,
} from "@/lib/forexApi";

export const useForexData = (symbol: string) => {
  return useQuery({
    queryKey: ["forex", symbol],
    queryFn: () => fetchForexData(symbol),
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
    staleTime: 8000,
    gcTime: 3 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useMultipleForex = (symbols: string[]) => {
  return useQuery({
    queryKey: ["forex-multi", symbols],
    queryFn: () => fetchMultipleForex(symbols),
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
    staleTime: 8000,
    gcTime: 3 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: symbols.length > 0,
  });
};

export const useFeaturedForex = () => {
  const symbols = getFeaturedForex();
  return useMultipleForex(symbols);
};

export const useRealTimeForexData = (symbols: string[]) => {
  const { data: forex, isLoading, error, refetch } = useMultipleForex(symbols);
  const realTimeQuery = useQuery({
    queryKey: ["real-time-forex", symbols],
    queryFn: () => fetchMultipleForex(symbols),
    refetchInterval: 8000,
    refetchIntervalInBackground: true,
    staleTime: 4000,
    gcTime: 2 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 15000),
    enabled: symbols.length > 0,
  });
  return {
    data: realTimeQuery.data || forex,
    isLoading: realTimeQuery.isLoading || isLoading,
    error: realTimeQuery.error || error,
    refetch: realTimeQuery.refetch || refetch,
    isRefetching: realTimeQuery.isRefetching,
  };
};
