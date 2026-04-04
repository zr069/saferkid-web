"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2017",
    text: "Erste Studien zeigen genotoxisches Potenzial",
  },
  {
    year: "2019",
    text: "EFSA leitet Neubewertung ein",
  },
  {
    year: "Mai 2021",
    text: "EFSA: Sicherheit kann nicht mehr gewährleistet werden",
  },
  {
    year: "August 2022",
    text: "EU-weites Verbot tritt in Kraft",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-4">
            Zwischen Studie und Verbot vergehen Jahre.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Das Beispiel Titandioxid (E171) zeigt das Problem.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-border"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-10">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.4 + i * 0.2,
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1] as const,
                }}
                className="relative flex gap-5 sm:gap-6 items-start"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full bg-white border-2 border-teal flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                </div>

                {/* Content */}
                <div className="pt-0.5 sm:pt-1">
                  <span className="text-teal text-sm font-semibold">
                    {item.year}
                  </span>
                  <p className="text-foreground text-base mt-1">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <div className="bg-white border border-border rounded-2xl px-6 py-5 text-center shadow-sm">
            <p className="text-foreground font-medium">
              5 Jahre. In denen Kinder das t&auml;glich konsumierten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
