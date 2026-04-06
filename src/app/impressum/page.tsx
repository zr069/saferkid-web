import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum – SaferKid",
  robots: "noindex, nofollow",
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
            <p className="text-muted">
              Inhaltlich verantwortlich gemäß § 5 DDG
            </p>

            <p className="font-semibold text-foreground">Devory IT GmbH</p>
            <p>
              Frankfurter Str. 84
              <br />
              65779 Kelkheim (Taunus)
            </p>
            <p>
              Vertreten durch den Geschäftsführer: Dr. Nik Sarafi
            </p>

            <p className="font-semibold text-foreground pt-4">Handelsregister</p>
            <p>
              Amtsgericht Königstein
              <br />
              HRB 11764
            </p>

            <p className="font-semibold text-foreground pt-4">Umsatzsteuer-ID-Nr.</p>
            <p>DE368032735</p>

            <p className="font-semibold text-foreground pt-4">Kontakt</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@devory.it" className="text-teal hover:underline">
                info@devory.it
              </a>
              <br />
              Tel.: +49 6195 9199670
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
