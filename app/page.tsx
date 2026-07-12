import { notFound } from "next/navigation";
import Post from "../components/CharacterCard";

async function getPosts() {
  const res = await fetch('https://rickandmortyapi.com/api/character', {
    next: {
      revalidate: 120,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();

  return data.results;
}


export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat font-sans p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Post posts={posts} />
      </div>
    </div>
  );
}
