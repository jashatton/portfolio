export interface Movie {
  id: number
  name: string
  posterUrl: string
}

export interface TheaterShowTimes {
  id: number,
  name: string
  address: string
  city: string
  state: string
  zip: string
  showTimes: string[]
}

export type ShowTimes = Record<string, TheaterShowTimes[]>
