/*eslint-disable*/
import Select from "react-select";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
  { value: "All regions", label: "All regions" },
  { value: "Americas", label: "Americas" },
  {value: "Antarctic", label: "Antarctic"},
];
function RegionMenu({countriesList, setFilteredCountries}) {
  
  const handleChange = 
    (e) => {      
      if (e.value === "All regions") {
        setFilteredCountries(countriesList);
      } else {
        setFilteredCountries(countriesList.filter((country) => country.region === e.value));
    }
  };
  return (
    <Select
      defaultValue={options[4]}
      onChange={e => handleChange(e)}
      options={options}
      placeholder="Filter by Region"
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:!bg-gray-800",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:!bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}

export default RegionMenu;
