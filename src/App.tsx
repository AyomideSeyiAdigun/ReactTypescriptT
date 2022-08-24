import useLocalStorage from 'use-local-storage'
import './App.css';
import { Routes, Route,Link } from "react-router-dom";
import CountriesPage from  "./pages/countriesPage/CountriesPage"
import CountryPage from "./pages/countryPage/CountryPage";
 
import {   useState } from 'react';
 
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  const [countries, setcCountries] = useState( {})
   
  return (
    <div className="App" data-theme={theme}>
      <Link to="/">Where it is in the World?</Link>
      <button onClick={switchTheme}>
        switch to {theme === 'light' ? 'dark' : 'light'} Theme
      </button>
       
    
       <Routes >
        <Route path='/' element={  <CountriesPage />} />
        <Route path='/country/:name' element={<CountryPage />} />
      </Routes>

    </div>
  );
}

export default App;
