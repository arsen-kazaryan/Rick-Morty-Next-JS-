import { ApiResponse, Character, LocationItem } from "@/types";
import { notFound } from "next/navigation";

export const BASE_URL = "https://rickandmortyapi.com/api";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 120 },
  });
  if(res.status === 404) notFound()
  if (!res.ok) throw new Error(`Failed to fetch: ${url}`);

  return res.json();
}



export async function getCharacter(id: string): Promise<Character> {
  return fetchJson<Character>(`${BASE_URL}/character/${id}`);
}



export async function getpage(page: string): Promise<ApiResponse> {
  return fetchJson<ApiResponse>(`${BASE_URL}/character/?page=${page}`);
}

export async function getLocations(): Promise<LocationItem[]> {
  const data = await fetchJson<{ results: LocationItem[] }>(
    `${BASE_URL}/location`
  );
  return data.results;
}
