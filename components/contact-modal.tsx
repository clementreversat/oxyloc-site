'use client';

import { useEffect } from "react";

type Props = {
  id?: string;
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ id = "contact-modal", open, onClose }: Props) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 id={`${id}-title`} className="text-xl font-semibold text-[var(--primary)]">
            Nous contacter
          </h3>
          <button
            aria-label="Fermer"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 rounded-md p-1"
          >
            ✕
          </button>
        </div>

        <form
          className="mt-4 space-y-3"
          action="mailto:contact@oxyloc.fr"
          method="POST"
          encType="text/plain"
          onSubmit={(e) => {
            // Optionnel : Ajout d'une confirmation
            if (!window.confirm('Voulez-vous envoyer ce message ?')) {
              e.preventDefault();
            }
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Nom</label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-md text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
