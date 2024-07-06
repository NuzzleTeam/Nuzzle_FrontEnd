import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import '../Card/Card.css'
import './Pages.css'
import LoadingSpinner from './LoadingSpinner'

function NowPlayingPage () {

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paging, setPaging] = useState(1);

    useEffect(() => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTJhOGM3NTdlNTI0MGM2M2NiYThmZDE4MTZmMmRhOSIsInN1YiI6IjY2MzAxZjEzMWFjMjkyMDBiOWZkOTEwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d0aVsJFaB_CNsEY7Rg_us3SrQXKKUVws9Zp26WZQ3Gs",
          },
        };

        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=052a8c757e5240c63cba8fd1816f2da9&page=${paging}`,
            options
          )
            .then((response) => response.json())
            .then((response) => {
              setMovies(response.results);
            })
            .catch((err) => console.error(err));
            setLoading(false);
        }, [paging]);

    const handlePreviousPage = () => {
      if (paging > 1) {
          setPaging(prevPage => prevPage - 1);
      }
    };

    const handleNextPage = () => {
      // You can also check against the total_pages from the API response to limit paging
      setPaging(prevPage => prevPage + 1);
    };

    return(
        <>
            {loading ? <LoadingSpinner/> : null}
            <div className="container">
            {
                movies && movies.map((item) => {
                    return (
                        <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        overview={item.overview}
                        />
                    )
                })
            }
            </div>
            <div className='page-container'>
              <span onClick={handlePreviousPage}>이전 </span>
              <span><b>{paging}</b></span>
              <span onClick={handleNextPage}> 다음</span>
            </div>
        </>
    )
}

export default NowPlayingPage;