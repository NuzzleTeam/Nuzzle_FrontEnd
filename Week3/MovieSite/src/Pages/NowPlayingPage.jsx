import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import '../Card/Card.css'
import { nowplayinglist } from '../MovieList/NowPlayingList'

function NowPlayingPage () {

    return(
        <>
            <div className="container">
            {
                nowplayinglist.results.map((item) => {
                    return (
                        <Card
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        overview={item.overview}
                        />
                    )
                })
            }
            </div>
        </>
    )
}

export default NowPlayingPage;