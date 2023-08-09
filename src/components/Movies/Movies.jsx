import { getSearchFilm } from 'components/API/getFilm'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movieSearch, setMovieSearch] = useState({});
  const [movieInputValue, setMovieInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams()
  const movie = searchParams.get('movie') ?? '';
  const location = useLocation()
  
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
      <>
        <form>
        <button onClick={handleButtonClick} type='submit'>Search</button>
        <input
          value={movie}
          onChange={updateQueryString}
          type="text" />
        <ul>
          {movieSearch.results && movieSearch.results.map((el)=>{return <li key={`${el.id}`}><Link to={`/movies/${el.id}`} state={{from: location}}>{el.title}</Link></li> })}
        </ul>
        </form>
        </>
  )
}

export default Movies