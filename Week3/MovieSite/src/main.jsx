import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MovieSite from './MovieSite/MovieSite.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App>
      <MovieSite></MovieSite>
    </App>
  </BrowserRouter>
)