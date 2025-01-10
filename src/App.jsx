import {useEffect, useState} from 'react'
import Form from'./components/Form';
import axios from 'axios';

const App =()=>{
    const [countries, setCountries]=useState([]);
    const[filteredCountries, setFilteredCountries]=useState([]);
    const [selectedCountry, setSelectedCountry]=useState(null);
    const [query, setQuery]=useState("");
}

useEffect   (()=>{
    axios.
    get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response =>
        setCountries(response.data)
    );
}, [])











export default App