// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGFhZTRhY2M1ZDVlOWRmYzE3NGMwNTA5MjdjZDI5NSIsInN1YiI6IjYyMjI1YzI1ODc0MWM0MDA0MzZjZmQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eVWLk6TWz-sR0rQwXU-UQgoPT5aG8XWWBXu7nYmra4I
import axios from 'axios';
import './styles/App.css';
import { useState, useEffect } from 'react';
import { BASE_URL } from './globals';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

console.log(BASE_URL)
console.log(process.env.REACT_APP_TMDB_KEY)


const App = () => {
  // in destructured hooks, like below, movies is the variable. setMovies is a method with automatic function of setting the variable to something else. You don't have to define the setMovies method. All it is there for is to change value of movies. UseState tracks this variable and re-renders the component whenever the variable changes.
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one
  const [movieID, setMovieID] = useState(null)
  const [movieDetails, setMovieDetails] = useState([])

  let movieTitle;
  let releaseDate;
  let runTime;
  let movieOverview;

  // useEffect - when the component mounts, there is a function of getMovies with async and we will immediately call the function
  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`);
      setMovies(res.data.results);
    }
    getMovies()

  }, [])

  const selectMovie = (movieID) => {
    setSelectedMovie(movieID);
    console.log(movieID);
  }

  const selectDetails = (movieDetails) => {
    setMovieDetails(movieDetails)
  }

  return (
  <div>
    <MovieList movies={ movies } selectMovie = { selectMovie } />
    <MovieDetails selectedMovie={ selectedMovie } movieDetails = { movieDetails }/>
  </div>
  )
}

export default App
