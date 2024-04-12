import { type ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Movie } from '@/app/tickets/[id]/types'

export default function MovieSelector({ movies }: { movies: Movie[] }): ReactElement {
  return (
    <>
      <div className="flex w-full items-center justify-between bg-gray-900 px-4 py-2">
        <h2 className="text-2xl font-bold">Our Titles</h2>
        <div className="flex gap-2">
          <button className="rounded-lg bg-gray-800 px-4 py-2 text-white">Show</button>
          <button className="rounded-lg bg-gray-800 px-4 py-2 text-white">Hide</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 bg-white/20 p-4">
        {
          movies.map((movie: Movie) => {

            const { id, title, posterUrl } = movie

            return (
              <Link key={id} href={`/tickets/${movie.id.toString()}`}>
                <div className="h-52 w-36 cursor-pointer rounded-lg bg-gray-800 p-2 pb-8 text-center">
                  <Image className="size-full rounded-lg bg-center object-cover object-center" src={posterUrl}
                         alt={`Poster for ${title}`} width={144} height={216} />
                  <p>{movie.title}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}
