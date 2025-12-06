"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Zap, Phone, Menu, X } from "lucide-react";

// Types for navbar configuration
export interface NavItem {
  /** Display label */
  label: string;
  /** Link href (use # for anchors) */
  href: string;
}

export interface NavbarLogo {
  /** Logo icon or image */
  icon: ReactNode;
  /** Brand name - primary text */
  brandName: string;
  /** Brand name - accent text (optional) */
  brandAccent?: string;
  /** Link href for logo */
  href?: string;
}

export interface NavbarProps {
  /** Navigation items */
  items?: NavItem[];
  /** Logo configuration */
  logo?: NavbarLogo;
  /** Hotline number */
  hotline?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button href */
  ctaHref?: string;
}

// Default values
const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#process" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Về chúng tôi", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const DEFAULT_LOGO: NavbarLogo = {
  icon: <Zap className="w-5 h-5" />,
  brandName: "Máy Phát Điện",
  brandAccent: "HCM",
  href: "/",
};

/**
 * Navbar - Reusable navigation bar component
 * Features: responsive mobile menu, scroll-based styling, configurable via props
 *
 * @example
 * ```tsx
 * <Navbar
 *   items={[{ label: "Home", href: "/" }]}
 *   logo={{ icon: <Logo />, brandName: "MyBrand" }}
 *   hotline="0909-123-456"
 *   ctaText="Liên hệ"
 *   ctaHref="#contact"
 * />
 * ```
 */
export function Navbar({
  items = DEFAULT_NAV_ITEMS,
  logo = DEFAULT_LOGO,
  hotline = "0909-XXX-XXX",
  ctaText = "Liên hệ ngay",
  ctaHref = "#contact",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll để thay đổi style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Đóng mobile menu khi click link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={logo.href || "/"}
            className="flex items-center gap-2 group"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
              {logo.icon}
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-bold text-lg ${
                  isScrolled
                    ? "text-gray-900 dark:text-white"
                    : "text-white"
                }`}
              >
                {logo.brandName}
              </span>
              {logo.brandAccent && (
                <span className="text-orange-500 font-bold text-lg">
                  {" "}
                  {logo.brandAccent}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50 dark:text-gray-200 dark:hover:bg-gray-800"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${hotline.replace(/-/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-200"
                  : "text-gray-200"
              }`}
            >
              <Phone className="w-4 h-4" />
              {hotline}
            </a>
            <Button href={ctaHref} size="sm">
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Optimized */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "visible" : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleNavClick}
          />

          {/* Menu Panel */}
          <div
            className={`absolute top-16 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            {/* Nav Items - Compact Grid */}
            <div className="grid grid-cols-2 gap-1 p-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-xl text-center text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 font-medium transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700" />

            {/* CTA Buttons - Sticky Bottom */}
            <div className="p-3 space-y-2 bg-gray-50 dark:bg-gray-800/50">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${hotline.replace(/-/g, "")}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors text-sm"
                  onClick={handleNavClick}
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi ngay</span>
                </a>
                <Button
                  href={ctaHref}
                  size="sm"
                  className="w-full justify-center"
                  onClick={handleNavClick}
                >
                  {ctaText}
                </Button>
              </div>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                Hotline: {hotline}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
