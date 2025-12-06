import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label cho textarea */
  label: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
}

/**
 * TextArea component - Styled textarea với label và error state
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, className = "", id, required, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          className={`
            w-full px-4 py-3 rounded-xl border transition-all duration-200
            bg-white dark:bg-gray-800 resize-y min-h-[120px]
            ${
              error
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-orange-500 focus:border-orange-500"
            }
            focus:outline-none focus:ring-2
            placeholder:text-gray-400
            ${className}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          required={required}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
