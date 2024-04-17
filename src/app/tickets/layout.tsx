import type { Metadata } from 'next'
import TicketsNavMenu from '@/app/tickets/[id]/components/tickets-nav-menu'

export const metadata: Metadata = {
  title: 'Tickets Page Demo',
  description: 'At Angel Studios I developed and launched the initial theater ticket purchasing page in November 2021. This demo represents that initial work redone implemented using Next.js 14 and a little of my own additions to support multiple movies.',
}

export default function TicketsLayout({
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
