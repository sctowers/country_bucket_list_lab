import { useState } from "react";

const Country = ({country, visited }) => {
    const [details, setDetails] = useState(false)

    const showDetails = () => {
        setDetails(!details)
    }

    return ( 
        <li>
            {country.name.common}
            <button onClick={visited}>Visited?</button>
            <button onClick={showDetails}>Show More Country Details</button>
            {details && (
                <div>
                    <h3>Details:</h3>
                    <p>Capital: {country.capital}</p>
                    <p>Languages: {Object.values(country.languages).join(", ")}</p>
                    <p>Population: {country.population}</p>
                    <p>Flag: {country.flag}</p>
                </div>
            )}
        </li>
    );
}

export default Country;