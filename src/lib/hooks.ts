import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

interface SectionInViewProps {
  sectionName: SectionName;
  useInViewThreshold?: number;
  triggerOnce?: boolean;
}

export function useSectionInView({
  sectionName,
  useInViewThreshold = 0.75,
  triggerOnce = false,
}: SectionInViewProps) {
  const { setActive, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: useInViewThreshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, setActive, timeOfLastClick, sectionName]);

  return { ref, inView };
}
