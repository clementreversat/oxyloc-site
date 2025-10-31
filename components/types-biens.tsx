import Image from "next/image";

export default function TypesBiens() {
  const biens = [
    { image: "/images/biens/immeuble.jpg", alt: "Immeubles" },
    { image: "/images/biens/appartement.jpg", alt: "Appartements" },
    { image: "/images/biens/chambre.jpg", alt: "Chambres à louer" },
    { image: "/images/biens/local.jpg", alt: "Locaux commerciaux" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] text-center mb-10">
          Nous gérons vos immeubles, vos appartements, vos chambres à louer et vos locaux
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {biens.map((b, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm">
              <div className="relative h-56">
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
