import "./css/style.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import CookieBanner from "../components/cookie-banner";
import AnalyticsLoader from "../components/analytics-loader";
import Footer from "../components/footer";
import ContactModalWrapper from "../components/contact-modal-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Oxyloc – Gestion locative clé en main",
  description:
    "Solutions simples et durables pour prescripteurs et propriétaires.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* ✅ Import Dancing Script font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>

        {/* ✅ Client-only contact modal */}
        <ContactModalWrapper />

        {/* Footer */}
        <Footer />

        {/* Cookie banner + analytics */}
        <CookieBanner />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
