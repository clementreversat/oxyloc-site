"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./contact-modal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setContactOpen(true);
    window.addEventListener("open-contact", onOpen as EventListener);
    return () => window.removeEventListener("open-contact", onOpen as EventListener);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between py-3">
          {/* Left: logo */}
          <Link href="/" aria-label="Oxyloc" className="flex items-center">
            <Image src="/logo1.svg" alt="Oxyloc" width={110} height={35} priority />
          </Link>

          {/* Center: nav (desktop) */}
          <nav className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium text-[#024053]">
            <Link href="/notre-approche" className="hover:opacity-70 transition-opacity">Notre approche</Link>
            <Link href="/notre-offre" className="hover:opacity-70 transition-opacity">Notre offre</Link>
            <Link href="/vos-appreciations" className="hover:opacity-70 transition-opacity">Vos appréciations</Link>
            <Link href="/notre-equipe" className="hover:opacity-70 transition-opacity">Notre équipe</Link>
            <Link href="/location" className="hover:opacity-70 transition-opacity uppercase">Location</Link>
          </nav>

          {/* Right: CTA buttons (desktop) - smaller buttons */}
          <div className="hidden lg:flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center rounded px-3 py-1 text-xs font-medium text-white bg-[#06B6D4] hover:brightness-105 transition shadow-sm cursor-pointer"
            >
              Nous contacter
            </button>
            <Link
              href="/espace-partenaire"
              className="inline-flex items-center justify-center rounded px-3 py-1 text-xs font-medium text-[#024053] border border-[#024053] hover:bg-[#024053] hover:text-white transition"
            >
              Espace partenaire
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-[#024053]"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/40" onClick={() => setMenuOpen(false)}>
          <div
            className="ml-auto h-full w-80 bg-white shadow-xl p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-[#024053] font-semibold">Menu</span>
              <button
                aria-label="Fermer"
                className="rounded-md p-1 text-[#024053] hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4 text-[#024053] text-base">
              <Link href="/notre-approche" onClick={() => setMenuOpen(false)} className="hover:opacity-70">Notre approche</Link>
              <Link href="/notre-offre" onClick={() => setMenuOpen(false)} className="hover:opacity-70">Notre offre</Link>
              <Link href="/vos-appreciations" onClick={() => setMenuOpen(false)} className="hover:opacity-70">Vos appréciations</Link>
              <Link href="/notre-equipe" onClick={() => setMenuOpen(false)} className="hover:opacity-70">Notre équipe</Link>
              <Link href="/location" onClick={() => setMenuOpen(false)} className="hover:opacity-70 uppercase">LOCATION</Link>

              <hr className="my-2" />

              <button
                type="button"
                onClick={() => { setMenuOpen(false); setContactOpen(true); }}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 transition shadow-sm cursor-pointer"
              >
                Nous contacter
              </button>
              <Link
                href="/espace-partenaire"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-base font-medium text-[#024053] border border-[#024053] hover:bg-[#024053] hover:text-white transition"
              >
                Espace partenaire
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Modal contrôlé */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}