import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Icon hiển thị trước text */
  leftIcon?: ReactNode;
  /** Icon hiển thị sau text */
  rightIcon?: ReactNode;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  /** Mở link trong tab mới */
  external?: boolean;
  /** Click handler (optional for links) */
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40",
  secondary:
    "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25",
  outline:
    "border-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950",
  ghost: "text-gray-600 hover:text-orange-600 hover:bg-gray-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Button component - Hỗ trợ cả button và link
 * Primary: CTA chính (màu cam)
 * Secondary: CTA phụ (màu xanh)
 * Outline: Border only
 * Ghost: Text only
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Nếu có href, render như Link
  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link href={href} className={combinedClassName} {...linkProps} {...rest}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  // Render như button
  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
