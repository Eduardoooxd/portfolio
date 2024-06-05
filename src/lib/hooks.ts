import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

interface SectionInViewProps {
  sectionName: SectionName;
  useInViewThreshold: number;
}

export function useSectionInView({ sectionName, useInViewThreshold }: SectionInViewProps) {
  const { setActive, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: useInViewThreshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, setActive, timeOfLastClick, sectionName]);

  return { ref };
}
