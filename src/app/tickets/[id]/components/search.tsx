'use client'

import { useState } from 'react'
import ZipcodeInput from '@/app/tickets/[id]/components/zipcode-input'
import DateSelector from '@/app/tickets/[id]/components/data-selector'
import SearchResults from '@/app/tickets/[id]/components/search-results'
import { type TheaterShowTimes } from '@/app/tickets/[id]/types'
import { getShowTimes, startOfDay } from '@/app/tickets/[id]/data'

export default function Search({ brandColor }: { brandColor: string }) {
  const [results, setResults] = useState<TheaterShowTimes[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>(startOfDay())
  const [selectedZip, setSelectedZip] = useState<string>('')

  const handleSearch = (zip: string, date: Date) => {
    const showTimes = getShowTimes(zip, date)
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
    <>
      <search style={{ backgroundColor: brandColor }} className="p-4 lg:sticky">
        <form className="flex flex-col gap-4 rounded-lg bg-transparent/20 p-4">
          <div className="flex items-center justify-between gap-x-2">
            <ZipcodeInput onChange={handleZipChange} />
          </div>
          <DateSelector selectedDate={selectedDate} onChange={handleDateChange} />
        </form>
      </search>
      <SearchResults brandColor={brandColor} results={results} />
    </>
  )
}
