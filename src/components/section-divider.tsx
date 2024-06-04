'use client';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-[2px] rounded-full bg-gray-200 sm:block"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
      }}
    ></motion.div>
  );
}
