import Post from "@/components/CharacterCard";
import { getpage } from "@/lib/api";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};






const PostPage = async ({ params }: Props) => {
  const { id } = await params;
  const page2 = await getpage(id)

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat font-sans p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Post posts={page2} />
      </div>
      <div className="flex border w-100 justify-around">
        {Array.from({length: 5 }, (_, i) => (
        <Link
          key={i}
          href={`/page/${i + 1}`}
        >
          {i + 1}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default PostPage;