import React from "react";
import { useRouter } from "next/router";
function currency() {
  const router = useRouter();
  const { currencyCode } = router.query;
  return <div>I'm {currencyCode</div>;
}

export default currency;
