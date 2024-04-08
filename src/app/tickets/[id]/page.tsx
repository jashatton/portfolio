import {type ReactElement} from 'react'
import { notFound } from 'next/navigation'
import Poster from '@/app/tickets/[id]/components/poster'
import Search from '@/app/tickets/[id]/components/search'
import { getMovieById } from '@/app/tickets/[id]/data'
import {type Movie} from '@/app/tickets/[id]/types'

export default function TicketPages({params}: { params: { id: number } }): ReactElement {
  const movie: Movie | null = getMovieById(params.id)

  if(!movie) return notFound()

  return (
    <div className="flex flex-col md:flex-row text-white w-full h-full">
      <Poster
        posterClassname="w-screen h-auto md:h-screen md:w-auto max-h-[390px] md:max-h-none md:max-w-[390px] lg:max-w-[625px] object-center"
        posterUrl={movie.posterUrl}
      />
      <div className="w-full">
        <Search brandColor={movie.brandColor}/>
      </div>
    </div>
  )
}
