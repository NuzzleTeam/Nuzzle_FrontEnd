import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import '../Card/Card.css'
//import { upcominglist } from '../MovieList/UpComingList'

function UpComing () {

    const [movies, setMovies] = useState(null);

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
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&region=KR&api_key=052a8c757e5240c63cba8fd1816f2da9",
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results))
        .catch((err) => console.error(err));
    }, [movies]);

    return(
        <>
            <div className="container">
            {
                movies && movies.map((item) => {
                    return (
                        <Card
                        key={item.id}
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

export default UpComing;