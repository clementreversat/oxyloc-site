"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center gap-6">
          {/* Row 1: All logos together (CEGC + FNAIM + LinkedIn) */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="https://www.c-garanties.com/agents-immobiliers-et-administrateurs-de-biens/administrateurs-de-biens-et-agents-immobiliers/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity p-2"
            >
              <Image
                src="/images/logos/CEGC.png"
                alt="CEGC - Compagnie Européenne de Garanties et Cautions"
                width={140}
                height={140}
                className="h-16 w-auto"
              />
            </a>

            <a
              href="https://www.fnaim.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity p-2"
            >
              <Image
                src="/images/logos/FNAIM.png"
                alt="FNAIM"
                width={140}
                height={140}
                className="h-16 w-auto"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/linkedin.com-company-immoxygen/posts/?feedView=all"
              aria-label="Immoxygen LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.84v2.05h.06c.54-1.03 1.86-2.12 3.83-2.12 4.09 0 4.85 2.69 4.85 6.19V23h-4v-6.64c0-1.58-.03-3.62-2.21-3.62-2.22 0-2.56 1.73-2.56 3.51V23h-4V8z" />
              </svg>
            </a>
          </div>

          {/* Row 2: Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted-foreground)]">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <Link href="/honoraires" className="hover:underline">
              Honoraires
            </Link>
            <button
              type="button"
              data-contact-open
              className="hover:underline cursor-pointer"
              title="Contact"
            >
              Contact
            </button>
            <Link
              href="/blog"
              className="hover:underline whitespace-nowrap"
            >
              Actualités / Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}