'use client'

import { type ChangeEvent, Fragment } from 'react'
import { type Quest } from '@/app/sdvt/types'
import { useQuests } from '@/app/sdvt/provider/quests-provider'

export default function QuestCard({ quest }: { quest: Quest }) {
  const { markItemStored, markItemCompleted } = useQuests()

  const handleStoreItem = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const [questId, itemId] = target.id.split(':')
    const isChecked = target.checked
    markItemStored(parseInt(questId), parseInt(itemId), isChecked)
  }

  const handleCompleteItem = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const [questId, itemId] = target.id.split(':')
    const isChecked = target.checked
    markItemCompleted(parseInt(questId), parseInt(itemId), isChecked)
  }

  return (
    <div className="flex w-full flex-col items-center rounded-lg bg-blue-300 pb-4">
      <h3 className="w-full text-pretty rounded-t-lg border border-solid border-b-green-800 bg-green-400 p-4 text-center text-gray-800">{`${quest.name} (${quest.reward})`}</h3>
      <div className="flex w-full flex-col items-center justify-items-center gap-4 p-2 md:grid md:grid-cols-2 md:items-start lg:grid-cols-3">
        {quest.subQuests.map((subQuest) => {
          return (
            <div className="flex size-full max-w-lg flex-col rounded-lg bg-black/40 px-2 pb-2" key={subQuest.id}>
              <div className="text-pretty py-4 text-left text-gray-300">
                {`${subQuest.name} (${subQuest.reward})`}
              </div>
              <div className="grid grow auto-rows-min grid-cols-[1fr,_60px,_60px] justify-items-center gap-4 rounded-lg bg-black/30 p-4">
                <p className="col-start-2 text-xs">Stored</p>
                <p className="col-start-3 text-xs">Done</p>
                {subQuest.items.map((item) => (
                  <Fragment key={item.id}>
                    <label className="col-start-1 justify-self-start text-nowrap ">
                      {item.name}
                    </label>
                    <input
                      className="col-start-2 m-2 size-4 rounded-lg"
                      onChange={handleStoreItem}
                      id={`${quest.id.toString()}:${item.id.toString()}`}
                      type="checkbox"
                      checked={item.stored}
                    />
                    <input
                      className="col-start-3 m-2 size-4"
                      onChange={handleCompleteItem}
                      id={`${quest.id.toString()}:${item.id.toString()}`}
                      type="checkbox"
                      checked={item.completed}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
