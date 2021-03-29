import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";

const MoviesTitle = () => {
  return (
    <div className="h-4/6 flex space-x-12 flex-row py-9 bg-black text-white items-center justify-center rounded-lg ">
      <span className="mb-30 shadow-lg p-3 border border-red-600">
        <Image
          src="/comedy.jpg"
          alt="Picture comody"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h2 className="itmes-center text-center font-bold mt-7">Comedy</h2>
      </span>
      <span className="mb-30 shadow-lg p-3 border border-indigo-600">
        <Image
          src="/scienceFiction.jpg"
          alt="Picture comody"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h2 className="itmes-center text-center font-bold mt-7">
          Science-Fiction
        </h2>
      </span>
      <span className="mb-30 shadow-lg p-3 border border-green-600">
        <Image
          src="/drama.jpg"
          alt="drama"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h2 className="itmes-center text-center font-bold mt-7">Drama</h2>
      </span>
    </div>
  );
};

export default MoviesTitle;
