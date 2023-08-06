import { getMovieById } from "components/API/getFilm";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const params = useParams()

console.log(movie)
useEffect(() => {
        getMovieById(params.movieId).then((data) => {
            setMovie(data) 
        })
        
}, [params.movieId])
    
    
    
    console.log(movie)
    return (<>
        <Link to='/'>Go back</Link>
        <div>MovieDetails</div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <h1>{ movie.title }</h1>
        <p></p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
        
            {/* {movie && movie.genres.map((el) => { return <li> {el.name}</li> }) } */}
        </ul>
    </>);
}

export default MovieDetails;