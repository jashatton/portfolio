'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function Home() {

  return (
    <main className="mx-auto mt-20 flex min-h-screen max-w-screen-lg flex-col items-center gap-14 p-8">
      <section className="cursor-pointer rounded-lg border border-solid border-gray-500">
        <h1
          className=" border-b border-solid border-gray-500 p-2 text-center text-2xl underline hover:text-emerald-500">
          <Link href="/about">Jason Hatton</Link>
        </h1>
        <Image className="rounded-b-lg" src="/home/linked-in-ben10-banner.webp" alt="hero image" width="3027"
               height="1280" />
      </section>
      <section className="w-full">
        <p className="py-4 text-2xl">Links</p>
        <ul className="flex items-center justify-center gap-x-8 rounded-lg border border-solid border-gray-500 p-8">
          <li><Link target="_blank" href="https://www.linkedin.com/in/jashatton/"><BsLinkedin size={50} /></Link></li>
          <li><Link target="_blank" href="https://github.com/jashatton/"><BsGithub size={50} /></Link></li>
        </ul>
      </section>
      <section>
        <h2 className="py-4 text-2xl">Projects</h2>
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
      </section>
    </main>
  )
}
