import React from "react";
import usSWR from "swr";

const fetchCurrency = (currencyCode) =>
  fetch(`https.rates.io/api/latest?base=${currencyCode}`).then((response) =>
    response.json()
  );
function rates() {
  return <div></div>;
}

export default rates;
