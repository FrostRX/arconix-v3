import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    const country = formattedCountries.find(
      (country) => country.value === value
    );
    return country;
  };

  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
