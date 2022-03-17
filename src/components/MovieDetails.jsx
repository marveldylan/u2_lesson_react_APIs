import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';

const MovieDetails = (props) => {
    let movieTitle;
    let releaseDate;
    let runTime;
    let movieOverview;

    useEffect(() => {
        async function getMovieID(movieID) {
            if(movieID === null){
                console.log('no movie has been selected');
            } else {
                const res = await axios.get(`${BASE_URL}/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                console.log(res.data.title);
                movieTitle = res.data.title;
                runTime = res.data.runtime;
                releaseDate = res.data.release_date;
                movieOverview =res.data.overview;
            }
          }
          getMovieID(props.selectedMovie);
    }, [props.selectedMovie])
    return (
        <div>
            <h3>Title { movieTitle }</h3>
            <h4>Runtime: { runTime }</h4>
            <h4>Release Date: { releaseDate }</h4>
            <h4>Overview: { movieOverview }</h4>
        </div>
    )
}

export default MovieDetails;