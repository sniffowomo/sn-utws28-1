import Bu from '@/components/buttons'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="relative fles h-[100vh] shrink-0 flex flex-col items-center justify-center">
        <video
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          className="absolute h-full w-full object-cover -z-10">
          <source
            src="https://media.giphy.com/media/l3q2XB76CaWPggiNW/giphy.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-[url('https://media4.giphy.com/media/l4JyNNqiVzBMbDOVO/giphy.gif')]">
          Video BG Test2
        </h1>
        <p className="relative text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
          alias
        </p>
        <Bu />
      </section>
    </main>
  )
}
