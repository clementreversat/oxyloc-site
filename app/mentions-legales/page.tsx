import Header from "@/components/header"; // adjust the path if your Header lives in /components/ui/header
// no Link or Logo imports needed now

export const metadata = {
    title: "Mentions légales – Oxyloc",
    description:
        "Mentions légales du site Oxyloc – gestion locative clé en main à Paris et Versailles.",
};

export default function MentionsLegales() {
    return (
        <>
            {/* ✅ Reuse the same site header so logo, font, spacing match everywhere */}
            <Header />

            <main className="bg-white py-12 md:py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-semibold text-[#024053] mb-8">Mentions légales</h1>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-[#024053] mb-2">Éditeur du site</h2>
                            <p>
                                Le site <strong>www.oxyloc.fr</strong> est édité par la société{" "}
                                <strong>Oxyloc</strong>, société spécialisée dans la gestion locative, domiciliée
                                à Paris et Versailles. Contact :{" "}
                                <a href="mailto:contact@oxyloc.fr" className="text-[#06B6D4] hover:underline">
                                    contact@oxyloc.fr
                                </a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#024053] mb-2">Hébergeur</h2>
                            <p>
                                Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133,
                                Walnut, CA 91789, États-Unis.{" "}
                                <a
                                    href="https://vercel.com"
                                    className="text-[#06B6D4] hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://vercel.com
                                </a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#024053] mb-2">Propriété intellectuelle</h2>
                            <p>
                                L’ensemble du contenu du site (textes, images, graphismes, logos, vidéos, icônes)
                                est la propriété exclusive d’Oxyloc, sauf mention contraire. Toute reproduction,
                                diffusion ou exploitation, totale ou partielle, du contenu sans autorisation
                                préalable est interdite.
                            </p>
                            <p className="mt-2">
                                Les photos publiées sur le site sont la propriété d’Oxyloc ou utilisées avec
                                l’autorisation de leurs auteurs. Toute demande de retrait ou de crédit peut être
                                adressée à{" "}
                                <a href="mailto:contact@oxyloc.fr" className="text-[#06B6D4] hover:underline">
                                    contact@oxyloc.fr
                                </a>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#024053] mb-2">Données personnelles</h2>
                            <p>
                                Oxyloc s’engage à respecter la confidentialité des données personnelles collectées
                                via le formulaire de contact et à ne les utiliser qu’aux fins de traitement des
                                demandes. Aucune donnée n’est transmise à des tiers à des fins commerciales.
                            </p>
                            <p className="mt-2">
                                Conformément au RGPD, vous pouvez exercer vos droits d’accès, de rectification ou de
                                suppression en nous écrivant à{" "}
                                <a href="mailto:contact@oxyloc.fr" className="text-[#06B6D4] hover:underline">
                                    contact@oxyloc.fr
                                </a>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#024053] mb-2">Cookies et statistiques</h2>
                            <p>
                                Le site utilise des cookies nécessaires à son bon fonctionnement, ainsi que des
                                cookies de mesure d’audience via <strong>Google Analytics</strong>. Ces cookies
                                permettent d’analyser la fréquentation du site afin d’en améliorer le contenu et
                                l’expérience utilisateur.
                            </p>
                            <p className="mt-2">
                                Lors de votre première visite, une bannière vous invite à accepter ou refuser ces
                                cookies. Vous pouvez modifier votre choix à tout moment dans les paramètres de votre
                                navigateur.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#024053] mb-2">Responsabilité</h2>
                            <p>
                                Malgré le soin apporté à la mise à jour des informations, Oxyloc ne saurait être
                                tenue responsable d’erreurs ou omissions présentes sur le site, ni des dommages
                                directs ou indirects pouvant résulter de son utilisation.
                            </p>
                        </div>
                    </section>

                    <p className="mt-10 text-sm text-gray-500">
                        © {new Date().getFullYear()} Oxyloc – Tous droits réservés.
                    </p>
                </div>
            </main>
        </>
    );
}
