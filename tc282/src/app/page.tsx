import Image from "next/image";
import Buts from "./components/buts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg-[url('https://media.tenor.com/4jDkHe9fEWAAAAAC/background.gif')] bg-fixed bg-center ">
      <h1 className="text-5xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold hover:bg-gradient-to-br hover:from-orange-500 hover:via-red-500 hover:to-blue-500 mb-10">
        Ch28: Tailind Mini Projects
      </h1>
      <div className="border-y-2 border-red-500 py-5">
        <p className="mt-3">Tailwind mini projects click button below</p>
      </div>
      <div>
        <Buts />
      </div>
    </main>
  );
}
