import Link from "next/link";
import { APP_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type AppRole = "customer" | "rider" | "vendor";

interface AppStoreBadgesProps {
  role?: AppRole;
  variant?: "dark" | "light" | "glass";
  className?: string;
  onItemClick?: () => void;
}

/**
 * Authentic 4-color Google Play vector icon
 */
export function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[22px] w-[22px] shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M48.7 8.3C45.8 9.9 44 13 44 16.7v478.6c0 3.7 1.8 6.8 4.7 8.4l255.4-247.7L48.7 8.3z"
        fill="#00D3FF"
      />
      <path
        d="M389.2 174.6L304.1 256l85.1 81.4 96.6-55.8c11-6.4 17.7-18 17.7-30.6 0-12.7-6.7-24.3-17.7-30.6l-96.6-45.8z"
        fill="#FFCE00"
      />
      <path
        d="M304.1 256L48.7 503.7c3.9 2.2 8.7 2.2 13.1-.3l327.4-187.4L304.1 256z"
        fill="#FF3A44"
      />
      <path
        d="M389.2 174.6L61.8 8.6c-4.4-2.5-9.2-2.5-13.1-.3L304.1 256l85.1-81.4z"
        fill="#00E676"
      />
    </svg>
  );
}

/**
 * Authentic Apple silhouette vector icon using currentColor
 */
export function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[22px] w-[22px] shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 66.3 32.5 125.8c17.5 32.2 38.8 64.5 73.1 63.8 33.3-.8 45.4-21.5 86.8-21.5 41.5 0 52.8 21.5 87.3 20.8 35.8-.8 59.2-34.4 76.5-66.6 20.2-37.4 28.5-73.6 28.9-75.4-1.2-.6-55.9-21.8-56.4-71.7zM250.6 92.5c15.6-19.1 26.3-45.7 23.4-72.5-22.9 1-50.6 15.3-66.9 34.4-14.3 16.6-26.9 43.6-23.6 69.8 25.5 2 51.5-12.6 67.1-31.7z" />
    </svg>
  );
}

export function AppStoreBadges({
  role = "customer",
  variant = "dark",
  className,
  onItemClick,
}: AppStoreBadgesProps) {
  const roleConfig = APP_LINKS[role];
  const playStoreUrl = roleConfig.playStore;

  const isDark = variant === "dark";
  const isGlass = variant === "glass";

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5 sm:gap-3", className)}>
      {/* Google Play (Live Link) */}
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onItemClick}
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 min-w-[146px] xs:min-w-[152px] sm:min-w-[160px] transition-all duration-200 hover:-translate-y-0.5 active:scale-98",
          isDark
            ? "border-white/15 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm shadow-sm"
            : isGlass
              ? "border-white/25 bg-white/80 text-foreground hover:bg-white shadow-sm backdrop-blur-md"
              : "border-slate-200 bg-white text-slate-900 hover:border-blue-500/50 hover:bg-blue-50/40 shadow-xs"
        )}
        aria-label={`Get ${roleConfig.name} on Google Play`}
      >
        <GooglePlayIcon className="transition-transform group-hover:scale-105" />
        <div className="leading-tight text-left">
          <p
            className={cn(
              "text-[9px] font-semibold uppercase tracking-wider",
              isDark ? "text-white/60" : "text-slate-500"
            )}
          >
            GET IT ON
          </p>
          <p
            className={cn(
              "text-xs sm:text-sm font-bold tracking-tight",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            Google Play
          </p>
        </div>
      </a>

      {/* App Store (Coming Soon - Waitlist link) */}
      <Link
        href="/#waitlist"
        onClick={onItemClick}
        className={cn(
          "group relative inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 min-w-[146px] xs:min-w-[152px] sm:min-w-[160px] transition-all duration-200 hover:-translate-y-0.5 active:scale-98 cursor-pointer",
          isDark
            ? "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 backdrop-blur-sm"
            : isGlass
              ? "border-white/20 bg-white/60 text-slate-900 hover:bg-white/80 backdrop-blur-md"
              : "border-slate-200/80 bg-slate-50 text-slate-900 hover:bg-slate-100 hover:border-slate-300 shadow-xs"
        )}
        aria-label="App Store version coming soon - Join waitlist"
      >
        <AppleIcon
          className={cn(
            "transition-transform group-hover:scale-105",
            isDark ? "text-white" : "text-slate-900"
          )}
        />
        <div className="leading-tight text-left">
          <div className="flex items-center gap-1.5">
            <p
              className={cn(
                "text-[9px] font-semibold uppercase tracking-wider",
                isDark ? "text-white/60" : "text-slate-500"
              )}
            >
              DOWNLOAD ON
            </p>
            <span
              className={cn(
                "rounded px-1 py-0.2 text-[8px] font-extrabold uppercase tracking-wider",
                isDark
                  ? "bg-blue-400/25 text-blue-300"
                  : "bg-blue-600/10 text-blue-700"
              )}
            >
              SOON
            </span>
          </div>
          <p
            className={cn(
              "text-xs sm:text-sm font-bold tracking-tight",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            App Store
          </p>
        </div>
      </Link>
    </div>
  );
}
