import type { Metadata } from "next";
import "./css/style.css";
import Script from "next/script";
import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import AnalyticsLoader from "@/components/analytics-loader";

export const metadata: Metadata = {
  title: "Oxyloc",
  description: "Gestion locative simple et fiable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />

        {/* Analytics loader - only loads after user consent */}
        <Suspense fallback={null}>
          <AnalyticsLoader />
        </Suspense>

        <Script id="contact-delegate" strategy="afterInteractive">
          {`
  // Fonction de déclenchement
  function openContact(e) {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const trigger = t.closest('[data-contact-open], a[href="#contact-modal"]');
    if (trigger) {
      e.preventDefault();
      window.dispatchEvent(new Event('open-contact'));
      if (location.hash === '#contact-modal') {
        history.replaceState(null, '', location.pathname + location.search);
      }
    }
  }

  // iOS/Safari: capter pointer + click (fallback)
  document.addEventListener('pointerup', openContact, { passive: false, capture: true });
  document.addEventListener('click', openContact, { passive: false, capture: true });

  // Arrivée directe avec #contact-modal
  if (location.hash === '#contact-modal') {
    window.dispatchEvent(new Event('open-contact'));
    history.replaceState(null, '', location.pathname + location.search);
  }
`}
        </Script>
      </body>
    </html>
  );
}
