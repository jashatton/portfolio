'use client'

import { type FormEvent, useCallback, useState } from 'react'
import ZipcodeInput from '@/app/tickets/[id]/components/zipcode-input'
import DateSelector from '@/app/tickets/[id]/components/data-selector'
import SearchResults from '@/app/tickets/[id]/components/search-results'
import { type TheaterShowTimes } from '@/app/tickets/[id]/types'
import { getShowTimes } from '@/app/tickets/[id]/data'

export default function Search({ brandColor }: { brandColor: string }) {
  const [results, setResults] = useState<TheaterShowTimes[]>([])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const entries = Object.fromEntries(formData.entries())

    const showTimes = getShowTimes(entries['zip-search'] as string, entries['selected-date'] as string)
      setResults(showTimes)
    }, [])

    return (
      <section>
        <search style={{ backgroundColor: brandColor }} className="lg:sticky p-4">
          <form className="flex flex-col gap-4 bg-transparent/20 p-4 rounded-lg" onSubmit={handleSubmit}>
            <div className="flex gap-x-2 justify-between items-center">
              <ZipcodeInput />
            </div>
            <DateSelector />
          </form>
        </search>
        <SearchResults brandColor={brandColor} results={results} />
      </section>
    )
  }
