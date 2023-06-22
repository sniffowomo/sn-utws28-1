"use client";

import { Oswald } from "next/font/google";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

const oswald = Oswald({ subsets: ["latin"] });

export default function Butts() {
  return (
    <>
      <div className={oswald.className}>
        <div className="flex flex-grow-0 flex-col items-center gap-4 p-8 ">
          <Zoom cascade damping={0.2} delay={100}>
            <Link href="/Bage1">
              <button className="rounded-full bg-blue-500 p-4 hover:bg-black hover:border-2 hover:border-blue-500 hover:font-bold hover:text-blue-300 hover:cursor-help">
                Bage1 - BG Testing - Local Image
              </button>
            </Link>
            <Link href="/Bage2">
              <button className="rounded-full bg-green-500 p-4 hover:bg-black hover:border-2 hover:border-green-500 hover:font-bold hover:text-green-300 hover:cursor-help">
                Bage2 - BG Testing - External Image
              </button>
            </Link>
            <Link href="/">
              <button className="rounded-full bg-pink-500 p-4  hover:bg-black hover:border-2 hover:border-pink-500 hover:font-bold hover:text-pink-300 hover:cursor-help">
                Save Changes
              </button>
            </Link>
            <Link href="/">
              <button className="rounded-full bg-teal-500 p-4  hover:bg-black hover:border-2 hover:border-teal-500 hover:font-bold hover:text-teal-300 hover:cursor-help">
                Save Changes
              </button>
            </Link>
          </Zoom>
        </div>
      </div>
    </>
  );
}
