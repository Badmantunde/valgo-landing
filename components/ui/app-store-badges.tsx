import Image from "next/image";
import { cn } from "@/lib/utils";

const STORE_LOGOS = {
  apple: "/store/apple.png",
  googlePlay: "/store/google-play.png",
} as const;

interface AppStoreBadgesProps {
  variant?: "dark" | "light";
  className?: string;
}

function StoreBadge({
  store,
  variant,
}: {
  store: "apple" | "google";
  variant: "dark" | "light";
}) {
  const isApple = store === "apple";
  const label = isApple ? "App Store" : "Google Play";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg border px-3.5 py-2 min-w-[148px]",
        variant === "dark"
          ? "border-white/10 bg-white text-foreground"
          : "border-border bg-[#fafbfc] text-foreground"
      )}
      aria-label={`${label}, coming soon`}
    >
      <Image
        src={isApple ? STORE_LOGOS.apple : STORE_LOGOS.googlePlay}
        alt=""
        width={isApple ? 24 : 22}
        height={isApple ? 24 : 22}
        className={cn(
          "shrink-0 object-contain",
          isApple ? "h-6 w-6" : "h-[22px] w-[22px]"
        )}
        aria-hidden="true"
      />
      <div className="leading-none">
        <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
          Coming soon on
        </p>
        <p className="text-sm font-semibold mt-0.5 text-foreground">{label}</p>
      </div>
    </div>
  );
}

export function AppStoreBadges({
  variant = "dark",
  className,
}: AppStoreBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreBadge store="apple" variant={variant} />
      <StoreBadge store="google" variant={variant} />
    </div>
  );
}
