export const metadata = {
  title: "Contact – Oxyloc",
  description:
    "Contactez Oxyloc pour la gestion locative à Paris et Versailles",
};

export default function ContactPage() {
  return (
    <main className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#024053] mb-8 text-center">
          Nous contacter
        </h1>

        <div className="space-y-8">
          {/* Company info */}
          <div className="text-center space-y-2">
            <p className="text-lg text-[var(--muted-foreground)]">
              <strong className="text-[#024053]">Oxyloc</strong> est une marque
              déposée de la société <strong>Immoxygen Gestion</strong>
            </p>
          </div>

          {/* Address & Contact */}
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[#024053]">Adresse</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                21, rue d'Angiviller
                <br />
                78000 Versailles
                <br />
                France
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[#024053]">Contact</h2>
              <p className="text-[var(--muted-foreground)]">
                <a
                  href="mailto:contact@oxyloc.fr"
                  className="text-[#06B6D4] hover:underline font-medium"
                >
                  contact@oxyloc.fr
                </a>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#024053] mb-4 text-center">
              Notre localisation
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.0!2d2.1294957!3d48.8105563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d0380903491%3A0xc51fdffe558ddca1!2s19%20Rue%20Mademoiselle%2C%2078000%20Versailles!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oxyloc - 19 rue Mademoiselle, 78000 Versailles"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/place/19+Rue+Mademoiselle,+78000+Versailles/@48.8105563,2.1269208,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#06B6D4] hover:underline font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
