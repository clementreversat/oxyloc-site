import Image from "next/image";

export default function TypesBiens() {
  const biens = [
    { image: "/images/biens/immeuble.png", alt: "Immeubles" },
    { image: "/images/biens/appartement.png", alt: "Appartements" },
    { image: "/images/biens/chambre.png", alt: "Chambres à louer" },
    { image: "/images/biens/local.png", alt: "Locaux commerciaux" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] text-center mb-10">
          Nous gérons vos immeubles, vos appartements, vos chambres à louer et
          vos locaux
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {biens.map((b, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm">
              <div className="relative h-40 md:h-56">
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
