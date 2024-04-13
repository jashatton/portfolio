'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { type Quest } from '@/app/sdvt/types'
import { getAllQuests } from '@/app/sdvt/data'

interface QuestState {
  quests: Quest[]
  markItemStored: (questId: number, itemId: number, stored: boolean) => void
  markItemCompleted: (questId: number, itemId: number, completed: boolean) => void
}

const DEFAULT_STATE = {
  quests: [],
  markItemStored: () => undefined,
  markItemCompleted: () => undefined
}

const QuestContext = createContext<QuestState>(DEFAULT_STATE)

export default function QuestProvider({ children }: { children: React.ReactNode }) {
  const [trackerState, setTrackerState] = useState<{ quests: Quest[]}>(DEFAULT_STATE)

  useEffect(() => {
    setTrackerState({ quests: getAllQuests() })
  }, [])

  const value = useMemo(() => {
    const markItemStored = (questId: number, itemId: number, stored: boolean) => {
      const updatedQuests = trackerState.quests.map((quest) => {
        if(quest.id === questId) {
          const updatedAchievements = quest.achievements.map((achievement) => {
            const updatedItems = achievement.items.map((item) => {
              if(item.id === itemId) {
                return {
                  ...item,
                  stored,
                }
              }
              return item
            })
            return {
              ...achievement,
              items: updatedItems
            }
          })
          return {
            ...quest,
            achievements: updatedAchievements
          }
        }
        return quest
      })
      setTrackerState({ quests: updatedQuests })
      localStorage.setItem('sdvt:quests', JSON.stringify(updatedQuests))
    }

    const markItemCompleted = (questId: number, itemId: number, completed: boolean) => {
      const updatedQuests = trackerState.quests.map((quest) => {
        if(quest.id === questId) {
          const updatedAchievements = quest.achievements.map((achievement) => {
            const updatedItems = achievement.items.map((item) => {
              if(item.id === itemId) {
                return {
                  ...item,
                  completed,
                }
              }
              return item
            })
            return {
              ...achievement,
              items: updatedItems
            }
          })
          return {
            ...quest,
            achievements: updatedAchievements
          }
        }
        return quest
      })
      setTrackerState({ quests: updatedQuests })
      localStorage.setItem('sdvt:quests', JSON.stringify(updatedQuests))
    }

    return {
      quests: trackerState.quests,
      markItemStored,
      markItemCompleted
    }
  }, [trackerState.quests]
)
  return (
    <QuestContext.Provider value={value}>
      {children}
    </QuestContext.Provider>
  )
}

export function useQuests() {
  return useContext(QuestContext)
}

