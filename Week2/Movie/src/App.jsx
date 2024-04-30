import './App.css'
import Components from './Components'
import {movies} from './MovieList'

function App() {
  return (
    <>
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Components
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

export default App