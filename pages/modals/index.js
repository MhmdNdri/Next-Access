import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Rates from "../../components/rates";

const currencies = ["CAD", "USD"];

const modals = () => {
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    console.log(window.location.href + `?modal=true`);
    if (isOpen === true) {
      // location.replace();
      if (window.location.href.includes(`?modal=true`) === false) {
        history.pushState({}, null, window.location.href + `?modal=true`);
      }
    } else if (isOpen === false) {
      // location.replace(window.location.href.split(`?modal=true`)[0]);
      history.pushState({}, null, window.location.href.split(`?modal=true`)[0]);
    }
  }, [isOpen]);
  useEffect(() => {
    window.location.href.includes(`?modal=true`) && setIsOpen(true);
  }, []);

  const router = useRouter();
  const { currencyCode } = router.query;
  return (
    <div className={styles.container}>
      {currencies.map((currency) => (
        // <Link
        //   key={currency}
        //   // href={`/?currencyCode=${currency}`}
        //   // as={`/currency/${currency}`}
        // >

        // </Link>
        <div key={currency}>
          <button onClick={() => setIsOpen(true)} className={styles.btn}>
            {currency}
          </button>
        </div>
      ))}
      <Modal
        isOpen={isOpen === true ? true : false}
        onRequestClose={() => setIsOpen(!isOpen)}
      >
        <Rates currencyCode={router.query.currencyCode} />
      </Modal>
    </div>
  );
};

export default modals;
