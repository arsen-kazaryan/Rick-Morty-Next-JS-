'use client'

const CharacterError = ({ error }: { error: Error }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-(--bg) px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-(--danger)">Transmission Error</p>
      <h1 className="text-2xl font-bold text-(--text)">{error.message}</h1>
    </div>
  )
}

export default CharacterError
