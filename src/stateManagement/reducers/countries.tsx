import { createSlice } from '@reduxjs/toolkit'
 
export const countrySlice = createSlice({
  name: 'countries',
  initialState: {
   CountriesData: {},
    isFetching:false,
    err:false,
    search:''
    
  },
  reducers: {
    FetchCountriesData: (state,action) => {
      return state
    },
    fetchingData:(state)=>{
      state.CountriesData =  {}
      state.isFetching = true
      state.err=false
    },
    fetchCountriesDataRequestSuccess: (state,action) => {
      state.CountriesData = action.payload 
      state.isFetching = false
      state.err=false
    },
    fetchCountriesDataRequestFailure:(state, action) => {
      state.CountriesData = {}
      state.isFetching = false
      state.err=action.payload
    },
    searchCountry:(state,action)=>{
      state.search=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {searchCountry, fetchingData,fetchCountriesDataRequestSuccess, fetchCountriesDataRequestFailure} =countrySlice.actions

export default countrySlice.reducer