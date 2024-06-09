import { useActiveSectionContext } from '@/context/active-section-context';
import { ScreenSize } from '@/domain/screen-size';
import { useEffect, useState } from 'react';
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

export function useScreenSize() {
  const [windowSize, setWindowSize] = useState<ScreenSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
