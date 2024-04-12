import Image from 'next/image'
import {type ReactElement} from 'react'

export default function Poster({posterUrl, title}: { posterUrl: string, title: string }): ReactElement {
  return (
    <div className="relative">
      <Image
        priority
        width={1536}
        height={1536}
        alt="Movie Poster"
        src={posterUrl}
        className="h-[500px] bg-center bg-no-repeat object-cover md:bg-left lg:h-screen lg:min-w-[400px] lg:max-w-[720px]"
      />
      <div className="absolute bottom-8 flex w-full justify-center">
        <p className="top-0 rounded-2xl bg-black/30 p-2 text-center text-3xl text-yellow-300">{title}</p>
      </div>
    </div>
  )
}
