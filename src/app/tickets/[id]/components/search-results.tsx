import {type TheaterShowTimes} from '@/app/tickets/[id]/types'

export default function SearchResults({ results, brandColor }: { results: TheaterShowTimes[], brandColor: string}) {
  return (
    <div className="flex flex-col bg-black gap-y-2 p-2">
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
  const { name, address, city, state, zip, showTimes } = result

  return (
    <div style={{ backgroundColor: brandColor }} className="flex flex-col gap-y-2 rounded-lg p-4">
      <p className="text-black text-lg text-bold">{name}</p>
      <p className="text-black text-sm mb-2">{address} {city}, {state} {zip}</p>
      <div className="flex flex-col gap-4 md:flex-row">
        {
          showTimes.map((showtime, i) => (
            <div className="bg-amber-700 text-gray-300 rounded-lg py-2 px-4 text-bold text-nowrap" key={i}>{showtime}</div>
          ))
        }
      </div>
    </div>
  )
}
