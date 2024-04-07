import Image from "next/image";
import clsx from "clsx";
import {className} from "postcss-selector-parser";

export default function Poster({posterSrc, posterClassname}: { posterSrc: string, posterClassname?: string }) {
  return (
    <div className="relative">
      <Image
        width={1536}
        height={1536}
        alt="Movie Poster"
        src={posterSrc}
        className={clsx("object-cover bg-center bg-no-repeat", posterClassname)}
      />
      <div className="absolute top-8 flex justify-center w-full">
        <p className="text-center -rotate-6 text-3xl top-0 text-yellow-300 p-2 bg-black/30 rounded-2xl">Battle over
          Fiera</p>
      </div>
    </div>
  )
}
