'use client';

import { useSectionInView } from '@/lib/hooks';
import { SectionName } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion, Target, Transition } from 'framer-motion';

interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: SectionName;
  className?: string;
  useInViewThreshold?: number;
  singlePage?: boolean; // Fixes and section on header as always being active
  initial?: Target;
  animate?: Target;
  transition?: Transition;
}

const defaultThreshold = 0.75;
const defaultInitial = { opacity: 0, y: 150 };
const defaultAnimate = { opacity: 1, y: 0 };
const defaultTransition = { delay: 0.225 };

export default function SectionContainer({
  children,
  sectionName,
  className,
  useInViewThreshold = defaultThreshold,
  singlePage = false,
  initial = defaultInitial,
  animate = defaultAnimate,
  transition = defaultTransition,
  ...props
}: SectionContainerProps) {
  const { ref } = useSectionInView({
    sectionName,
    useInViewThreshold,
    singlePage,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      className={cn('max-w-3xl scroll-mt-8 text-center leading-8 sm:scroll-mt-28', className)}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.section>
  );
}
