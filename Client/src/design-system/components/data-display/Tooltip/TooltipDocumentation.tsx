import React from 'react';
import { Tooltip, TooltipPlacement, TooltipVariant, TooltipSize } from './Tooltip';

export const TooltipDocumentation: React.FC = () => {
  const placements: TooltipPlacement[] = ['top', 'right', 'bottom', 'left'];
  const variants: TooltipVariant[] = ['light', 'dark', 'primary'];
  const sizes: TooltipSize[] = ['small', 'medium', 'large'];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tooltip Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Tooltips display informative text when users hover over, focus on, or tap an element.
          They are useful for providing additional context or explanations for UI elements.
        </p>
        <div className="flex justify-center mt-8">
          <Tooltip content="This is a tooltip">
            <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
              Hover me
            </button>
          </Tooltip>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Placements</h2>
        <p className="mb-4">
          Tooltips can be positioned in four different directions relative to the trigger element.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {placements.map(placement => (
            <div key={placement} className="text-center">
              <Tooltip
                content={`${placement} tooltip`}
                placement={placement}
                variant="primary"
              >
                <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
                  {placement}
                </button>
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="mb-4">
          Tooltips come in three visual variants: light, dark, and primary.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {variants.map(variant => (
            <div key={variant} className="text-center">
              <Tooltip
                content={`${variant} variant`}
                variant={variant}
              >
                <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-bold border-2 border-black">
                  {variant}
                </button>
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="mb-4">
          Tooltips are available in three sizes: small, medium, and large.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {sizes.map(size => (
            <div key={size} className="text-center">
              <Tooltip
                content={`${size} size tooltip`}
                size={size}
                variant="primary"
              >
                <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-bold border-2 border-black">
                  {size}
                </button>
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Rich Content</h2>
        <p className="mb-4">
          Tooltips can contain rich content, not just text.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div>
            <Tooltip
              content="Product Features: Interactive UI, Real-time Updates, Mobile Responsive"
              variant="light"
              size="large"
            >
              <button type="button" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-bold border-2 border-black">
                Product Features
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              content="Price: $99.99 - Premium Plan Includes: Cloud Storage, 24/7 Support, Advanced Analytics"
              variant="primary"
              size="large"
            >
              <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-bold border-2 border-black">
                Pricing Details
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              content="Warning: This action cannot be undone. All associated data will be permanently deleted."
              variant="dark"
              size="large"
            >
              <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
                Delete Action
              </button>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With and Without Arrow</h2>
        <p className="mb-4">
          Tooltips can be displayed with or without the pointing arrow.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div>
            <Tooltip
              content="This tooltip has an arrow"
              arrow={true}
              variant="primary"
            >
              <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-bold border-2 border-black">
                With Arrow
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              content="This tooltip has no arrow"
              arrow={false}
              variant="primary"
            >
              <button type="button" className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors font-bold border-2 border-black">
              No Arrow
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              content="Clean design without arrow"
              arrow={false}
              variant="light"
            >
              <button type="button" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-bold border-2 border-black">
                Clean Style
              </button>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Accessibility Considerations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tooltips are accessible via keyboard focus as well as mouse hover</li>
            <li>Tooltips use the ARIA role="tooltip" for screen reader support</li>
            <li>Tooltips have sufficient color contrast for readability</li>
            <li>Tooltips appear on focus for keyboard users</li>
            <li>Tooltips have appropriate delays to prevent accidental triggering</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-success-600 dark:text-success-400">Do's</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use tooltips to provide additional information about UI elements</li>
              <li>Keep tooltip content concise and helpful</li>
              <li>Use tooltips for non-essential information</li>
              <li>Position tooltips close to their trigger elements</li>
              <li>Ensure tooltips don't obscure important content</li>
            </ul>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-error-600 dark:text-error-400">Don'ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don't use tooltips for essential information</li>
              <li>Don't use tooltips for complex interactions</li>
              <li>Don't use tooltips on disabled elements (they can't receive focus)</li>
              <li>Don't make tooltips too large or with too much content</li>
              <li>Don't use tooltips when a more persistent display is needed</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto">
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
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">content</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The content to display in the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactElement</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The element that triggers the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">placement</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'top' | 'right' | 'bottom' | 'left'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'top'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The placement of the tooltip relative to the trigger element</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">variant</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'light' | 'dark' | 'primary'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'dark'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The visual style variant of the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">size</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'small' | 'medium' | 'large'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'medium'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The size of the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">showDelay</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">number</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">300</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Delay in milliseconds before showing the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">hideDelay</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">number</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">200</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Delay in milliseconds before hiding the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">disabled</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the tooltip is disabled</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">maxWidth</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">number</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">250</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Maximum width of the tooltip in pixels</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">arrow</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">true</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether to show an arrow pointing to the trigger element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
