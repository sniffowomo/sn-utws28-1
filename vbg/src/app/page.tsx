import Image from 'next/image'
import vid from './components/vid'
import Vid from './components/vid'

export default function Home() {
  return (
    <main>
      <div className="sticky flex flex-col h-screen items-center justify-center text-center z-50 ">
        <h1 className="text-9xl">Hey</h1>
        <p className=" text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum?
        </p>
      </div>
      <Vid />
    </main>
  )
}
