import React, {useEffect, useState} from "react"
import './MovieDetailPage.css'
import { IMG_BASE_URL } from "../Card/Card";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function MovieDetailPage(){

    const { title } = useParams();
    const location = useLocation();
    const { state } = location;
    const { poster_path, vote_average, overview } = state;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        // 영화 상세 정보를 가져오는 API 호출
        fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&api_key=052a8c757e5240c63cba8fd1816f2da9`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data.results[0]);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            });
    }, [title]); // title이 변경될 때마다 호출

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const isOverview = (overview) => {
        return overview ? overview : 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'
    }

    const floorVote = (vote) => {
        return Math.floor(vote);
    }

    const stars = (vote) => {
        const starCount = floorVote(vote);
        return Array.from({ length: starCount }, (_, index) => (
            <span key={index}>⭐️</span>
        ));
    };

    return(
        <>
        <div className="detail-wrapper">
            <div className="detail-container">
                <div className="image-content">
                    <img src={IMG_BASE_URL + poster_path} alt="Movie Poster" />
                </div>
                <div className="main-content">
                    <h3>{movieDetails.title}</h3>
                    <p>평점 {stars(movieDetails.vote_average)}</p>
                    <p>개봉일 {movieDetails.release_date}</p>
                    <p><h4>줄거리</h4></p>
                    <p>{isOverview(movieDetails.overview)}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieDetailPage;