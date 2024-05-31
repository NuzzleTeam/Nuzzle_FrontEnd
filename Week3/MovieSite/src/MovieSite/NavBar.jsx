import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(){

    const [onLogin, setonLogin] = useState('로그인');

    const loginClick = () => {
        setonLogin(onLogin => onLogin === '로그인' ? '로그아웃' : '로그인');
    }

    return(
        <div className='Navbar-wrapper'>
            <div className='Navbar-left'>
                <Link to='/' className='nav-link'><h5 className='umc-movie'>UMC Movie</h5></Link>
            </div>
            <div className='Navbar-right'>
                <h5 className='login' onClick={loginClick}>{onLogin}</h5>
                <Link to='/popular' className='nav-link'><h5 className='popular'>Popular</h5></Link>
                <Link to='/nowplaying' className='nav-link'><h5 className='now'>Now Playing</h5></Link>
                <Link to='/toprated' className='nav-link'><h5 className='top'>Top Rated</h5></Link>
                <Link to='/upcoming' className='nav-link'><h5 className='upcoming'>Upcoming</h5></Link>
            </div>
        </div>
    )
}

export default NavBar;