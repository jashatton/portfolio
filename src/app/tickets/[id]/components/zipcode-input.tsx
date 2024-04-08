import {PiMagnifyingGlassBold} from 'react-icons/pi'

const ZIP_PLACEHOLDER = 'Find Showtimes with Zipcode'

export default function ZipcodeInput() {
  return (
    <div className="w-full grid grid-cols-5 gap-x-2 items-center">
      <label htmlFor="zip-search" className="text-gray-300 text-md md:text-nowrap">
        Enter Zip
      </label>
      <div className="bg-white rounded-lg flex gap-x-2 p-4 col-span-4">
        <PiMagnifyingGlassBold size={20} color="black"/>
        <input
          id="zip-search"
          name="zip-search"
          type="text"
          className="text-sm w-full focus:ring-offset-4 text-black"
          autoFocus
          placeholder={ZIP_PLACEHOLDER}
        />
      </div>
    </div>
  )
}
