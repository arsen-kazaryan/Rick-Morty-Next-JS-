import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Locations'
};

interface LocationItem {
  id: number;
  name: string;
  type: string;      
  dimension: string;
}

async function getLocations(): Promise<LocationItem[]> {
  const res = await fetch('https://rickandmortyapi.com/api/location', {
    next: {
      revalidate: 120, 
    },
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data.results;
}

const LocationsPage = async () => {
  const locations = await getLocations();

  return (
    <div className="flex flex-col items-center bg-zinc-50 p-6 dark:bg-zinc-950 min-h-screen">
      <h1 className="text-3xl font-extrabold my-6 text-zinc-800 dark:text-white">
        Locations
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {locations.map((loc) => (
          <div key={loc.id} className="border border-zinc-200 p-5 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {loc.name}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold">Type:</span> {loc.type}
              </p>
            </div>
            <p className="text-xs text-zinc-400 mt-4 italic">
              {loc.dimension}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
