import CharacterCard from "@/components/CharacterCard";
import { getpage } from "@/lib/api";
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
    <div className="bg-scanlines min-h-screen px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-(--muted)]">
          Signal Log — Dimension C-137
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CharacterCard posts={results} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-1.5">
          {Array.from({ length: info.pages }, (_, i) => {
            const pageNumber = i + 1;
            const isActive = pageNumber === currentPage;
            return (
              <Link
                key={pageNumber}
                href={`/?page=${pageNumber}`}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex h-8 min-w-8 items-center justify-center rounded border px-2 font-mono text-xs transition-colors ${
                  isActive
                    ? 'border-(--portal) bg-(--portal)/15 text-(--portal) shadow-[0_0_8px_rgba(151,206,76,0.5)'
                    : 'border-(--panel-line) text-(--muted) hover:border-(--portal-dim) hover:text-(--text)'
                }`}
              >
                {String(pageNumber).padStart(2, '0')}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
