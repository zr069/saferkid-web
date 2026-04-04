import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontakt & Support – SaferKid",
};

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6">
            Kontakt &amp; Support
          </h1>

          <p className="text-foreground/80 text-[15px] leading-relaxed mb-8">
            Bei Fragen zur App, technischen Problemen oder Datenschutzanfragen erreichst du uns unter:
          </p>

          <a
            href="mailto:info@devory.it"
            className="text-teal text-2xl sm:text-3xl font-semibold hover:underline inline-block mb-8"
          >
            info@devory.it
          </a>

          <div className="text-foreground/80 text-[15px] leading-relaxed space-y-2 mb-8">
            <p className="font-semibold text-foreground">Devory IT GmbH</p>
            <p>
              Frankfurter Str. 84
              <br />
              65779 Kelkheim (Taunus)
            </p>
          </div>

          <p className="text-muted text-sm">
            Wir antworten in der Regel innerhalb von 24&ndash;48 Stunden.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
