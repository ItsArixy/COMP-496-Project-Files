import { useState } from "react";

export default function BusinessFormPop({ open, onClose }) {
  const [businessName, setBusinessName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("Barbering");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      businessName,
      contactInfo,
      location,
      serviceType,
    });

    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-3xl border border-yellow-300/40 bg-blue-800/90 p-6 text-white shadow-2xl backdrop-blur">
        <h2 className="text-2xl font-extrabold text-white">
          List Your Business
        </h2>

        <p className="mt-2 text-sm text-yellow-300/90">
          Add your business details so other Aggies can find your services.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block font-bold text-yellow-300">
              Business Name
            </label>
            <input
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-black/25 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
              placeholder="Ex: Aggie Cuts"
            />
          </div>

          <div>
            <label className="mb-1 block font-bold text-yellow-300">
              Contact Information
            </label>
            <input
              required
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-black/25 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
              placeholder="Email, phone number, or Instagram"
            />
          </div>

          <div>
            <label className="mb-1 block font-bold text-yellow-300">
              Location
            </label>
            <input
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-black/25 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
              placeholder="Campus, Greensboro, or online"
            />
          </div>

          <div>
            <label className="mb-1 block font-bold text-yellow-300">
              Type of Service Offered
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-black/25 px-4 py-3 text-white outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
            >
              <option className="text-black">Barbering</option>
              <option className="text-black">Arts and Crafts</option>
              <option className="text-black">Graphic Design</option>
              <option className="text-black">Photography</option>
              <option className="text-black">Beauty</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="font-semibold text-white hover:underline"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-yellow-300 px-5 py-3 font-bold text-black transition hover:brightness-105"
            >
              Save Business
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}