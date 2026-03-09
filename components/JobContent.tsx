'use client';

import { PortableTextRenderer } from '@/components/PortableTextRenderer';
import type { PortableTextBlock } from '@portabletext/types';

interface JobContentProps {
  descriptionJson?: string | null;
  requirementsJson?: string | null;
  benefitsJson?: string | null;
}

export const JobContent = ({
  descriptionJson,
  requirementsJson,
  benefitsJson,
}: JobContentProps) => {
  const parseBlocks = (json: string | null | undefined): PortableTextBlock[] | null => {
    if (!json || typeof json !== 'string') return null;
    try {
      const parsed = JSON.parse(json) as unknown;
      return Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  };

  const description = parseBlocks(descriptionJson);
  const requirements = parseBlocks(requirementsJson);
  const benefits = parseBlocks(benefitsJson);

  return (
    <>
      {description && description.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About the role</h2>
          <PortableTextRenderer
            value={description}
            className="prose prose-gray max-w-none"
          />
        </section>
      )}
      {requirements && requirements.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
          <PortableTextRenderer
            value={requirements}
            className="prose prose-gray max-w-none"
          />
        </section>
      )}
      {benefits && benefits.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h2>
          <PortableTextRenderer
            value={benefits}
            className="prose prose-gray max-w-none"
          />
        </section>
      )}
    </>
  );
};
