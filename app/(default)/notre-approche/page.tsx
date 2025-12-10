"use client";

import Image from "next/image";
import { useState } from "react";

// Desktop: Flip card with paper corner
// Mobile: Expandable accordion card
function FlipCard({ image, caption, backText }: { image: string; caption: string; backText: string }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const formatBackText = () => {
        if (backText.includes(':')) {
            const parts = backText.split(':');
            if (parts.length === 2) {
                return (
                    <>
                        <span className="font-bold">{parts[0]}:</span>
                        <br />
                        {parts[1].trim()}
                    </>
                );
            }
        }
        return backText;
    };

    return (
        <>
            {/* MOBILE: Expandable Card (accordion style) */}
            <div className="md:hidden">
                <div
                    className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {/* Image + Caption */}
                    <div className="relative h-56">
                        <Image
                            src={`/images/notre-approche/${image}.jpg`}
                            alt={caption}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 px-4">
                            <p className="text-white text-sm font-medium text-center">{caption}</p>
                        </div>

                        {/* Expand indicator */}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-[#024053] shadow-lg flex items-center gap-1">
                            <span>Voir plus</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Expandable content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="p-5 bg-[#024053] text-white">
                            <p className="text-sm leading-relaxed">
                                {formatBackText()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP: Flip Card with Paper Corner */}
            <div
                className="hidden md:block relative h-72 cursor-pointer perspective-1000"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                <div
                    className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                        }`}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* FRONT */}
                    <div
                        className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <Image
                            src={`/images/notre-approche/${image}.jpg`}
                            alt={caption}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 px-4">
                            <p className="text-white text-sm font-medium text-center">{caption}</p>
                        </div>

                        {/* Simple page corner turn - bottom right */}
                        <div className="absolute bottom-0 right-0 pointer-events-none">
                            {/* The turned corner (white triangle) */}
                            <div
                                className="relative w-8 h-8"
                                style={{
                                    background: 'linear-gradient(135deg, transparent 50%, white 50%)',
                                    borderBottomRightRadius: '0.75rem'
                                }}
                            />
                            {/* Shadow under the fold */}
                            <div
                                className="absolute bottom-0 right-0 w-8 h-8"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 50%)',
                                    borderBottomRightRadius: '0.75rem',
                                    transform: 'translateY(-100%)'
                                }}
                            />
                        </div>
                    </div>

                    {/* BACK */}
                    <div
                        className="absolute inset-0 rounded-xl bg-[#024053] p-6 shadow-lg overflow-y-auto"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        <div className="h-full flex items-center justify-center">
                            <p className="text-white text-sm leading-relaxed text-center">
                                {formatBackText()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function NotreApprochePage() {
    return (
        <main className="bg-white">
            {/* Section 1: Video Introduction */}
            <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#024053] leading-snug mb-6 max-w-5xl">
                        Nous sommes des investisseurs qui avons pensé notre offre de services à partir de nos constats terrain et de nos expériences professionnelles complémentaires…
                    </h1>

                    <p className="text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed max-w-4xl">
                        Parce que vous n'avez peut-être pas beaucoup de temps pour découvrir notre proposition de valeur, nous nous sommes dit qu'une courte vidéo de présentation pourrait vous être utile…
                    </p>

                    <div className="flex justify-center">
                        <div className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-2xl">
                            <video
                                controls
                                preload="metadata"
                                className="w-full h-auto"
                                style={{ aspectRatio: '9/16', maxHeight: '500px' }}
                            >
                                <source src="/video/OXYLOC_V5_SST_HQ.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Proximité, Haute Qualité & Long Terme */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] text-center mb-4">
                        Nous croyons avant tout à la Proximité, à la Haute Qualité & au Long Terme
                    </h2>
                    <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-5xl mx-auto">
                        Parce que nous sommes d'abord votre conseiller, nous mettons en oeuvre un accompagnement protecteur de vos intérêts afin de vous simplifier au maximum l'administratif, vous libérer d'une charge mentale et vous permettre de vous concentrer sur l'essentiel
                    </p>

                    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-4">
                        <FlipCard
                            image="notre-approche1_1"
                            caption="Chaque bien est unique et mérite une stratégie locative qui lui est propre"
                            backText="Nous analysons vos biens selon plusieurs stratégies de location possibles afin de vous proposer les meilleures solutions pour optimiser votre location, améliorer le confort et assurer la mise en œuvre si vous le souhaitez"
                        />
                        <FlipCard
                            image="notre-approche1_2"
                            caption="Chaque propriétaire a des attentes différentes, nous nous adaptons"
                            backText="Nous avons imaginé plusieurs formules de Gestion et de Location selon vos besoins, vos attentes et le niveau de délégation que vous souhaitez confier"
                        />
                        <FlipCard
                            image="notre-approche1_3"
                            caption="Nous sommes à vos côtés jusqu'au bout… et au-delà"
                            backText="Nous offrons une expérience de bout en bout sereine en vous donnant accès à notre écosystème de partenaires comptables et assureurs, et en vous rappelant régulièrement vos échéances déclaratives et fiscales"
                        />
                        <FlipCard
                            image="notre-approche1_4"
                            caption="Le temps est un capital que nous faisons fructifier ensemble"
                            backText="Afin que nos échanges restent agiles et efficaces, nous avons choisi d'investir dans des outils et des méthodes qui optimisent et simplifient les interactions avec nos propriétaires (et locataires)"
                        />
                        <FlipCard
                            image="notre-approche1_5"
                            caption="La considération, c'est le ciment des relations qui tiennent"
                            backText="Nous prenons soin de vos locataires et de votre logement, et nous veillons au respect des obligations (et des droits) de toutes les parties"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: Simplifier l'expérience */}
            <section className="py-16 md:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] text-center mb-4">
                        Nous simplifions votre expérience et celle de vos locataires
                    </h2>
                    <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-4xl mx-auto">
                        Parce que nous sommes en recherche constante de simplification de nos interactions avec nos propriétaires et locataires
                    </p>

                    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-4">
                        <FlipCard image="notre-approche2_1" caption="MODERNITÉ" backText="Moins de papier, plus de clarté : nos outils modernes facilitent la gestion et garantissent la traçabilité grâce à la signature électronique des mandats, baux et devis, ainsi qu'à l'archivage des éléments de preuve" />
                        <FlipCard image="notre-approche2_2" caption="TEMPS RÉEL" backText="Offrir une vision 360° : une transparence totale sur vos encaissements et notre gestion grâce à un extranet disponible 24/7 en temps réel" />
                        <FlipCard image="notre-approche2_3" caption="ROBUSTESSE" backText="L'IA au service de l'humain : modernisation de nos états des lieux en nous appuyant sur l'IA pour garantir un traitement objectif et serein de l'état des lieux de sortie" />
                        <FlipCard image="notre-approche2_4" caption="CONSIDÉRATION" backText="Placer le locataire au centre de notre démarche : offrir un suivi attentif à chaque étape grâce à l'extranet gratuit, au livret d'accueil, au suivi, et à l'accompagnement lors de la préparation de son départ" />
                        <FlipCard image="notre-approche2_5" caption="ANTICIPATION" backText="Prévenir plutôt que subir : une gestion proactive pour éviter les urgences grâce à la mise à disposition des numéros de nos partenaires de maintenance, aux rappels programmés d'entretien et aux contrôles réguliers des équipements" />
                    </div>
                </div>
            </section>

            {/* Section 4: Optimiser temps et rentabilité */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] text-center mb-4">
                        Notre engagement à vos côtés optimise votre temps et la rentabilité de vos actifs
                    </h2>
                    <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-4xl mx-auto">
                        Parce que la qualité d'un projet immobilier dépend de la fiabilité de chaque pierre qui le compose, chaque poste de revenus et chaque poste de charge doit être optimisé
                    </p>

                    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-4">
                        <FlipCard image="notre-approche3_1" caption="VALORISER LES TRAVAUX" backText="Valoriser les travaux : Évaluation de l'impact des travaux sur la valeur locative et patrimoniale" />
                        <FlipCard image="notre-approche3_2" caption="MAÎTRISER LES COÛTS" backText="Maîtriser les coûts : Recours à des entreprises multiservices de qualité pour assurer les petites réparations rapidement à des coûts raisonnables, avec une base de devis pour challenger les offres reçues" />
                        <FlipCard image="notre-approche3_3" caption="GÉRER LA TRANSITION" backText="Gérer la transition : Dès réception du préavis de départ, nous conseillons le locataire sur les actions à réaliser avant son départ afin de réduire la durée de remise au propre du logement et limiter ainsi la vacance locative entre deux locataires" />
                        <FlipCard image="notre-approche3_4" caption="TARIFER À LA JUSTE VALEUR" backText="Tarifer à la juste valeur : Nous avons opté pour un positionnement tarifaire à la juste valeur, simple et lisible, adapté à votre situation et compétitif, tout en étant déductible fiscalement" />
                        <FlipCard image="notre-approche3_5" caption="ALIGNER NOS INTÉRÊTS POUR UNE RELATION DURABLE" backText="Aligner nos intérêts pour une relation durable : Pas d'honoraires de gestion facturés sur un lot vacant ou en cas d'impayés, et des honoraires de location réduits de 50% si nous mettons plus d'un mois pour trouver le bon locataire" />
                    </div>
                </div>
            </section>
        </main>
    );
}