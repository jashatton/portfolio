import {type Movie, type ShowTimes} from '@/app/tickets/[id]/types'

export const MOVIES: Record<number, Movie> = {
  1:
    {
      id: 1,
      name: 'Battle over Fiera',
      posterUrl: '/tickets/battle-over-fiera-2.png',
    }
}

export const SHOW_TIMES: ShowTimes = {
  '63376': [
    {
      id: 1,
      name: 'Mom and Pop Mega-plex',
      address: '1234 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      showTimes: ['4:30 pm', '6:30 pm', '8:30 pm']
    },
    {
      id: 2,
      name: 'BMG Super Mega-plex',
      address: '12 Gorge Rd',
      city: 'Chicago',
      state: 'IL',
      zip: '62731',
      showTimes: ['5:15 pm', '7:15 pm', '9:15 pm', '10:15 pm']
    }]
}

export function generateDates(startDate: Date, amount = 10): Date[] {
  return [...new Array<number>(amount)]
    .map((_, i) => {
      // Generate days based on passed `amount`
      const result = new Date(startDate)
      result.setDate(startDate.getDate() + i)
      return result
    })
}
