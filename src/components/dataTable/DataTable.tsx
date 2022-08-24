import React, { useEffect, useState } from 'react'
import './dataTable.css'
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import {State} from "../../types/types"
import SearchInput from '../../components/searchInput/SearchInput'
interface SingleCountry{
  flags:{
    png:string
  },
  name:{
    official:string,
    common:string
  },
  population:string,
  region:string,
  capital:string
}

 
const DataTable = ({ currentItems  }:any) => {
  let navigate = useNavigate();
  const getCountryName  = async (name:string) =>{
    navigate(`/country/${name}`, { replace: true });
     
  }
    return (
      
        <div className="row">
          {  currentItems?.map((country:SingleCountry,i:string)=> 
          <div className="col-sm-10 col-md-6 col-lg-3 d-flex justify-content-around mb-5" onClick={()=>getCountryName(country.name.common)} key={i}>
         <div className="card-deck">
          <div className="card">
            <img className="card-img-top cardImage" src={country.flags.png} alt="Card  cap"/>
            <div className="card-body">
              <h5 className="card-title">{country.name.official}</h5>
              <p className="card-text"> Population: {country.population}</p>
              <p className="card-text"> Region: {country.region}</p>
              <p className="card-text"> Capital: {country.capital}</p>
               
            </div>
          </div>
          </div> 
</div>
 )}
        </div>
    )
}

 

interface Search{
  search:string
}
interface Props{
  itemsPerPage:number
}

const PaginatedItems:React.FC<Props> = ({ itemsPerPage }) =>{
    // We start with an empty list of items.
    const countries: any= useSelector((state:State) => state.country.CountriesData) ;
    const search= useSelector((state:State) => state.country.search) ;
    const [currentItems, setCurrentItems] = useState<[]>([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      if(search){
         
        let counttry 
        if(search.check =='inp'){
          counttry = countries?.filter((con:SingleCountry) => con.name.common.includes(search.value) )
        }else{
          counttry = countries?.filter((con:SingleCountry)  => con.region.includes(search.value) )
        }
       setCurrentItems(Array.isArray(counttry) ? counttry.slice(itemOffset, endOffset):counttry);
        setPageCount(Math.ceil(counttry?.length / itemsPerPage));

      }else{

        setCurrentItems(Array.isArray(countries) ? countries.slice(itemOffset, endOffset):countries);
        setPageCount(Math.ceil(countries?.length / itemsPerPage));
      }
      
    }, [itemOffset, itemsPerPage,countries,search]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number; }) => {
      const newOffset = (event.selected * itemsPerPage) % countries?.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <SearchInput />
        <DataTable currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={undefined}
        />
      </>
    );
  }



  






export default PaginatedItems
