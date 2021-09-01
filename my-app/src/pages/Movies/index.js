import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading'
import CardMovies from '../../components/CardMovies';
import {BiSearch} from 'react-icons/bi';
import { AlignItems, ButtonSearch, ContainerFormSearch, InputLogin, Results, ResultsFor} from "./styles";
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'
import { MdMovieFilter } from 'react-icons/md';

import {
  selectMovies, 
  loadMoviesAsync, 
  isLoading, 
  loadingState } from './moviesSlice';
import { AiOutlineCloseSquare } from 'react-icons/ai';

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
          <InputLogin 
          value={searchText} 
          placeholder="Movie Title.."
          onChange={handleChangeTextSearch}/>
            <ButtonSearch onClick={() => HandleLoadMoviesByTitle(searchText)}>
                <BiSearch style={{marginRight: '5px'}} size={15} /> Search
            </ButtonSearch> 
        </AlignItems>
        {(searchText.length > 0) ? <ResultsFor> <MdMovieFilter size={28} style={{color: '#650315', paddingRight: '0.6rem', marginTop: '5px'}} /> Results for "{searchText}":</ResultsFor> : ''}

       {(movies) ? <CardMovies movies={movies} /> : <Results><AiOutlineCloseSquare size={34} style={{color: 'gray', paddingRight: '12px', paddingTop: '4px'}} /> 0 Results </Results>  }
       {(loading) && <Loading /> }
      </ContainerFormSearch>
      </>
      
  )
}

export default Movies;