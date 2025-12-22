"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const STORAGE_KEY = "oxyloc-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-140RV9FP1T";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "tx20lk3kgk";

function loadGoogleAnalytics(id: string) {
  if (!id || id === "G-XXXXXXX") return;
  if (document.getElementById("ga-script")) return;

  // gtag.js
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  // config
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag("js", new Date());

  // Initial config with send_page_view: false (we'll send manually)
  gtag("config", id, {
    anonymize_ip: true,
    send_page_view: false,
  });

  // Send initial page view
  gtag("event", "page_view", {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });
}

function loadClarity(projectId: string) {
  if (!projectId || projectId === "xxxxxx") return;
  if ((window as any).clarity) return;

  (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", projectId);
}

function useGAPageviews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!(window as any).gtag) return;

    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // Send page_view event (not config!)
    (window as any).gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);
}

export default function AnalyticsLoader() {
  // Track page views on route changes
  useGAPageviews();

  useEffect(() => {
    function maybeLoad() {
      const c = localStorage.getItem(STORAGE_KEY);
      if (c !== "accepted") return;
      if ((window as any)._oxylocAnalyticsLoaded) return;
      (window as any)._oxylocAnalyticsLoaded = true;

      loadGoogleAnalytics(GA_ID);
      loadClarity(CLARITY_ID);
    }

    // initial load
    try {
      maybeLoad();
    } catch (error) {
      console.warn("Failed to load analytics:", error);
    }

    // re-run when consent changes
    const onChange = () => {
      try {
        maybeLoad();
      } catch (error) {
        console.warn("Failed to reload analytics:", error);
      }
    };
    window.addEventListener("oxyloc-consent-changed", onChange);
    return () => window.removeEventListener("oxyloc-consent-changed", onChange);
  }, []);

  return null;
}
