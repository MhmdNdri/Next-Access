import React from "react";
import { useRouter } from "next/router";
import Rates from "../../components/rates";

function currency() {
  const router = useRouter();

  return (
    <div>
      <Rates currencyCode={currencyCode} />
    </div>
  );
}

export default currency;
