"use client"
export default function DateSelector() {
  const dates = generateDates(new Date())
  const locale = 'en-US'

  return (
    <div className="flex flex-col bg-transparent/20 rounded-lg p-4">
      <label htmlFor="select-date" className="text-md md:text-nowrap col-span-1 text-gray-300">
        Select Date
      </label>
      <div className="grid grid-cols-5 gap-x-2 items-center">
        <div className="flex gap-x-2 px-2 py-4 scroll-smooth overflow-x-scroll col-span-full snap-x">
          {
            dates.map((date) => (
              <button key={date.getTime()}
                      className="bg-white rounded-lg p-2 text-black min-w-14 snap-x"
                      onClick={() => console.log(date)}>
                <div className="text-lg font-bold">
                  {date.toLocaleString(locale, {weekday: 'short'})}
                </div>
                <div
                  className="text-sm font-medium">{date.toLocaleString(locale, {month: 'short'})}
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

export function generateDates(startDate: Date, amount = 10): Date[] {
  return [...Array(amount)]
    .map((_, i) => {
      // Generate days based on passed `amount`
      const result = new Date(startDate)
      result.setDate(startDate.getDate() + i)
      return result
    })
}
