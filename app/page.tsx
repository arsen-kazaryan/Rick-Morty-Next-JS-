import { getCharacters } from "@/lib/api";
import Post from "../components/CharacterCard";



export default async function Home() {
  const posts = await getCharacters()

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat font-sans p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Post posts={posts} />
      </div>
    </div>
  );
}
