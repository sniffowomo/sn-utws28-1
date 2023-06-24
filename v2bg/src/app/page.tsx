import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header>
        <video muted autoPlay loop playsInline disablePictureInPicture>
          <source src="./v.mp4" type="video/mp4" />
        </video>
      </header>
      <h1 className="text-4xl">V2BG</h1>
    </main>
  )
}
