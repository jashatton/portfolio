import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsList() {
  return (
    <ul className="space-y-4">
      <li className="rounded-lg border border-solid border-gray-500">
        <div className="w-full border-b border-solid border-gray-500 p-4 text-xl underline hover:text-emerald-500">
          <Link href="https://angel.com" target="_blank">
            Angel Studios
          </Link>
        </div>
        <p className="text-pretty p-4">
          I contributed to the initial launch of <Link className="text-center underline hover:text-emerald-500" href="https://angel.com">angel.com</Link>.
          The main site for Angel Studios a platform for creators to share their work and for fans to support them. Support can come in
          a wide range  of options like crowd-funding, their Pay It Forward model, and The Guild which is involved in
          breaking the Hollywood gatekeeper model and allowing them to pick they content they want to see created and made
          available.
        </p>
        <Image src="/home/angel_watch.webp" alt="Angel Studios Watch Page" width={1536} height={1536} />
      </li>
      <li className="rounded-lg border border-solid border-gray-500">
        <div className="w-full border-b border-solid border-gray-500 p-4 text-xl underline hover:text-emerald-500">
          <Link href="/tickets" target="_blank">
            Good Flix Ticket Page
          </Link>
        </div>
        <p className="text-pretty p-4">
          This demo represents my initial contribution to the launch of Angel Studios' ticket purchasing page in November 2022.
          The successful launch paved the way for an innovative product that has revolutionized the industry by enabling
          a studio to sell tickets for its own content.        </p>
        <Image src="/home/good-flix-screenshot.webp" alt="Angel Studios Watch Page" width={1536} height={1536} />
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
