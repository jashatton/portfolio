'use client'

import { type ChangeEvent, Fragment } from 'react'
import { BsBox2, BsCheck2Square } from 'react-icons/bs'
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
    <>
      <div className="p-4">
        <h3 className="text-pretty">{`${quest.name} (${quest.reward})`}</h3>
        {quest.achievements.map((achievement) => (
          <div key={achievement.id}>
            <div className="text-pretty py-2">
              {`${achievement.name} (${achievement.reward})`}
            </div>
            <div className="py-4">
              <div className="grid grid-cols-[60px,_60px,_1fr] justify-items-center gap-2">
                <p className="col-start-1 text-xs">Stored</p>
                <p className="col-start-2 text-xs">Done</p>
                {achievement.items.map((item) => (
                  <Fragment key={item.id}>
                    <input
                      className="col-start-1 m-2 size-4 rounded-lg"
                      onChange={handleStoreItem}
                      id={`${quest.id.toString()}:${item.id.toString()}`}
                      type="checkbox"
                      checked={item.stored}
                    />
                    <input
                      className="col-start-2 m-2 size-4"
                      onChange={handleCompleteItem}
                      id={`${quest.id.toString()}:${item.id.toString()}`}
                      type="checkbox"
                      checked={item.completed}
                    />
                    <label className="col-start-3 justify-self-start text-nowrap ">
                      {item.name}
                    </label>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
