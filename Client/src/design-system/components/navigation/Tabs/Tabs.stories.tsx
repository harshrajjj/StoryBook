import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'underlined'],
      description: 'The visual style variant of the tabs',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'The alignment of the tabs',
      table: {
        defaultValue: { summary: 'start' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the tabs',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    defaultActiveTab: {
      control: 'text',
      description: 'The default selected tab ID (for uncontrolled mode)',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the selected tab changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    children: {
      description: 'The tab list and tab panels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [, setActiveTab] = useState('tab1');

    return (
      <Tabs defaultActiveTab="tab1" onChange={(id) => setActiveTab(id)}>
        <TabList>
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
          <Tab id="tab3">Tab 3</Tab>
        </TabList>

        <TabPanel id="tab1">
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
            <h3 className="text-lg font-medium mb-2">Tab 1 Content</h3>
            <p>This is the content for Tab 1.</p>
          </div>
        </TabPanel>

        <TabPanel id="tab2">
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
            <h3 className="text-lg font-medium mb-2">Tab 2 Content</h3>
            <p>This is the content for Tab 2.</p>
          </div>
        </TabPanel>

        <TabPanel id="tab3">
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
            <h3 className="text-lg font-medium mb-2">Tab 3 Content</h3>
            <p>This is the content for Tab 3.</p>
          </div>
        </TabPanel>
      </Tabs>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Filled Variant</h3>
        <Tabs defaultActiveTab="tab1" variant="filled">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Outlined Variant</h3>
        <Tabs defaultActiveTab="tab1" variant="outlined">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Underlined Variant</h3>
        <Tabs defaultActiveTab="tab1" variant="underlined">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  ),
};

export const Orientations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Horizontal Orientation</h3>
        <Tabs defaultActiveTab="tab1" orientation="horizontal">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Vertical Orientation</h3>
        <Tabs defaultActiveTab="tab1" orientation="vertical">
          <div className="flex">
            <TabList>
              <Tab id="tab1">Tab 1</Tab>
              <Tab id="tab2">Tab 2</Tab>
              <Tab id="tab3">Tab 3</Tab>
            </TabList>

            <div className="flex-1 ml-4">
              <TabPanel id="tab1">
                <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  <p>Content for Tab 1</p>
                </div>
              </TabPanel>

              <TabPanel id="tab2">
                <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  <p>Content for Tab 2</p>
                </div>
              </TabPanel>

              <TabPanel id="tab3">
                <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  <p>Content for Tab 3</p>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Small Size</h3>
        <Tabs defaultActiveTab="tab1" size="small">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Medium Size</h3>
        <Tabs defaultActiveTab="tab1" size="medium">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Large Size</h3>
        <Tabs defaultActiveTab="tab1" size="large">
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>

          <TabPanel id="tab1">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 1</p>
            </div>
          </TabPanel>

          <TabPanel id="tab2">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 2</p>
            </div>
          </TabPanel>

          <TabPanel id="tab3">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
              <p>Content for Tab 3</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  ),
};

export const WithDisabledTabs: Story = {
  render: () => (
    <Tabs defaultActiveTab="tab1">
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3" disabled>Disabled Tab</Tab>
        <Tab id="tab4">Tab 4</Tab>
      </TabList>

      <TabPanel id="tab1">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Content for Tab 1</p>
        </div>
      </TabPanel>

      <TabPanel id="tab2">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Content for Tab 2</p>
        </div>
      </TabPanel>

      <TabPanel id="tab3">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Content for Tab 3 (Disabled)</p>
        </div>
      </TabPanel>

      <TabPanel id="tab4">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Content for Tab 4</p>
        </div>
      </TabPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultActiveTab="tab1">
      <TabList>
        <Tab id="tab1">
          <span className="flex items-center">
            <span className="mr-2">🏠</span>
            Home
          </span>
        </Tab>
        <Tab id="tab2">
          <span className="flex items-center">
            <span className="mr-2">📊</span>
            Dashboard
          </span>
        </Tab>
        <Tab id="tab3">
          <span className="flex items-center">
            <span className="mr-2">⚙️</span>
            Settings
          </span>
        </Tab>
      </TabList>

      <TabPanel id="tab1">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Home content</p>
        </div>
      </TabPanel>

      <TabPanel id="tab2">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Dashboard content</p>
        </div>
      </TabPanel>

      <TabPanel id="tab3">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md mt-4">
          <p>Settings content</p>
        </div>
      </TabPanel>
    </Tabs>
  ),
};
