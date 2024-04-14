export interface Quest {
  id: number
  name: string
  reward: string
  subQuests: SubQuest[]
}

export interface SubQuest {
  id: number
  name: string
  reward: string
  items: Item[]
}

export type QualityLevel = 'normal' | 'silver' | 'gold'

export interface Item {
  id: number
  name: string
  quantity?: number
  quality?: QualityLevel
  stored?: boolean
  completed?: boolean
}
