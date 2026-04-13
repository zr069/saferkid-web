"use client";

import { motion } from "framer-motion";
import ScanDemo from "./ScanDemo";

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
});

export default function Hero() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-7">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="text-teal text-xs font-medium uppercase tracking-[0.2em]"
          >
            KI-Inhaltsstoff-Scanner
          </motion.span>

          <motion.h1
            variants={fadeUp(1)}
            initial="hidden"
            animate="visible"
            className="font-serif text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.1] tracking-tight text-foreground"
          >
            Wei&szlig;t du wirklich was in den Produkten steckt die du deinem Kind gibst?
          </motion.h1>

          <motion.p
            variants={fadeUp(2)}
            initial="hidden"
            animate="visible"
            className="text-lg text-muted max-w-lg leading-relaxed"
          >
            Zwischen Studienlage und EU-Verbot liegen Jahre. SaferKid scannt und warnt &ndash; in Sekunden.
          </motion.p>

          <motion.div
            variants={fadeUp(3)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 pt-1"
          >
            <a
              href="https://apps.apple.com/de/app/saferkid/id6761647657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-medium rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-200 text-sm"
            >
              Kostenlos laden
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-background-alt hover:scale-[1.02] transition-all duration-200 text-sm"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </div>

        {/* Scan Demo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="relative flex justify-center lg:justify-end"
        >
          <ScanDemo />
        </motion.div>
      </div>
    </section>
  );
}
