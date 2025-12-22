"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import AnalyticsLoader from "@/components/analytics-loader";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandby = pathname === "/standby";

  if (isStandby) {
    // Standby: no header/footer, no cookies banner, no analytics
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieBanner />

      {/* Analytics loader - only loads after user consent */}
      <Suspense fallback={null}>
        <AnalyticsLoader />
      </Suspense>
    </>
  );
}
