import { useCallback, useMemo } from 'react'
import clsx from 'clsx'
import { generateDates } from '@/app/tickets/[id]/data'

export default function DataSelector({ selectedDate, onChange }: {selectedDate: Date; onChange: (date: Date) => void } ) {
  const dates = useMemo(() => generateDates(), [])
  const locale = 'en-US'

  const handleDateChanged = useCallback((date: Date) => {
    onChange(date)
  }, [onChange])

  return (
    <div className="flex flex-col rounded-lg bg-transparent/20 p-4">
      <label htmlFor="select-date" className="text-gray-300 md:text-nowrap">
        Select Date
      </label>
      <div
        className="flex snap-x gap-x-2 overflow-x-scroll scroll-smooth px-2 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600 scrollbar-corner-black"
      >
        {
          dates.map((date) => {
            const selectedClassNames = chuckMDY(date) === chuckMDY(selectedDate) ? 'border-2 border-solid border-gray-700 bg-gray-100 ' : 'bg-gray-200'
            return (
              <button
                type="button"
                key={date.getTime()}
                className={clsx('w-14 shrink-0 snap-x rounded-lg p-2 text-black', selectedClassNames)}
                onClick={() => {
                  handleDateChanged(date)
                }}
              >
                <p className="text-lg font-bold">{date.toLocaleString(locale, { weekday: 'short' })}</p>
                <p className="text-sm font-medium">{date.toLocaleString(locale, { month: 'short' })}</p>
                <p className="font-bold tracking-tight">{date.getDate()}</p>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

function chuckMDY(date: Date) {
  return date.toLocaleDateString().slice(0, 10)
}
