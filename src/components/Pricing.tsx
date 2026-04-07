"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "f\u00fcr immer",
    description: "Perfekt zum Ausprobieren.",
    features: [
      "3 Scans pro Monat",
      "Basis-Inhaltsstoffanalyse",
      "Ampel-Bewertung",
    ],
    badge: null,
    highlighted: false,
  },
  {
    name: "Pro Monatlich",
    price: "2,99",
    period: "pro Monat",
    description: "F\u00fcr Eltern, die auf Nummer sicher gehen.",
    features: [
      "Unbegrenzte Scans",
      "Detaillierte Studien & Quellen",
      "Produktbibliothek",
      "Vergleichs-Ranking",
      "Alle Altersgruppen",
      "Werbefrei",
      "Priorit\u00e4ts-Support",
    ],
    badge: null,
    highlighted: false,
  },
  {
    name: "Pro Jahresabo",
    price: "19,99",
    period: "pro Jahr",
    description: "Spare 44\u00a0% gegen\u00fcber monatlich.",
    features: [
      "Unbegrenzte Scans",
      "Detaillierte Studien & Quellen",
      "Produktbibliothek",
      "Vergleichs-Ranking",
      "Alle Altersgruppen",
      "Werbefrei",
      "Priorit\u00e4ts-Support",
    ],
    badge: "Bestes Preis-Leistungs-Verh\u00e4ltnis",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "99,99",
    period: "einmalig",
    description: "Einmal zahlen, f\u00fcr immer nutzen.",
    features: [
      "Alle Pro-Features",
      "Lebenslanger Zugang",
      "Alle zuk\u00fcnftigen Updates",
      "Early Access f\u00fcr neue Features",
    ],
    badge: null,
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-4">
            Einfache, faire Preise
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Starte kostenlos. Upgrade wenn du m&ouml;chtest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-teal bg-white shadow-sm"
                  : "border border-border bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-teal text-white text-xs font-semibold px-3.5 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-base font-semibold mb-0.5">{plan.name}</h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}&euro;
                  </span>
                  <span className="text-muted text-sm">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.highlighted ? "#1D9E75" : "#9ca3af"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-200 text-center block bg-foreground text-white hover:scale-[1.02] hover:shadow-md"
              >
                App laden
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
