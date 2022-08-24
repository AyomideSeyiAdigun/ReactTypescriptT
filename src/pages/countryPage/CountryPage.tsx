import React, { useState } from 'react'
import './countryPage.css'
import {  useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {State} from "../../types/types"

interface Country{
    name:{
        common:string,
        official:string
    },
    flags:{
        png:string,
        svg:string
    },
    cioc:string,
    capital:string,
    idd:{
        root:string,
        suffixes:string
    },
    coatOfArms:{
        png:string
    },
    subregion:string,
    region:string

}



const CountryPage:React.FC =()=> {
    const {name} = useParams()
    const countries:any = useSelector((state:State) => state.country.CountriesData) ;
     const [singleCountry , setSingleCountry] = useState <Country[]>([])

     
    useEffect(()=>{
        async  function  getCountryDetail( ) {
            let Country :[] = await countries.filter((country:Country)=>country.name.common === name);
            setSingleCountry(Country)
         }
         getCountryDetail()
    },[countries,name])
    
    return (
    <>
     
    <div className="row justify-content-around">
        <div className="col-sm-6 col-md-6 col-lg-6">
            
        <img src={singleCountry[0]?.flags.svg} className="img-thumbnail" alt="..."/>   
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
        <h3>{singleCountry[0]?.name?.official}</h3>
        <img src={singleCountry[0]?.coatOfArms.png} className="rounded CardImages " alt="..."/> <br />
        <span><strong>Common name:</strong> {singleCountry[0]?.name?.common } ({singleCountry[0]?.cioc})  </span> <br />
        <span><strong>Capital:</strong> {singleCountry[0]?.capital}</span><br />
        <span><strong>Phone Code: </strong>{singleCountry[0]?.idd?.root}{singleCountry[0]?.idd?.suffixes}</span><br />
        <span><strong>Sub Region : </strong>{singleCountry[0]?.subregion} </span><br />
        <span><strong>Region: </strong>{singleCountry[0]?.region}</span>
        </div>
    </div>
    </>
    )   
}

export default CountryPage
