'use client'

import { type ReactElement, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { type Movie } from '@/app/tickets/[id]/types'

export default function MovieSelector({ movies }: {
  movies: Movie[],
}): ReactElement {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(true)
  }

  const handleHide = () => {
    setShow(false)
  }

  return (
    <div
      className={clsx('overflow-hidden p-2', show ? 'h-[300px] transition duration-1000 ease-in-out' : 'h-[50px] transition duration-500 ease-in-out')}>
      <div className="flex w-full items-center justify-between gap-2 px-4 py-2">
        <h2 className="text-nowrap text-left text-2xl font-bold text-gray-300">Also In Theaters</h2>
        <div className="flex gap-2">
          {
            show ? <button onClick={handleHide} className="rounded-lg bg-black/20 px-4 py-2 text-white"><BiChevronDown
                size={20} /></button>
              : <button onClick={handleShow} className="rounded-lg bg-black/20 px-4 py-2 text-white"><BiChevronRight
                size={20} /></button>

          }
        </div>
      </div>
      <div className="h-full overflow-hidden overflow-y-auto pb-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-corner-black sm:pb-4">
        <div
          className="flex flex-wrap justify-center gap-4 overflow-hidden overflow-y-auto rounded-lg bg-white/20 p-4 sm:pb-4 ">
          {
            movies.map((movie: Movie) => {

              const { id, title, posterUrl } = movie

              return (
                <Link  key={id} href={`/tickets/${movie.id.toString()}`}>
                  <div className="h-52 w-36 cursor-pointer rounded-lg bg-black/20 p-2 pb-8 text-center">
                    <Image className="size-full rounded-lg bg-center object-cover object-center" src={posterUrl}
                           alt={`Poster for ${title}`} width={144} height={216} />
                    <p>{movie.title}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
