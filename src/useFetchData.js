/*eslint-disable*/

import { useEffect, useState } from "react";

export default function useFetchData(countryName) {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if(countryName){
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromApi();
    }
  };

  const fetchDataFromApi = async () => {
    let url = `https://restcountries.com/v3.1/all`;
    setIsLoading(true);
    if (countryName) {
      url = `https://restcountries.com/v3.1/name/${countryName}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (countryName) {
        setResult(data[0]);
      } else {
        setResult(data);
        setFilteredCountries(data);
        localStorage.setItem("countries", JSON.stringify(data));
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  

  return {
    result,
    filteredCountries,
    isLoading,
    isError,
    setFilteredCountries,
  };
}
