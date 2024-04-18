import { type ReactElement } from 'react'
import { notFound } from 'next/navigation'
import Poster from '@/app/tickets/[id]/components/poster'
import Search from '@/app/tickets/[id]/components/search'
import { getMovieById } from '@/app/tickets/[id]/data'
import { type Movie } from '@/app/tickets/[id]/types'

export default function TicketPages({ params }: { params: { id: number } }): ReactElement {
  const movie: Movie | null = getMovieById(params.id)

  if (!movie) return notFound()

  return (
    <div className="flex h-[95vh] w-full flex-col text-white sm:flex-row">
      <Poster
        title={movie.title}
        posterUrl={movie.posterUrl}
      />
      <section className="w-full max-w-full sm:overflow-hidden">
        <Search brandColor={movie.brandColor} textColor={movie.textColor} />
      </section>
    </div>
  )
}
