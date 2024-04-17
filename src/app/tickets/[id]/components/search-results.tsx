import {type TheaterShowTimes} from '@/app/tickets/[id]/types'

export default function SearchResults({ results, brandColor, textColor }: { results: TheaterShowTimes[], brandColor: string, textColor: string }) {

  if(results.length === 0) return <NoResults />

  return (
    <div className="flex h-screen max-h-dvh flex-col gap-y-2 overflow-y-auto overflow-x-hidden bg-black p-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600 scrollbar-corner-black">
      {
        results.map((result) => (
          <SearchResult key={result.id} result={result} brandColor={brandColor} textColor={textColor}/>
        ))
      }
    </div>
  )
}

function SearchResult({result, brandColor, textColor}: {
  result: TheaterShowTimes
  brandColor: string
  textColor: string
}) {
  const { name, address, city, state, zip, date, showTimes } = result


  return (
    <div style={{ backgroundColor: brandColor }} className="flex flex-col gap-y-2 rounded-lg p-4">
      <p style={{ color: textColor }} className="text-lg font-bold">{name}</p>
      <p style={{ color: textColor }} className="mb-2 text-sm">{address} {city}, {state} {zip}</p>
      <p style={{ color: textColor }} className="text-lg font-bold">{date}</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {
          showTimes.map((showtime, i) => (
            <div style={{ color: textColor }} className="w-full min-w-32 text-nowrap rounded-lg bg-black/20 px-4 py-2 font-bold text-gray-300 sm:w-fit"
                 key={i}>{showtime}</div>
          ))
        }
      </div>
    </div>
  )
}

function NoResults() {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-y-4">
      <p className="text-3xl font-bold text-gray-300">No Results Found</p>
      <p className="max-w-[50%] text-pretty text-center text-sm font-bold text-gray-500">Check you have entered a zip and selected a date.</p>
    </div>
  )
}
