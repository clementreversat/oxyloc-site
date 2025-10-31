import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section className="py-12 md:py-16 bg-[#F1F5F9]"> {/* ✅ fond gris clair */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* GAUCHE : titre + texte */}
          <div className="text-[#024053]">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Oxyloc, une gestion exigeante et proche de vous.
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Sélection rigoureuse des locataires, bail sécurisé, gestion courante et technique, reporting clair : nous gérons, vous décidez en confiance.
            </p>
          </div>

          {/* DROITE : schéma (sur carte blanche pour contraste) */}
          <div className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="relative w-full max-w-[880px] mx-auto">
              <Image
                src="/images/schema.jpg"
                alt="Schéma du processus Oxyloc"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
