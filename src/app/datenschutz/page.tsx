import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz – SaferKid",
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10">
            Datenschutzerkl&auml;rung
          </h1>

          <div className="text-foreground/80 text-[15px] leading-relaxed space-y-8">
            {/* I */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                I. Verantwortlicher gem&auml;&szlig; Art. 4 Nr. 7 DSGVO
              </h2>
              <p>
                Devory IT GmbH, Frankfurter Stra&szlig;e 84, 65779 Kelkheim (Taunus), Deutschland
                <br />
                Telefon: +49 6195 9199670, E-Mail:{" "}
                <a href="mailto:info@devory.it" className="text-teal hover:underline">
                  info@devory.it
                </a>
              </p>
            </section>

            {/* II */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                II. Begrifflichkeiten
              </h2>
              <p>
                F&uuml;r die Definition der nachfolgenden Begriffe werden die Definitionen der Art. 4 DSGVO zugrunde gelegt.
              </p>
            </section>

            {/* III */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                III. Datenverarbeitung im Allgemeinen
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Umfang der Datenverarbeitung</h3>
                  <p>
                    Die Verarbeitung personenbezogener Daten erfolgt grunds&auml;tzlich nur, um die Bereitstellung der SaferKid App und die Erbringung unserer Leistungen zu erm&ouml;glichen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Rechtsgrundlagen</h3>
                  <p>
                    Art. 6 Abs. 1 lit. a DSGVO, Art. 6 Abs. 1 lit. b DSGVO, Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Datenl&ouml;schung und Speicherdauer</h3>
                  <p>
                    Personenbezogene Daten werden gel&ouml;scht, sobald der Speicherungszweck entf&auml;llt.
                  </p>
                </div>
              </div>
            </section>

            {/* Teil A */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Teil A &ndash; Nutzung der SaferKid App
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Allgemeines</h3>
                  <p>
                    Die SaferKid App erm&ouml;glicht das Scannen von Produktzutatenlisten mittels KI-gest&uuml;tzter Bildanalyse. Gescannte Bilder und Analyseergebnisse werden lokal auf dem Ger&auml;t gespeichert.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">Erhobene Daten</h3>
                  <ol className="list-[lower-alpha] pl-5 space-y-2">
                    <li>
                      Fotos von Zutatenlisten &ndash; werden zur Analyse verarbeitet und nicht dauerhaft extern gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
                    </li>
                    <li>
                      Analyseergebnisse &ndash; werden lokal auf dem Ger&auml;t gespeichert und verlassen das Ger&auml;t nicht. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
                    </li>
                    <li>
                      Zielgruppeneinstellungen &ndash; werden lokal gespeichert und nicht an Dritte &uuml;bermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zahlungsabwicklung</h3>
                  <p>
                    &Uuml;ber Apple App Store und RevenueCat Inc. Wir erhalten keine vollst&auml;ndigen Zahlungsdaten. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">Datenspeicherung</h3>
                  <p>
                    Alle Daten werden ausschlie&szlig;lich lokal auf dem Ger&auml;t gespeichert.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">Werbung</h3>
                  <p>
                    In der kostenlosen Version werden Werbeanzeigen &uuml;ber Google AdMob angezeigt. In SaferKid Pro keine Werbung. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">Datenl&ouml;schung</h3>
                  <p>
                    Unter Einstellungen &rarr; &bdquo;Alle Produkte l&ouml;schen&ldquo; k&ouml;nnen alle Daten jederzeit gel&ouml;scht werden.
                  </p>
                </div>
              </div>
            </section>

            {/* IV */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                IV. Ihre Rechte
              </h2>
              <p>
                Auskunftsrecht (Art. 15 DSGVO), Recht auf Berichtigung (Art. 16 DSGVO), Recht auf L&ouml;schung (Art. 17 DSGVO), Recht auf Einschr&auml;nkung (Art. 18 DSGVO), Recht auf Daten&uuml;bertragbarkeit (Art. 20 DSGVO), Widerspruchsrecht (Art. 21 DSGVO).
              </p>
              <p className="mt-2">
                F&uuml;r Anfragen:{" "}
                <a href="mailto:info@devory.it" className="text-teal hover:underline">
                  info@devory.it
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
