import React from "react";
import { useRouter } from "next/router";
import Rates from "../../components/rates";
import Modal from "react-modal";
function currency() {
  const router = useRouter();
  const { currencyCode } = router.query;
  Modal.setAppElement("#__next");
  return (
    <div>
      <Rates currencyCode={currencyCode} />
      <Modal
        isOpen={!!router.query.currencyCode}
        onRequestClose={() => router.push("/")}
      >
        <Rates currencyCode={router.query.currencyCode} />
      </Modal>
    </div>
  );
}

export default currency;
