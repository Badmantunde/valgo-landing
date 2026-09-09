"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronDown,
  ShoppingBag,
  Sparkles,
  Users,
  HelpCircle,
  BookOpen,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { AppStoreBadges } from "@/components/ui/app-store-badges";
import { NAV_LINKS, APP_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const dropdownIcons: Record<string, React.ElementType> = {
  "/about": Users,
  "/faq": HelpCircle,
  "/blog": BookOpen,
  "/careers": Briefcase,
};

const menuVariants: Variants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 },
};

const backdropVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const linkVariants: Variants = {
  closed: { opacity: 0, x: 16 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.04 + i * 0.04, duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);

  const useLightNav = !isHome || scrolled || mobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 20);

      // Always show navbar at the top of the page
      if (currentScrollY <= 20) {
        setNavVisible(true);
      } else if (diff > 8) {
        // Scrolling down -> hide navbar
        setNavVisible(false);
        setCompanyDropdownOpen(false);
      } else if (diff < -8) {
        // Scrolling up -> show navbar
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setCompanyDropdownOpen(false);
    setNavVisible(true);
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-300",
          mobileOpen ? "z-[80] bg-white shadow-md py-3 translate-y-0" : "z-50",
          !mobileOpen && (useLightNav ? "bg-white shadow-sm py-3" : "bg-transparent py-5"),
          !mobileOpen && (navVisible ? "translate-y-0" : "-translate-y-full")
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo variant={useLightNav ? "blue" : "white"} size="sm" priority={isHome} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const hasChildren = Boolean(link.children && link.children.length > 0);
              const isActive = pathname === link.href;

              if (hasChildren && link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative group py-1"
                    onMouseEnter={() => setCompanyDropdownOpen(true)}
                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={companyDropdownOpen}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer",
                        useLightNav
                          ? "text-muted hover:text-blue-600"
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          companyDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                      {/* Dropdown Floating Panel */}
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 transition-all duration-200 origin-top",
                          companyDropdownOpen
                            ? "opacity-100 visible translate-y-0 pointer-events-auto"
                            : "opacity-0 invisible -translate-y-1.5 pointer-events-none"
                        )}
                      >
                        <div
                          className={cn(
                            "w-80 sm:w-[360px] rounded-2xl p-2.5 shadow-2xl border transition-colors",
                            useLightNav
                              ? "bg-white border-border text-foreground ring-1 ring-black/5"
                              : "bg-[#0b162c] border-white/20 text-white ring-1 ring-white/10"
                          )}
                        >
                          {/* Dropdown Header Pill */}
                          <div className="px-3 pt-2 pb-1.5 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase">
                            <span className={useLightNav ? "text-neutral-400" : "text-white/50"}>Company &amp; Community</span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] font-extrabold text-blue-600 dark:text-sky-400">
                              OOU Pilot
                            </span>
                          </div>

                          <div className="mt-1 space-y-1">
                            {link.children.map((child) => {
                              const IconComponent = dropdownIcons[child.href] || Sparkles;
                              const badge =
                                child.href === "/careers"
                                  ? { label: "Hiring", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" }
                                  : child.href === "/blog"
                                  ? { label: "News", color: "bg-blue-500/15 text-blue-600 dark:text-sky-400" }
                                  : child.href === "/faq"
                                  ? { label: "Answers", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" }
                                  : null;

                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group/item",
                                    useLightNav
                                      ? "hover:bg-blue-50/80"
                                      : "hover:bg-white/10"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 mt-0.5",
                                      useLightNav
                                        ? "bg-blue-50/90 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:shadow-sm"
                                        : "bg-white/10 text-blue-300 group-hover/item:bg-blue-500 group-hover/item:text-white group-hover/item:shadow-sm"
                                    )}
                                  >
                                    <IconComponent className="h-4.5 w-4.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <span
                                        className={cn(
                                          "block text-xs font-bold transition-colors",
                                          useLightNav
                                            ? "text-foreground group-hover/item:text-blue-600"
                                            : "text-white group-hover/item:text-blue-300"
                                        )}
                                      >
                                        {child.label}
                                      </span>
                                      {badge && (
                                        <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", badge.color)}>
                                          {badge.label}
                                        </span>
                                      )}
                                    </div>
                                    <span
                                      className={cn(
                                        "block text-[11px] leading-snug mt-0.5",
                                        useLightNav ? "text-muted" : "text-white/60"
                                      )}
                                    >
                                      {child.description}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Quick Footer Link */}
                          <div className={cn(
                            "mt-1.5 pt-2 px-3 border-t flex items-center justify-between text-[11px]",
                            useLightNav ? "border-neutral-100 text-neutral-500" : "border-white/10 text-white/50"
                          )}>
                            <span>Fast campus delivery network</span>
                            <Link href="/faq" className="font-semibold text-blue-600 dark:text-sky-400 hover:underline inline-flex items-center gap-0.5">
                              Campus Help <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors group py-1",
                    isActive
                      ? useLightNav
                        ? "text-blue-600 font-semibold"
                        : "text-white font-semibold"
                      : useLightNav
                        ? "text-muted hover:text-blue-600"
                        : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/#waitlist"
              variant={useLightNav ? "secondary" : "outline"}
              size="sm"
              className={cn(
                "font-semibold",
                !useLightNav && "border-white/25 text-white hover:bg-white/10"
              )}
            >
              Join Waitlist
            </Button>
            <Button
              href={APP_LINKS.customer.web}
              target="_blank"
              rel="noopener noreferrer"
              variant={useLightNav ? "primary" : "white"}
              size="sm"
              className="font-bold shadow-sm"
            >
              <ShoppingBag className="h-3.5 w-3.5 mr-1 text-inherit" />
              Order on Web
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={cn(
              "lg:hidden relative z-[81] p-2 rounded-lg transition-colors",
              useLightNav ? "text-foreground hover:bg-blue-50" : "text-white hover:bg-white/10",
              mobileOpen && "text-foreground hover:bg-blue-50"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <MenuToggleIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
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
                  const hasChildren = Boolean(link.children && link.children.length > 0);
                  const isActive = pathname === link.href;

                  if (hasChildren && link.children) {
                    return (
                      <motion.div
                        key={link.label}
                        custom={i}
                        variants={linkVariants}
                        initial="closed"
                        animate="open"
                        className="py-3 border-b border-border"
                      >
                        <span className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                          {link.label}
                        </span>
                        <div className="space-y-1 mt-1">
                          {link.children.map((child) => {
                            const IconComponent = dropdownIcons[child.href] || Sparkles;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 p-2.5 rounded-lg text-foreground hover:bg-blue-50 transition-colors"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <div>
                                  <span className="block text-sm font-semibold text-foreground">
                                    {child.label}
                                  </span>
                                  <span className="block text-xs text-muted font-normal">
                                    {child.description}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  }

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
                          "block text-base font-semibold py-3.5 border-b border-border transition-colors",
                          isActive ? "text-blue-600" : "text-foreground hover:text-blue-600"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Drawer CTAs */}
                <motion.div
                  custom={NAV_LINKS.length + 1}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="flex flex-col gap-3 mt-6 pt-5 border-t border-border/80"
                >
                  <Button
                    href={APP_LINKS.customer.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full justify-center font-bold shadow-sm py-3 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Order on Web
                  </Button>

                  <Button
                    href="/#waitlist"
                    variant="secondary"
                    className="w-full justify-center font-semibold py-3 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Join Waitlist
                  </Button>

                  <div className="pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2.5 text-center">
                      Get the ValGo Mobile App
                    </p>
                    <AppStoreBadges
                      role="customer"
                      variant="light"
                      className="justify-center w-full"
                      onItemClick={() => setMobileOpen(false)}
                    />
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
