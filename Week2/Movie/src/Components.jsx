import React, { useState } from 'react'
import './Components.css'
const  IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Components({title, poster_path, vote_average, overview}) {
    return(
        <div className='movie-container'>
            <div className='movie-box'>
                <img src={IMG_BASE_URL + poster_path} alt='영화포스터'></img>
                <div className='movie-overview'>
                    <p>{title}</p>
                    <p>{overview}</p>
                </div>
                <div className='movie-info'>
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Components;