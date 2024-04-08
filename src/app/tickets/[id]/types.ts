export interface Movie {
  id: number
  name: string
  posterUrl: string
  brandColor: string
}

export interface TheaterShowTimes {
  id: number,
  name: string
  address: string
  city: string
  state: string
  zip: string
  date: string
  showTimes: string[]
}
