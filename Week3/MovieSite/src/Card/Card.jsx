import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

// function Card({title, poster_path, vote_average, overview}) {
function Card(props) {

    const navigate = useNavigate();
    const cardDetail = () => {
        navigate(`/movie/${props.id}`, {
            state: props
        });
    }

    return(
        <div className='movie-container' onClick={cardDetail}>
            <div className='movie-box'>
                <img src={IMG_BASE_URL + props.poster_path} alt='영화포스터'></img>
                <div className='movie-overview'>
                    <p>{props.title}</p>
                    <p>{props.overview}</p>
                </div>
                <div className='movie-info'>
                    <h4>{props.title}</h4>
                    <span>⭐️{props.vote_average}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Card;