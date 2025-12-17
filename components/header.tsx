

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./contact-modal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [espaceDropdownOpen, setEspaceDropdownOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setContactOpen(true);
    window.addEventListener("open-contact", onOpen as EventListener);
    return () => window.removeEventListener("open-contact", onOpen as EventListener);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setEspaceDropdownOpen(false);
    if (espaceDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [espaceDropdownOpen]);

  return (
    <header className="sticky top-0 z-30 bg-red-600 shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between py-3">
          
          {/* Left: logo */}
          <Link href="/" aria-label="Oxyloc" className="flex items-center">
            <Image
              src="/logo1.svg"
              alt="Oxyloc"
              width={180}
              height={55}
              priority
            />
          </Link>

          {/* Center: nav (desktop) */}
          <nav className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium text-white">
            <Link href="/notre-approche" className="hover:opacity-80 transition-opacity">
              Notre approche
            </Link>
            <Link href="/notre-offre" className="hover:opacity-80 transition-opacity">
              Notre offre
            </Link>
            <Link href="/vos-appreciations" className="hover:opacity-80 transition-opacity">
              Vos appréciations
            </Link>
            <Link href="/notre-equipe" className="hover:opacity-80 transition-opacity">
              Notre équipe
            </Link>
            <Link href="/recrutement" className="hover:opacity-80 transition-opacity">
              Recrutement
            </Link>
            <Link href="/nos-locations" className="hover:opacity-80 transition-opacity">
              Nos locations
            </Link>
          </nav>

          {/* Right: CTA buttons (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Dropdown for "Mon Espace" */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEspaceDropdownOpen(!espaceDropdownOpen);
                }}
                className="inline-flex items-center gap-1 rounded px-4 py-2 text-sm font-medium text-red-600 bg-white hover:bg-gray-100 transition shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Mon Espace</span>
                <svg
                  className={`w-4 h-4 transition-transform ${espaceDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {espaceDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-xl border border-gray-200 py-2">
                  <a
                    href="https://extranet.wipimo.fr/xnet/login?auth=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100 transition"
                  >
                    <div className="font-medium">Espace Propriétaire</div>
                    <div className="text-xs text-gray-500">Accéder à mon extranet</div>
                  </a>
                  <div className="h-px bg-gray-200 my-1" />
                  <a
                    href="https://extranet.wipimo.fr/xnet/login?auth=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100 transition"
                  >
                    <div className="font-medium">Espace Partenaire</div>
                    <div className="text-xs text-gray-500">Accès professionnels</div>
                  </a>
                </div>
              )}
            </div>

            {/* Contact button */}
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-1 rounded px-4 py-2 text-sm font-medium text-white bg-black hover:opacity-90 transition shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-white/30 px-3 py-2 text-white"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/40" onClick={() => setMenuOpen(false)}>
          <div
            className="ml-auto h-full w-80 bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4 text-gray-800">
              <Link href="/notre-approche" onClick={() => setMenuOpen(false)}>Notre approche</Link>
              <Link href="/notre-offre" onClick={() => setMenuOpen(false)}>Notre offre</Link>
              <Link href="/vos-appreciations" onClick={() => setMenuOpen(false)}>Vos appréciations</Link>
              <Link href="/notre-equipe" onClick={() => setMenuOpen(false)}>Notre équipe</Link>
              <Link href="/recrutement" onClick={() => setMenuOpen(false)}>Recrutement</Link>
              <Link href="/nos-locations" onClick={() => setMenuOpen(false)}>Nos locations</Link>

              <button
                onClick={() => { setMenuOpen(false); setContactOpen(true); }}
                className="mt-4 rounded-md bg-red-600 px-4 py-3 text-white font-medium"
              >
                Nous contacter
              </button>
            </nav>
          </div>
        </div>
      )}

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
