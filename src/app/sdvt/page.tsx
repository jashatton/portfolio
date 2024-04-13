'use client'

import QuestProvider from '@/app/sdvt/provider/quests-provider'
import QuestList from '@/app/sdvt/components/quest-list'

export default function StardewTrackerPage() {
  return (
    <div className="w-full p-4">
      <h1 className="text-center text-2xl">Stardew Bundles Track</h1>
      <QuestProvider>
        <QuestList />
      </QuestProvider>
    </div>
  )
}
