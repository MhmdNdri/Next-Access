import React from "react";
import { signOut, useSession } from "next-auth/client";
const SignOut = () => {
  const [session, loading] = useSession();
  return (
    <div className="z-100 overflow-visible">
      <div className="lg:absolute top-10 right-20 flex flex-row z-100 overflow-visible mt-5">
        <h3 className>
          <span className="mr-3 "> Signed in as :</span>{" "}
          <span className="font-bold underline text-blue-600 cursor-pointer">
            {session.user.email}
          </span>
        </h3>
        <button
          onClick={() => signOut()}
          className="flex outline-none items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded ml-10 cursor-pointer outline-none"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SignOut;
