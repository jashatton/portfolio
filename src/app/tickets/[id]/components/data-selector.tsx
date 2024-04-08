'use client'

import { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'
import { generateDates } from '@/app/tickets/[id]/data'

const noop = () => undefined

export default function DataSelector() {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10))

  const dates = useMemo(() => generateDates(new Date()), [])
  const locale = 'en-US'

  const handleDateChanged = useCallback((date: Date) => {
    setSelectedDate(date.toISOString().slice(0, 10))
  }, [])

  return (
    <div className="flex flex-col bg-transparent/20 rounded-lg p-4">
      <label htmlFor="select-date" className="text-md md:text-nowrap col-span-1 text-gray-300">
        Select Date
      </label>
      {/* Hidden input to store selected date for use with form onSubmit */}
      <input
        name="selected-date"
        type="date"
        id="select-date"
        onSelect={noop}
        value={selectedDate}
        className="hidden"
        readOnly
      />
      <div className="grid grid-cols-5 gap-x-2 items-center">
        <div
          className="flex gap-x-2 px-2 py-4 scroll-smooth overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent  scrollbar-corner-black col-span-full snap-x"
        >
          {
            dates.map((date) => (
              <button
                key={date.getTime()}
                className={clsx('bg-white rounded-lg p-2 text-black min-w-14 snap-x', { 'bg-gray-300 border-2 border-black border-solid ': date.toISOString().slice(0, 10) === selectedDate })}
                onClick={() => {
                  handleDateChanged(date)
                }}
              >
                <div className="text-lg font-bold">
                  {date.toLocaleString(locale, { weekday: 'short' })}
                </div>
                <div
                  className="text-sm font-medium">{date.toLocaleString(locale, { month: 'short' })}
                </div>
                <div className="text-md font-bold tracking-tight">{date.getDate()}</div>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}
