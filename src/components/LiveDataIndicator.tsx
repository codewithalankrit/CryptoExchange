import { RefreshCw, Wifi, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LiveDataIndicatorProps {
  isRefetching?: boolean;
  isOnline?: boolean;
  lastUpdate?: string;
  className?: string;
}

export const LiveDataIndicator = ({
  isRefetching = false,
  isOnline = true,
  lastUpdate,
  className = "",
}: LiveDataIndicatorProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {isOnline ? (
          <Wifi className="w-4 h-4 text-success" />
        ) : (
          <WifiOff className="w-4 h-4 text-destructive" />
        )}
        <span className="text-xs text-muted-foreground">
          {isOnline ? "Live" : "Offline"}
        </span>
      </div>

      {isRefetching && (
        <RefreshCw className="w-4 h-4 text-primary animate-spin" />
      )}

      {lastUpdate && (
        <Badge variant="outline" className="text-xs">
          Updated: {lastUpdate}
        </Badge>
      )}
    </div>
  );
};
