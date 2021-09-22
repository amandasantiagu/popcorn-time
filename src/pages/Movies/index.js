import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading'
import CardMovies from '../../components/CardMovies';
import {BiSearch} from 'react-icons/bi';
import { AlignItems, ButtonSearch, ContainerFormSearch, InputLogin, Results, ResultsFor} from "./styles";
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain'
import SidebarStyledComponent from '../../components/Sidebar'
import { MdMovieFilter } from 'react-icons/md';
import Cookies from 'universal-cookie';

import {
  selectMovies, 
  isLoading, 
  loadingState } from './moviesSlice';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import axios from 'axios';

const Movies =  () => {
  const [searchText, setSearchText] = useState('');
  const [valueMovie, setValueMovie] = useState([]);
  const loading = useSelector(isLoading);

  const {movies} = useSelector(selectMovies);
  const dispatch = useDispatch();  

  const cookies = new Cookies();

  const toUpper = (str) => {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2
  }
 
  const HandleLoadMoviesByTitle = () => {
    axios.get(`https://powerful-garden-24200.herokuapp.com/movies?skip=0&limit=100&search=${toUpper(searchText)}`, {
      headers: {
        'Authorization': 'Bearer ' + cookies.get('myToken')
      }
    }).then(response => response)
      .then(data => 
        {console.log(data)
        setValueMovie(data.data)}
      );
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
          placeholder="search movie"
          onChange={handleChangeTextSearch}/>
            <ButtonSearch onClick={() => HandleLoadMoviesByTitle()}>
                <BiSearch style={{marginRight: '5px'}} size={15} /> Search
            </ButtonSearch> 
        </AlignItems>
        {(searchText.length > 0) ? <ResultsFor> <MdMovieFilter size={28} style={{color: '#650315', paddingRight: '0.6rem', marginTop: '5px'}} /> Results for "{searchText}":</ResultsFor> : ''}

       {(valueMovie) ? <CardMovies movies={valueMovie} /> : <Results><AiOutlineCloseSquare size={34} style={{color: 'gray', paddingRight: '12px', paddingTop: '4px'}} /> 0 Results </Results>  }
       {(loading) && <Loading /> }
      </ContainerFormSearch>
      </>      
  )
}

export default Movies;