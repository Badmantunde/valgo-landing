import { cn } from "@/lib/utils";

interface CravingTickerProps {
  items?: string[];
  className?: string;
  variant?: "blue" | "white" | "dark";
  speed?: "slow" | "normal" | "fast";
}

const DEFAULT_ITEMS = [
  "HOT MEALS IN MINUTES",
  "SMOKY PARTY JOLLOF & DODO",
  "DOUBLE TROUBLE SMASH BURGERS",
  "CRISPY SPICY PEPPERED WINGS",
  "JUMBO CHICKEN SHAWARMA",
  "STEAMING AMALA & ABULA",
  "FAST HOSTEL & DOORSTEP DELIVERY",
  "COLD PRESSED SMOOTHIES",
  "FRESH FLAKY PASTRIES",
  "FAIR STUDENT PRICING • ZERO SURPRISE FEES",
];

export function CravingTicker({
  items = DEFAULT_ITEMS,
  className,
  variant = "blue",
  speed = "normal",
}: CravingTickerProps) {
  const loop = [...items, ...items];

  const speedClass =
    speed === "fast"
      ? "animate-[marquee_20s_linear_infinite]"
      : speed === "slow"
        ? "animate-[marquee_50s_linear_infinite]"
        : "animate-[marquee_30s_linear_infinite]";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-3 border-y select-none",
        variant === "blue"
          ? "bg-blue-600 text-white border-blue-500/40 shadow-inner"
          : variant === "dark"
            ? "bg-[#0a1628] text-blue-200 border-white/10"
            : "bg-[#fafbfc] text-foreground border-border",
        className
      )}
    >
      <div className="flex w-max items-center gap-6 whitespace-nowrap">
        <div className={cn("flex items-center gap-6", speedClass)}>
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
