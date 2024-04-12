import { type ReactElement } from 'react'
import { notFound } from 'next/navigation'
import Poster from '@/app/tickets/[id]/components/poster'
import Search from '@/app/tickets/[id]/components/search'
import { getMovieById, getMovies } from '@/app/tickets/[id]/data'
import { type Movie } from '@/app/tickets/[id]/types'
import MovieSelector from '@/app/tickets/[id]/components/movie-selector'

export default function TicketPages({ params }: { params: { id: number } }): ReactElement {
  const movie: Movie | null = getMovieById(params.id)
  const movies: Movie[] = getMovies()

  if (!movie) return notFound()

  return (
    <div className="flex w-full flex-col text-white lg:flex-row">
      <Poster
        title={movie.title}
        posterUrl={movie.posterUrl}
      />
      <section className="w-full max-w-full overflow-hidden">
        <Search brandColor={movie.brandColor} />
        <MovieSelector movies={movies} />
      </section>
    </div>
  )
}
