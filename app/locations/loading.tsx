const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--bg)">
      <p className="animate-pulse font-mono text-xs uppercase tracking-[0.3em] text-(--portal)">
        Scanning Dimensions…
      </p>
    </div>
  )
}

export default Loading
