import { getMovieById } from "components/API/getFilm";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { ImageMovieDetails, DivDetailsContainer, UlButtonMovieDetails, MovieDetailsInfo, MovieDetailsContainer } from "./MovieDetails.styled";

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const params = useParams();
    const location = useLocation();

    const imgLink = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        getMovieById(params.movieId)
            .then((data) => {setMovie(data) 
        }).catch(err => console.error(err));
}, [params.movieId])
    
    return (<>
    <DivDetailsContainer>
            <Link to={location.state?.from ?? '/'}>Go back</Link>
            <MovieDetailsContainer>
                {movie.poster_path && <ImageMovieDetails src={`${imgLink}${movie.poster_path}`} alt="" />}
                <MovieDetailsInfo>
<h1>{ movie.title }</h1>
        <p></p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
        {movie.id && movie.genres.map((el) => { return <li key={el.name}> {el.name}</li> }) }
                </ul>
                </MovieDetailsInfo>
            </MovieDetailsContainer>
    </DivDetailsContainer>

        <UlButtonMovieDetails>
        <Link to='cast'>Cast</Link>
        <Link to='reviews'>Reviews</Link>
        </UlButtonMovieDetails>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </>);
}

export default MovieDetails;