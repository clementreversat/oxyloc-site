import type { Metadata } from "next";
import "./css/style.css";
import Script from "next/script";
import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GAListener from "./ga-listener";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-140RV9FP1T";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "tx20lk3kgk";
const isProd = process.env.VERCEL_ENV === "production";

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

        {/* Track route changes for GA4 */}
        <Suspense fallback={null}>
          <GAListener />
        </Suspense>

        {/* Google Analytics 4 */}
        {isProd && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {isProd && (
          <Script id="clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}

        {/* Délégation globale CTA "Nous contacter" */}
        <Script id="contact-delegate" strategy="afterInteractive">
          {`
            // Clique sur [data-contact-open] ou <a href="#contact-modal"> ouvre le modal
            document.addEventListener('click', function(e) {
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
            });
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
