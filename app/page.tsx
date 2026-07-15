import { BASE_URL, getCharacters } from "@/lib/api";
import Post from "../components/CharacterCard";
import Link from "next/link";



export default async function Home() {
  const posts = await getCharacters()

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat font-sans p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1.5">
        <Post posts={ posts } />
      </div>
        <div className="flex border w-[400] justify-around">
          <Link href='/page/1'>1</Link>
          <Link href='/page/2'>2</Link>
          <Link href='/page/3'>3</Link>
          <Link href='/page/4'>4</Link>
          <Link href='/page/5'>5</Link>
        </div>
    </div>
  );
}
