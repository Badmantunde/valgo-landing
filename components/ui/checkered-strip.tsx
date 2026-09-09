import { cn } from "@/lib/utils";

interface CheckeredStripProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "blue-white" | "dark-blue";
}

export function CheckeredStrip({
  className,
  size = "md",
  variant = "blue-white",
}: CheckeredStripProps) {
  const heightClass = size === "sm" ? "h-4 sm:h-5" : size === "lg" ? "h-8 sm:h-10" : "h-6 sm:h-7";
  const squareSize = size === "sm" ? 10 : size === "lg" ? 18 : 14;

  const color1 = variant === "blue-white" ? "#ffffff" : "#1f52c4";
  const color2 = variant === "blue-white" ? "#1f52c4" : "#0a1628";

  return (
    <div
      className={cn("w-full overflow-hidden select-none border-y border-blue-900/20", heightClass, className)}
      style={{
        backgroundImage: `
          linear-gradient(45deg, ${color2} 25%, transparent 25%), 
          linear-gradient(-45deg, ${color2} 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, ${color2} 75%), 
          linear-gradient(-45deg, transparent 75%, ${color2} 75%)
        `,
        backgroundColor: color1,
        backgroundSize: `${squareSize * 2}px ${squareSize * 2}px`,
        backgroundPosition: `0 0, 0 ${squareSize}px, ${squareSize}px -${squareSize}px, -${squareSize}px 0px`,
      }}
      aria-hidden="true"
    />
  );
}
