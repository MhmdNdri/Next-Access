import React from "react";
import { useRouter } from "next/router";
function currency() {
  const router = useRouter();
  const { currencyCode } = router.query;
  return <div>currency</div>;
}

export default currency;
