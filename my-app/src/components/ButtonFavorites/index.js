import React, {useState} from 'react';
import P from 'prop-types';
import { useDispatch }  from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { addFavorite } from '../../pages/Movies/moviesSlice';
import { toast } from 'react-toastify';
import {BtnAddFavorite} from './buttonFavoritesStyle';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default function ButtonAddFavorite({movie, isFavorite}) {
  
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false)

  const cookies = new Cookies();

  const handleAddToFavorites = (movie, isFavorite) =>{
    let movieID = movie.imdb_id
    axios.get(`https://powerful-garden-24200.herokuapp.com/movies/${movieID}/add-to-favorites`, {
      headers: {
        'Authorization': 'Bearer ' + cookies.get('myToken')
      }
    }).then(response => response)
      .then(data =>
        console.log(data)
      );

    if(isFavorite){
      toast.error('This Movie is Favorite!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    
    setClicked(!clicked);
    dispatch(addFavorite(movie));
    toast("Add movie in Favorites", {
      position: "bottom-right",
      style: {background: "#650315db", color: 'white'},
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
       <BtnAddFavorite className="btn-favorite" onClick={() => handleAddToFavorites(movie)}>
          {(clicked || isFavorite)? <FaHeart /> :  <FaRegHeart /> }
        </BtnAddFavorite>
    </>
  )
}

ButtonAddFavorite.defaultProps = {
  movie: [],
  isFavorite: false
}

ButtonAddFavorite.propTypes = {
  movie: P.object,
  isFavorite: P.bool,
}
