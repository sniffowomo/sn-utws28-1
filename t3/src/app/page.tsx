'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <h1 className="text-8xl font-bold text-center bg-clip-text text-transparent bg-[url('https://media1.giphy.com/media/NsBknNwmmWE8WU1q2U/giphy.gif')] animate-text ">
            Tailwind Animate Testing
          </h1>
        </div>
        <div>
          <p className="p-5 text-center animate-fade">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            reiciendis!
          </p>
          <p className="p-5 text-center animate-fade animate-delay-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            reiciendis!
          </p>
          <p className="p-5 text-center animate-jump-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            reiciendis!
          </p>
        </div>
      </div>
    </main>
  )
}
