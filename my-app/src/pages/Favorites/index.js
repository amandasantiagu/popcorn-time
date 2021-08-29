import React from 'react';
import { useSelector }  from 'react-redux';
import { selectFavorites } from '../Movies/moviesSlice';
import CardMovies from '../../components/CardMovies'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain';
import SidebarStyledComponent from '../../components/Sidebar';
import { FavoritesDiv, FavoritesList, FavoritesListStyles, FavoriteStyle, Main } from './FavoritesStyles';
import {WiStars} from 'react-icons/wi'
import { FaRegSadTear } from 'react-icons/fa';

export default function Favorites() {
  
  const favorites = useSelector(selectFavorites);

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
