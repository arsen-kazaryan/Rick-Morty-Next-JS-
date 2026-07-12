import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/types/index";
import { getCharacter } from "@/lib/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};




const PostPage = async ({ params }: Props) => {
  const { id } = await params;
  const post: Character  = await getCharacter(id);
  const prevCharacter: string = (+id - 1).toString();
  const nextCharacter: string = (+id + 1).toString();
  
  return (
    <section className="mx-auto mt-10 max-w-5xl px-5">
      <div className="flex flex-col gap-8 rounded-xl border p-6 md:flex-row">
        <Image
          src={post.image}
          alt={post.name}
          width={350}
          height={300}
          className="rounded-lg"
        />

        <div className="flex-1">
          <h1 className="mb-6 text-4xl font-bold">{post.name} </h1>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-500">Status</span>
              <span>{post.status}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-500">Species</span>
              <span>{post.species}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-500">Gender</span>
              <span>{post.gender}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-500">Origin</span>
              <span>{post.origin.name}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-500">Location</span>
              <span>{post.location.name}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-500">Episodes</span>
              <span>{post.episode.length}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Created</span>
              <span>{new Date(post.created).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
          <div className="flex justify-between">
            <Link href={`/character/${prevCharacter}`}>Prev</Link>
            <Link href={`/character/${nextCharacter}`}>Next</Link>
          </div>
    </section>
  );
};

export default PostPage;