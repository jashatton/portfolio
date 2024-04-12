import {type TheaterShowTimes} from '@/app/tickets/[id]/types'

export default function SearchResults({ results, brandColor }: { results: TheaterShowTimes[], brandColor: string}) {

  if(results.length === 0) return <NoResults />

  return (
    <div className="flex flex-col gap-y-2 bg-black p-2">
      {
        results.map((result) => (
          <SearchResult key={result.id} result={result} brandColor={brandColor}/>
        ))
      }
    </div>
  )
}

function SearchResult({result, brandColor}: {
  result: TheaterShowTimes
  brandColor: string
}) {
  const { name, address, city, state, zip, date, showTimes } = result


  return (
    <div style={{ backgroundColor: brandColor }} className="flex flex-col gap-y-2 rounded-lg p-4">
      <p className="text-lg font-bold text-gray-300">{name}</p>
      <p className="mb-2 text-sm text-gray-300">{address} {city}, {state} {zip}</p>
      <p className="text-lg font-bold text-gray-300">{date}</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        {
          showTimes.map((showtime, i) => (
            <div className="w-full min-w-32 text-nowrap rounded-lg bg-amber-700 px-4 py-2 font-bold text-gray-300 sm:w-fit"
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
