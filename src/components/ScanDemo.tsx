"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PHASE_DURATIONS = [2000, 1500, 3000]; // ms per phase
const TOTAL_CYCLE = PHASE_DURATIONS.reduce((a, b) => a + b, 0);

const ingredients = [
  { name: "Aqua", status: "safe", label: "Unauff\u00e4llig" },
  { name: "Titanium Dioxide", status: "danger", label: "Auff\u00e4llig" },
  { name: "Parfum", status: "warn", label: "Pr\u00fcfen" },
  { name: "Glycerin", status: "safe", label: "Unauff\u00e4llig" },
  { name: "Phenoxyethanol", status: "warn", label: "Pr\u00fcfen" },
];

const statusColors = {
  safe: { bg: "bg-emerald-500/10", text: "text-emerald-600", dot: "bg-emerald-500" },
  warn: { bg: "bg-amber-500/10", text: "text-amber-600", dot: "bg-amber-500" },
  danger: { bg: "bg-red-500/10", text: "text-red-600", dot: "bg-red-500" },
};

const analyzeTexts = [
  "Inhaltsstoffe werden erkannt\u2026",
  "Studien werden abgeglichen\u2026",
];

export default function ScanDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const advance = () => {
      setPhase((p) => (p + 1) % 3);
    };

    timeout = setTimeout(advance, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Sub-state for analyze text cycling
  const [analyzeIdx, setAnalyzeIdx] = useState(0);
  useEffect(() => {
    if (phase !== 1) {
      setAnalyzeIdx(0);
      return;
    }
    const t = setTimeout(() => setAnalyzeIdx(1), 700);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="relative w-[280px] sm:w-[300px] mx-auto lg:mx-0">
      {/* iPhone frame */}
      <div className="relative aspect-[393/852] w-full">
        {/* Outer frame */}
        <div className="absolute inset-0 rounded-[3rem] bg-[#1a1a1a] shadow-2xl shadow-black/10" />

        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[2.85rem] bg-black overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-full z-30" />

          {/* Phase content */}
          <AnimatePresence mode="wait">
            {phase === 0 && <CameraPhase key="camera" />}
            {phase === 1 && (
              <AnalyzePhase key="analyze" textIdx={analyzeIdx} />
            )}
            {phase === 2 && <ResultPhase key="result" />}
          </AnimatePresence>
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[2px] top-[120px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-l" />
        <div className="absolute -left-[2px] top-[170px] w-[3px] h-[56px] bg-[#2a2a2a] rounded-l" />
        <div className="absolute -left-[2px] top-[235px] w-[3px] h-[56px] bg-[#2a2a2a] rounded-l" />
        <div className="absolute -right-[2px] top-[190px] w-[3px] h-[72px] bg-[#2a2a2a] rounded-r" />
      </div>
    </div>
  );
}

/* ───── Phase 1: Camera ───── */
function CameraPhase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-[#0c0c0c]"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/screenshots/screenshot_1.png"
          alt=""
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>

      {/* Scan beam */}
      <motion.div
        className="absolute left-4 right-4 h-[2px] z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #1D9E75 20%, #1D9E75 80%, transparent 100%)",
          boxShadow: "0 0 20px 4px rgba(29,158,117,0.4)",
        }}
        initial={{ top: "15%" }}
        animate={{ top: "85%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* Corner brackets */}
      <div className="absolute inset-8 z-10 pointer-events-none">
        {/* Top-left */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-teal rounded-tl" />
        {/* Top-right */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-teal rounded-tr" />
        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-teal rounded-bl" />
        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-teal rounded-br" />
      </div>

      {/* Text */}
      <div className="absolute bottom-12 inset-x-0 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-[11px] font-medium px-6"
        >
          Halte die Kamera auf die Zutatenliste
        </motion.p>
      </div>

      {/* Camera dot */}
      <div className="absolute top-14 right-6 z-10 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[9px] text-white/50 font-medium">REC</span>
      </div>
    </motion.div>
  );
}

/* ───── Phase 2: Analyzing ───── */
function AnalyzePhase({ textIdx }: { textIdx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-[#0c0c0c] flex flex-col items-center justify-center gap-8"
    >
      {/* Pulsing circle */}
      <div className="relative">
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-teal/30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 w-16 h-16 rounded-full border-2 border-teal flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            borderTopColor: "transparent",
            borderRightColor: "transparent",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>

      {/* Cycling text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={textIdx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="text-white/60 text-[11px] font-medium text-center px-8"
        >
          {analyzeTexts[textIdx]}
        </motion.p>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-teal rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

/* ───── Phase 3: Result ───── */
function ResultPhase() {
  const safeCount = ingredients.filter((i) => i.status === "safe").length;
  const warnCount = ingredients.filter((i) => i.status === "warn").length;
  const dangerCount = ingredients.filter((i) => i.status === "danger").length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-[#f8f7f4]"
    >
      {/* Status bar area */}
      <div className="pt-14 px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-between mb-4"
        >
          <div>
            <p className="text-[10px] text-[#6b7280] font-medium">Scan-Ergebnis</p>
            <p className="text-[13px] text-[#0f0f0f] font-semibold mt-0.5">Baby-Sonnencreme LSF 50</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f0f0f" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </div>
        </motion.div>

        {/* Traffic light summary */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 mb-4"
        >
          <div className="flex-1 bg-emerald-500/10 rounded-xl py-2 px-2.5 text-center">
            <p className="text-emerald-600 text-[15px] font-bold">{safeCount}</p>
            <p className="text-emerald-600/70 text-[8px] font-medium">Unauff&auml;llig</p>
          </div>
          <div className="flex-1 bg-amber-500/10 rounded-xl py-2 px-2.5 text-center">
            <p className="text-amber-600 text-[15px] font-bold">{warnCount}</p>
            <p className="text-amber-600/70 text-[8px] font-medium">Pr&uuml;fen</p>
          </div>
          <div className="flex-1 bg-red-500/10 rounded-xl py-2 px-2.5 text-center">
            <p className="text-red-600 text-[15px] font-bold">{dangerCount}</p>
            <p className="text-red-600/70 text-[8px] font-medium">Auff&auml;llig</p>
          </div>
        </motion.div>

        {/* Ingredient cards */}
        <div className="space-y-2">
          {ingredients.map((item, i) => {
            const color = statusColors[item.status as keyof typeof statusColors];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.12 }}
                className="bg-white rounded-xl px-3.5 py-2.5 flex items-center justify-between border border-[#f0f0f0]"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                  <span className="text-[11px] text-[#0f0f0f] font-medium">
                    {item.name}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${color.bg} ${color.text}`}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
