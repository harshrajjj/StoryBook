import React from 'react';
import './Tag.css';

export type TagVariant = 'filled' | 'outlined' | 'subtle';
export type TagSize = 'small' | 'medium' | 'large';
export type TagColor = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error' | 'neutral';

export interface TagProps {
  /**
   * The content of the tag
   */
  children: React.ReactNode;
  
  /**
   * The visual style variant of the tag
   * @default 'filled'
   */
  variant?: TagVariant;
  
  /**
   * The size of the tag
   * @default 'medium'
   */
  size?: TagSize;
  
  /**
   * The color scheme of the tag
   * @default 'primary'
   */
  color?: TagColor;
  
  /**
   * Optional icon to display before the tag content
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the tag is removable
   * @default false
   */
  removable?: boolean;
  
  /**
   * Callback fired when the remove button is clicked
   */
  onRemove?: () => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Whether the tag is disabled
   * @default false
   */
  disabled?: boolean;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'filled',
  size = 'medium',
  color = 'primary',
  icon,
  removable = false,
  onRemove,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'uz-tag inline-flex items-center rounded-full font-medium';
  
  const variantClasses = {
    filled: `uz-tag-filled-${color}`,
    outlined: `uz-tag-outlined-${color}`,
    subtle: `uz-tag-subtle-${color}`,
  };
  
  const sizeClasses = {
    small: 'uz-tag-small text-xs px-2 py-0.5',
    medium: 'uz-tag-medium text-sm px-3 py-1',
    large: 'uz-tag-large text-base px-4 py-1.5',
  };
  
  const disabledClass = disabled ? 'uz-tag-disabled opacity-60 cursor-not-allowed' : '';
  
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  };
  
  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`}
      {...props}
    >
      {icon && <span className="uz-tag-icon mr-1.5">{icon}</span>}
      <span className="uz-tag-content">{children}</span>
      {removable && (
        <button
          type="button"
          onClick={handleRemove}
          className={`uz-tag-remove ml-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          disabled={disabled}
          aria-label="Remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-5 h-5'}`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};
