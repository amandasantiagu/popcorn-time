import React from 'react';
import { useSelector }  from 'react-redux';
import { selectFavorites } from '../Movies/moviesSlice';
import CardMovies from '../../components/CardMovies'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain';
import SidebarStyledComponent from '../../components/Sidebar';
import { FavoritesDiv, FavoritesList, FavoritesListStyles, FavoriteStyle } from './FavoritesStyles';
import {WiStars} from 'react-icons/wi'
import { FaRegSadTear } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function Favorites() {
  
  const favorites = useSelector(selectFavorites);
  const [valueFavoritesMovies, setValueFavoritesMovies] = ([])

  const cookies = new Cookies()

  // const HandleFavoriteMovies = () => {
  //   axios.get(`https://powerful-garden-24200.herokuapp.com/movies?skip=0&limit=100&search=${searchText}`, {
  //     headers: {
  //       'Authorization': 'Bearer ' + cookies.get('myToken')
  //     }
  //   }).then(response => response)
  //     .then(data => 
  //       {console.log(data)
  //         setValueFavoritesMovies(data.data)}
  //     );
  // }

  return (
    <>
        <SidebarStyledComponent />
          <HeaderStyledComponent />
        <FavoriteStyle> 
        <FavoritesDiv>
          <WiStars size={50} style={{color: '#650315'}}/>
            My List Favorites
          </FavoritesDiv>
          <FavoritesListStyles>
            {favorites.length ? <CardMovies movies={favorites} isFavorite={true}/> : <FavoritesList> You still don't have favorite movies! <FaRegSadTear size={23} style={{color: 'gray', paddingLeft: '12px'}} /></FavoritesList>}
          </FavoritesListStyles>
        </FavoriteStyle>
    </>
  )
}
