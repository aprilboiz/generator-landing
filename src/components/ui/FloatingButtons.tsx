import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

// Types for floating button items
export interface FloatingButtonItem {
  /** Unique identifier */
  id: string;
  /** Link URL (tel:, https://, etc.) */
  href: string;
  /** Accessibility label */
  ariaLabel: string;
  /** Tooltip label shown on hover */
  label: string;
  /** Lucide icon component or custom ReactNode */
  icon: ReactNode;
  /** Gradient colors - format: "from-{color} to-{color}" */
  gradient: string;
  /** Shadow color - format: "{color}-500/30" */
  shadowColor: string;
  /** Open in new tab */
  external?: boolean;
  /** Enable pulse animation */
  pulse?: boolean;
}

interface FloatingButtonsProps {
  /** Array of button items to display */
  items: FloatingButtonItem[];
  /** Position from bottom edge (Tailwind spacing) */
  bottom?: string;
  /** Position from right edge (Tailwind spacing) */
  right?: string;
  /** Gap between buttons (Tailwind spacing) */
  gap?: string;
}

/**
 * Helper to render icon - works with both Lucide icons and ReactNode
 */
function renderIcon(icon: ReactNode | LucideIcon, className: string = "w-6 h-6") {
  if (typeof icon === "function") {
    const IconComponent = icon as LucideIcon;
    return <IconComponent className={className} />;
  }
  return icon;
}

/**
 * FloatingButtons - Reusable floating action buttons component
 * Displays fixed position buttons at corner of screen
 *
 * @example
 * ```tsx
 * import { Phone, MessageCircle } from "lucide-react";
 *
 * <FloatingButtons
 *   items={[
 *     {
 *       id: "call",
 *       href: "tel:0909123456",
 *       ariaLabel: "Gọi ngay",
 *       label: "Gọi ngay",
 *       icon: <Phone className="w-6 h-6" />,
 *       gradient: "from-green-500 to-green-600",
 *       shadowColor: "green-500/30",
 *       pulse: true,
 *     },
 *   ]}
 * />
 * ```
 */
export function FloatingButtons({
  items,
  bottom = "6",
  right = "6",
  gap = "3",
}: FloatingButtonsProps) {
  return (
    <div
      className={`fixed bottom-${bottom} right-${right} z-50 flex flex-col-reverse items-end gap-${gap}`}
      style={{
        // Inline styles as fallback for dynamic Tailwind classes
        bottom: `${parseInt(bottom) * 0.25}rem`,
        right: `${parseInt(right) * 0.25}rem`,
        gap: `${parseInt(gap) * 0.25}rem`,
      }}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-3"
          aria-label={item.ariaLabel}
        >
          {/* Label - hiển thị khi hover */}
          <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-all duration-300 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0">
            {item.label}
          </span>

          {/* Button */}
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-lg shadow-${item.shadowColor} hover:shadow-${item.shadowColor.replace("/30", "/50")} hover:scale-110 transition-all duration-300 ${item.pulse ? "animate-pulse hover:animate-none" : ""}`}
          >
            {renderIcon(item.icon)}
          </div>
        </a>
      ))}
    </div>
  );
}
