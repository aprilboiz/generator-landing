import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Sử dụng narrow width cho content đọc */
  narrow?: boolean;
}

/**
 * Container component - Max-width wrapper với padding responsive
 */
export function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  const maxWidth = narrow ? "max-w-4xl" : "max-w-7xl";

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
