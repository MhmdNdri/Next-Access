import React from "react";
import "tailwindcss/tailwind.css";
import MoviesTitle from "../../components/MoviesTitle";
import styles from "../../styles/Netflix.module.css";
const TailwindEx = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-black z-0"
        //   className={styles.background}
        style={{
          // "background-image":
          //   "linear-gradient(rgba(135, 80, 156, 0.1), rgba(135, 80, 156, 0.9)),url(/netflix-bg.jpg)",
          "background-image":
            "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/netflix-bg.jpg)",
        }}
      >
        <main className=" flex flex-col items-center text-center justify-center flex-1 px-20 text-white">
          <h1 className="text-5xl font-bold">
            {" "}
            Unlimited Movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl my-4">Watch anywhere, Cancel anytime</h2>
          <p className="">
            Ready to Watch? Enter your email to create your MemeberShip
          </p>
          <div className="flex flex-row mt-2">
            <input
              placeholder="Email Address"
              className="min-w-[300px] bg-white p-2 outline-none text-black rounded-l-lg"
            />
            <button className="items-center p-2 px-5 bg-red-600 text-lg flex flex-row rounded-r-lg">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </main>
      </div>
      <MoviesTitle />
    </div>
  );
};

export default TailwindEx;
