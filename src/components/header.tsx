'use client';
import { useScreenSize } from '@/lib/hooks';
import { AnimatePresence } from 'framer-motion';
import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

export default function Header() {
  const screenSize = useScreenSize();

  if (!screenSize?.width) {
    return null;
  }

  return (
    <AnimatePresence>
      {screenSize.width > 640 ? <DesktopHeader /> : <MobileHeader />}
    </AnimatePresence>
  );
}
