import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Left: logo */}
          <Link href="/" aria-label="Oxyloc" className="flex items-center">
            <Image
              src="/logo1.svg"
              alt="Oxyloc logo"
              width={150}   // <— increased from 120 to 150
              height={40}   // <— proportionally larger
              priority
            />
          </Link>

          {/* Center: navigation */}
          <nav className="hidden md:flex items-center justify-center gap-30 text-base font-medium text-[#024053]">
            {/* ↑ gap-16 = more spacing between the 3 titles
                ↑ text-base = same font size as the button */}
            <Link href="/services" className="hover:opacity-70 transition-opacity">
              Nos services
            </Link>
            <Link href="/tarifs" className="hover:opacity-70 transition-opacity">
              Tarifs
            </Link>
            <Link href="/a-propos" className="hover:opacity-70 transition-opacity">
              À propos
            </Link>
          </nav>

          {/* Right: contact button */}
          <div className="flex items-center">
            <Link
              href="#contact-modal"
              scroll={false}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5
             text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
