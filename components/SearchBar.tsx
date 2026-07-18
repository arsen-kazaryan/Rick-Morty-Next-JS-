'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBar = ({ defaultValue }: { defaultValue?: string }) => {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue ?? '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = value.trim()
    if (!query) {
      router.push('/')
      return
    }
    if (/^\d+$/.test(query)) {
      router.push(`/character/${query}`)
    } else {
      router.push(`/?name=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by name or ID…"
        className="flex-1 rounded border border-(--panel-line) bg-(--panel) px-3 py-2 font-mono text-sm text-(--text) placeholder:text-(--muted) focus:border-(--portal) focus:outline-none"
      />
      <button
        type="submit"
        className="rounded border border-(--portal-dim) bg-(--portal)/15 px-4 py-2 font-mono text-xs uppercase tracking-wide text-(--portal) transition-colors hover:bg-(--portal)/25"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar