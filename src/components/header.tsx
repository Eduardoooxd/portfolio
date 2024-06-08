'use client';
import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const { activeSection, setActive, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="background-blur-[0.5rem] fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-85 shadow-lg shadow-black/[0.03] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-14 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 flex w-3/4 -translate-x-1/2 items-center py-2 sm:top-6 sm:h-14 sm:w-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center text-sm text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map(({ name, hash, href }) => (
            <motion.li
              key={hash}
              className="relative flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={href}
                className={cn(
                  'dark:hover:text-300 flex w-full items-center justify-center px-3 py-1 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 sm:py-2',
                  activeSection === name && 'text-gray-950 dark:text-gray-200',
                )}
                onClick={() => {
                  setActive(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {activeSection === name ? (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  ></motion.span>
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
