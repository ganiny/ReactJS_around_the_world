
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import useFetchData from "../useFetchData";

export default function Home() {
  const { result, filteredCountries, isLoading, isError, setFilteredCountries } = useFetchData();
  
  
  return (
    <>
      {isLoading && (
        <p className="text-center text-2xl font-bold">Loading...</p>
      )}
      {isError && (
        <p className="text-center text-2xl font-bold">Cannot retrieve data!</p>
      )}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              setFilteredCountries={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              setFilteredCountries={setFilteredCountries}
            />
          </div>
          <CountryList filteredCountries={filteredCountries} />
        </>
      )}
    </>
  );
}
