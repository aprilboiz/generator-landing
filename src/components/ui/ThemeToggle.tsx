"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";

interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: typeof Sun;
}

const THEME_OPTIONS: ThemeOption[] = [
  { value: "light", label: "Sáng", icon: Sun },
  { value: "dark", label: "Tối", icon: Moon },
  { value: "system", label: "Hệ thống", icon: Monitor },
];

/**
 * ThemeToggle - Button to switch between light/dark/system themes
 * Shows dropdown on click with all options
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Only render on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Don't render anything until mounted (avoid hydration mismatch)
  if (!mounted) {
    return (
      <div className="p-2 rounded-lg">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return <ThemeToggleInner isOpen={isOpen} setIsOpen={setIsOpen} dropdownRef={dropdownRef} />;
}

// Inner component that uses the hook - only called after mounted
function ThemeToggleInner({
  isOpen,
  setIsOpen,
  dropdownRef,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const CurrentIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Chuyển đổi chế độ sáng/tối"
        aria-expanded={isOpen}
      >
        <CurrentIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          {THEME_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.value;

            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{option.label}</span>
                {isActive && (
                  <span className="ml-auto text-orange-500">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
