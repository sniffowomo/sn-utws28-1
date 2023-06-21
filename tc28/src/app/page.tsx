import Image from "next/image";
import Link from "next/link";
import Butts from "./components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <div className=" text-center text-5xl bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-800 text-transparent bg-clip-text hover:bg-gradient-to-tl hover:from-red-800 hover:via-blue-800 hover:to-green-800 hover:font-bold py-6">
        <h1>Chapter 23 Work</h1>
      </div>
      <Butts />
    </main>
  );
}
