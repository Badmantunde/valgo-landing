import Image from "next/image";
import { APP_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const STORE_LOGOS = {
  apple: "/store/apple.png",
  googlePlay: "/store/google-play.png",
} as const;

export type AppRole = "customer" | "rider" | "vendor";

interface AppStoreBadgesProps {
  role?: AppRole;
  variant?: "dark" | "light" | "glass";
  className?: string;
}

export function AppStoreBadges({
  role = "customer",
  variant = "dark",
  className,
}: AppStoreBadgesProps) {
  const roleConfig = APP_LINKS[role];
  const playStoreUrl = roleConfig.playStore;

  const isDark = variant === "dark";
  const isGlass = variant === "glass";

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {/* Google Play (Live Link) */}
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-lg border px-3.5 py-2 min-w-[152px] transition-all duration-200 hover:-translate-y-0.5",
          isDark
            ? "border-white/15 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm shadow-sm"
            : isGlass
              ? "border-white/20 bg-white/80 text-foreground hover:bg-white shadow-sm backdrop-blur-md"
              : "border-border bg-white text-foreground hover:border-blue-500/40 hover:bg-blue-50/40 shadow-sm"
        )}
        aria-label={`Get ${roleConfig.name} on Google Play`}
      >
        <Image
          src={STORE_LOGOS.googlePlay}
          alt=""
          width={22}
          height={22}
          className="h-[22px] w-[22px] shrink-0 object-contain transition-transform group-hover:scale-105"
          aria-hidden="true"
        />
        <div className="leading-tight text-left">
          <p
            className={cn(
              "text-[9px] font-semibold uppercase tracking-wider",
              isDark ? "text-white/60" : "text-muted"
            )}
          >
            GET IT ON
          </p>
          <p
            className={cn(
              "text-xs sm:text-sm font-bold tracking-tight",
              isDark ? "text-white" : "text-foreground"
            )}
          >
            Google Play
          </p>
        </div>
      </a>

      {/* App Store (Coming Soon) */}
      <div
        className={cn(
          "relative inline-flex items-center gap-2.5 rounded-lg border px-3.5 py-2 min-w-[152px] select-none opacity-85",
          isDark
            ? "border-white/10 bg-white/5 text-white/90"
            : isGlass
              ? "border-white/15 bg-white/60 text-foreground"
              : "border-border/80 bg-[#f8fafc] text-foreground"
        )}
        aria-label="App Store version coming soon"
      >
        <Image
          src={STORE_LOGOS.apple}
          alt=""
          width={24}
          height={24}
          className={cn(
            "h-6 w-6 shrink-0 object-contain",
            isDark ? "invert" : ""
          )}
          aria-hidden="true"
        />
        <div className="leading-tight text-left">
          <div className="flex items-center gap-1.5">
            <p
              className={cn(
                "text-[9px] font-semibold uppercase tracking-wider",
                isDark ? "text-white/50" : "text-muted"
              )}
            >
              DOWNLOAD ON
            </p>
            <span className="rounded bg-blue-500/20 px-1 py-0.2 text-[8px] font-bold text-blue-400">
              SOON
            </span>
          </div>
          <p
            className={cn(
              "text-xs sm:text-sm font-bold tracking-tight",
              isDark ? "text-white/90" : "text-foreground"
            )}
          >
            App Store
          </p>
        </div>
      </div>
    </div>
  );
}
