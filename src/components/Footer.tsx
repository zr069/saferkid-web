export default function Footer() {
  return (
    <footer className="border-t border-border-light py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <a href="/" className="font-serif text-lg tracking-tight">
            SaferKid
          </a>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="/agb" className="hover:text-foreground transition-colors">
              AGB
            </a>
            <a href="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </a>
            <a href="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="/kontakt" className="hover:text-foreground transition-colors">
              Kontakt
            </a>
          </div>

          <p className="text-sm text-muted">
            &copy; 2026 Devory IT GmbH
          </p>
        </div>
      </div>
    </footer>
  );
}
