import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  dataTestId: string;
}

export default function SectionHeading({ children, dataTestId }: SectionHeadingProps) {
  return (
    <h2 className="my-8 text-center text-3xl font-medium capitalize" data-testid={dataTestId}>
      {children}
    </h2>
  );
}
