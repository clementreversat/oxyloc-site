import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm text-[var(--muted-foreground)]">
          <div>
            <h4 className="text-[var(--card-foreground)] font-semibold mb-2">Oxyloc</h4>
            <p>Gestion locative simple et fiable.</p>
          </div>
          <div>
            <h4 className="text-[var(--card-foreground)] font-semibold mb-2">Liens</h4>
            <ul className="space-y-1">
              <li><Link className="hover:opacity-80" href="/services">Services</Link></li>
              <li><Link className="hover:opacity-80" href="/tarifs">Tarifs</Link></li>
              <li><Link className="hover:opacity-80" href="/a-propos">À propos</Link></li>
              <li><Link className="hover:opacity-80" href="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--card-foreground)] font-semibold mb-2">Contact</h4>
            <p>Email: contact@oxyloc.fr</p>
            <div className="mt-2 flex gap-3">
              <a className="hover:opacity-80" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a className="hover:opacity-80" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a className="hover:opacity-80" href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Oxyloc. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
