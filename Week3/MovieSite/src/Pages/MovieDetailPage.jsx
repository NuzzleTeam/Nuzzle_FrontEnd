import React, {useEffect, useState} from "react"
import './MovieDetailPage.css'
import { IMG_BASE_URL } from "../Card/Card";
import { useLocation, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Credit from "../Card/Credit";
import './Pages.css';

function MovieDetailPage(){

    const [credits, setCredits] = useState([]);

    const location = useLocation();
    const { id } = useParams();
    const { state } = location;
    const { poster_path, title, vote_average, release_date , overview } = state;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        // 영화 상세 정보를 가져오는 API 호출
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=052a8c757e5240c63cba8fd1816f2da9`)
            .then(response => response.json())
            .then(data => {
                setCredits(data.cast);
                setMovieDetails(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]); // id가 변경될 때마다 호출

    if (!movieDetails) {
        return <LoadingSpinner />;
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
                    <h3>{title}</h3>
                    <p>평점 {stars(vote_average)}</p>
                    <p>개봉일</p>
                    <p><h4>줄거리</h4></p>
                    <p>{isOverview(overview)}</p>
                </div>
            </div>
            {/* <div className="cast-crew-title">
                <h4>출연진 및 제작진</h4>
            </div> */}
            <div className="cast-crew-container">
                    {
                        credits.map((item) => {
                            return (
                                <Credit
                                    key={item.id}
                                    original_name={item.original_name}
                                    profile_path={item.profile_path}
                                />
                            )
                        })
                    }
            </div>
        </div>
        </>
    )
}

export default MovieDetailPage;