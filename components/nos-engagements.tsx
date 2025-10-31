import {
  BadgeEuro,
  Users,
  Clock,
  BarChart3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function NosEngagements() {
  const items = [
    {
      title: "Transparence des tarifs",
      desc: "Grille claire, aucun frais caché.",
      icon: BadgeEuro,
    },
    {
      title: "Sélection rigoureuse",
      desc: "Dossiers locataires vérifiés et scorés.",
      icon: Users,
    },
    {
      title: "Réactivité 24–48h",
      desc: "Demandes traitées rapidement, suivi tracé.",
      icon: Clock,
    },
    {
      title: "Reporting clair",
      desc: "Tableau de bord et rapports mensuels.",
      icon: BarChart3,
    },
    {
      title: "Conformité & sécurité",
      desc: "Baux, diagnostics, RGPD : process maîtrisés.",
      icon: ShieldCheck,
    },
    {
      title: "Interventions au juste coût",
      desc: "Réseau d’artisans qualifiés, devis comparés.",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Titre de section */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] text-center">
          Nos engagements
        </h2>

        {/* Grille 2x3 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="h-6 w-6 text-[#06B6D4] shrink-0" />
              <div>
                <h3 className="font-semibold text-[var(--primary)]">{title}</h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA optionnel */}
        <div className="mt-10 text-center">
          <a
            href="#contact-modal"
            className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
          >
            Discuter de votre besoin
          </a>
        </div>
      </div>
    </section>
  );
}
