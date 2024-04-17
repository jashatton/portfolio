export interface Movie {
  id: number
  title: string
  posterUrl: string
  brandColor: string
  textColor: string
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
