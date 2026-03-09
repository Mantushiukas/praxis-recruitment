'use client';

import { usePathname } from 'next/navigation';
import { ClientLayout } from './ClientLayout';

export const LayoutSwitcher = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio') ?? false;

  if (isStudio) {
    return <>{children}</>;
  }

  return <ClientLayout>{children}</ClientLayout>;
};
