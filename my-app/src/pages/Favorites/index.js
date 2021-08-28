import React from 'react';
// import { useSelector }  from 'react-redux';
// import { selectFavorites } from '../Home/moviesSlice';
// import CardMovies from '../../components/CardMovies'
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain';

export default function Favorites() {
  
//   const favorites = useSelector(selectFavorites);

  return (
    <>
        <HeaderStyledComponent />
        <h1>Favorites</h1>
        {/* {favorites.length ? <CardMovies movies={favorites} isFavorite={true}/> : <h2> # No favorite movies</h2>} */}
    </>
  )
}
