import Image from 'next/image'
import clsx from 'clsx'
import {type ReactElement} from 'react'

export default function Poster({posterUrl, posterClassname}: { posterUrl: string, posterClassname?: string }): ReactElement {
  return (
    <div className="relative">
      <Image
        width={1536}
        height={1536}
        alt="Movie Poster"
        src={posterUrl}
        className={clsx('object-cover bg-center bg-no-repeat', posterClassname)}
      />
      <div className="absolute bottom-8 flex justify-center w-full">
        <p className="text-center text-3xl top-0 text-yellow-300 p-2 bg-black/30 rounded-2xl">Battle over
          Fiera</p>
      </div>
    </div>
  )
}
