import styles from "../styles/Main.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "tailwindcss/tailwind.css";
import SignInPage from "../components/SignInPage";
import Language from "../components/Language";
import "aos/dist/aos.css";
import MainPageContent from "../components/MainPageContent";
import SignOut from "../components/SignOut";

export default function Home() {
  const [session, loading] = useSession();
  const { NEXT_ACCESS } = process.env;

  useEffect(() => {
    AOS.init({ duration: 2000 });
    console.log(NEXT_ACCESS);
  }, []);

  return (
    <div className={styles.container}>
      {!session ? (
        <div>
          <Language />
          <SignInPage />
        </div>
      ) : (
        <>
          <SignOut />

          <MainPageContent />
        </>
      )}
    </div>
  );
}
