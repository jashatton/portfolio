export default function SearchResults() {

  const results = [
    {
      name: 'Mom and Pop Mega-plex',
      address: '1234 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      showtimes: ['4:30 pm', '6:30 pm', '8:30 pm']
    },
    {
      name: 'BMG Super Mega-plex',
      address: '12 Gorge Rd',
      city: 'Chicago',
      state: 'IL',
      zip: '62731',
      showtimes: ['5:15 pm', '7:15 pm', '9:15 pm', '10:15 pm']
    }]

  return (
    <div className="flex flex-col bg-black gap-y-2 p-2">
      {
        results.map((result, i) => (
          <SearchResult key={i} {...result}/>
        ))
      }
    </div>
  )
}

function SearchResult({name, address, city, state, zip, showtimes}: {
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  showtimes: string[]
}) {
  return (
    <div className="flex flex-col gap-y-2 bg-amber-600 rounded-lg p-4">
      <p className="text-black text-lg text-bold">{name}</p>
      <p className="text-black text-sm mb-2">{address} {city}, {state} {zip}</p>
      <div className="flex flex-col gap-4 md:flex-row">
        {
          showtimes.map((showtime, i) => (
            <div className="bg-amber-700 text-gray-300 rounded-lg py-2 px-4 text-bold" key={i}>{showtime}</div>
          ))
        }
      </div>
    </div>
  )
}
