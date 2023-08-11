import { getMovieById } from "components/API/getFilm";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { ImageMovieDetails, DivDetailsContainer, UlButtonMovieDetails, MovieDetailsInfo, MovieDetailsContainer } from "./MovieDetails.styled";
import Spinner from "components/Spiner/Spinner";
import Video from "components/Video/Video";

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const params = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/')
    const imgLink = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        getMovieById(params.movieId)
            
            .then((data) => {
                setMovie(data) 
        }).catch(err => console.error(err));
    }, [params.movieId])
    
    const runtime = () => {
        const hours =Math.floor( movie.runtime / 60 ) 
        const minutes =  movie.runtime - (hours*60)
return `Time: ${hours} hours ${minutes}min.`
    }
    
    
    return (<>
        <DivDetailsContainer>
            <Link to={backLinkLocationRef.current}>Go back</Link>
            <MovieDetailsContainer>
                {movie.poster_path && <ImageMovieDetails src={`${imgLink}${movie.poster_path}`} alt="" />}
                <MovieDetailsInfo>
                    <h1>{movie.title}</h1>
                    <p>{runtime()}</p>
                    <p></p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {movie.id && movie.genres.map((el) => { return <li key={el.name}> {el.name}</li> }) }
                    </ul>
                    <Video id={ params.movieId } />
                </MovieDetailsInfo>
            </MovieDetailsContainer>
            <UlButtonMovieDetails>
        <Link to='cast'>Cast</Link>
        <Link to='reviews'>Reviews</Link>
            </UlButtonMovieDetails>
    </DivDetailsContainer>
        <Suspense fallback={<Spinner/>}>
        <Outlet />
        </Suspense>
    </>);
}

export default MovieDetails;