import React from "react";
import { useRouter } from "next/router";
import Rates from "../../components/rates";
function currency() {
  const router = useRouter();
  const { currencyCode } = router.query;
  return (
    <div>
      <Rates></Rates>
    </div>
  );
}

export default currency;
