import { getMovieReviews } from "components/API/getFilm";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsAuthor, ReviewsContainer, ReviewsElement, ReviewsText, ReviewsUserIcon } from "./Reviews.styled";

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
                <ReviewsAuthor>{review.author}</ReviewsAuthor>
                <ReviewsUserIcon>...</ReviewsUserIcon>
            {<ReviewsText>{review.content}</ReviewsText>}
        </ReviewsElement>})}
        </ReviewsContainer>
        : <p>We don't have any reviews for this movie</p>);
}

export default Reviews;