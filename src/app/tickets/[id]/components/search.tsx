'use client'

import ZipcodeInput from '@/app/tickets/[id]/components/zipcode-input'
import DateSelector from '@/app/tickets/[id]/components/data-selector'

export default function Search() {
  return (
    <search className="bg-amber-600 lg:sticky p-4">
      <form className="flex flex-col gap-4" onSubmit={(event) => {
        event.preventDefault()
      }}>
        <div className="flex gap-x-2 justify-between items-center">
          <ZipcodeInput/>
        </div>
        <DateSelector/>
      </form>
    </search>
  )
}
