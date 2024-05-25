import React, {useEffect, useState} from "react"
import './MovieDetailPage.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function MovieDetailPage(){

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        // 영화 상세 정보를 가져오는 API 호출
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=052a8c757e5240c63cba8fd1816f2da9`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]); // id가 변경될 때마다 호출

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <div className="detail-wrapper">
            <div className="detail-container">
                <div className="image-content">
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="Movie Poster" />
                </div>
                <div className="main-content">
                    <h3>{movieDetails.title}</h3>
                    <p>평점 {movieDetails.vote_average}</p>
                    <p>개봉일 {movieDetails.release_date}</p>
                    <p><h4>줄거리</h4></p>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieDetailPage;