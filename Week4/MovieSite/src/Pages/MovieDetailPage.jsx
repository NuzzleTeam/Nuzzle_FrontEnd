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

    const isOverview = (overview) => {
        return overview? overview : 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'
    }

    const getStars = (voteAverage) => {
        const stars = Math.ceil(voteAverage);
        return Array(stars).fill('⭐️');
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
                    <div className="vote">
                        <p>평점 {getStars(movieDetails.vote_average).map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}</p>
                    </div>
                    {/* <p>평점 {Math.ceil(movieDetails.vote_average)}</p> */}
                    <p>개봉일 {movieDetails.release_date}</p>
                    <p><h4>줄거리</h4></p>
                    <p>{isOverview(movieDetails.overview)}</p>
                </div>
            </div>
        </div>

        <style jsx>{`
            .vote {
                display: grid;
                grid-template-columns: repeat(${Math.ceil(movieDetails.vote_average)}, 1fr);
                gap: 0.5rem;
            }
        `}</style>

        </>
    )
}

export default MovieDetailPage;