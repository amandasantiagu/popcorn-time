import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiCalendarStar } from 'react-icons/bi';
import {ContainerMovies, Card} from './cardMoviesStyle';
import ButtonAddFavorite  from '../ButtonFavorites/index';
import Thumb from '../../assets/images/thumb.svg';

function CardMovies({movies, isFavorite}) {
  return (
    <>
      <ContainerMovies>
        {movies && movies.map( movie => (
          <Card key={movie.id}>
            <Link to={`/details/${movie.id}`} >
              <div className="card-thumb">
                <img src={(movie.poster === 'N/A') ? Thumb : movie.poster} alt={movie.title} />
              </div>
            </Link>
            <div className="card-content">
              <Link to={`/details/${movie.id}`} >
                <h2>{movie.title}</h2>
                <p>
                  <span><BiCameraMovie width={30}/> {movie.type} </span> 
                  <span><BiCalendarStar width={30} /> {movie.year}</span>  
                </p>
              </Link>
              </div>
              <ButtonAddFavorite movie={movie} isFavorite={isFavorite} />
            
          </Card>
      ))}
      </ContainerMovies>
    </>
  )
}

export default CardMovies;

CardMovies.defaultProps = {
  movies: [],
}

CardMovies.propTypes = {
  movies: P.array,
  isFavorite: P.bool,
}
