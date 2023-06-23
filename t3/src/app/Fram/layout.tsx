import './fram.css'
import { Changa } from 'next/font/google'

const chn = Changa({ subsets: ['latin'] })

export const metadata = {
  title: 'FramerMotion',
  description: 'Tailwind Animate testing',
}

export default function FramLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={chn.className}>{children}</body>
    </html>
  )
}
