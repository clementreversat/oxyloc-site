'use client';

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Close when clicking backdrop
  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl animate-fade-in">
        <div className="flex items-center justify-between">
          <h3 id="contact-title" className="text-xl font-semibold text-[var(--primary)]">
            Nous contacter
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form
          className="mt-4 space-y-4"
          action="mailto:contact@oxyloc.fr"
          method="post"
          encType="text/plain"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              name="nom"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              name="message"
              rows={4}
              required
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium text-white bg-[#06B6D4] hover:brightness-105 shadow-sm"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
