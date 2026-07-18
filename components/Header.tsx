import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-(--panel)/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-(--portal) transition-colors hover:text-(--text)">
          C-137 <span className="text-(--text)">Archive</span>
        </Link>
        <nav className="flex gap-5 font-mono text-xs uppercase tracking-wider text-(--muted)">
          <Link href="/" className="transition-colors hover:text-(--portal)">
            Characters
          </Link>
          <Link href="/locations" className="transition-colors hover:text-(--portal)">
            Locations
          </Link>
        </nav>
      </div>
      <div className="h-0.75 hazard-stripe" />
    </header>
  )
}

export default Header
