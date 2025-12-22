export const metadata = {
  title: "Mentions légales – Oxyloc",
  description:
    "Mentions légales du site Oxyloc – gestion locative à Paris et Versailles",
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#024053] mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-8">
            Le site internet que vous consultez actuellement, accessible à
            partir de l'URL{" "}
            <a
              href="https://www.oxyloc.fr"
              className="text-[#06B6D4] hover:underline"
            >
              https://www.oxyloc.fr
            </a>{" "}
            (le «&nbsp;Site&nbsp;» ou l'«&nbsp;Application&nbsp;») est édité par
            la société Immoxygen Gestion (la «&nbsp;Société&nbsp;»). Oxyloc est
            une marque déposée de la société Immoxygen Gestion, qui propose un
            service de location et gestion locative pour compte de tiers.
          </p>

          {/* Directeur de la publication */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-3">
              Directeur de la publication
            </h2>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
              <strong>Directeur de la publication :</strong> Thibault d'HALLUIN
              <br />
              <strong>Responsable de la rédaction :</strong> Identique au
              directeur de la publication
            </p>
          </section>

          {/* Hébergeur */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-3">
              Hébergeur du site
            </h2>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
              <br />
              Site :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06B6D4] hover:underline"
              >
                https://vercel.com
              </a>
              <br />
              Contact : support@vercel.com
            </p>
          </section>

          {/* Informations légales */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-3">
              Informations légales Immoxygen Gestion
            </h2>
            <div className="text-base text-[var(--muted-foreground)] leading-relaxed space-y-1">
              <p>
                <strong>Dénomination sociale :</strong> Immoxygen Gestion
              </p>
              <p>
                <strong>Nom commercial :</strong> OXYLOC
              </p>
              <p>
                <strong>Forme juridique :</strong> SAS
              </p>
              <p>
                <strong>Capital social :</strong> 10.000 euros
              </p>
              <p>
                <strong>Siège social :</strong> 19, rue Mademoiselle 78000
                Versailles
              </p>
              <p>
                <strong>RCS / SIREN :</strong> 931 763 528 RCS VERSAILLES
              </p>
              <p>
                <strong>Numéro de TVA intracommunautaire :</strong>{" "}
                FR80931763528
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:gestion@oxyloc.fr"
                  className="text-[#06B6D4] hover:underline"
                >
                  gestion@oxyloc.fr
                </a>
              </p>
              <p>
                <strong>Carte professionnelle :</strong> Gestion immobilière n°
                CPI 7801 2024 000 000 068, délivrée par la CCI Paris
                Ile-de-France
              </p>
              <p>
                <strong>
                  Assurance responsabilité civile professionnelle :
                </strong>{" "}
                GENERALI IARD, domicilié au 2 Rue Pillet-Will – 75009 PARIS
              </p>
              <p>
                <strong>Garantie financière :</strong> 110.000 euros, souscrite
                auprès de CEGC, domiciliée au 59, avenue Pierre Mendès France –
                75013 Paris
              </p>
              <p>
                <strong>Adhérent à un service de médiation :</strong> Médiation
                de la consommation – ANM Consommation – 2 rue de Colmar – 94300
                VINCENNES
                <br />
                <a
                  href="mailto:contact@anmconso.com"
                  className="text-[#06B6D4] hover:underline"
                >
                  contact@anmconso.com
                </a>{" "}
                ou{" "}
                <a
                  href="http://www.anmconso.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06B6D4] hover:underline"
                >
                  www.anmconso.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-3">
              Propriété intellectuelle
            </h2>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
              Le site internet ainsi que l'ensemble de ses éléments (textes,
              images, logos, charte graphique, etc.) sont la propriété exclusive
              de Immoxygen Gestion, sauf mention contraire. Toute reproduction,
              représentation, modification ou exploitation partielle ou totale
              est strictement interdite sans autorisation écrite préalable.
            </p>
          </section>

          {/* Données personnelles */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-3">
              Données personnelles
            </h2>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-3">
              Les informations collectées via le site sont destinées
              exclusivement à Immoxygen Gestion dans le cadre de la gestion de
              vos demandes. Conformément au Règlement Général sur la Protection
              des Données (RGPD), vous disposez d'un droit d'accès, de
              rectification, de suppression et d'opposition aux données vous
              concernant.
            </p>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
              Pour exercer ces droits, vous pouvez nous écrire à l'adresse :{" "}
              <a
                href="mailto:gestion@oxyloc.fr"
                className="text-[#06B6D4] hover:underline"
              >
                gestion@oxyloc.fr
              </a>
              .
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-3">
              Cookies
            </h2>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
              Le site peut être amené à utiliser des cookies à des fins de
              statistiques, de fonctionnement ou de personnalisation. Vous
              pouvez à tout moment désactiver les cookies en configurant votre
              navigateur.
            </p>
          </section>
        </div>

        {/* Copyright footer */}
        <p className="mt-12 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Oxyloc – Tous droits réservés.
        </p>
      </div>
    </main>
  );
}
