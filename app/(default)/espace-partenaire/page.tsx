"use client";

import { Euro, Handshake, FileText, BarChart3, Star, Megaphone } from "lucide-react";

export default function EspacePartenairePage() {
    const benefits = [
        {
            icon: Euro,
            title: "Commissions dès le 1er bien confié",
        },
        {
            icon: Handshake,
            title: "Relation client préservée",
        },
        {
            icon: FileText,
            title: "Aucun coût fixe ni administratif",
        },
        {
            icon: BarChart3,
            title: "Suivi possible via extranet",
        },
        {
            icon: Star,
            title: "Valorisation de votre image de marque",
        },
        {
            icon: Megaphone,
            title: "Accompagnement commercial et marketing",
        },
    ];

    return (
        <main className="bg-white">
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Text content */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] mb-6">
                                Vous accompagnez vos clients, nous les gérons pour vous.
                            </h2>

                            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8">
                                Vous êtes notaire, courtier, agent immobilier ou mandataire ? Oxyloc vous permet de proposer
                                à vos clients un service de gestion locative clé-en-main, sans monter d'équipe dédiée ni
                                changer de modèle.
                            </p>

                            <button
                                type="button"
                                onClick={() => window.dispatchEvent(new Event('open-contact'))}
                                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-lg transition cursor-pointer"
                            >
                                Devenir partenaire
                            </button>
                        </div>

                        {/* Right: Benefits - 2 columns x 3 rows */}
                        <div className="grid grid-cols-2 gap-3">
                            {benefits.map((benefit, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center shrink-0">
                                        <benefit.icon className="w-5 h-5 text-[#06B6D4]" />
                                    </div>
                                    <p className="text-sm text-[#024053] font-medium leading-snug">
                                        {benefit.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-[#F8FAFB]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] mb-6">
                        Intéressé par notre programme partenaire ?
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] mb-8">
                        Contactez-nous pour découvrir comment nous pouvons travailler ensemble et offrir
                        le meilleur service à vos clients.
                    </p>
                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new Event('open-contact'))}
                        className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm transition cursor-pointer"
                    >
                        Nous contacter
                    </button>
                </div>
            </section>
        </main>
    );
}