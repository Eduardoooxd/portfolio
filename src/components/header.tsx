"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] background-blur-[0.5rem] sm:top-6 sm:h-14 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="w-3/4 flex items-center fixed sm:h-14 left-1/2 -translate-x-1/2 py-2 sm:w-[initial] sm:top-6 sm:py-0">
        <ul className="flex flex-wrap items-center justify-center text-sm text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map(({ name, hash, href }) => (
            <motion.li
              key={hash}
              className="flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={href}
                className="px-3 py-1 sm:py-3 w-full flex items-center justify-center hover:text-gray-950 transition"
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
