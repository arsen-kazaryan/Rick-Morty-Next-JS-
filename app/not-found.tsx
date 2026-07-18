const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-(--bg) px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-(--danger)">Signal Lost</p>
      <h1 className="text-3xl font-bold text-(--text)">This page doesn&apos;t exist in this dimension.</h1>
    </div>
  )
}

export default NotFound
