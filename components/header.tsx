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
    return () =>
      window.removeEventListener("open-contact", onOpen as EventListener);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setEspaceDropdownOpen(false);
    if (espaceDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [espaceDropdownOpen]);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between py-3">
            {/* Left: logo */}
            <Link
              href="/"
              aria-label="Oxyloc"
              className="flex items-center shrink-0"
            >
              <Image
                src="/logo1.svg"
                alt="Oxyloc"
                width={160}
                height={50}
                priority
              />
            </Link>

            {/* Center: nav (desktop) - Now bigger and centered */}
            <nav className="hidden lg:flex items-center justify-center gap-10 text-base font-medium text-[#024053]">
              <Link
                href="/notre-approche"
                className="hover:text-[#06B6D4] transition-colors"
              >
                Notre approche
              </Link>
              <Link
                href="/notre-offre"
                className="hover:text-[#06B6D4] transition-colors"
              >
                Notre offre
              </Link>
              <Link
                href="/vos-appreciations"
                className="hover:text-[#06B6D4] transition-colors"
              >
                Vos appréciations
              </Link>
              <Link
                href="/notre-equipe"
                className="hover:text-[#06B6D4] transition-colors"
              >
                Notre équipe
              </Link>
              {/* Hidden for now - uncomment to show */}
              {/* <Link href="/nos-locations" className="hover:text-[#06B6D4] transition-colors">
                Nos Locations
              </Link> */}
            </nav>

            {/* Right: CTA buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Dropdown for "Mon Espace" */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEspaceDropdownOpen(!espaceDropdownOpen);
                  }}
                  className="inline-flex items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#024053] hover:brightness-110 transition shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Mon Espace</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${espaceDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {espaceDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-xl border border-gray-200 py-2 animate-fade-in">
                    <a
                      href="https://extranet.wipimo.fr/xnet/login?auth=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-[#024053] hover:bg-[#E0F2FE] transition"
                    >
                      <div className="font-medium">Espace Propriétaire</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Accéder à mon extranet
                      </div>
                    </a>
                    <div className="h-px bg-gray-200 my-1" />
                    <a
                      href="https://extranet.wipimo.fr/xnet/login?auth=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-[#024053] hover:bg-[#E0F2FE] transition"
                    >
                      <div className="font-medium">Espace Locataire</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Accéder à mon extranet
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Contact button - now opens modal */}
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#06B6D4] hover:brightness-105 transition shadow-sm cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile: hamburger */}
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-[#024053] hover:bg-gray-50 transition"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] bg-black/50 animate-fade-in"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="ml-auto h-full w-80 max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-[#024053] font-semibold text-lg">Menu</span>
              <button
                aria-label="Fermer le menu"
                className="rounded-md p-2 text-[#024053] hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/notre-approche"
                onClick={() => setMenuOpen(false)}
                className="text-[#024053] text-base font-medium py-2 hover:text-[#06B6D4] transition-colors"
              >
                Notre approche
              </Link>
              <Link
                href="/notre-offre"
                onClick={() => setMenuOpen(false)}
                className="text-[#024053] text-base font-medium py-2 hover:text-[#06B6D4] transition-colors"
              >
                Notre offre
              </Link>
              <Link
                href="/vos-appreciations"
                onClick={() => setMenuOpen(false)}
                className="text-[#024053] text-base font-medium py-2 hover:text-[#06B6D4] transition-colors"
              >
                Vos appréciations
              </Link>
              <Link
                href="/notre-equipe"
                onClick={() => setMenuOpen(false)}
                className="text-[#024053] text-base font-medium py-2 hover:text-[#06B6D4] transition-colors"
              >
                Notre équipe
              </Link>
              {/* Hidden for now - uncomment to show */}
              {/* <Link 
                href="/nos-locations" 
                onClick={() => setMenuOpen(false)}
                className="text-[#024053] text-base font-medium py-2 hover:text-[#06B6D4] transition-colors"
              >
                Nos Locations
              </Link> */}
            </nav>

            <hr className="border-gray-200 my-4" />

            {/* Mobile Espace links */}
            <div className="space-y-3 mb-6">
              <p className="text-xs uppercase text-gray-500 font-semibold">
                Accès Extranet
              </p>
              <a
                href="https://extranet.wipimo.fr/xnet/login?auth=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-4 py-3 text-base font-medium text-white bg-[#024053] hover:brightness-110 transition shadow-sm text-center"
              >
                Espace Propriétaire
              </a>

              <a
                href="https://extranet.wipimo.fr/xnet/login?auth=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-4 py-3 text-base font-medium text-[#024053] bg-[#E0F2FE] hover:bg-[#BAE6FD] transition text-center"
              >
                Espace Locataire
              </a>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Mobile Contact CTA - now opens modal */}
            <div className="mt-auto">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setContactOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 transition shadow-sm cursor-pointer"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
