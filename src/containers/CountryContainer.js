import Country from '../components/Country'
import { useState, useEffect } from 'react';
import '../styles.css'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [darkMode, setDarkMode] = useState(false)

    // fetch the api of countries
    const loadCountriesData = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            setCountries(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    // load countries with use effect
    useEffect(() => {
        loadCountriesData();
    }, []
    )

    // function to check if you have visited a country
    const checkAsVisited = (visitedCountry) => {
        if (!visitedCountries.includes(visitedCountry)) {
            setVisitedCountries([...visitedCountries, visitedCountry])
            setCountries(countries.filter((country) => country !== visitedCountry))
        }
    }

    // function to remove a visited country
    const removeVisitedCountry = (countryToRemove) => {
        setVisitedCountries((previousVisited) =>
        previousVisited.filter((country) => country !== countryToRemove)
        );
        setCountries((previousVisited) => [...previousVisited, countryToRemove]);
    };

    // function to handle the filter
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    // function to filter countries 
    const filterCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(filter.toLowerCase()))

    // function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    return ( 
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
        <h1>Country Bucket List!!</h1>
            <div className='filterCountries'>
                <div className='dark-mode-toggle'>
                    <label>
                        Dark Mode:
                        <input
                            type='checkbox'
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            />
                    </label>
                </div>
            <h2>Filter Countries</h2>
            <form>
                <label>
                    Filter:
                    <input 
                        type='text'
                        value={filter}
                        onChange={handleFilterChange}/>
                </label>
            </form>
            </div>
            <div className='bucketListCountries'>
            <h2>Countries to visit:</h2>
                <ul> 
                    {filterCountries.map((country) => (
                        <Country
                            country={country}
                            visited={() => checkAsVisited(country)}
                            />
                    ))}
                </ul>
        </div>
        <div className='visitedCountries'>
            <h2>Visited Countries:</h2>
                <ul>
                    {visitedCountries.map((visitedCountries) => (
                        <li>{visitedCountries.name.common}
                            <button onClick={() => removeVisitedCountry(visitedCountries)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
        </div>
    );
}

export default CountryContainer;