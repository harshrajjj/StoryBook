import React, { useState } from 'react';
import './TopNavBar.css';

export type TopNavBarVariant = 'primary' | 'neutral' | 'transparent';
export type TopNavBarSize = 'small' | 'medium' | 'large';

export interface TopNavBarProps {
  /**
   * The logo or brand element to display
   */
  logo: React.ReactNode;

  /**
   * The navigation items to display
   */
  children: React.ReactNode;

  /**
   * Optional actions to display on the right side
   */
  actions?: React.ReactNode;

  /**
   * The visual style variant of the navigation bar
   * @default 'primary'
   */
  variant?: TopNavBarVariant;

  /**
   * The size of the navigation bar
   * @default 'medium'
   */
  size?: TopNavBarSize;

  /**
   * Whether the navigation bar is sticky (fixed to the top)
   * @default false
   */
  sticky?: boolean;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Whether to show a mobile menu button on small screens
   * @default true
   */
  mobileMenu?: boolean;

  /**
   * Optional inline styles for the navigation bar
   */
  style?: React.CSSProperties;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  logo,
  children,
  actions,
  variant = 'primary',
  size = 'medium',
  sticky = false,
  className = '',
  mobileMenu = true,
  style,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const baseClasses = 'uz-top-nav-bar w-full';

  const variantClasses = {
    primary: 'uz-top-nav-bar-primary',
    neutral: 'uz-top-nav-bar-neutral',
    transparent: 'uz-top-nav-bar-transparent',
  };

  const sizeClasses = {
    small: 'uz-top-nav-bar-small py-2',
    medium: 'uz-top-nav-bar-medium py-3',
    large: 'uz-top-nav-bar-large py-4',
  };

  const stickyClass = sticky ? 'uz-top-nav-bar-sticky sticky top-0 z-50' : '';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${stickyClass} ${className}`}
      style={style}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="uz-top-nav-bar-logo flex-shrink-0">
            {logo}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {children}
          </div>

          {/* Actions */}
          {actions && (
            <div className="hidden md:flex items-center ml-4">
              {actions}
            </div>
          )}

          {/* Mobile Menu Button */}
          {mobileMenu && (
            <div className="md:hidden">
              <button
                type="button"
                className="uz-top-nav-bar-mobile-toggle inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="uz-top-nav-bar-mobile-menu pt-2 pb-3 space-y-1">
              {children}
            </div>
            {actions && (
              <div className="uz-top-nav-bar-mobile-actions pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                {actions}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export interface TopNavItemProps {
  /**
   * The content of the navigation item
   */
  children: React.ReactNode;

  /**
   * Whether the item is currently active
   * @default false
   */
  active?: boolean;

  /**
   * Whether the item is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional icon to display before the item content
   */
  icon?: React.ReactNode;

  /**
   * Callback fired when the item is clicked
   */
  onClick?: () => void;

  /**
   * URL for the item if it's a link
   */
  href?: string;

  /**
   * Additional CSS class names
   */
  className?: string;
}

export const TopNavItem: React.FC<TopNavItemProps> = ({
  children,
  active = false,
  disabled = false,
  icon,
  onClick,
  href,
  className = '',
}) => {
  const baseClasses = 'uz-top-nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium';
  const activeClass = active ? 'uz-top-nav-item-active' : '';
  const disabledClass = disabled ? 'uz-top-nav-item-disabled opacity-50 cursor-not-allowed' : '';

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {icon && <span className="uz-top-nav-item-icon mr-2">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${activeClass} ${className}`}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${activeClass} ${disabledClass} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
