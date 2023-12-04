import Country from '../components/Country'
import { useState, useEffect } from 'react';
import '../styles.css'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [filter, setFilter] = useState('')

    const loadCountriesData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountries(data);
    }

    useEffect(() => {
        loadCountriesData();
    }, []
    )

    const checkAsVisited = (visitedCountry) => {
        if (!visitedCountries.includes(visitedCountry)) {
            setVisitedCountries([...visitedCountries, visitedCountry])
            setCountries(countries.filter((country) => country != visitedCountry))
        }
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const filterCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(filter.toLowerCase()))


    return ( 
        <>
        <h1>Country Bucket List!!</h1>
            <div className='filterCountries'>
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
                        <li>{visitedCountries.name.common}</li>
                    ))}
                </ul>
        </div>
        </>
    );
}

export default CountryContainer;