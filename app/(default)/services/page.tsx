import Image from "next/image";
import Link from "next/link";

// Chemin vers /public/images/services/…  (change l’extension si besoin)
const IMG_EXT = "jpg"; // "jpg" | "png" | "webp"
const img = (b: 1 | 2 | 3, i: 1 | 2 | 3 | 4 | 5) =>
  `/images/services/services_bloc${b}_${i}.${IMG_EXT}`;

type Item = { src: string; alt: string; caption: string };

// === HERO ====================================================================
const HERO_BG = "/images/services/hero-bg.jpg"; // Mets un vrai fichier ici, sinon change vers un fichier existant (ex: /images/services/services_bloc1_1.jpg)
const TITLE_HERO = "Nos services";
const SUB_HERO_1 =
  "Oxyloc propose une gestion complète et haut de gamme, avec un niveau d’exigence élevé et un accompagnement humain.";
const SUB_HERO_2 = "";

// === BLOC 1 ==================================================================
const BLOCK1 = {
  title: "Nous croyons avant tout à la proximité et à la haute qualité",
  items: [
    {
      src: img(1, 1),
      alt: "services_bloc1_1",
      caption:
        "Nous sommes d’abord votre conseiller. Chaque situation a ses particularités que nous prenons en compte pour vous proposer les meilleures solutions",
    },
    {
      src: img(1, 2),
      alt: "services_bloc1_2",
      caption:
        "Nous analysons chacun de vos biens en fonction de la stratégie de location choisie et nous effectuons nos recommandations si vous le souhaitez",
    },
    {
      src: img(1, 3),
      alt: "services_bloc1_3",
      caption:
        "Nous prenons soin de choisir les locataires les plus adaptés; nous concevons la location comme un recrutement. Chaque aspect de la candidature doit être aligné",
    },
    {
      src: img(1, 4),
      alt: "services_bloc1_4",
      caption:
        "Nous Prenons soin du locataire,  de votre logement et nous veillons au respect des obligations de toutes les parties",
    },
    {
      src: img(1, 5),
      alt: "services_bloc1_5",
      caption:
        "Nous vous proposons des services à la carte pour améliorer votre confort, votre bien et sa valeur",
    },
  ] as Item[],
};

// === BLOC 2 ==================================================================
const BLOCK2 = {
  title: "Nous simplifions votre parcours client et celui de vos locataires",
  items: [
    {
      src: img(2, 1),
      alt: "services_bloc2_1",
      caption: "Nous vous proposons de signer électroniquement les mandats",
    },
    {
      src: img(2, 2),
      alt: "services_bloc2_2",
      caption:
        "Vous pouvez suivre l’ensemble de la gestion avec un extranet dédié",
    },
    {
      src: img(2, 3),
      alt: "services_bloc2_3",
      caption: "Les états des lieux sont digitalisés avec un outil moderne",
    },
    {
      src: img(2, 4),
      alt: "services_bloc2_4",
      caption: "Les locataires peuvent signer les baux électroniquement",
    },
    {
      src: img(2, 5),
      alt: "services_bloc2_5",
      caption:
        "Nous proposons des accès simplifiés à vos logements pour faciliter les accès et amplifier la sécurité",
    },
  ] as Item[],
};

// === BLOC 3 ==================================================================
const BLOCK3 = {
  title:
    "Notre engagement à vos côtés optimise votre temps et la rentabilité de vos actifs.",
  items: [
    {
      src: img(3, 1),
      alt: "services_bloc3_1",
      caption:
        "Les travaux proposés valorisent votre actif et en augmente sa rentabilité.",
    },
    {
      src: img(3, 2),
      alt: "services_bloc3_2",
      caption:
        "Nous sélectionnons des entreprises multiservices de qualité pour assurer les petites réparations rapidement à des coûts raisonnables",
    },
    {
      src: img(3, 3),
      alt: "services_bloc3_3",
      caption:
        "À chaque changement de locataire, nous réalisons des pré-visites, pour améliorer au maximum le rendu de chaque lot et en limiter la vacance",
    },
    {
      src: img(3, 4),
      alt: "services_bloc3_4",
      caption:
        "Nous vous donnons accès à notre écosystème de partenaires (comptables, assurances etc) à des tarifs négociés.",
    },
    {
      src: img(3, 5),
      alt: "services_bloc3_5",
      caption: "Nos honoraires sont déductibles fiscalement",
    },
  ] as Item[],
};

// === COMPOSANTS ===============================================================
function ImagesWithCaptions({ items }: { items: Item[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
      {items.map(({ src, alt, caption }, i) => (
        <figure key={i} className="flex flex-col">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <Image
              src={src}
              alt={alt}
              width={600}
              height={400}
              className="h-40 w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-snug text-[var(--muted-foreground)]">
            {caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* HERO — fond sûr + image en CSS pour afficher le texte même si l'image manque */}
<section className="relative overflow-hidden bg-[#024053]">
  {/* BG image (visible) */}
  <div className="absolute inset-0 z-0">
    <Image
      src={HERO_BG} // e.g. "/images/services/services_bloc1_1.jpg"
      alt="Background"
      fill
      priority
      className="object-cover"
    />
  </div>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 z-10 bg-[#024053]/60" aria-hidden="true" />

  {/* Content */}
  <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 text-white">
    <h1 className="text-3xl md:text-4xl font-semibold">{TITLE_HERO}</h1>
    {SUB_HERO_1 && (
      <p className="mt-4 text-lg md:text-xl opacity-95">{SUB_HERO_1}</p>
    )}
    {SUB_HERO_2 && (
      <p className="mt-1 text-base md:text-lg opacity-95">{SUB_HERO_2}</p>
    )}
    {/* (Optional) hero CTA here if you want it back */}
    {/* <a href="#contact-modal" className="btn-oxyloc mt-8 inline-flex">Nous contacter</a> */}
  </div>
</section>

      {/* Bloc 1 – fond blanc */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
            {BLOCK1.title}
          </h2>
          <ImagesWithCaptions items={BLOCK1.items} />
        </div>
      </section>

      {/* Bloc 2 – fond gris clair */}
      <section className="bg-[#F1F5F9] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
            {BLOCK2.title}
          </h2>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImagesWithCaptions items={BLOCK2.items} />
        </div>
      </section>

      {/* Bloc 3 – fond blanc */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
            {BLOCK3.title}
          </h2>
          <ImagesWithCaptions items={BLOCK3.items} />
        </div>
      </section>

      {/* CTA bas → même pop-up */}
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
