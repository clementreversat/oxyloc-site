"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function VosAppreciationsPage() {
  const testimonials = [
    { quote: "Une gestion exceptionnelle, avec un suivi rigoureux et minutieux.", author: "Sebastien" },
    { quote: "Professionnels, rapides et sérieux. Je recommande.", author: "JC" },
    { quote: "Oxyloc a tout pris en main, mes clients sont ravis", author: "Hélène" }
  ];

  return (
    <main className="bg-white">
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/images/vos-appreciations/Image_MicroVintage.jpg" alt="Background" fill className="object-cover" style={{ filter: 'blur(3px)' }} />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          {/* Google Review Rating */}
          <div className="mb-8 inline-flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-3">
              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-[#024053]">5.0</span>
            </div>

            <a
              href="https://www.google.com/maps/place/Oxyloc/@48.8105563,2.1269208,17z/data=!4m18!1m9!3m8!1s0x47e67d0380903491:0xc51fdffe558ddca1!2sOxyloc!8m2!3d48.8105563!4d2.1294957!9m1!1b1!16s%2Fg%2F11yp8x1_hp!3m7!1s0x47e67d0380903491:0xc51fdffe558ddca1!8m2!3d48.8105563!4d2.1294957!9m1!1b1!16s%2Fg%2F11yp8x1_hp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
            >
              <span>Voir tous les avis sur Google</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-12">
            Parce que c'est plus impactant, <span className="text-cyan-500">nous préférons laisser nos clients parler de nous…</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Une gestion exceptionnelle, avec un suivi rigoureux et minutieux.", author: "Sebastien" },
              { quote: "Professionnels, rapides et sérieux. Je recommande.", author: "JC" },
              { quote: "Oxyloc a tout pris en main, mes clients sont ravis", author: "Hélène" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-900 text-base leading-relaxed italic mb-4">"{item.quote}"</p>
                <p className="text-cyan-500 font-medium">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">Témoignages vidéo</h2>
          <p className="text-center text-gray-600 mb-12">Bientôt disponible : découvrez les témoignages de nos clients en vidéo</p>
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-600">Carrousel de vidéos testimonials</p>
                <p className="text-xs text-gray-400">À venir prochainement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}