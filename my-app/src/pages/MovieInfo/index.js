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
import {ContainerDetailMovie, ContainerDetailSec, h2Div, TextDiv} from './moviesInfoStyle';
import Loading from '../../components/Loading';
import HeaderStyledComponent from '../../components/HeaderMain/HeaderMain';
import SidebarStyledComponent from '../../components/Sidebar';
import ButtonAddFavorite from '../../components/ButtonFavorites/index';
import Thumb from '../../assets/images/thumb.svg';

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
  
  useEffect(() => {
    handleLoadMovie(id);
  }, [handleLoadMovie, id])

  return (
    <>
      { notFound && <Redirect to="/not-found" /> }
      <SidebarStyledComponent />
       <HeaderStyledComponent />
      {loading && <Loading /> }
      { details ?
          <ContainerDetailSec>
            <TextDiv>
              <MdMovieFilter size={30} style={{marginTop: '5px', marginRight: '6px', color: '#650315',}}/> {details.Title} ({details.Year})
            </TextDiv>
              
            <ContainerDetailMovie>
             <div className="img-col">
                <img className="img-col" src={(details.Poster === 'N/A') ? Thumb : details.Poster} alt={details.Title} />
                <h2 className="img-col">{details.imdbRating} <BsStarFill/> | {details.imdbVotes} <small>Votes</small></h2>
              </div>
              <ButtonAddFavorite movie={details} />

              <div className="col-2">
                  <h2>{details.Genre}</h2> 
                  <h2>Plot {details.Type}</h2>
                  <p style={{fontStyle: 'italic', fontWeight: 'bold'}}>{details.Plot}</p>
                  <p><span className="label-details"><CgAwards /> Awards:</span> {details.Awards} </p>
                  <p><span className="label-details"><BiPencil /> Writer:</span> {details.Writer} </p>
                  <p><span className="label-details"><GiDirectorChair /> Director:</span> {details.Director} </p>
                  <p><span className="label-details"><MdAssignmentTurnedIn/> Production:</span> {details.Production} </p>
                  <p><span className="label-details"><BiDollarCircle/> Box Office:</span> {details.BoxOffice} </p>
                  <p><span className="label-details"><FaUsers /> Actors:</span> {details.Actors} </p>
                  <p><span className="label-details"><CgTimelapse /> Run Time:</span> {details.Runtime} </p>
                  <p><span className="label-details"><BiWorld /> Country:</span> {details.Country} </p>
                  <p><span className="label-details"><MdNewReleases /> Released:</span> {details.Released} </p>
              </div>

            </ContainerDetailMovie>      
          </ContainerDetailSec>
      : ''}
    </>
  )
}
