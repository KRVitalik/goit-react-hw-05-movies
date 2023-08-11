import { getMovieReviews } from "components/API/getFilm";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsContainer, ReviewsElement, ReviewsText } from "./Reviews.styled";

function Reviews() {
    const params = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(params.movieId).then(data =>
            setReviews(data.results))
    }, [params.movieId])
    
    return (reviews.length > 0
        ? <ReviewsContainer>
        {reviews.map((review) => {
            return <ReviewsElement key={ review.id }>
            <h3>{review.author}</h3>
            {<ReviewsText>{review.content}</ReviewsText>}
        </ReviewsElement>})}
        </ReviewsContainer>
        : <p>We don't have any reviews for this movie</p>);
}

export default Reviews;