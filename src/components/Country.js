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
            <button onClick={showDetails}>Show Country details</button>
            {details && (
                <div>
                    <h3>Details:</h3>
                    <p>Capital: {country.capital}</p>
                    <p>Languages: {country.languages.eng}</p>
                    <p>Population: {country.population}</p>
                    <img src={country.flag} alt={`Flag of ${country.name.common}`}/>
                </div>
            )}
        </li>
    );
}

export default Country;