import Link from "next/link";
import {
  Euro,
  Handshake,
  FileText,
  BarChart3,
  Star,
  Megaphone,
} from "lucide-react";

const items = [
  { title: "Commissions dès le 1er bien confié", icon: Euro },
  { title: "Relation client préservée", icon: Handshake },
  { title: "Aucun coût fixe ni administratif", icon: FileText },
  { title: "Suivi possible via extranet", icon: BarChart3 },
  { title: "Valorisation de votre image de marque", icon: Star },
  { title: "Accompagnement commercial et marketing", icon: Megaphone },
];

export default function PourLesPros() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Texte gauche */}
          <div className="text-[#024053]">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Vous accompagnez vos clients, nous les gérons pour vous.
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
              Vous êtes notaire, courtier, agent immobilier ou mandataire&nbsp;?
              Oxyloc vous permet de proposer à vos clients un service de gestion
              locative clé-en-main, sans monter d’équipe dédiée ni changer de modèle.
            </p>

            <div className="mt-8">
              <Link
                href="#contact-modal"
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
              >
                Devenir partenaire
              </Link>
            </div>
          </div>

          {/* Avantages droite */}
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="h-6 w-6 text-[#06B6D4] shrink-0" />
                <p className="text-[var(--primary)] font-medium leading-snug">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
