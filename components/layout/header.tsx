"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 },
};

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const linkVariants = {
  closed: { opacity: 0, x: 16 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const useLightNav = !isHome || scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          useLightNav ? "glass shadow-sm py-3" : "bg-transparent py-5",
          mobileOpen && "bg-white shadow-md py-3"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo variant={useLightNav ? "blue" : "white"} size="sm" priority={isHome} />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors group",
                    isActive
                      ? useLightNav
                        ? "text-blue-500"
                        : "text-white"
                      : useLightNav
                        ? "text-muted hover:text-blue-500"
                        : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/#waitlist"
              variant={useLightNav ? "secondary" : "white"}
              size="sm"
            >
              Join Waitlist
            </Button>
            <Button href="/partners" variant="primary" size="sm">
              Become a Partner
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              useLightNav ? "text-foreground hover:bg-blue-50" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              key="mobile-backdrop"
              type="button"
              aria-label="Close menu"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 z-[60] bg-[#0a1628]/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="lg:hidden fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-white shadow-2xl border-l border-border overflow-y-auto"
            >
              <nav className="flex flex-col p-6 pt-24 min-h-full">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block text-lg font-medium py-3.5 border-b border-border transition-colors",
                          isActive ? "text-blue-500" : "text-foreground hover:text-blue-500"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  custom={NAV_LINKS.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="flex flex-col gap-3 mt-8"
                >
                  <Button
                    href="/#waitlist"
                    variant="secondary"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Join Waitlist
                  </Button>
                  <Button
                    href="/partners"
                    variant="primary"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Become a Partner
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
