import Image from 'next/image'
import Bu from './components/bu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-8xl font-bold text-center bg-clip-text text-transparent bg-[url('https://media1.giphy.com/media/NsBknNwmmWE8WU1q2U/giphy.gif')] animate-text ">
        Tailwind Animate Testing
      </h1>
      <Bu />
    </main>
  )
}
