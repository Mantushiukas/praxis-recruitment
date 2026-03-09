'use client';

import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components: PortableTextComponents = {
  block: {
    block: ({ value, children }) => {
      const style = (value as { style?: string }).style ?? 'normal';
      const className = 'mb-3 text-gray-700 leading-relaxed';
      if (style === 'h2') {
        return <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">{children}</h2>;
      }
      if (style === 'h3') {
        return <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{children}</h3>;
      }
      return <p className={className}>{children}</p>;
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

interface PortableTextRendererProps {
  value: PortableTextBlock[] | null | undefined;
  className?: string;
}

export const PortableTextRenderer = ({ value, className = '' }: PortableTextRendererProps) => {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
};
