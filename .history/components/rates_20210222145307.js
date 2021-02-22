import React from "react";
import usSWR from "swr";
import currency from "../pages/currency/[currencyCode]";

const fetchCurrency = (currencyCode) =>
  fetch(`https.rates.io/api/latest?base=${currencyCode}`).then((response) =>
    response.json()
  );
function rates() {
  const { data, error } = useSWR(currencyCode, fetchCurrency);
  if (error) return <div>No Rates Today</div>;
  if (!data) return <div>Loading ...</div>;

  return <div></div>;
}

export default rates;
