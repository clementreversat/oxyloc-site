import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
  return (
    <main className="bg-white">
      {/* === HERO === */}
      <section className="relative overflow-hidden bg-[#024053]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/a-propos/hero-bg.jpg" // 📸 à placer dans /public/images/a-propos/
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay sombre */}
        <div className="absolute inset-0 z-10 bg-[#024053]/65" aria-hidden="true" />

        {/* Texte */}
        <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Une équipe exigeante, engagée et proche de vous.
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-95">
            Chaque bien, chaque client, chaque décision mérite toute notre attention.
          </p>
        </div>
      </section>

      {/* === Bloc 1 – Mission & Valeurs === */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
            Notre mission & nos valeurs
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
            Chez Oxyloc, nous croyons à une gestion locative proche, rigoureuse et valorisante.
            Notre mission est simple : offrir aux propriétaires et à leurs partenaires une solution de gestion
            sereine, performante et humaine.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titre: "Exigence",
                texte:
                  "Processus éprouvés, vérifications systématiques, décisions cohérentes.",
              },
              {
                titre: "Proximité",
                texte:
                  "Présents à Paris et Versailles, disponibles et réactifs.",
              },
              {
                titre: "Transparence",
                texte:
                  "Pas de mauvaise surprise. Des informations claires, un extranet, et des honoraires lisibles.",
              },
              {
                titre: "Confiance",
                texte:
                  "Chaque relation est fondée sur la fiabilité, la loyauté et le respect mutuel.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center"
              >
                <h3 className="text-lg font-semibold text-[var(--primary)]">
                  {v.titre}
                </h3>
                <p className="mt-2 text-[var(--muted-foreground)] text-sm leading-relaxed">
                  {v.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Bloc 2 – Qui sommes-nous ? === */}
      <section className="bg-[#F1F5F9] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
            Qui sommes-nous ?
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
            Nous sommes une équipe expérimentée, avec au cœur de nos préoccupations : le client.
          </p>

          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Durant nos expériences respectives, nous avons géré plus de <strong>1,5 milliard d’euros</strong> d’actifs immobiliers,
            plus de <strong>1.000.000 m²</strong>, plus de <strong>1.000 locataires</strong>, et à chaque fois,
            nous nous sommes engagés à trouver les meilleures solutions.
          </p>
        </div>
      </section>

      {/* === Bloc 3 – L’équipe === */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
            L’équipe
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3 justify-items-center">
            {[
              {
                nom: "Marc Houdet",
                photo: "/images/a-propos/marc.jpg",
              },
              {
                nom: "Thibault d'Halluin",
                photo: "/images/a-propos/thibault.jpg",
              },
              {
                nom: "Sébastien Henot",
                photo: "/images/a-propos/sebastien.jpg",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <div className="h-40 w-40 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                  <Image
                    src={m.photo}
                    alt={m.nom}
                    width={160}
                    height={160}
                    className="object-cover h-full w-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--primary)]">
                  {m.nom}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="#contact-modal" className="btn-oxyloc">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
