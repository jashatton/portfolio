import {PiMagnifyingGlassBold} from 'react-icons/pi'
import { type ChangeEvent } from 'react'

const ZIP_PLACEHOLDER = 'Find Showtimes with Zipcode'

export default function ZipcodeInput({ onChange}: { onChange: (zip: string) => void}) {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <label htmlFor="zip-search" className="text-gray-300 md:text-nowrap">
        Enter Zip
      </label>
      <div className="flex w-full gap-x-2 rounded-lg bg-white p-4">
        <PiMagnifyingGlassBold size={20} color="black"/>
        <input
          id="zip-search"
          name="zip-search"
          type="text"
          className="w-full text-lg text-black focus:ring-offset-4"
          autoFocus
          defaultValue="55555"
          onChange={handleOnChange}
          placeholder={ZIP_PLACEHOLDER}
        />
      </div>
    </div>
  )
}
