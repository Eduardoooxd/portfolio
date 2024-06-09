'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './shared/button';

export default function MobileHeader() {
  const { activeSection, setActive, setTimeOfLastClick } = useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }
    return () => {
      html.style.overflow = '';
    };
  }, [isOpen]);

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <header className="z-[100]" data-testid="mobile-menu-container">
      <div className="fixed right-2 top-2 z-[110]">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.5 } }} // Delay the exit to match the menu closing
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(false)}
                data-testid="close-mobile-menu-button"
              >
                <X />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }} // Delay the exit to match the menu opening
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(true)}
                data-testid="open-mobile-menu-button"
              >
                <Menu />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 h-screen w-full origin-top bg-background"
            data-testid="mobile-menu-expanded"
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
              },
            }}
            exit={{
              scaleY: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <nav className="flex h-full flex-col">
              <motion.ul
                className="flex h-full flex-col items-center justify-center gap-6 text-gray-500"
                data-testid="mobile-menu-expanded-options-container"
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {links.map(({ name, hash, href }) => (
                  <div key={hash} className="overflow-hidden">
                    <motion.li
                      key={hash}
                      className="relative flex items-center justify-center"
                      variants={mobileLinkVars}
                    >
                      <Link
                        href={href}
                        className={cn(
                          'flex w-full items-center justify-center px-3 py-2 text-3xl capitalize transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200',
                          activeSection === name && 'text-gray-950 dark:text-gray-200',
                        )}
                        onClick={() => {
                          setActive(name);
                          setTimeOfLastClick(Date.now());
                          setIsOpen(false);
                        }}
                      >
                        {name}
                        {activeSection === name ? (
                          <motion.span
                            className="absolute inset-0 -z-10 rounded-lg bg-gray-100 px-2 py-1 dark:bg-gray-800"
                            layoutId="activeSection"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          ></motion.span>
                        ) : null}
                      </Link>
                    </motion.li>
                  </div>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
