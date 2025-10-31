'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 place-items-center gap-4 text-sm text-[var(--color-muted-fg,#475569)]">
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/tarifs" className="hover:underline">Tarifs</Link>
          <Link href="/a-propos" className="hover:underline">À propos</Link>
          <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
          <a href="#contact-modal" className="hover:underline">Nous contacter</a>

          <div className="flex items-center gap-4">
            {/* socials unchanged */}
            <a href="https://facebook.com" aria-label="Facebook" className="opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H8.08v-2.91h2.36V9.41c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.59l-.41 2.91h-2.18V22c4.78-.81 8.44-4.95 8.44-9.94z" /></svg>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.84v2.05h.06c.54-1.03 1.86-2.12 3.83-2.12 4.09 0 4.85 2.69 4.85 6.19V23h-4v-6.64c0-1.58-.03-3.62-2.21-3.62-2.22 0-2.56 1.73-2.56 3.51V23h-4V8z" /></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter/X" className="opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.55 3H17.9l-5.22 6.9L7.47 3H3l6.5 9.3L3.25 21h2.66l5.65-7.46L16.86 21h4.47l-7-9.91L20.55 3z" /></svg>
            </a>


          </div>
        </div>
      </div>
    </footer>
  );
}
