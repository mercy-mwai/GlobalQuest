import { useEffect, useState } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        console.log(response.data)
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  // Filter countries based on query
  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(results);
    setSelectedCountry(null); // Reset selected country when query changes
  }, [query, countries]);

  const handleQueryChange = (e) => setQuery(e.target.value);

  const renderContent = () => {
    if (filteredCountries.length > 10) {
      return <p>Too many matches, please refine your search.</p>;
    } else if (filteredCountries.length === 1) {
      return <CountryDetails country={filteredCountries[0]} />;
    } else if (filteredCountries.length > 1) {
      return (
        <CountryList
          countries={filteredCountries}
          onSelect={(country) => setSelectedCountry(country)}
        />
      );
    }
    return <p>No matches found.</p>;
  };

  return (
    <div>
      <h1>Country Information</h1>
      <input
        type="text"
        placeholder="Search countries"
        value={query}
        onChange={handleQueryChange}
        style={{ marginBottom: "20px" }}
      />
      {selectedCountry ? <CountryDetails country={selectedCountry} /> : renderContent()}
    </div>
  );
};

export default App;


