import Image from 'next/image'
import vid from './components/vid'
import Vid from './components/vid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-center font-extrabold bg-gradient-to-bl from-rose-600 via-yellow-300 to-teal-500 bg-clip-text text-transparent animate-gradient bg-300%">
        Video BG Test
      </h1>
      <Vid />
    </main>
  )
}
