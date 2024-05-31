function Api () {
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
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=052a8c757e5240c63cba8fd1816f2da9",
            options
          )
            .then((response) => response.json())
            .then((response) => {
              setMovies(response.results);
            })
            .catch((err) => console.error(err));
        }, []);   
}

export default Api;