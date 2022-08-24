import React from 'react'
import './countriesError.css'
import {State} from "../../types/types"
interface Props{
    fetchedData:State
}
const CountriesError:React.FC<Props> = ({fetchedData}) => {
    
    return (
        <div>
            <h2>{fetchedData.country.err}</h2>
            <button   className="btn btn-primary">Reload</button>
        </div>
    )
}

export default CountriesError
