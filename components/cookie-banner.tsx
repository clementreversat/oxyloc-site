'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'oxyloc-consent'; // 'accepted' | 'rejected'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const v = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!v) setVisible(true);

    // Small API to reopen from anywhere (footer link, etc.)
    (window as any).showCookieBanner = () => setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
    window.dispatchEvent(new Event('oxyloc-consent-changed'));
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
    window.dispatchEvent(new Event('oxyloc-consent-changed'));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120]">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <p className="text-sm text-gray-700">
            Nous utilisons des cookies de mesure d’audience (Google Analytics) et d’expérience
            utilisateur (Microsoft Clarity). Vous pouvez accepter ou refuser. Vous pourrez changer
            d’avis plus tard.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={reject}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="rounded-md bg-[#06B6D4] px-4 py-2 text-sm font-medium text-white hover:brightness-105 shadow-sm"
            >
              Accepter
            </button>
            <button
              onClick={() => setVisible(false)}
              className="ml-auto rounded-md px-3 py-2 text-xs text-gray-500 hover:bg-gray-50"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
