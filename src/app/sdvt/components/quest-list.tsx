import QuestCard from '@/app/sdvt/components/quest-card'
import { useQuests } from '@/app/sdvt/provider/quests-provider'

export default function QuestList() {
  const { quests } = useQuests()

  return (
    <div className="flex gap-2">
      {
        quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))
      }
    </div>
  )
}
