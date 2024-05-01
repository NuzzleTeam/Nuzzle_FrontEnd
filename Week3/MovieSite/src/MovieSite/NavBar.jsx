import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <div className='Navbar-wrapper'>
            <div className='Navbar-left'>
                <Link to='/' className='nav-link'><h5 className='umc-movie'>UMC Movie</h5></Link>
            </div>
            <div className='Navbar-right'>
                <h5 className='login'>회원가입</h5>
                <Link to='/popular' className='nav-link'><h5 className='popular'>Popular</h5></Link>
                <Link to='/nowplaying' className='nav-link'><h5 className='now'>Now Playing</h5></Link>
                <Link to='/toprated' className='nav-link'><h5 className='top'>Top Rated</h5></Link>
                <Link to='/upcoming' className='nav-link'><h5 className='upcoming'>Upcoming</h5></Link>
            </div>
        </div>
    )
}

export default NavBar;