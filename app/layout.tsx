import type { Metadata } from "next";
import "./css/style.css";
import Script from "next/script";
import GAListener from "./ga-listener";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-140RV9FP1T";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "tx20lk3kgk";

export const metadata: Metadata = {
  title: "Oxyloc",
  description: "Gestion locative simple et fiable",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* --- Garde ici ton header, footer, providers, etc. --- */}
        {children}

        {/* Envoi d’un page_view à chaque changement de route */}
        <GAListener />

        {/* Google Analytics 4 */}
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

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
