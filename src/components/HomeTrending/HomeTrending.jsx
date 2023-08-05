import { getMovie } from "components/API/getFilm";
import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";


function HomeTrending() {

    const [movie, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getMovie().then(data => {
            console.log(data.page);
            setMovie(data.results);
        })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movie.map(movie => <li key={movie.id}><NavLink to={movie.title}>{ movie.title }</NavLink></li>) }
            </ul>
        </div>);
}

export default HomeTrending;