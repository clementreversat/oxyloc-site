import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Image de fond */}
      <div className="relative h-[68vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/hero/hero.jpg"
          alt="Versailles et Paris — Gestion locative premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Contenu aligné à droite */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-end px-4">
          <div className="space-y-8 text-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Oxyloc, la gestion locative en toute sérénité
            </h1>
            <p className="text-xl md:text-2xl text-white uppercase">
              Gestion locative premium & moderne
            </p>
            <p className="text-xl md:text-2xl text-white uppercase">
              À Versailles & Paris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}