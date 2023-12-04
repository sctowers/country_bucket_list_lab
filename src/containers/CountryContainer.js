import Country from '../components/Country'
import { useState, useEffect } from 'react';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountriesData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountries(data);
    }

    useEffect(() => {
        loadCountriesData();
    }, []
    )

    const checkAsVisited = (country) => {
        if (!visitedCountries.includes(country)) {
            setVisitedCountries([...visitedCountries, country])
        }
    }


    return ( 
        <>
        <div className='bucketListCountries'>
            <h1>Country Bucket List!!</h1>
            <h2>Countries to visit:</h2>
                <ul> 
                    {countries.map((country) => (
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