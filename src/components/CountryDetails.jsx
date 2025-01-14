const CountryDetails = ({ country }) => (
    <div>
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Languages:</strong></p>
      <ul>
        {Object.values(country.languages).map((language, idx) => (
          <li key={idx}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        style={{ width: "200px", border: "1px solid #000" }}
      />
    </div>
    );

    export default CountryDetails