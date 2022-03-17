import { POSTER_PATH } from "../globals";
import MovieDetails from "./MovieDetails";

const MovieList = (props) => {
    return (
        <div className ="grid">
        {
            props.movies.map((movie) => (
                <div key={movie.id} className="card">
                <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
                <h3>{movie.title}</h3>
                <button onClick={() => props.selectMovie(movie.id)}>View Movie</button>
                </div>
            ))
        }
        </div>
    )
}

export default MovieList;