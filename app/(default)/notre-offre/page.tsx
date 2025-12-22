"use client";

import Image from "next/image";
import { Rocket, CheckCircle, Unlock } from "lucide-react";

export default function NotreOffrePage() {
  return (
    <main className="bg-white">
      {/* Section 1: Payment Speed (Hero with subtle gradient background) */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        {/* Subtle background to avoid white-on-white under header */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F8FAFB] via-white to-white" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#024053] text-center mb-6">
            Notre offre a été conçue après de nombreux échanges avec nos propriétaires
          </h1>

          <p className="text-base md:text-lg text-[var(--muted-foreground)] text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Parce que tous les propriétaires n&apos;ont pas le même profil investisseur, ni la même
            disponibilité ou la même sensibilité par rapport à leurs actifs, notre offre s&apos;adapte
            au niveau de délégation que vous souhaitez nous confier.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#16A34A] mb-6">
                &quot;Le temps, c&apos;est de l&apos;argent&quot;
              </h2>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-[#024053]">Notre promesse</p>
                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                  Nous vous reversons vos loyers dans les 24 heures suivant leur encaissement, et
                  versons également les dépôts de garantie afin de vous laisser la maîtrise de leur
                  placement.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                <Image
                  src="/images/notre-offre/tarifs.png"
                  alt="Grille tarifaire Oxyloc"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="flex justify-center">
                <a
                  href="/pdf/grille-tarifaire.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm transition"
                >
                  Consulter notre grille tarifaire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tenant Selection - Light Gray Background */}
      <section className="py-16 md:py-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#024053] text-center mb-10">
            Une méthodologie de sélection éprouvée
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#16A34A] mb-6">
                &quot;La location, c&apos;est comme un recrutement&quot;
              </h3>

              <div className="space-y-4">
                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                  Nous avons conçu et déployons des méthodes d&apos;analyse et de vérification des
                  dossiers issues des meilleures pratiques du monde bancaire.
                </p>

                <p className="text-lg font-semibold text-[#024053]">Notre promesse</p>

                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                  <span className="text-[#06B6D4] font-semibold">Honoraires de relocation</span>{" "}
                  offerts si le locataire que nous avons mis en place quitte le logement dans les 6
                  mois suivant la signature de son bail.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                <Image
                  src="/images/notre-offre/tarifs2.png"
                  alt="Grille tarifaire Oxyloc - Relocation"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="flex justify-center">
                <a
                  href="/pdf/grille-tarifaire.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm transition"
                >
                  Consulter notre grille tarifaire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: From Promise to Proof - White Background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#024053] text-center mb-6 uppercase">
            De la promesse à la preuve
          </h2>

          <p className="text-base md:text-lg text-[var(--muted-foreground)] text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Parce que votre confiance se mérite et qu&apos;il est normal que vous gardiez le contrôle,
            ainsi que votre liberté.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#024053] mb-3">
                Votre mobilité doit être accompagnée
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Premier mois de gestion offert et préparation, pour votre compte, des éléments
                permettant de résilier votre mandat actuel.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#024053] mb-3">
                Vous validez notre période d&apos;essai
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Frais de résiliation offerts pendant les six premiers mois si vous n&apos;êtes pas
                satisfait de nos services.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 flex items-center justify-center mb-4">
                <Unlock className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#024053] mb-3">
                Notre contrat est sans engagement
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Délai de préavis réduit à un mois tout au long de notre relation d&apos;affaires (au
                lieu des 3 mois réglementaires).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
