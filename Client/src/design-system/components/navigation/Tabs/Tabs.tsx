import React, { useState, useEffect, createContext, useContext } from 'react';
import './Tabs.css';

export type TabsVariant = 'filled' | 'outlined' | 'underlined';
export type TabsSize = 'small' | 'medium' | 'large';
export type TabsAlignment = 'start' | 'center' | 'end' | 'stretch';
export type TabsOrientation = 'horizontal' | 'vertical';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: TabsVariant;
  size: TabsSize;
  orientation: TabsOrientation;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsProps {
  /**
   * The default active tab ID
   */
  defaultActiveTab?: string;

  /**
   * Callback fired when the active tab changes
   */
  onChange?: (tabId: string) => void;

  /**
   * The visual style variant of the tabs
   * @default 'filled'
   */
  variant?: TabsVariant;

  /**
   * The size of the tabs
   * @default 'medium'
   */
  size?: TabsSize;

  /**
   * The alignment of the tabs
   * @default 'start'
   */
  alignment?: TabsAlignment;

  /**
   * The orientation of the tabs
   * @default 'horizontal'
   */
  orientation?: TabsOrientation;

  /**
   * The tab list and tab panels
   */
  children: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultActiveTab,
  onChange,
  variant = 'filled',
  size = 'medium',
  alignment = 'start',
  orientation = 'horizontal',
  children,
  className = '',
}) => {
  // Find the first tab ID if no default is provided
  let firstTabId = '';

  try {
    // Find TabList component with aggressive type assertions
    const tabListArray = React.Children.toArray(children);
    for (const child of tabListArray) {
      if (React.isValidElement(child) && child.type === TabList) {
        // Force type assertion for TabList
        const tabListProps = child.props as TabListProps;

        // Get children of TabList
        if (tabListProps.children) {
          const tabChildren = React.Children.toArray(tabListProps.children);

          // Find first Tab component
          for (const tabChild of tabChildren) {
            if (React.isValidElement(tabChild) && tabChild.type === Tab) {
              // Force type assertion for Tab
              const tabProps = tabChild.props as TabProps;

              if (tabProps.id && typeof tabProps.id === 'string') {
                firstTabId = tabProps.id;
                break;
              }
            }
          }
        }

        break;
      }
    }
  } catch (error) {
    console.error('Error finding first tab ID:', error);
  }

  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || firstTabId
  );

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  const baseClasses = 'uz-tabs';
  const orientationClass = `uz-tabs-${orientation}`;

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab: handleTabChange,
        variant,
        size,
        orientation,
      }}
    >
      <div className={`${baseClasses} ${orientationClass} ${className}`}>
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return null;

          if (child.type === TabList) {
            // Aggressively type assert the child element and its props
            const tabListElement = child as React.ReactElement<TabListProps>;
            const existingProps = tabListElement.props as TabListProps;

            // Create a completely new props object with explicit typing
            const newProps: TabListProps = {
              children: existingProps.children,
              alignment: alignment,
              className: existingProps.className || '',
            };

            // Use the typed element and props for cloning
            return React.cloneElement(tabListElement, newProps);
          }

          return child;
        })}
      </div>
    </TabsContext.Provider>
  );
};

export interface TabListProps {
  /**
   * The tabs to display
   */
  children: React.ReactNode;

  /**
   * The alignment of the tabs
   * @default 'start'
   */
  alignment?: TabsAlignment;

  /**
   * Additional CSS class names
   */
  className?: string;
}

export const TabList: React.FC<TabListProps> = ({
  children,
  alignment = 'start',
  className = '',
}) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('TabList must be used within a Tabs component');
  }

  const { orientation } = tabsContext;

  const baseClasses = 'uz-tab-list';
  const orientationClass = `uz-tab-list-${orientation}`;
  const alignmentClass = `uz-tab-list-${alignment}`;

  return (
    <div
      className={`${baseClasses} ${orientationClass} ${alignmentClass} ${className}`}
      role="tablist"
      aria-orientation={orientation}
    >
      {children}
    </div>
  );
};

export interface TabProps {
  /**
   * The unique ID of the tab
   */
  id: string;

  /**
   * The content of the tab
   */
  children: React.ReactNode;

  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional icon to display before the tab content
   */
  icon?: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  id,
  children,
  disabled = false,
  icon,
  className = '',
}) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('Tab must be used within a Tabs component');
  }

  const { activeTab, setActiveTab, variant, size } = tabsContext;
  const isActive = activeTab === id;

  const baseClasses = 'uz-tab';
  const variantClass = `uz-tab-${variant}`;
  const sizeClass = `uz-tab-${size}`;
  const activeClass = isActive ? 'uz-tab-active' : '';
  const disabledClass = disabled ? 'uz-tab-disabled' : '';

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) {
        setActiveTab(id);
      }
    }
  };

  return (
    <button
      type="button"
      role="tab"
      id={`tab-${id}`}
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${activeClass} ${disabledClass} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
    >
      {icon && <span className="uz-tab-icon">{icon}</span>}
      <span className="uz-tab-text">{children}</span>
    </button>
  );
};

export interface TabPanelsProps {
  /**
   * The tab panels to display
   */
  children: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;
}

export const TabPanels: React.FC<TabPanelsProps> = ({
  children,
  className = '',
}) => {
  const baseClasses = 'uz-tab-panels';

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export interface TabPanelProps {
  /**
   * The unique ID of the tab panel (should match the corresponding tab ID)
   */
  id: string;

  /**
   * The content of the tab panel
   */
  children: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  id,
  children,
  className = '',
}) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('TabPanel must be used within a Tabs component');
  }

  const { activeTab } = tabsContext;
  const isActive = activeTab === id;

  const baseClasses = 'uz-tab-panel';
  const activeClass = isActive ? 'uz-tab-panel-active' : 'uz-tab-panel-inactive';

  if (!isActive) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={`${baseClasses} ${activeClass} ${className}`}
      tabIndex={0}
    >
      {children}
    </div>
  );
};
