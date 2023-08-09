import { getMovieReviews } from "components/API/getFilm";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Reviews() {
    const params = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(params.movieId).then(data =>
            setReviews(data.results))
    }, [params.movieId])
    
    return (reviews.length > 0
        ? <ul>
        {reviews.map((review) => {
            return <li key={ review.id }>
            <h3>{review.author}</h3>
            {<p>{review.content}</p>}
        </li>})}
        </ul>
        : <p>We don't have any reviews for this movie</p>);
}

export default Reviews;