import { getLocations } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Locations'
};

const LocationsPage = async () => {
  const locations = await getLocations();

  return (
    <div className="bg-scanlines min-h-screen px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.25em] text-(--muted)">
          Charted Dimensions
        </p>
        <h1 className="mb-8 text-3xl font-bold text-(--text)">Locations</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-lg border border-(--panel-line) bg-(--panel) p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-(--portal)">
                #{String(loc.id).padStart(3, '0')}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-(--text)">{loc.name}</h2>
              <p className="mt-2 text-xs text-(--muted)">
                Type · {loc.type}
              </p>
              <p className="mt-3 border-t border-dashed border-(--panel-line) pt-3 font-mono text-[11px] italic text-(--muted)">
                {loc.dimension}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
