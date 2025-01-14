import React from "react";

const CountryList = ({ countries, onSelect }) => (
  <ul>
    {countries.map((country) => (
      <li
        key={country.cca3}
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => onSelect(country)}
      >
        {country.name.common}
      </li>
    ))}
  </ul>
);

export default CountryList;
