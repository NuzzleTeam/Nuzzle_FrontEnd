import React, {useState} from 'react'
import './MainPage.css'

function MainPage(){
    return (
        <div className='mainpage-wrapper'>
            <div className='mainpage-welcome'>
                <h2>환영합니다</h2>
            </div>
            <div className='mainpage-search'>
                <div className='mainpage-search-find'>
                    <h2>Find your movies !</h2>
                </div>
                <div className='mainpage-searbox'>
                    <input className='searchbox' type='text'></input>
                </div>
            </div>
        </div>
    )
}

export default MainPage;