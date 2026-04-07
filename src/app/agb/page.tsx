import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nutzungsbedingungen – SaferKid",
  robots: "noindex, nofollow",
};

export default function AGB() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10">
            Nutzungsbedingungen (EULA)
          </h1>

          <div className="text-foreground/80 text-[15px] leading-relaxed space-y-8">
            <p>
              Diese App wird von Devory IT GmbH, Frankfurter Str. 84, 65779 Kelkheim (Taunus), Deutschland lizenziert, nicht verkauft.
            </p>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                1. Lizenzumfang
              </h2>
              <p>
                Devory IT GmbH gewährt dir eine nicht übertragbare, nicht exklusive Lizenz zur Nutzung der SaferKid App auf Apple-Geräten die du besitzt oder kontrollierst, gemäß den Nutzungsbedingungen des App Store.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                2. Keine medizinische Beratung
              </h2>
              <p>
                SaferKid ersetzt keine medizinische Beratung. Alle Angaben basieren auf wissenschaftlichen Studien und sind ohne Gewähr. Bei gesundheitlichen Fragen wende dich an einen Arzt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                3. Abonnements
              </h2>
              <p>
                SaferKid Pro ist ein automatisch verlängerndes Abonnement. Die Abrechnung erfolgt über deinen Apple Account. Das Abo verlängert sich automatisch, sofern es nicht mindestens 24 Stunden vor Ende des Abrechnungszeitraums gekündigt wird. Die Kündigung erfolgt über die iPhone Einstellungen → Apple ID → Abonnements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                4. Preise
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>SaferKid Pro Monthly: 2,99 € / Monat</li>
                <li>SaferKid Pro Yearly: 49,99 € / Jahr</li>
                <li>SaferKid Pro Lifetime: 99,99 € einmalig</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                5. Datenschutz
              </h2>
              <p>
                Unsere Datenschutzerklärung findest du unter:{" "}
                <a href="/datenschutz" className="text-teal hover:underline">
                  saferkid.de/datenschutz
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                6. Anwendbares Recht
              </h2>
              <p>
                Es gilt deutsches Recht. Gerichtsstand ist Kelkheim (Taunus).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Kontakt
              </h2>
              <p>
                Devory IT GmbH
                <br />
                E-Mail:{" "}
                <a href="mailto:info@devory.it" className="text-teal hover:underline">
                  info@devory.it
                </a>
                <br />
                Tel.: +49 6195 9199670
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
