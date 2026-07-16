import CharacterCard from "@/components/CharacterCard";
import { getCharacter, getpage } from "@/lib/api";
import { PropsParam } from "@/types";
import Link from "next/link";

type Props = { 
  searchParams: Promise<{ 
    page?: string 
  }> 
};



export default async function Home({ searchParams }: Props) {
  const { page = '1' } = await searchParams;
  const { results, info } = await getpage(page);
  const currentPage = Number(page)
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat font-sans p-4">
      <div className="flex flex-wrap bg-white/30  rounded p-1 justify-center gap-1 mb-2.5">
        {Array.from({ length: info.pages }, (_, i) => {
          const pageNumber = i + 1;
          const isActive = pageNumber === currentPage
          return(
            <Link key={i} href={`/?page=${i + 1}`}  className={`p-1 rounded transition-colors ${
          isActive
            ? 'bg-white text-blue-500 ' 
            : ' text-blue-700 hover:bg-white/40'
        }`}
      >
              {i + 1}
            </Link>
        )
})}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1.5">
        <CharacterCard posts={results} />
      </div>

    </div>
  );
}