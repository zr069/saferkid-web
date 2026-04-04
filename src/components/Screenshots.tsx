"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const screenshots = [
  { src: "/screenshots/screenshot_1.png", alt: "SaferKid App Screenshot 1" },
  { src: "/screenshots/screenshot_2.png", alt: "SaferKid App Screenshot 2" },
  { src: "/screenshots/screenshot_3.png", alt: "SaferKid App Screenshot 3" },
  { src: "/screenshots/screenshot_4.png", alt: "SaferKid App Screenshot 4" },
  { src: "/screenshots/screenshot_5.png", alt: "SaferKid App Screenshot 5" },
  { src: "/screenshots/screenshot_6.png", alt: "SaferKid App Screenshot 6" },
];

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[240px]">
      <div className="relative aspect-[393/852] w-full">
        <div className="absolute inset-0 rounded-[2.4rem] bg-[#1a1a1a] shadow-lg shadow-black/5" />
        <div className="absolute inset-[2.5px] rounded-[2.3rem] bg-black overflow-hidden">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[80px] h-[26px] bg-black rounded-full z-20" />
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
      </div>
    </div>
  );
}

export default function Screenshots() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 sm:py-32 bg-background-alt overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-4">
            Die App im &Uuml;berblick
          </h2>
          <p className="text-muted text-lg">
            Swipe um mehr zu sehen.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 px-6 sm:px-12 overflow-x-auto scrollbar-none pb-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Leading spacer for centering */}
          <div className="flex-shrink-0 w-0 sm:w-[calc((100vw-1152px)/2)]" />

          {screenshots.map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
              className="snap-center"
            >
              <PhoneMockup src={s.src} alt={s.alt} />
            </motion.div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-6 sm:w-[calc((100vw-1152px)/2)]" />
        </div>
      </motion.div>
    </section>
  );
}
