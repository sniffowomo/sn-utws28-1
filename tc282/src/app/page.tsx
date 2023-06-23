import Image from "next/image";
import Buts from "./components/buts";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-[url('https://raw.githubusercontent.com/sniffowomo/sn-utws28-1/w1/tc282/src/app/components/bd.gif')] bg-fixed bg-center ">
      <h1 className="text-6xl bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent animate-gradient font-extrabold mb-10 bg-400%  ">
        Ch28: Tailind Mini Projects
      </h1>
      <div className="border-y-2 border-red-500 py-5">
        <p className="mt-3 text-yellow-500]">
          Tailwind mini projects click button below
        </p>
      </div>
      <div>
        <Buts />
      </div>
    </main>
  );
}
