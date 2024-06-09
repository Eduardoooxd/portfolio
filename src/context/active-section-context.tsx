'use client';

import { SectionName } from '@/lib/types';
import { createContext, useContext, useState } from 'react';

interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

interface ActiveSectionContextType {
  activeSection: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActive] = useState<SectionName>(null);
  // This state is used to prevent the active section from changing when the user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActive,
        timeOfLastClick,
        setTimeOfLastClick,
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
