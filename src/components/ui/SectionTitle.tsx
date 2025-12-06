interface SectionTitleProps {
  /** Tiêu đề chính (h2) */
  title: string;
  /** Tiêu đề phụ (optional) */
  subtitle?: string;
  /** Căn giữa text */
  centered?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * SectionTitle component - Heading cho các section
 * Sử dụng h2 để đảm bảo hierarchy đúng (h1 ở Hero)
 */
export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
