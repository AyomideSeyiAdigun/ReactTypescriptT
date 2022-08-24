import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from  './reducers/countries'
export default configureStore({
  reducer: {
    country: countriesReducer,
  } })