export interface Quest {
  id: number
  name: string
  reward: string
  achievements: Achievement[]
}

export interface Achievement {
  id: number
  name: string
  reward: string
  items: Item[]
}

export interface Item {
  id: number
  name: string
  quantity?: number
  stored?: boolean
  completed?: boolean
}
