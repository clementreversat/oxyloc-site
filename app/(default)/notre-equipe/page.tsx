"use client";

import Image from "next/image";

export default function NotreEquipePage() {
    const team = [
        { name: "Thibault", linkedin: "https://www.linkedin.com/in/thibault-d-halluin-1b648710b/" },
        { name: "Marc", linkedin: "https://www.linkedin.com/in/marchoudet/" },
        { name: "Sébastien", linkedin: "https://www.linkedin.com/in/s%C3%A9bastien-henot-82766a10/" }
    ];

    return (
        <main className="bg-white">
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <h1 className="text-3xl md:text-4xl font-semibold text-[#024053] text-center mb-12">
                        Une équipe d'investisseurs au service des investisseurs
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left: Image + LinkedIn buttons */}
                        <div className="space-y-4">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/notre-equipe/RENT_Assis_zoom.jpg"
                                    alt="L'équipe Oxyloc"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* LinkedIn buttons directly under image */}
                            <div className="flex justify-between gap-3">
                                {team.map((member, i) => (
                                    <a
                                        key={i}
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white hover:border-[#0A66C2] hover:bg-sky-50 transition-all group flex-1 justify-center"
                                    >
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A66C2] text-xs font-bold text-white group-hover:scale-110 transition-transform">
                                            in
                                        </span>
                                        <span className="text-sm font-medium text-[#024053] group-hover:text-[#0A66C2]">
                                            {member.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: Text content */}
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-[#024053] mb-2">
                                    Investisseurs et gestionnaires
                                </p>
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    Nous sommes nous-mêmes investisseurs. Nous sommes convaincus qu'un investissement locatif réussi repose sur trois piliers : optimiser les revenus, maîtriser les dépenses et prendre soin du bien-être du locataire.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-[#024053] mb-2">
                                    1 000 000 m² et 1 000 locataires
                                </p>
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    C'est le volume que nous avons géré au cours de nos expériences respectives. Une équipe soudée et expérimentée, avec un seul engagement : trouver les meilleures solutions pour chaque situation.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-[#024053] mb-2">
                                    Une culture de la rigueur
                                </p>
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    Qualité de service et amélioration continue sont devenues des réflexes. Nous venons de grands groupes où la satisfaction client est au cœur de l'activité.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F8FAFB]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] mb-6">
                        Prêt à nous confier la gestion de vos biens ?
                    </h2>
                    <button
                        type="button"
                        data-contact-open
                        className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm transition cursor-pointer"
                    >
                        Nous contacter
                    </button>
                </div>
            </section>
        </main >
    );
}