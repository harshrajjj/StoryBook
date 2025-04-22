import React from 'react';
import './Tooltip.css';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipVariant = 'light' | 'dark' | 'primary';
export type TooltipSize = 'small' | 'medium' | 'large';

export interface TooltipProps {
  /**
   * The content to display in the tooltip
   */
  content: React.ReactNode;

  /**
   * The element that triggers the tooltip
   */
  children: React.ReactElement;

  /**
   * The placement of the tooltip relative to the trigger element
   * @default 'top'
   */
  placement?: TooltipPlacement;

  /**
   * The visual style variant of the tooltip
   * @default 'dark'
   */
  variant?: TooltipVariant;

  /**
   * The size of the tooltip
   * @default 'medium'
   */
  size?: TooltipSize;

  /**
   * Delay in milliseconds before showing the tooltip
   * @default 300
   */
  showDelay?: number;

  /**
   * Delay in milliseconds before hiding the tooltip
   * @default 200
   */
  hideDelay?: number;

  /**
   * Whether the tooltip is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Maximum width of the tooltip in pixels
   * @default 250
   */
  maxWidth?: number;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Whether to show an arrow pointing to the trigger element
   * @default true
   */
  arrow?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  variant = 'dark',
  size = 'medium',
  disabled = false,
  arrow = true,
}) => {
  if (disabled) {
    return children;
  }

  // Convert content to string
  const tooltipText = typeof content === 'string' ? content : 'Rich Content Tooltip';

  // Create a wrapper with data attributes for CSS styling
  return (
    <div
      className="tooltip-container"
      data-tooltip={tooltipText}
      data-tooltip-position={placement}
      data-tooltip-variant={variant}
      data-tooltip-size={size}
      data-tooltip-arrow={arrow ? 'true' : 'false'}
    >
      {children}
    </div>
  );
};
