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

  return (
    <div>
      <h3>rates for {currencyCode}</h3>
      <ul>
        {Object.entries(data.rates).map(([code, rate]) => (
          <li>
            <strong>{code}:</strong>
            {rate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default rates;
