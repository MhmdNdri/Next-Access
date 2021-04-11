import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import { useIntl } from "react-intl";

const loadData = async (locale) => {
  const response = await fetch("../pages/api/hello.js", {
    headers: { "Accept-Language": locale },
  });
  const data = await response.json();
  return data;
};

const Language = () => {
  const { formatMessage: f } = useIntl();

  const { locale, locales } = useRouter();
  const { data } = useSWR([locale, "hello"], loadData);
  return (
    <div className="flex flex-row absolute top-10 right-10 items-center text-center">
      <h2 className="text-lg font-bold mr-10">{f({ id: "selectLanguage" })}</h2>

      {locales.map((loc) => (
        <div className=" mr-5 bg-yellow-500 p-1 rounded-lg active:underline">
          <Link href="/" locale={loc}>
            <a>{loc}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Language;
