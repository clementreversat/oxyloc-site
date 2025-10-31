'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "@/components/contact-modal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Left: logo */}
          <Link href="/" aria-label="Oxyloc" className="flex items-center">
            <Image
              src="/logo1.svg"
              alt="Oxyloc"
              width={130}
              height={40}
              priority
              style={{ height: "auto", width: "auto", maxWidth: "130px" }}
            />
          </Link>

          {/* Center: navigation (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-20 text-base font-medium text-[#024053]">
            <Link href="/services" className="hover:opacity-70 transition-opacity">Nos services</Link>
            <Link href="/tarifs" className="hover:opacity-70 transition-opacity">Tarifs</Link>
            <Link href="/a-propos" className="hover:opacity-70 transition-opacity">À propos</Link>
          </nav>

          {/* Right: CTA (desktop) */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              aria-controls="contact-modal"
              aria-expanded={contactOpen}
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-[#024053]"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
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
        <div className="md:hidden fixed inset-0 z-[60] bg-black/40" onClick={() => setMenuOpen(false)}>
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
              <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:opacity-70">Nos services</Link>
              <Link href="/tarifs" onClick={() => setMenuOpen(false)} className="hover:opacity-70">Tarifs</Link>
              <Link href="/a-propos" onClick={() => setMenuOpen(false)} className="hover:opacity-70">À propos</Link>
              <button
                type="button"
                aria-controls="contact-modal"
                aria-expanded={contactOpen}
                onClick={() => { setMenuOpen(false); setContactOpen(true); }}
                className="mt-2 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
              >
                Nous contacter
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal
        id="contact-modal"
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </header>
  );
}
