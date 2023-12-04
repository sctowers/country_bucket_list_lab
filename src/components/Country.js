const Country = ({country, visited}) => {
    return ( 
        <li>
            {country.name.common}
            <button onClick={visited}>Visited?</button>
        </li>
    );
}

export default Country;