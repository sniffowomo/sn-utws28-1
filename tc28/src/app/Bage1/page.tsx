import Link from "next/link";
import "./bage.css";

import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-center">
        <Link href="/">
          <button
            type="button"
            className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-lg px-14 py-3 text-center mr-2 mb-2 ">
            Lime
          </button>
        </Link>
      </div>
      <div>
        <div className="text-9xl p-4 animate-bounce container text-center">
          page
        </div>
      </div>
    </div>
  );
}
