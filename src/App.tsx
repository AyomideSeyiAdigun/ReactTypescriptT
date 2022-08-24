import useLocalStorage from 'use-local-storage'
import './App.css';
import { Routes, Route } from "react-router-dom";
import CountriesPage from  "./pages/countriesPage/CountriesPage"
import CountryPage from "./pages/countryPage/CountryPage";
 
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="App" data-theme={theme}>
      <span>Where it is in the World?</span>
      <button onClick={switchTheme}>
        switch to {theme === 'light' ? 'dark' : 'light'} Theme
      </button>
  
      <Routes >
        <Route path='/' element={<CountriesPage />} />
        <Route path='/country/:name' element={<CountryPage />} />
      </Routes>

    </div>
  );
}

export default App;
