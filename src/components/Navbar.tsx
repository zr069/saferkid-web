"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border-light">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-serif text-xl tracking-tight">
          SaferKid
        </a>

        <a
          href="https://apps.apple.com/de/app/saferkid/id6761647657"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-foreground text-white font-medium px-5 py-2 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
        >
          App laden
        </a>
      </div>
    </nav>
  );
}
