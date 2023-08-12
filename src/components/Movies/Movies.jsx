import { getSearchFilm } from 'components/API/getFilm'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MovieButton, MovieContainer, MovieElement, MovieElementContainer, MovieElementImage, MovieElementTitle, MovieErrorTitle, MovieForm, MovieFormTitle, MovieInput, MovieLabel } from './Movies.styled';

const Movies = () => {
  const [movieSearch, setMovieSearch] = useState({});
  const [movieInputValue, setMovieInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams()
  const movie = searchParams.get('movie') ?? '';
  const location = useLocation()
  const imgLink = 'https://image.tmdb.org/t/p/w500';
  
  const updateQueryString = evt => { 
    evt.target.value !== '' ? setSearchParams({movie: evt.target.value}) : setSearchParams({});
  }

  useEffect(() => {
    const localStMovies = localStorage.getItem('movies');
    const parsedLocalStMovies = JSON.parse(localStMovies) ?? [];

    setMovieSearch(parsedLocalStMovies)
  }, [])


  useEffect(() => {
    if(movieInputValue === '')return
    getSearchFilm(movieInputValue)
      .then((data) => {

      setMovieSearch(data) 
      localStorage.setItem('movies', JSON.stringify(data))


        }).catch(err => console.error(err));
  }, [movieInputValue])
  
  const handleButtonClick = (e) => {
    e.preventDefault()
setMovieInputValue(movie)
setSearchParams('')
  }

    return (
      <MovieContainer>
        <MovieFormTitle>Find your favorite movie</MovieFormTitle>
        <MovieForm>
          <MovieButton onClick={handleButtonClick} type='submit'>Go</MovieButton>
          <MovieLabel htmlFor="search">Search movies</MovieLabel>
        <MovieInput
          value={movie}
            onChange={updateQueryString}
            placeholder="Search..."
            autoFocus
            required
          type="search" />
        </MovieForm>
        {movieSearch.total_results !== 0 ? <MovieElementContainer>
          {movieSearch.results && movieSearch.results.map((movie) => {
            return <Link to={`/movies/${movie.id}`} state={{ from: location }} key={movie.id}>
              <MovieElement>
                {movie.poster_path && <MovieElementImage src={`${imgLink}${movie.poster_path}`} alt={movie.title} />}
                <MovieElementTitle>{movie.title}</MovieElementTitle>
              </MovieElement></Link>
          })}
        </MovieElementContainer> : <MovieErrorTitle>We don't find any movie with this title, please try to enter valid movie title</MovieErrorTitle>}
        </MovieContainer>
  )
}

export default Movies