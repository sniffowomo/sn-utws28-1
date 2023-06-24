import Bu from '@/components/buttons'

const GIF =
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJ0aHo2NGI5ZXFiOXRicDV0NWR2YzZzZnN6MG13bGZld2JlaWt6aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lnfzT3k8g7wpG/giphy.mp4'

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
          <source src={GIF} type="video/mp4" />
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
