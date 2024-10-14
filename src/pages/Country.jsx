/*eslint-disable*/

import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchData";

export default function Country() {
  const { countryName } = useParams();
  const { result, isLoading, isError } = useFetchData(countryName);
  console.log(result);

  return (
    <>
      {isLoading && (
        <p className="text-center text-2xl font-bold">Loading...</p>
      )}
      {isError && (
        <p className="text-center text-2xl font-bold">Cannot retrieve data!</p>
      )}
      {!isError && !isLoading && (
        <div>
          <Link
            to="/"
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.89269 3.53553L7.0712 4.71405L3.18211 8.60313L18.0314 8.60313L18.0314 10.253L3.18211 10.253L7.0712 14.1421L5.89269 15.3206L0.000132627 9.42809L5.89269 3.53553Z"
                  fill="#111827"
                />
              </g>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-full"
              src={result?.flags?.svg}
              alt={result?.flags?.alt}
            />
            <div className="justify-content-center flex flex-col">
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result?.name?.common}
              </h1>
              <div className="flex flex-col gap-3 justify-between lg:flex-row">
                <div className="flex flex-col gap-3">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    <span className="font-light">{result?.name?.common}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span className="font-light">{result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{result?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {result?.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.keys(result?.currencies)
                          .map((currency) => {
                            return `${result?.currencies[currency].name}`;
                          })
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result?.languages &&
                        Object.values(result?.languages)
                          .map((language) => `${language}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// https://restcountries.com/v3.1/name/egypt
