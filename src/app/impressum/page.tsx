import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum – SaferKid",
};

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10">
            Impressum
          </h1>

          <div className="text-foreground/80 text-[15px] leading-relaxed space-y-4">
            <p className="font-semibold text-foreground">Devory IT GmbH</p>
            <p>
              Frankfurter Str. 84
              <br />
              65779 Kelkheim (Taunus)
            </p>
            <p>
              Tel.: +49 6195 9199670
              <br />
              Web:{" "}
              <a href="https://www.devory.it" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">
                www.devory.it
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@devory.it" className="text-teal hover:underline">
                info@devory.it
              </a>
            </p>
            <p>
              Amtsgericht K&ouml;nigstein
              <br />
              HRB-Nr.: HRB 11764
              <br />
              USt.-ID: DE368032735
            </p>
            <p className="pt-4 text-muted text-sm">
              Haftungsausschluss: Die App ersetzt keine medizinische Beratung. Alle Angaben basieren auf wissenschaftlichen Studien und sind ohne Gew&auml;hr.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
