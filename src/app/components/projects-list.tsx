import Link from 'next/link'

export default function ProjectsList() {
  return (
    <ul className="space-y-4">
      <li className="rounded-lg border border-solid border-gray-500">
        <div className="w-full border-b border-solid border-gray-500 p-4 text-xl underline hover:text-emerald-500">
          <Link href="/tickets" target="_blank">
            Good Flix Ticket Page
          </Link>
        </div>
        <p className="text-pretty p-4">
          At Angel Studios I developed and launched the initial theater ticket purchasing page in November 2021.
          This demo
          represents that initial work redone implemented using Next.js 14 and a little of my own additions to
          support
          multiple movies.
        </p>
      </li>
      <li className="rounded-lg border border-solid border-gray-500">
        <div className="w-full border-b border-solid border-gray-500 p-4 text-xl underline hover:text-emerald-500">
          <Link href="/sdvt" target="_blank">Stardew Valley Tracker</Link>
        </div>
        <div className="p-4">
          <p className="text-pretty">
            A responsive mobile first companion page for tracking your progress in the game <Link
            href="https://www.stardewvalley.net">Stardew
            Valley</Link>.
          </p>
          <p className="text-pretty py-2 text-sm text-gray-600">
            Clearing your web site cache will reset the tracking since it stores the state in local storage .
          </p>
        </div>
      </li>
    </ul>
  )
}
