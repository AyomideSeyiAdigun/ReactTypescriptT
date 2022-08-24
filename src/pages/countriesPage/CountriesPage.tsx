import React, { useEffect } from 'react'
import './countriesPage.css'
import { connect } from 'react-redux'
import { FetchCountriesData } from '../../stateManagement/actions'
import PaginatedItems from '../../components/dataTable/DataTable'
import CountriesError from '../../components/error/CountriesError';
import { State } from "../../types/types";
 

interface Props {
  fetchedData: State,
  fetchData: () => any
}

const CountriesPage: React.FC<Props> = ({ fetchedData, fetchData }) => {
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <>
      {fetchedData.country.isFetching ? (<h2>Loading</h2>) : fetchedData.country.err ? (<CountriesError fetchedData={fetchedData} />) : 
        <div><PaginatedItems itemsPerPage={8} /></div>
      }

    </>)
}

const mapStateToProps = (state: State) => {
  return {
    fetchedData: state
  }
}
const mapDispatchToProps   = (dispatch:any) => {
  return {
    fetchData: () => dispatch(FetchCountriesData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage)
