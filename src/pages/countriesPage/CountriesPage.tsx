import React, { useEffect } from 'react'
import './countriesPage.css'
import { connect } from 'react-redux'
import { FetchCountriesData } from '../../stateManagement/actions'
// import CountriesError from '../../components/error/CountriesError'
import SearchInput from '../../components/searchInput/SearchInput'

import PaginatedItems from '../../components/dataTable/DataTable'
import CountriesError from '../../components/error/CountriesError';
import { State } from "../../types/types";
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

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
      <SearchInput />
      {fetchedData.country.isFetching ? (<h2>Loading</h2>) : fetchedData.country.err ? (<CountriesError fetchedData={fetchedData} />) : (
        <PaginatedItems itemsPerPage={8} />
      )}

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
