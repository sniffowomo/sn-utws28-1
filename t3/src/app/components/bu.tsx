import React from 'react'

export default function Bu() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 ">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-thrice">
          Purple to Blue
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-delay-200 ">
          Cyan to Blue
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-delay-300">
          Green to Blue
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-delay-500 ">
          Purple to Pink
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-delay-700">
          Pink to Orange
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-delay-1000">
          Teal to Lime
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-11 py-2.5 text-center mr-2 mb-2 animate-text animate-shake animate-delay-1500 ">
          Red to Yellow
        </button>
      </div>
    </>
  )
}
