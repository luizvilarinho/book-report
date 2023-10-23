import { BookOpenIcon } from '@heroicons/react/24/solid'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'book report',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header bg-indigo-500">
          <nav className="flex items-center justify-end p-4 mr-16 ">
            <h2 className="text-indigo-100 text-base font-semibold cursor-pointer flex-auto ml-4">
              <BookOpenIcon className="inline-block mr-2 h-6 w-6 text-indigo-200" />
                <Link href="/">Book report</Link>
            </h2>
            <h1 className="text-white text-base font-semibold cursor-pointer ml-16">
              <Link href="/pages/carregar">Carregar fichamento</Link>
            </h1>
            <h1 className="text-white text-base font-semibold cursor-pointer ml-16">
              <Link href="/pages/novo">Novo fichamento</Link>
            </h1>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
