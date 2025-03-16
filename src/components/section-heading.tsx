import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  dataTestId: string;
  className?: string;
}

export default function SectionHeading({ children, className, dataTestId }: SectionHeadingProps) {
  return (
    <h2
      className={cn('my-8 text-center text-3xl font-medium capitalize', className)}
      data-testid={dataTestId}
    >
      {children}
    </h2>
  );
}
