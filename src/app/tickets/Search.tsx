"use client"

import ZipCodeInput from "@/app/tickets/ZipCodeInput";
import DateSelector from "@/app/tickets/DateSelector";

export default function Search() {
  return (
    <search className="bg-amber-600 lg:sticky p-4">
      <form className="flex flex-col gap-4" onSubmit={(event) => {
        event.preventDefault()
      }}>
        <div className="flex gap-x-2 justify-between items-center">
          <ZipCodeInput/>
        </div>
        <DateSelector/>
      </form>
    </search>
  )
}
