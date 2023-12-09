import { getMovieById } from 'components/API/getFilm';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  ImageMovieDetails,
  DivDetailsContainer,
  UlButtonMovieDetails,
  MovieDetailsInfo,
  MovieDetailsContainer,
  MovieDetailsInfoText,
  MovieDetailsHead,
  MovieDetailsShortReview,
  MovieDetailsGenres,
  MovieDetailsRuntime,
  MovieDetailsGenresElement,
  MovieDetailsOverviewText,
} from './MovieDetails.styled';
import Spinner from 'components/Spinner/Spinner';
import Video from 'components/Video/Video';
import Button from 'ui/Button/Button';

const imgLink = 'https://image.tmdb.org/t/p/w500';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(params.movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => console.error(err));
  }, [params.movieId]);

  const runtime = () => {
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime - hours * 60;
    return `Time: ${hours} hours ${minutes}min.`;
  };

  return (
    <>
      <DivDetailsContainer>
        <Link to={backLinkLocationRef.current}>
          <Button name={'Go back'} />
        </Link>
        <MovieDetailsContainer>
          {movie.poster_path && (
            <ImageMovieDetails src={`${imgLink}${movie.poster_path}`} alt="" />
          )}
          <MovieDetailsInfo>
            <MovieDetailsInfoText>
              <MovieDetailsHead>{movie.title}</MovieDetailsHead>
              <MovieDetailsRuntime>{runtime()}</MovieDetailsRuntime>
              <MovieDetailsShortReview>Overview</MovieDetailsShortReview>
              <MovieDetailsOverviewText>
                {movie.overview}
              </MovieDetailsOverviewText>
              <MovieDetailsGenres>Genres</MovieDetailsGenres>
              <ul>
                {movie.id &&
                  movie.genres.map(el => {
                    return (
                      <MovieDetailsGenresElement key={el.name}>
                        {' '}
                        {el.name}
                      </MovieDetailsGenresElement>
                    );
                  })}
              </ul>
            </MovieDetailsInfoText>
            <Video id={params.movieId} />
          </MovieDetailsInfo>
        </MovieDetailsContainer>
        <UlButtonMovieDetails>
          <Link to="cast">
            <Button name="Cast" />
          </Link>
          <Link to="reviews">
            <Button name="Reviews" />
          </Link>
        </UlButtonMovieDetails>
      </DivDetailsContainer>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
