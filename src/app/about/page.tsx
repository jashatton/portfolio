import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="w-full p-4">
      <h1 className="py-8 text-center text-2xl">Jason Hatton</h1>

      <Image src="/about/headshot.webp" alt="Jason Hatton" className="mx-auto size-[300px] rounded-full" width={1473} height={1458} />
      <p className="mx-auto max-w-lg text-pretty py-8">
        I am a constant self-improver, domain driven designer, pragmatic developer, creative problem solver, developer
        hobbyist, levelheaded peace maker, and love to share what I learn. In the last two years, I have been mostly
        developing on the front-end and have really enhanced my abilities in web development while remaining very capable
        of back-end development. It is important for me to keep up with new design concepts, development tools, and
        techniques. I balance that with staying pragmatic and focused on meeting present business needs. I care about my
        teammates and have extreme ownership in building great products as a team.
      </p>
    </div>
  )
}
