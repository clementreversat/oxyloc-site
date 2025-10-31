import { Briefcase, User, Ruler } from "lucide-react";

export default function LargeTestimonial() {
  return (
    <section className="py-12 md:py-20 bg-[#F8FAFB]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* --- Chiffres clés --- */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mb-10">
          Nos chiffres clés
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
          {[
            { icon: Briefcase, value: "1,5 Mds €", label: "d’actifs gérés" },
            { icon: User, value: "+1 000", label: "locataires" },
            { icon: Ruler, value: "+1 000 000 m²", label: "sous gestion" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#06B6D4]/10 mb-4">
                <Icon className="h-6 w-6 text-[#06B6D4]" />
              </div>
              <p className="text-3xl md:text-4xl font-semibold text-[#024053]">
                {value}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">{label}</p>
            </div>
          ))}
        </div>

        {/* --- Témoignages --- */}
        <h3 className="text-2xl font-semibold text-[var(--primary)] mb-8">
          Ce que disent nos clients
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              quote:
                "Une gestion exceptionnelle, avec un suivi rigoureux et minutieux.",
              author: "Sebastien",
            },
            {
              quote: "Professionnels, rapides et sérieux. Je recommande.",
              author: "JC",
            },
            {
              quote: "Oxyloc a tout pris en main, mes clients sont ravis.",
              author: "Hélène",
            },
          ].map(({ quote, author }) => (
            <div
              key={author}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <p className="text-[var(--primary)] leading-relaxed italic">
                “{quote}”
              </p>
              <p
                className="mt-6 text-lg text-[#06B6D4] font-[cursive]"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 500,
                }}
              >
                {author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
