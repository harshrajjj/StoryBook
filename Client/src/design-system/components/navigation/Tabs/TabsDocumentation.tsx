import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabsVariant,
  TabsSize,
  TabsAlignment,
  TabsOrientation
} from './Tabs';

export const TabsDocumentation: React.FC = () => {
  const [, setActiveTab] = useState('tab1');
  const variants: TabsVariant[] = ['filled', 'outlined', 'underlined'];
  const sizes: TabsSize[] = ['small', 'medium', 'large'];
  const alignments: TabsAlignment[] = ['start', 'center', 'end', 'stretch'];
  const orientations: TabsOrientation[] = ['horizontal', 'vertical'];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tabs Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Tabs organize content into multiple sections and allow users to navigate between them.
          They're useful for switching between views, data sets, or functional aspects of an application.
        </p>
        <div className="mt-8 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
          <Tabs defaultActiveTab="tab1" onChange={handleTabChange}>
            <TabList>
              <Tab id="tab1">First Tab</Tab>
              <Tab id="tab2">Second Tab</Tab>
              <Tab id="tab3">Third Tab</Tab>
            </TabList>
            <TabPanels>
              <TabPanel id="tab1">
                <h3 className="text-lg font-medium mb-2">First Tab Content</h3>
                <p>This is the content for the first tab.</p>
              </TabPanel>
              <TabPanel id="tab2">
                <h3 className="text-lg font-medium mb-2">Second Tab Content</h3>
                <p>This is the content for the second tab.</p>
              </TabPanel>
              <TabPanel id="tab3">
                <h3 className="text-lg font-medium mb-2">Third Tab Content</h3>
                <p>This is the content for the third tab.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="mb-4">
          Tabs come in three visual variants: filled, outlined, and underlined.
        </p>
        <div className="space-y-12 mt-8">
          {variants.map(variant => (
            <div key={variant} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 capitalize">{variant}</h3>
              <Tabs variant={variant}>
                <TabList>
                  <Tab id={`${variant}-tab1`}>First Tab</Tab>
                  <Tab id={`${variant}-tab2`}>Second Tab</Tab>
                  <Tab id={`${variant}-tab3`}>Third Tab</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel id={`${variant}-tab1`}>
                    <p>This is the content for the first tab in the {variant} variant.</p>
                  </TabPanel>
                  <TabPanel id={`${variant}-tab2`}>
                    <p>This is the content for the second tab in the {variant} variant.</p>
                  </TabPanel>
                  <TabPanel id={`${variant}-tab3`}>
                    <p>This is the content for the third tab in the {variant} variant.</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="mb-4">
          Tabs are available in three sizes: small, medium, and large.
        </p>
        <div className="space-y-12 mt-8">
          {sizes.map(size => (
            <div key={size} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 capitalize">{size}</h3>
              <Tabs size={size}>
                <TabList>
                  <Tab id={`${size}-tab1`}>First Tab</Tab>
                  <Tab id={`${size}-tab2`}>Second Tab</Tab>
                  <Tab id={`${size}-tab3`}>Third Tab</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel id={`${size}-tab1`}>
                    <p>This is the content for the first tab in the {size} size.</p>
                  </TabPanel>
                  <TabPanel id={`${size}-tab2`}>
                    <p>This is the content for the second tab in the {size} size.</p>
                  </TabPanel>
                  <TabPanel id={`${size}-tab3`}>
                    <p>This is the content for the third tab in the {size} size.</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Alignments</h2>
        <p className="mb-4">
          Tabs can be aligned in four different ways: start, center, end, and stretch.
        </p>
        <div className="space-y-12 mt-8">
          {alignments.map(alignment => (
            <div key={alignment} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 capitalize">{alignment}</h3>
              <Tabs alignment={alignment}>
                <TabList>
                  <Tab id={`${alignment}-tab1`}>First Tab</Tab>
                  <Tab id={`${alignment}-tab2`}>Second Tab</Tab>
                  <Tab id={`${alignment}-tab3`}>Third Tab</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel id={`${alignment}-tab1`}>
                    <p>This is the content for the first tab with {alignment} alignment.</p>
                  </TabPanel>
                  <TabPanel id={`${alignment}-tab2`}>
                    <p>This is the content for the second tab with {alignment} alignment.</p>
                  </TabPanel>
                  <TabPanel id={`${alignment}-tab3`}>
                    <p>This is the content for the third tab with {alignment} alignment.</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Orientations</h2>
        <p className="mb-4">
          Tabs can be displayed in two orientations: horizontal and vertical.
        </p>
        <div className="space-y-12 mt-8">
          {orientations.map(orientation => (
            <div key={orientation} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 capitalize">{orientation}</h3>
              <Tabs orientation={orientation}>
                <TabList>
                  <Tab id={`${orientation}-tab1`}>First Tab</Tab>
                  <Tab id={`${orientation}-tab2`}>Second Tab</Tab>
                  <Tab id={`${orientation}-tab3`}>Third Tab</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel id={`${orientation}-tab1`}>
                    <p>This is the content for the first tab in {orientation} orientation.</p>
                  </TabPanel>
                  <TabPanel id={`${orientation}-tab2`}>
                    <p>This is the content for the second tab in {orientation} orientation.</p>
                  </TabPanel>
                  <TabPanel id={`${orientation}-tab3`}>
                    <p>This is the content for the third tab in {orientation} orientation.</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="mb-4">
          Tabs can include icons for better visual recognition.
        </p>
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 mt-8">
          <Tabs>
            <TabList>
              <Tab
                id="icon-tab1"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                }
              >
                Home
              </Tab>
              <Tab
                id="icon-tab2"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                }
              >
                Info
              </Tab>
              <Tab
                id="icon-tab3"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                }
              >
                Help
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel id="icon-tab1">
                <h3 className="text-lg font-medium mb-2">Home</h3>
                <p>This is the home tab content.</p>
              </TabPanel>
              <TabPanel id="icon-tab2">
                <h3 className="text-lg font-medium mb-2">Info</h3>
                <p>This is the info tab content.</p>
              </TabPanel>
              <TabPanel id="icon-tab3">
                <h3 className="text-lg font-medium mb-2">Help</h3>
                <p>This is the help tab content.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="mb-4">
          Tabs can be in different states, such as active or disabled.
        </p>
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 mt-8">
          <Tabs>
            <TabList>
              <Tab id="state-tab1">Active</Tab>
              <Tab id="state-tab2">Normal</Tab>
              <Tab id="state-tab3" disabled>Disabled</Tab>
            </TabList>
            <TabPanels>
              <TabPanel id="state-tab1">
                <p>This is the content for the active tab.</p>
              </TabPanel>
              <TabPanel id="state-tab2">
                <p>This is the content for the normal tab.</p>
              </TabPanel>
              <TabPanel id="state-tab3">
                <p>This is the content for the disabled tab.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Accessibility Considerations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tabs use the WAI-ARIA Tabs pattern with appropriate roles and attributes</li>
            <li>Keyboard navigation is fully supported (Tab, Arrow keys, Home, End)</li>
            <li>Focus states are clearly visible</li>
            <li>Active tabs are visually distinct and programmatically indicated</li>
            <li>Disabled tabs have appropriate styling and behavior</li>
            <li>Tab panels are associated with their respective tabs</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-success-600 dark:text-success-400">Do's</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use tabs to organize content into logical sections</li>
              <li>Keep tab labels short and descriptive</li>
              <li>Use icons to enhance recognition when appropriate</li>
              <li>Ensure tab content is related but distinct</li>
              <li>Maintain consistent tab ordering</li>
              <li>Use the appropriate variant for your design context</li>
            </ul>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-error-600 dark:text-error-400">Don'ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don't use tabs for sequential content or steps</li>
              <li>Don't use too many tabs (consider dropdown menus for many options)</li>
              <li>Don't use tabs for content that needs to be compared side by side</li>
              <li>Don't nest tabs within tabs (creates confusion)</li>
              <li>Don't use tabs for primary navigation (use nav bars instead)</li>
              <li>Don't change tab order or content dynamically</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto">
          <h3 className="text-xl font-medium mb-4">Tabs Props</h3>
          <table className="min-w-full border-collapse mb-8">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Prop</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Type</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Default</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">defaultActiveTab</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">First tab ID</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The default active tab ID</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">onChange</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">{'(tabId: string) => void'}</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Callback fired when the active tab changes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">variant</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'filled' | 'outlined' | 'underlined'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'filled'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The visual style variant of the tabs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">size</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'small' | 'medium' | 'large'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'medium'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The size of the tabs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">alignment</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'start' | 'center' | 'end' | 'stretch'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'start'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The alignment of the tabs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">orientation</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'horizontal' | 'vertical'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'horizontal'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The orientation of the tabs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The tab list and tab panels</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-medium mb-4">Tab Props</h3>
          <table className="min-w-full border-collapse mb-8">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Prop</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Type</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Default</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">id</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The unique ID of the tab</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The content of the tab</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">disabled</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the tab is disabled</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">icon</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Optional icon to display before the tab content</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-medium mb-4">TabPanel Props</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Prop</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Type</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Default</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">id</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The unique ID of the tab panel (should match the corresponding tab ID)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The content of the tab panel</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
