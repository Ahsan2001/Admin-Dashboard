import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='flex items-center justify-center h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        {children}
      </div>
  )
}
