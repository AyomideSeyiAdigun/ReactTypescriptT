import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import axios from "axios"
import { searchCountry,fetchingData,fetchCountriesDataRequestSuccess, fetchCountriesDataRequestFailure} from '../reducers/countries'

 
export const FetchCountriesData = ()=>{
    return(dispatch:any) =>{
        dispatch( fetchingData)
        axios.get('https://restcountries.com/v3.1/all')
        .then(res =>{
            const data = res.data
            dispatch(fetchCountriesDataRequestSuccess(data))
        })
        .catch(err=>{
            const errMsg = err.message
            dispatch(fetchCountriesDataRequestFailure(errMsg))
        })
    }
}



export const SearchCountries = (data: object) =>{
    return (dispatch: (arg0: { payload: any; type: string }) => void) =>{
        dispatch(searchCountry(data))
    }
}


  