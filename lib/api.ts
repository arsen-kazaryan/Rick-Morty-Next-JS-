import { Character, LocationItem } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 120 },
  });

  if (!res.ok) throw new Error(`Failed to fetch: ${url}`);

  return res.json();
}

export async function getCharacters(): Promise<Character[]> {
  const data = await fetchJson<{ results: Character[] }>(
    `${BASE_URL}/character`
  );
  return data.results;
}

export async function getCharacter(id: string): Promise<Character> {
  return fetchJson<Character>(`${BASE_URL}/character/${id}`);
}

export async function getLocations(): Promise<LocationItem[]> {
  const data = await fetchJson<{ results: LocationItem[] }>(
    `${BASE_URL}/location`
  );
  return data.results;
}