import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading'
import CardMovies from '../../components/CardMovies';
import {BiMovie, BiSearch} from 'react-icons/bi';
import { AlignItems, ButtonSearch, ContainerFormSearch, InputLogin} from "./styles";
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'

import {
  selectMovies, 
  loadMoviesAsync, 
  isLoading, 
  loadingState } from './moviesSlice';

const Movies =  () => {

  const [searchText, setSearchText] = useState('');
  const loading = useSelector(isLoading);

  const {movies} = useSelector(selectMovies);
  const dispatch = useDispatch();  

  const HandleLoadMoviesByTitle = async (title) =>{
    dispatch(loadMoviesAsync(title));
  }

  const handleChangeTextSearch = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
   dispatch(loadingState(false));
  })

  return (
    <>
      <SidebarStyledComponent />
      <HeaderStyledComponent />       
      <ContainerFormSearch>
        <AlignItems>
          <InputLogin  type="search" 
          value={searchText} 
          placeholder="Tytle Movie.."
          onChange={handleChangeTextSearch}/>
            <ButtonSearch onClick={() => HandleLoadMoviesByTitle(searchText)}>
                <BiSearch style={{marginRight: '5px'}} size={15} /> Search
            </ButtonSearch> 
        </AlignItems>
        {(searchText.length > 0) ? <h2>Results for "{searchText}":</h2> : ''}

       {(movies) ? <CardMovies movies={movies} /> : <h1>0 Results</h1>  }
       {(loading) && <Loading /> }
      </ContainerFormSearch>
      </>
      
  )
}

export default Movies;