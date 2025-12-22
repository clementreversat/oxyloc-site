"use client";

import { useEffect, useState } from "react";

type Props = {
  id?: string;
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({
  id = "contact-modal",
  open,
  onClose,
}: Props) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset status when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => setStatus("idle"), 300);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdrjlqo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
          <h3
            id={`${id}-title`}
            className="text-xl font-semibold text-[var(--primary)]"
          >
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

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          {/* Prénom */}
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium mb-1">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              required
              disabled={status === "submitting"}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium mb-1">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              disabled={status === "submitting"}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={status === "submitting"}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          {/* Téléphone (optionnel) */}
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium mb-1"
            >
              Téléphone{" "}
              <span className="text-gray-400 text-xs">(optionnel)</span>
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              disabled={status === "submitting"}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          {/* Type de demande */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Type de demande <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              name="type"
              required
              disabled={status === "submitting"}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Sélectionnez...</option>
              <option value="proprietaire">Je suis propriétaire</option>
              <option value="partenaire">
                Je suis professionnel / partenaire
              </option>
              <option value="locataire">Je cherche un logement</option>
              <option value="autre">Autre demande</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              disabled={status === "submitting"}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          {/* Success Message */}
          {status === "success" && (
            <div className="rounded-md bg-green-50 border border-green-200 p-3">
              <p className="text-sm text-green-800">
                ✅ Message envoyé avec succès! Nous vous répondrons rapidement.
              </p>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="rounded-md bg-red-50 border border-red-200 p-3">
              <p className="text-sm text-red-800">
                ❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter
                directement à contact@oxyloc.fr
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={status === "submitting"}
              className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-5 py-2.5 rounded-md text-white bg-[#06B6D4] hover:brightness-105 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
