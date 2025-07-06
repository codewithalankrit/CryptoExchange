import { useQuery } from "@tanstack/react-query";
import {
  fetchCryptoData,
  fetchMultipleCrypto,
  fetchMarketStats,
  fetchCryptoCategories,
  type CryptoData,
  type CryptoMarketStats,
  type CryptoCategory,
} from "@/lib/cryptoApi";

export const useCryptoData = (symbol: string) => {
  return useQuery({
    queryKey: ["crypto", symbol],
    queryFn: () => fetchCryptoData(symbol),
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
    staleTime: 8000,
    gcTime: 3 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useMultipleCrypto = (symbols: string[]) => {
  return useQuery({
    queryKey: ["cryptos", symbols],
    queryFn: () => fetchMultipleCrypto(symbols),
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
    staleTime: 8000,
    gcTime: 3 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: symbols.length > 0,
  });
};

export const useMarketStats = () => {
  return useQuery({
    queryKey: ["crypto-market-stats"],
    queryFn: fetchMarketStats,
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    staleTime: 20000,
    gcTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useCryptoCategories = () => {
  return useQuery({
    queryKey: ["crypto-categories"],
    queryFn: fetchCryptoCategories,
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useFeaturedCrypto = () => {
  const { getFeaturedCrypto } = require("@/lib/cryptoApi");
  const symbols = getFeaturedCrypto();

  return useMultipleCrypto(symbols);
};

export const useRealTimeCryptoData = (symbols: string[]) => {
  const {
    data: cryptos,
    isLoading,
    error,
    refetch,
  } = useMultipleCrypto(symbols);

  const realTimeQuery = useQuery({
    queryKey: ["real-time-crypto", symbols],
    queryFn: () => fetchMultipleCrypto(symbols),
    refetchInterval: 8000,
    refetchIntervalInBackground: true,
    staleTime: 4000,
    gcTime: 2 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 15000),
    enabled: symbols.length > 0,
  });

  return {
    data: realTimeQuery.data || cryptos,
    isLoading: realTimeQuery.isLoading || isLoading,
    error: realTimeQuery.error || error,
    refetch: realTimeQuery.refetch || refetch,
    isRefetching: realTimeQuery.isRefetching,
  };
};
