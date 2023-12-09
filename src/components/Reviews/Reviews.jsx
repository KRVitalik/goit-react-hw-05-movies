import { getMovieReviews, getRandomUser } from 'components/API/getFilm';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsAuthor,
  ReviewsContainer,
  ReviewsElement,
  ReviewsText,
  ReviewsTextMessage,
  ReviewsUserIcon,
} from './Reviews.styled';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getMovieReviews(params.movieId).then(data => setReviews(data.results));
  }, [params.movieId]);

  useEffect(() => {
    getRandomUser().then(data => {
      setUsers(data.results);
    });
  }, []);

  const randomUserForReview = () => {
    if (reviews.length > 0) {
      const randomIndex = Math.floor(Math.random() * users.length);
      const user = users[randomIndex];
      return user.picture.thumbnail;
    }
  };

  return reviews.length > 0 ? (
    <ReviewsContainer>
      {reviews.map(review => {
        return (
          <ReviewsElement key={review.id}>
            <ReviewsAuthor>
              {users.length && (
                <ReviewsUserIcon src={randomUserForReview()} alt="" />
              )}
              {review.author}
            </ReviewsAuthor>
            {<ReviewsText>{review.content}</ReviewsText>}
          </ReviewsElement>
        );
      })}
    </ReviewsContainer>
  ) : (
    <ReviewsTextMessage>
      We don't have any reviews for this movie
    </ReviewsTextMessage>
  );
};

export default Reviews;
