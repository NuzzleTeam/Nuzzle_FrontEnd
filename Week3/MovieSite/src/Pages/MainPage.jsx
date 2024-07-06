import React, {useState, useEffect, useCallback} from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';

function MainPage(){

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    const fetchMovies = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&api_key=052a8c757e5240c63cba8fd1816f2da9`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            });
    };

    const debouncedFetchMovies = useCallback(debounce(fetchMovies, 300), []);

    useEffect(() => {
        if (searchQuery) {
            debouncedFetchMovies(searchQuery);
        }
    }, [searchQuery, debouncedFetchMovies]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <MainpageWrapper>
            <MainpageWelcome>
                <h2>환영합니다</h2>
            </MainpageWelcome>
            <MainpageSearch>
                <MainpageSearchFind>
                    <h2>Find your movies !</h2>
                </MainpageSearchFind>
                <MainpageSearchBox>
                    <SearchBox type='text' value={searchQuery} onChange={handleSearchChange}></SearchBox>
                </MainpageSearchBox>
                <ResultBox style={{ display: searchQuery ? 'flex' : 'none' }}>
                    {movies.map(movie => (
                        <Card
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                            overview={movie.overview}
                        />
                    ))}
                </ResultBox>
            </MainpageSearch>
        </MainpageWrapper>
    )
}

//망할 이게 문제였냐.. resultbox를 통하지 않으면 id가 나오지 않는다니..

export default MainPage;

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: #1E2041;
//     color: white;
//     margin: 0; padding: 0;
//     width: 100%; height: 100%;
//   }
// `;

const MainpageWrapper = styled.div`
    width: 100%; height: 100%;
    margin: 0; padding: 0;
    display: flex;
    flex-direction: column;
`; 

const MainpageWelcome = styled.div`
    background-color: black;
    position: relative;
    width: 100%; height: 30%;

    h2 {
        position: relative;
        top: 30%;
    }
`;

const MainpageSearch = styled.div`
    width: 80%; height: 70%;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 10%;
`;

const MainpageSearchFind = styled.div`
    position: relative;
    top: 10%;
    width: 100%; height: 10%;
`;

const MainpageSearchBox = styled.div`
    position: relative;
    top: 12%;
    width: 100%; height: 10%;
`;

const SearchBox = styled.input`
    border-radius: 15px;
    height: 30px; width: 50%;
    position: relative;
    top: 7%;
`;

const ResultBox = styled.div`
    width: 100%; height: 100%;
    position: relative;
    top: 12%;
    background-color: #171A32;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1%;
`;