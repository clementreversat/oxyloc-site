export const metadata = {
    title: "Honoraires – Oxyloc",
    description: "Consultez nos honoraires de gestion locative",
};

export default function HonorairesPage() {
    return (
        <main className="bg-white py-12 md:py-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#024053] mb-8">
                    Nos honoraires
                </h1>

                <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
                    Consultez notre grille tarifaire détaillée pour découvrir nos offres de gestion locative.
                </p>

                <a
                    href="/pdf/grille-tarifaire.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm transition"
                >
                    Consulter notre grille tarifaire (PDF)
                </a>
            </div>
        </main>
    );
}