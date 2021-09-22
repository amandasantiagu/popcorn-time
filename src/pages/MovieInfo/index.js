import React, { useEffect, useState, useCallback } from 'react';
import {Redirect} from 'react-router-dom';
import {fetchMovies} from '../../services/fetchApi';
import {BsStarFill} from 'react-icons/bs';
import {CgAwards} from 'react-icons/cg';
import {BiPencil, BiDollarCircle, BiWorld} from 'react-icons/bi';
import { MdMovieFilter } from 'react-icons/md';
import {GiDirectorChair} from 'react-icons/gi';
import {MdAssignmentTurnedIn, MdNewReleases} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';
import {CgTimelapse} from 'react-icons/cg';
import {ContainerDetailMovie, ContainerDetailSec, TextDiv} from './moviesInfoStyle';
import Loading from '../../components/Loading';
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain';
import SidebarStyledComponent from '../../components/Sidebar';
import ButtonAddFavorite from '../../components/ButtonFavorites/index';
import Thumb from '../../assets/images/thumb.svg';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function DetailsMovie(props) {
  
  const [notFound, setNotFound] = useState(false);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const {id} = props.match.params;  

  const handleLoadMovie = useCallback(async (id) => {
    const movieLoaded = await fetchMovies(`&i=${id}`);
    if(movieLoaded.data.Error){
      setNotFound(true);
    }else{
      setDetails({...movieLoaded.data});
      setLoading(false)
    }
  }, [])

  const cookies = new Cookies()
  
  const getMovieByID = () => {
    let movieID = id
    axios.get('https://powerful-garden-24200.herokuapp.com/movies/' + movieID, {
      headers: {
        'Authorization': 'Bearer ' + cookies.get('myToken')
      }
    }).then(response => response)
      .then(data =>
        {console.log(data)
          setDetails({...data.data});
          setLoading(false)}
       
      );
  }
  
  useEffect(() => {
    // handleLoadMovie(id);
    getMovieByID(id)
  }, [])

  return (
    <>
      { notFound && <Redirect to="/not-found" /> }
      <SidebarStyledComponent />
       <HeaderStyledComponent />
      {loading && <Loading /> }
      { details ?
          <ContainerDetailSec>
            <TextDiv>
              <MdMovieFilter size={30} style={{marginTop: '5px', marginRight: '6px', color: '#650315',}}/> {details.title} ({details.year})
            </TextDiv>
              
            <ContainerDetailMovie>
             <div className="img-col">
                <img className="img-col" src={(details.poster === 'N/A') ? Thumb : details.poster} alt={details.title} />
                <h2 className="img-col">{details.imdb_rating} <BsStarFill/> | {details.imdb_votes} <small>Votes</small></h2>
              </div>
              <ButtonAddFavorite movie={details} />

              <div className="col-2">
                  <h2>{details.Genre}</h2> 
                  <h2>Plot {details.Type}</h2>
                  <p style={{fontStyle: 'italic', fontWeight: 'bold'}}>{details.plot}</p>
                  <p><span className="label-details"><CgAwards /> Awards:</span> {details.awards} </p>
                  <p><span className="label-details"><BiPencil /> Writer:</span> {details.writer} </p>
                  <p><span className="label-details"><GiDirectorChair /> Director:</span> {details.director} </p>
                  <p><span className="label-details"><MdAssignmentTurnedIn/> Genre:</span> {details.genre} </p>
                  <p><span className="label-details"><FaUsers /> Actors:</span> {details.actors} </p>
                  <p><span className="label-details"><CgTimelapse /> Run Time:</span> {details.runtime_minutes} </p>
                  <p><span className="label-details"><BiWorld /> Country:</span> {details.country} </p>
                  <p><span className="label-details"><MdNewReleases /> Released:</span> {details.released} </p>
              </div>

            </ContainerDetailMovie>      
          </ContainerDetailSec>
      : ''}
    </>
  )
}
