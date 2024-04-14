import QuestCard from '@/app/sdvt/components/quest-card'
import { useQuests } from '@/app/sdvt/provider/quests-provider'

export default function QuestList() {
  const { quests } = useQuests()

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
      {
        quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))
      }
    </div>
  )
}
