import type { Metadata } from 'next'
import TicketsNavMenu from '@/app/tickets/[id]/components/tickets-nav-menu'

export const metadata: Metadata = {
  title: 'Jason Hatton\'s Development Portfolio',
  description: 'Examples of my work',
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh flex-col">
      <div className="grow-0">
        <TicketsNavMenu />
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
