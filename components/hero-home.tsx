import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Image de fond */}
      <div className="relative h-[68vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/hero/hero.jpg"
          alt="Paris / Versailles — ambiance premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Contenu centré */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Oxyloc – La gestion en toute sérénité
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white italic">
              Gestion locative premium sur Paris et Versailles
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="#contact-modal"
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5
                text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
