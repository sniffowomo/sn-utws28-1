import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-2">
      <h1
        className="text-9xl flex flex-col
        font-extrabold bg-clip-text text-transparent animate-gradient bg-300% text-center bg-[url('https://i.giphy.com/media/1GkRWmlZzcE3HLDXQw/giphy.webp')]">
        Test Pager
      </h1>
      <div>
        <p className="text-2xl text-center mt-10 bg-gradient-to-r from-red-600 via-yellow-500 to-teal-600 text-transparent bg-clip-text animate-gradient bg-300% ">
          The above text looks awesome, because instead of a background gradient
          , we have just applied a gif , note that the gradient is also being
          applied to the text above so you see it move like that
        </p>
      </div>
      <div className="p-10">
        <Link href="/">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-24 py-4 text-center mr-2 mb-2 animate-gradient bg-300% hover:animate-pulse">
            🏠Go Home
          </button>
        </Link>
      </div>
    </section>
  );
}
