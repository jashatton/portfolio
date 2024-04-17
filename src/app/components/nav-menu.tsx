import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className="flex items-end gap-4 p-4">
      <Link href="/" className="text-white underline hover:text-emerald-500">Home</Link>
      <Link href="/about" className="text-white underline hover:text-emerald-500">About</Link>
    </nav>
  )
}
