import React from "react";
import usSWR from "swr";
import currency from "../pages/currency/[currencyCode]";

const fetchCurrency = (currencyCode) =>
  fetch(`https.rates.io/api/latest?base=${currencyCode}`).then((response) =>
    response.json()
  );
function rates() {
  const { data, error } = useSWR(currencyCode, fetchCurrency);
  return <div></div>;
}

export default rates;
