"use client";

import Image from "next/image";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
    // Articles exemples - vous remplacerez avec de vrais articles plus tard
    const articles = [
        {
            id: 1,
            category: "Conseils",
            title: "5 critères pour bien choisir son locataire",
            excerpt: "Découvrez les points essentiels à vérifier avant de confier votre bien : solvabilité, garanties, et compatibilité avec le logement.",
            date: "15 janvier 2025",
            image: "/images/blog/article-1.jpg", // Vous ajouterez ces images
            slug: "criteres-choisir-locataire",
        },
        {
            id: 2,
            category: "Marché",
            title: "Évolution du marché locatif à Paris en 2025",
            excerpt: "Analyse des tendances : loyers, demande locative et perspectives pour les propriétaires bailleurs dans la capitale.",
            date: "10 janvier 2025",
            image: "/images/blog/article-2.jpg",
            slug: "marche-locatif-paris-2025",
        },
        {
            id: 3,
            category: "Actualité",
            title: "Nouvelles obligations pour les bailleurs en 2025",
            excerpt: "État des lieux, diagnostics, DPE... Faites le point sur les nouvelles réglementations à respecter cette année.",
            date: "5 janvier 2025",
            image: "/images/blog/article-3.jpg",
            slug: "obligations-bailleurs-2025",
        },
        {
            id: 4,
            category: "Conseils",
            title: "Comment optimiser la rentabilité de votre investissement",
            excerpt: "Nos experts partagent leurs meilleures pratiques pour maximiser vos revenus locatifs tout en limitant les charges.",
            date: "28 décembre 2024",
            image: "/images/blog/article-4.jpg",
            slug: "optimiser-rentabilite",
        },
        {
            id: 5,
            category: "Guides",
            title: "Le guide complet de la gestion locative déléguée",
            excerpt: "Pourquoi confier votre bien à un professionnel ? Avantages, coûts et processus expliqués simplement.",
            date: "20 décembre 2024",
            image: "/images/blog/article-5.jpg",
            slug: "guide-gestion-locative",
        },
        {
            id: 6,
            category: "Actualité",
            title: "Bail mobilité : mode d'emploi",
            excerpt: "Tout savoir sur cette formule flexible de location de 1 à 10 mois, idéale pour certains profils de locataires.",
            date: "15 décembre 2024",
            image: "/images/blog/article-6.jpg",
            slug: "bail-mobilite-mode-emploi",
        },
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Conseils": return "bg-[#06B6D4] text-white";
            case "Marché": return "bg-[#16A34A] text-white";
            case "Actualité": return "bg-[#024053] text-white";
            case "Guides": return "bg-[#F59E0B] text-white";
            default: return "bg-gray-200 text-gray-700";
        }
    };

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#024053] to-[#06B6D4]">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        Actualités & Blog
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Conseils, actualités et tendances de la gestion locative
                    </p>
                </div>
            </section>

            {/* Coming Soon Banner */}
            <section className="py-8 bg-yellow-50 border-y border-yellow-200">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-3 bg-yellow-100 border-2 border-yellow-400 rounded-lg px-6 py-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                        <p className="text-yellow-900 font-medium">
                            Section en cours de développement - Articles à venir prochainement
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-200">
                                    {/* Placeholder pour image - vous ajouterez les vraies images */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <Tag className="w-12 h-12" />
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {article.date}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-[#024053] mb-3 group-hover:text-[#06B6D4] transition-colors">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                                        {article.excerpt}
                                    </p>

                                    {/* Read more link */}
                                    <button
                                        disabled
                                        className="inline-flex items-center gap-2 text-[#06B6D4] font-medium text-sm group-hover:gap-3 transition-all cursor-not-allowed opacity-50"
                                    >
                                        Lire la suite
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#F8FAFB]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] mb-4">
                        Des questions sur la gestion locative ?
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] mb-6">
                        Notre équipe est à votre écoute pour répondre à toutes vos interrogations
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