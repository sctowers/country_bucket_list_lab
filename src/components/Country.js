import { useState } from "react";

const Country = ({ country, visited }) => {
    const [details, setDetails] = useState(false)

    const showDetails = () => {
        setDetails(!details)
    }

    return (
        <li>
            <h3>{country.name.common + " " + country.flag + " "}</h3>
            <button onClick={visited}>Visited?</button>
            <button onClick={showDetails}>Show More Country Details</button>
            {details && (
                <div>
                    <h3>Details:</h3>
                    {country.name.common === 'Antarctica' ? (
                        <>
                            <p>Capital: n/a</p>
                            <p>Languages: n/a</p>
                            <p>Population: {country.population}</p>
                        </>
                    ) : (
                        <>
                            <p>Capital: {country.capital}</p>
                            <p>Languages: {Object.values(country.languages).join(", ")}</p>
                            <p>Population: {country.population}</p>
                        </>
                    )}
                </div>
            )}
        </li>
    );
}

export default Country;