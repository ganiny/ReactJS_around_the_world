/* eslint-disable */

import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

function CountryList({ filteredCountries }) {
  return (
    <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {filteredCountries.length ? (
        filteredCountries?.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
}

export default CountryList;
