import Image from "next/image";
import Link from "next/link";
import type { Character, PropsParam } from "@/types/index";
import { getCharacter } from "@/lib/api";

export async function generateMetadata({ params }: PropsParam) {
  const { id } = await params;
  const character = await getCharacter(id);
  return { title: character.name };
}

const statusColor: Record<string, string> = {
  Alive: 'bg-(--portal)',
  Dead: 'bg-(--danger)',
  unknown: 'bg-(--muted)',
}

const CharacterPage = async ({ params }: PropsParam) => {
  const { id } = await params;
  const post: Character = await getCharacter(id);
  const currentId = Number(id)
  const hasPrev = currentId > 1;
  const nextCharacter: string = (+id + 1).toString();

  return (
    <section className="bg-scanlines min-h-screen px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-(--muted)">
          {hasPrev ? (
            <Link href={`/character/${currentId - 1}`} className="transition-colors hover:text-(--portal)">
              ← Prev
            </Link>
          ) : <span />}
          <Link href="/" className="transition-colors hover:text-(--portal)">
            All Signals
          </Link>
          <Link href={`/character/${nextCharacter}`} className="transition-colors hover:text-(--portal)">
            Next →
          </Link>
        </div>

        <div className="flex flex-col gap-8 rounded-xl border border-(--panel-line)] bg-(--panel) p-6 md:flex-row">
          <div className="relative mx-auto h-56 w-56 shrink-0 md:mx-0">
            <span className="absolute -left-1 -top-1 h-6 w-6 border-l-2 border-t-2 border-(--portal)" />
            <span className="absolute -right-1 -top-1 h-6 w-6 border-r-2 border-t-2 border-(--portal)" />
            <span className="absolute -bottom-1 -left-1 h-6 w-6 border-b-2 border-l-2 border-(--portal)" />
            <span className="absolute -bottom-1 -right-1 h-6 w-6 border-b-2 border-r-2 border-(--portal)" />
            <Image
              src={post.image}
              alt={post.name}
              fill
              sizes="224px"
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-(--muted)">
              Specimen No. {id.padStart(3, '0')}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-(--text)">{post.name}</h1>

            <div className="divide-y divide-(--panel-line) text-sm">
              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Status</span>
                <span className="flex items-center gap-1.5 text-(--text)">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusColor[post.status] ?? statusColor.unknown}`} />
                  {post.status}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Species</span>
                <span className="text-(--text)">{post.species}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Gender</span>
                <span className="text-(--text)">{post.gender}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Origin</span>
                <span className="text-(--text)">{post.origin.name}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Location</span>
                <span className="text-(--text)">{post.location.name}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Episodes</span>
                <span className="text-(--text)">{post.episode.length}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-(--muted)">Logged</span>
                <span className="text-(--text)">{new Date(post.created).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterPage;
