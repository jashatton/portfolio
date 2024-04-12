import type { Movie, TheaterShowTimes } from '@/app/tickets/[id]/types'

const MOVIES: Record<number, Movie> = {
  1:
    {
      id: 1,
      title: 'Battle over Fiera',
      posterUrl: '/tickets/battle-over-fiera.png',
      brandColor: '#D97706',
    },
  2:
    {
      id: 2,
      title: 'Jess and Deno',
      posterUrl: '/tickets/jess-and-deno.jpg',
      brandColor: '#9FACE1'
    }
}

const SHOW_TIMES: Record<string, TheaterShowTimes[] | undefined> = {
  '63376': [
    {
      id: 1,
      name: 'Mom and Pop Mega-plex',
      address: '1234 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      showTimes: ['4:30 pm', '6:30 pm', '8:30 pm']
    },
    {
      id: 2,
      name: 'BMG Super Mega-plex',
      address: '12 Gorge Rd',
      city: 'Chicago',
      state: 'IL',
      zip: '62731',
      date: new Date(new Date().getTime() + (1000 * 60 * 60 * 24)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      showTimes: ['5:15 pm', '7:15 pm', '9:15 pm', '10:15 pm']
    }]
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

export function getShowTimes(zip: string, date: Date): TheaterShowTimes[] {
  return SHOW_TIMES[zip]?.filter((showTimes) => byDate(date, showTimes)) ?? []
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
  const now=new Date()
  now.setUTCHours(0, 0, 0, 0)
  return now
}
