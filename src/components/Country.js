import { useState } from "react";

const Country = ({country, visited, countryDetails}) => {
    const [details, setDetails] = useState(false)

    const showDetails = () => {
        setDetails(!details)
    }

    return ( 
        <li>
            {country.name.common}
            <button onClick={visited}>Visited?</button>
            <button onClick={showDetails}>Show Country details</button>
            {details}
        </li>
    );
}

export default Country;