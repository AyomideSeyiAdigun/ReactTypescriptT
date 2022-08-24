import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SearchCountries } from '../../stateManagement/actions'
import './searchInput.css'
 
interface Props {
  SearchData: (data: any) => void,

}
const SearchInput: React.FC<Props> = ({ SearchData }) => {
  const [countries, setCountries] = useState({ value: '', check: '' })
  useEffect(() => {
    SearchData(countries)
  }, [SearchData, countries])
  return (
    <div className="row mt-5  mb-5 d-flex justify-content-around">
      <div className="col-11 col-sm-7 mb-3">

        <div className="input-group">
          <input type="search" value={countries.value} className="form-control rounded" onChange={(e) => setCountries({ value: e.target.value, check: 'inp' })} placeholder="Search for a country.." aria-label="Search" aria-describedby="search-addon" />
        </div>
      </div>

      <div className="col-7 col-sm-4 mb-3">
        <select value={countries.value} onChange={(e) => setCountries({ value: e.target.value, check: 'reg' })} className="form-control">
          <option >Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}




const mapDispatchToProps = (dispatch:any) => {
  return {

    SearchData: (data:object) => dispatch(SearchCountries(data))
  }
}


export default connect(null, mapDispatchToProps)(SearchInput)
