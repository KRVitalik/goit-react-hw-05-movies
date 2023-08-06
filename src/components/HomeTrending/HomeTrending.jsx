import { getTrendingMovies } from "components/API/getFilm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomeTrending() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            console.log(data.page);
            setMovie(data.results);
        })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movie.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`}>{ movie.title }</Link></li>) }
            </ul>
        </div>);
}

export default HomeTrending;