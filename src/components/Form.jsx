import React from 'react';
const Form =({query, setQuery})=>{
    const handleSearch =(e)=>{
        setQuery(e.target.value)
    };
    return (
        <div>
            <input
            type="text"
            placeholder="Search for a country ..."
            value={query}
            onChange={handleSearch}
            />
        </div>
    );
}

export default Form