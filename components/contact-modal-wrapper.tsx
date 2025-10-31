'use client';

import { useEffect, useState } from 'react';
import ContactModal from './contact-modal';

export default function ContactModalWrapper() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a[href="#contact-modal"]')) {
        e.preventDefault();
        setOpen(true);
      }
    }

    function handleHashChange() {
      if (window.location.hash === '#contact-modal') {
        setOpen(true);
        // Clean the hash so back button doesn't re-open
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('hashchange', handleHashChange);
    // Open if page loads with hash
    handleHashChange();

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <ContactModal open={open} onClose={() => setOpen(false)} />;
}
