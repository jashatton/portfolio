'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import ProjectsList from '@/app/components/projects-list'
import TechList from '@/app/components/tech-list'

export default function Home() {

  return (
    <main className="mx-auto flex min-h-screen flex-col items-center ">
      <Image
        className="max-h-[40vh] w-full object-cover"
        src="/home/linked-in-ben10-banner.webp"
        alt="hero image"
        width="3027"
        height="1280"
      />

      <div className="flex max-w-7xl flex-col items-center gap-12 p-8">
        <section className="cursor-pointer rounded-lg border border-solid border-gray-500">
          <div className="flex flex-col gap-2 border-b border-solid border-gray-500 p-4">
            <div className="flex gap-x-8">
              <Link href="/about">
                <h1
                  className="text-center text-2xl underline hover:text-emerald-500">
                  Jason Hatton
                </h1>
              </Link>
              <ul className="flex items-center justify-center gap-x-8">
                <li>
                  <Link className="flex flex-col items-center gap-2 underline hover:text-emerald-500" target="_blank"
                        href="https://www.linkedin.com/in/jashatton/">
                    <BsLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link className="flex flex-col items-center gap-2 underline hover:text-emerald-500" target="_blank"
                        href="https://github.com/jashatton/">
                    <BsGithub size={25} />
                  </Link>
                </li>
              </ul>
            </div>

            <p className="text-pretty">
              I am a product minded full stack developer with a passion for creating beautiful and functional
              applications. I have experience with a variety of technologies and always looking for new challenges.
            </p>
          </div>
        </section>
        <section>
          <h2 className="py-4 text-2xl">Projects</h2>
          <ProjectsList />
        </section>
        <section className="w-full">
          <h2 className="py-4 text-2xl">Recommendations</h2>
          <div className="rounded-lg border border-solid border-gray-500 p-8">
            <p className="text-pretty">
              I have worked with some amazing people and have been fortunate to have some great recommendations.
            </p>
            <Link className="underline hover:text-emerald-500" target="_blank"
                  href="https://www.linkedin.com/in/jashatton/#:~:text=Received,Received">
              Check them out here!
            </Link>
          </div>
        </section>
        <section className="flex w-full flex-col gap-2">
          <h2 className="py-4 text-2xl">Technologies and Tools</h2>
          <TechList />
        </section>
      </div>
    </main>
  )
}
