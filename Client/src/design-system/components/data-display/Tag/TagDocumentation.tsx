import React, { useState } from 'react';
import { Tag, TagVariant, TagSize, TagColor } from './Tag';

export const TagDocumentation: React.FC = () => {
  const [tags, setTags] = useState(['React', 'TypeScript', 'TailwindCSS', 'Design System']);

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const variants: TagVariant[] = ['filled', 'outlined', 'subtle'];
  const sizes: TagSize[] = ['small', 'medium', 'large'];
  const colors: TagColor[] = ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral'];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tag Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Tags are used to label, categorize, or organize items using keywords that describe them.
          They can also be used to show status or highlight important information.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              removable
              onRemove={() => handleRemoveTag(index)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="mb-4">
          Tags come in three visual variants: filled, outlined, and subtle.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {variants.map(variant => (
            <div key={variant} className="mb-6">
              <h3 className="text-lg font-medium mb-2 capitalize">{variant}</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <Tag key={`${variant}-${color}`} variant={variant} color={color}>
                    {color}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="mb-4">
          Tags are available in three sizes: small, medium, and large.
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          {sizes.map(size => (
            <Tag key={size} size={size}>
              {size}
            </Tag>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="mb-4">
          Tags can include icons to provide additional visual context.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Tag
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
            }
            color="success"
          >
            Completed
          </Tag>
          <Tag
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            }
            color="warning"
          >
            Pending
          </Tag>
          <Tag
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
              </svg>
            }
            color="error"
          >
            Failed
          </Tag>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Removable Tags</h2>
        <p className="mb-4">
          Tags can be made removable by adding the removable prop and an onRemove handler.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Tag removable onRemove={() => console.log('Tag removed')}>
            Removable
          </Tag>
          <Tag removable disabled onRemove={() => console.log('Tag removed')}>
            Disabled
          </Tag>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="mb-4">
          Tags can be in different states, such as disabled.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Normal</h3>
            <Tag>Normal</Tag>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Disabled</h3>
            <Tag disabled>Disabled</Tag>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Accessibility Considerations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tags use sufficient color contrast ratios to ensure readability</li>
            <li>Removable tags have clear focus indicators and can be operated via keyboard</li>
            <li>Remove buttons have appropriate aria-labels for screen readers</li>
            <li>Disabled tags have visual indicators and are not interactive</li>
            <li>Tags maintain their functionality and appearance across different screen sizes</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-success-600 dark:text-success-400">Do's</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use tags to categorize or label content</li>
              <li>Keep tag text concise and descriptive</li>
              <li>Use appropriate colors to convey meaning</li>
              <li>Use removable tags when users need to filter or customize their view</li>
              <li>Ensure sufficient spacing between multiple tags</li>
            </ul>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-error-600 dark:text-error-400">Don'ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don't use tags for primary actions (use buttons instead)</li>
              <li>Don't use long text in tags as they may truncate or wrap</li>
              <li>Don't use too many tags in a single area as it creates visual clutter</li>
              <li>Don't rely solely on color to convey meaning (use icons or text)</li>
              <li>Don't use tags when a dropdown or select would be more appropriate</li>
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
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The content of the tag</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">variant</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'filled' | 'outlined' | 'subtle'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'filled'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The visual style variant of the tag</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">size</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'small' | 'medium' | 'large'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'medium'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The size of the tag</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">color</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'primary'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The color scheme of the tag</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">icon</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Optional icon to display before the tag content</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">removable</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the tag is removable</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">onRemove</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">{'() => void'}</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Callback fired when the remove button is clicked</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">disabled</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the tag is disabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
