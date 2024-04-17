import { randAddress, randNumber } from '@ngneat/falso'
import type { Movie, TheaterShowTimes } from '@/app/tickets/[id]/types'

const MOVIES: Record<number, Movie> = {
  1:
    {
      id: 1,
      title: 'Battle over Fiera',
      posterUrl: '/tickets/battle-over-fiera.webp',
      brandColor: '#D97706',
      textColor: '#d1d5db',
    },
  2:
    {
      id: 2,
      title: 'Jess and Deno',
      posterUrl: '/tickets/jess-and-deno.webp',
      brandColor: '#9FACE1',
      textColor: '#2c2d32',
    },
}

function generateShowTimes(): TheaterShowTimes[] {
  const dates = generateDates(10)

  return dates.flatMap((date) => {
    const showTimeCount = randNumber({ min: 1, max: 8 })
    return [...new Array<TheaterShowTimes>(showTimeCount)].map(() => generateTheaterShowTime(date))
  })
}

export function generateDates(amount = 10): Date[] {
  const startDate = startOfDay()

  return [...new Array<number>(amount)]
    .map((_, i) => {
      // Generate days based on passed `amount`
      const result = new Date(startDate)
      result.setDate(startDate.getDate() + i)
      return result
    })
}

/**
 * For the purposes of the demo, this function will return a random set of show times, but not based on movieId
 */
export function getShowTimes(_movieId: string, zip: string, date: Date): TheaterShowTimes[] {
  if (zip.length !== 5) return []

  const showTimes = generateShowTimes()
  return showTimes.filter((showTime) => byDate(date, showTime))
}

function byDate(date: Date, showTimes: TheaterShowTimes): boolean {
  const showTimeDate = new Date(showTimes.date)
  return showTimeDate.getTime() >= date.getTime()
}

export function getMovieById(id: number): Movie | null {
  return MOVIES[id] ?? null
}

export function getMovies(): Movie[] {
  return Object.values(MOVIES)
}

export const startOfDay = () => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return now
}

function randTheaterName(): string {
  const names = ['Mom and Pop Mega-plex', 'BMG Super Mega-plex', 'Cineplex', 'Theater of Dreams', 'Silver Screen Cinema']
  return names[Math.floor(Math.random() * names.length)]
}

function generateTheaterShowTime(date: Date): TheaterShowTimes {
  const {city , street, zipCode: zip  } = randAddress()
  const showTimeCount = randNumber({ min: 1, max: 6 })

  const showTimes = Array.from(new Set([...new Array<string>(showTimeCount)].map(() => {
    const hour = randNumber({ min: 13, max: 24 }) - 12
    const minuteValues = [0, 15, 30, 45]
    const minutes = minuteValues[Math.floor(Math.random() * minuteValues.length)]
      return `${hour.toString()}:${minutes === 0 ? '00' : minutes.toString()} PM`
  }).sort((a, b) => {
    const aTime = parseInt(a.split(':')[0])
    const bTime = parseInt(b.split(':')[0])
    return aTime - bTime
  }))
)
  return {
    id: randNumber(),
    name: randTheaterName(),
    address: street,
    city,
    state: 'IL',
    zip,
    date: date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
    showTimes
  }
}
