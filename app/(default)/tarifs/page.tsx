import Image from "next/image";
import Link from "next/link";

export default function TarifsPage() {
  return (
    <main className="bg-white">
      {/* === HERO === */}
      <section className="relative overflow-hidden bg-[#024053]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tarifs/hero-bg.jpg" // 📸 change avec ton image réelle
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay sombre */}
        <div className="absolute inset-0 z-10 bg-[#024053]/65" aria-hidden="true" />

        {/* Contenu */}
        <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Des tarifs simples, clairs et compétitifs.
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-95">
            Choisissez l’offre adaptée à votre situation.
          </p>

          {/* Lien vers le PDF */}
          <div className="mt-8">
            <a
              href="/pdf/grille-tarifaire.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-oxyloc"
            >
              Consulter notre grille tarifaire
            </a>
          </div>
        </div>
      </section>

      {/* === 4 OFFRES === */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
            {[
              {
                titre: "Gestion longue durée",
                tarif: "5% des loyers et charges TTC",
                desc: "Idéal pour les locations classiques à l’année, en toute sérénité.",
              },
              {
                titre: "Bail mobilité (1 à 10 mois)",
                tarif: "10% des loyers et charges TTC",
                desc: "Souple et rapide, parfait pour les locations temporaires.",
              },
              {
                titre: "Gestion bail société",
                tarif: "20% des loyers et charges TTC",
                desc: "Gestion complète des locations professionnelles.",
              },
              {
                titre: "Services à la carte",
                tarif: "Sur devis personnalisé",
                desc: "Travaux, rénovations, suivi technique ou administratif.",
              },
            ].map((o, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm text-center flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary)]">
                    {o.titre}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-[#06B6D4]">
                    {o.tarif}
                  </p>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === AVANTAGES === */}
      <section className="bg-[#F1F5F9] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
            {[
              "Premier mois offert",
              "Frais de résiliation offerts pendant 6 mois",
              "Résiliation ensuite ramenée à 1 mois",
              "Honoraires 100% déductibles fiscalement",
            ].map((avantage, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span className="text-2xl mr-2 text-[#06B6D4]">✅</span>
                <p className="text-[var(--primary)] font-medium">{avantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <a href="#contact-modal" className="btn-oxyloc">
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}
