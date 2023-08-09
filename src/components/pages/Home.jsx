import { getTrendingMovies } from "components/API/getFilm";
import HomeTrending from "components/HomeTrending/HomeTrending";
import { useEffect, useState } from "react";

function Home() {
const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            setMovies(data.results);
        })
            .catch(err => console.error(err));
    }, []);

    return (
    <>
            <HomeTrending movies={ movies } />
    </>);
}

export default Home;