import { useQuery } from "@tanstack/react-query";
import {
  fetchCommoditiesData,
  fetchMultipleCommodities,
  getFeaturedCommodities,
  type CommodityData,
} from "@/lib/commoditiesApi";

export const useCommoditiesData = (symbol: string) => {
  return useQuery({
    queryKey: ["commodity", symbol],
    queryFn: () => fetchCommoditiesData(symbol),
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
    staleTime: 8000,
    gcTime: 3 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useMultipleCommodities = (symbols: string[]) => {
  return useQuery({
    queryKey: ["commodities", symbols],
    queryFn: () => fetchMultipleCommodities(symbols),
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
    staleTime: 8000,
    gcTime: 3 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: symbols.length > 0,
  });
};

export const useFeaturedCommodities = () => {
  const symbols = getFeaturedCommodities();
  return useMultipleCommodities(symbols);
};

export const useRealTimeCommoditiesData = (symbols: string[]) => {
  const {
    data: commodities,
    isLoading,
    error,
    refetch,
  } = useMultipleCommodities(symbols);
  const realTimeQuery = useQuery({
    queryKey: ["real-time-commodities", symbols],
    queryFn: () => fetchMultipleCommodities(symbols),
    refetchInterval: 8000,
    refetchIntervalInBackground: true,
    staleTime: 4000,
    gcTime: 2 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 15000),
    enabled: symbols.length > 0,
  });
  return {
    data: realTimeQuery.data || commodities,
    isLoading: realTimeQuery.isLoading || isLoading,
    error: realTimeQuery.error || error,
    refetch: realTimeQuery.refetch || refetch,
    isRefetching: realTimeQuery.isRefetching,
  };
};
