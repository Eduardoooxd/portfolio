'use client';

import { links } from '@/lib/data';
import { createContext, useContext, useState } from 'react';

interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

type SectionName = (typeof links)[number]['name'];

interface ActiveSectionContextType {
  activeSection: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActive] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActive,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
  }

  return context;
}
