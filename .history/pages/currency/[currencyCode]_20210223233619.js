import React from "react";
import { useRouter } from "next/router";
import Rates from "../../components/rates";
import Modal from "react-modal";
function currency() {
  const router = useRouter();
  const { currencyCode } = router.query;
  
  return (
    <div>
      <Rates currencyCode={currencyCode} />
      
    </div>
  );
}

export default currency;
