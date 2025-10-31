'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'oxyloc-consent';

// TODO: ⬇️ remplace par tes vrais IDs
const GA_ID = 'G-XXXXXXX';      // ex: G-ABCDEF1234
const CLARITY_ID = 'xxxxxx';    // ex: o1a2b3c4d5

function loadGoogleAnalytics(id: string) {
  if (!id || id === 'G-XXXXXXX') return;
  if (document.getElementById('ga-script')) return;

  // gtag.js
  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  // config
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', id, { anonymize_ip: true });
}

function loadClarity(projectId: string) {
  if (!projectId || projectId === 'xxxxxx') return;
  if ((window as any).clarity) return;

  (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', projectId);
}

export default function AnalyticsLoader() {
  useEffect(() => {
    function maybeLoad() {
      const c = localStorage.getItem(STORAGE_KEY);
      if (c !== 'accepted') return;
      if ((window as any)._oxylocAnalyticsLoaded) return;
      (window as any)._oxylocAnalyticsLoaded = true;

      loadGoogleAnalytics(GA_ID);
      loadClarity(CLARITY_ID);
    }

    // initial
    try {
      maybeLoad();
    } catch { }

    // re-run when consent changes
    const onChange = () => {
      try {
        maybeLoad();
      } catch { }
    };
    window.addEventListener('oxyloc-consent-changed', onChange);
    return () => window.removeEventListener('oxyloc-consent-changed', onChange);
  }, []);

  return null;
}
