"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Home, Maximize2, Euro } from "lucide-react";

export default function LocationPage() {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    maxPrice: "",
    minSurface: "",
  });

  // Placeholder properties - you'll add real ones later
  const properties = [
    {
      id: 1,
      title: "Appartement 2 pièces - Centre Versailles",
      location: "Versailles",
      price: 1200,
      surface: 45,
      rooms: 2,
      dpe: "C", // Add DPE rating
      image: "/images/locations/property-1.jpg",
      available: true,
    },
    {
      id: 2,
      title: "Studio meublé - Paris 15ème",
      location: "Paris 15ème",
      price: 950,
      surface: 25,
      rooms: 1,
      dpe: "D", // Add DPE rating
      image: "/images/locations/property-2.jpg",
      available: true,
    },
    // Add more properties here
  ];

  return (
    <main className="bg-white">
      {/* Hero Section with Search */}
      <section className="relative min-h-[400px] py-12 bg-gradient-to-r from-[#024053] to-[#06B6D4]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
            Biens en location
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center opacity-90">
            Trouvez votre prochain logement à Paris et Versailles
          </p>

          {/* Search Filters */}
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de bien
                </label>
                <select
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                >
                  <option value="">Tous</option>
                  <option value="appartement">Appartement</option>
                  <option value="studio">Studio</option>
                  <option value="maison">Maison</option>
                  <option value="chambre">Chambre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                >
                  <option value="">Toutes</option>
                  <option value="versailles">Versailles</option>
                  <option value="paris">Paris</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loyer max (€)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 1500"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Surface min (m²)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 30"
                  value={filters.minSurface}
                  onChange={(e) =>
                    setFilters({ ...filters, minSurface: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#06B6D4] px-8 py-3 text-white font-medium hover:brightness-105 transition shadow-lg">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid - Placeholder */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[#024053]">
              Biens disponibles
            </h2>
            <button className="text-sm text-[#06B6D4] hover:underline">
              Créer une alerte
            </button>
          </div>

          {/* Property Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Home className="w-16 h-16" />
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price} €/mois CC
                  </div>
                  {/* DPE Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold shadow-md">
                    <span className="text-gray-600">DPE: </span>
                    <span
                      className={`
          ${property.dpe === "A" || property.dpe === "B" ? "text-green-600" : ""}
          ${property.dpe === "C" || property.dpe === "D" ? "text-yellow-600" : ""}
          ${property.dpe === "E" || property.dpe === "F" || property.dpe === "G" ? "text-red-600" : ""}
        `}
                    >
                      {property.dpe}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-[#024053] mb-2">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-4 h-4" />
                      {property.surface} m²
                    </div>
                  </div>

                  <button className="w-full bg-[#06B6D4] text-white py-2 rounded-lg hover:brightness-105 transition font-medium">
                    Voir le bien
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {properties.length === 0 && (
            <div className="text-center py-16">
              <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Aucun bien disponible pour le moment
              </h3>
              <p className="text-gray-500 mb-6">
                Les nouvelles offres apparaîtront ici prochainement
              </p>
              <button className="inline-flex items-center gap-2 text-[#06B6D4] hover:underline">
                Créer une alerte pour être prévenu
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8FAFB]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#024053] mb-4">
            Vous êtes propriétaire ?
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">
            Confiez-nous la gestion de votre bien et trouvez le locataire idéal
          </p>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm transition cursor-pointer"
          >
            Nous contacter
          </button>
        </div>
      </section>
    </main>
  );
}
