import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "blue" | "white";
  size?: "sm" | "md";
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = "blue",
  size = "md",
  className,
  priority = false,
}: LogoProps) {
  const src = variant === "white" ? "/logo-white.svg" : "/logo-blue.svg";

  return (
    <Link href="/" className={cn("inline-flex shrink-0 transition-opacity hover:opacity-90", className)}>
      <Image
        src={src}
        alt="ValGo"
        width={131}
        height={38}
        priority={priority}
        className={cn(
          "w-auto",
          size === "sm" ? "h-6 sm:h-7" : "h-8 w-auto sm:h-9"
        )}
      />
    </Link>
  );
}
