import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Jason Hatton\'s Development Portfolio',
    template: '%s | Jason Hatton\'s Development Portfolio',
  },
  description: 'A little something about Jason Hatton and the kind of work he does.',
  openGraph: {
    images: {
      url: 'https://jasonhatton.com/public/headshot.webp',
      width: 800,
      height: 600,
    },
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={clsx(inter.className)}>
    <Link
      className="absolute right-10 top-4 flex w-fit items-center gap-2 text-nowrap"
      href="https://github.com/jashatton/portfolio"
      target="_blank"
    >
      <p className="hidden sm:block">This portfolio is on</p>
      <BsGithub size={30} />
    </Link>
    {children}
    </body>
    </html>
  )
}
