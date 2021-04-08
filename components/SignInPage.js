import React from "react";
import { signIn } from "next-auth/client";
import { useIntl } from "react-intl";
const SignInPage = () => {
  const { formatMessage: f } = useIntl();
  return (
    <div>
      <h1 className="xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-sans mb-40 font-bold text-[#116cdb] text-center">
        {f({ id: "welcome" })}
      </h1>
      <div className="flex felx-row items-center text-center justify-center ">
        <div></div>
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl px-20 text-2xl font-bold mb-6 text-black-500">
            {f({ id: "atFirst" })}
          </h2>
          <h3 className="font-mono text-md mb-3 px-15">
            {f({ id: "clickSignInMessege" })}
          </h3>
          <button
            onClick={() => signIn("google")}
            className="flex focus:outline-none items-center bg-[#e50914] text-white text-base mt-3 font-bold px-5 py-4 rounded-lg hover:bg-red-700"
          >
            {f({ id: "signInButton" })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
