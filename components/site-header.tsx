"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/prescripteurs", label: "Prescripteurs" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Aller à l’accueil">
          <Image src="/logo1.svg" alt="Oxyloc" width={120} height={32} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gray-900 transition">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-slate-100"
        >
          <span className="block w-5 h-0.5 bg-slate-800 mb-1" />
          <span className="block w-5 h-0.5 bg-slate-800 mb-1" />
          <span className="block w-5 h-0.5 bg-slate-800" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* backdrop */}
          <button
            aria-label="Fermer le menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-white shadow-xl p-6">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Aller à l’accueil" onClick={() => setOpen(false)}>
                <Image src="/logo1.svg" alt="Oxyloc" width={100} height={28} />
              </Link>
              <button
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-slate-100"
              >
                <span className="block w-5 h-0.5 bg-slate-800 rotate-45 translate-y-[3px]" />
                <span className="block w-5 h-0.5 bg-slate-800 -rotate-45 -translate-y-[3px]" />
              </button>
            </div>
            <nav className="mt-6 grid gap-3 text-base">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
