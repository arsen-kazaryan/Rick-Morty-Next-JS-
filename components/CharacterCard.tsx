import Image from 'next/image'
import Link from 'next/link'
import { Character } from '@/types'

type PostsCharacter = {
  posts: Character[]
}

const statusColor: Record<string, string> = {
  Alive: 'bg-(--portal)',
  Dead: 'bg-(--danger)',
  unknown: 'bg-(--muted)',
}

const CharacterCard = ({ posts }: PostsCharacter) => {
  return (
    <>
      {posts.map((char) => (
        <Link
          key={char.id}
          href={`/character/${char.id}`}
          className="group flex items-center gap-4 rounded-lg border border-(--panel-line) bg-(--panel) p-3 transition-colors hover:border-(--portal-dim)]"
        >
          <div className="portal-ring h-16 w-16 shrink-0">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-(--bg)">
              <Image src={char.image} alt={char.name} fill sizes="64px" className="object-cover" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-lg font-semibold text-(--text) transition-colors group-hover:text-(--portal)">
              {char.name}
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 font-mono text-xs text-(--muted)">
              <span className={`h-1.5 w-1.5 rounded-full ${statusColor[char.status] ?? statusColor.unknown}`} />
              {char.status} · {char.species}
            </p>
            <p className="truncate font-mono text-[11px] text-(--muted)">{char.location.name}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default CharacterCard
