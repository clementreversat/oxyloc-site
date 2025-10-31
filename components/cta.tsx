import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[#024053]"
          data-aos="zoom-y-out"
        >
          {/* Glow effect */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-[#06B6D4]/40 blur-3xl" />
          </div>

          {/* Stripes background (keeps subtle dynamic effect) */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform opacity-40"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>

          {/* Text & Button */}
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-white md:mb-12">
              Prêt à simplifier la gestion locative pour vos clients&nbsp;?
            </h2>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-[#06B6D4] text-white shadow-sm hover:brightness-105 sm:mb-0 sm:w-auto"
                href="#contact-modal">
                <span className="relative inline-flex items-center">
                  Nous contacter <span className="ml-1 text-white/70">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
