import React from "react";

export default function page() {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-2 bg-[url('https://media2.giphy.com/media/fw8uZriJW4TlhmZnUj/giphy.gif')] bg-fixed bg-cover ">
      <div>
        <h1
          className="text-9xl flex flex-col
        font-extrabold bg-clip-text text-transparent animate-gradient bg-300% text-center bg-[url('https://i.giphy.com/media/1GkRWmlZzcE3HLDXQw/giphy.webp')]">
          Test Pager
        </h1>
        <div>
          <p className="text-2xl text-center mt-10 bg-gradient-to-r from-red-600 via-yellow-500 to-teal-600 text-transparent bg-clip-text animate-gradient bg-300% ">
            The above text looks awesome, because instead of a background
            gradient , we have just applied a gif , note that the gradient is
            also being applied to the text above so you see it move like that
          </p>
        </div>
      </div>
    </section>
  );
}
