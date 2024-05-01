import { useEffect, useState } from 'react'
// import './MovieSite.css'
import NavBar from './NavBar.jsx'
import MainPage from '../Pages/MainPage.jsx'
import NowPlayingPage from '../Pages/NowPlayingPage.jsx'
import PopularPage from '../Pages/PopularPage.jsx'
import TopRatedPage from '../Pages/TopRatedPage.jsx'
import UpComing from '../Pages/UpComing.jsx'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

let MovieSiteContainer = styled.div`
    height: 80%;
`


function MovieSite() {

    return (
        <>
            <NavBar></NavBar>
            {/* <div className='App'> */}
            <MovieSiteContainer>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/nowplaying' element={<NowPlayingPage />} />
                    <Route path='/popular' element={<PopularPage />} />
                    <Route path='/toprated' element={<TopRatedPage />} />
                    <Route path='/upcoming' element={<UpComing />} />
                </Routes>
            </MovieSiteContainer>
            {/* </div> */}
        </>
    )
}

export default MovieSite;