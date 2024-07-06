import React from 'react';
import './Credit.css';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Credit(props) {

    return(
        <div className='credit-container'>
            <div className='credit-box'>
                <img src={IMG_BASE_URL + props.profile_path} alt='인물사진'></img>
                <div className='credit-name'>
                    <h5>{props.original_name}</h5>
                </div>
            </div>
        </div>
        
    )
}

export default Credit;