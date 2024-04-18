import Link from 'next/link'

export default function TicketsNavMenu() {
  return (
    <div className="flex items-center px-4">
      <p className="mr-2 text-3xl text-gray-300">Good Flix</p>
      <nav className="flex items-end gap-4 p-4">
        <Link href="/" className="text-white underline hover:text-emerald-500">Home</Link>
        <Link href="/about" className="text-white underline hover:text-emerald-500">About</Link>
      </nav>
    </div>
  )
}
