'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ZipcodeInput from '@/app/tickets/[id]/components/zipcode-input'
import DateSelector from '@/app/tickets/[id]/components/data-selector'
import SearchResults from '@/app/tickets/[id]/components/search-results'
import { type Movie, type TheaterShowTimes } from '@/app/tickets/[id]/types'
import { getMovies, getShowTimes, startOfDay } from '@/app/tickets/[id]/data'
import MovieSelector from '@/app/tickets/[id]/components/movie-selector'

export default function Search({ brandColor, textColor }: {
  brandColor: string,
  textColor: string,
}) {
  const [results, setResults] = useState<TheaterShowTimes[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>(startOfDay())
  const [selectedZip, setSelectedZip] = useState<string>('55555')
  const movies: Movie[] = getMovies()
  const { id: movieId } = useParams()

  useEffect(() => {
    const showTimes = getShowTimes(getSingleParam(movieId), '55555', new Date())
    setResults(showTimes)
  }, [movieId])

  const handleSearch = (zip: string, date: Date) => {
    const showTimes = getShowTimes(getSingleParam(movieId), zip, date)
    setResults(showTimes)
  }

  const handleZipChange = (zip: string) => {
    setSelectedZip(zip)
    handleSearch(zip, selectedDate)
  }

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
    handleSearch(selectedZip, date)
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <search style={{ backgroundColor: brandColor }} className="p-4">
        <form className="flex flex-col gap-4 rounded-lg bg-transparent/20 p-4">
          <div className="flex items-center justify-between gap-x-2">
            <ZipcodeInput onChange={handleZipChange} />
          </div>
          <DateSelector selectedDate={selectedDate} onChange={handleDateChange} />
        </form>
        <MovieSelector movies={movies} />
      </search>
      <SearchResults brandColor={brandColor} results={results} textColor={textColor} />
    </div>
  )
}

function getSingleParam(param: string[] | string) {
  return Array.isArray(param) ? param[0] : param
}
