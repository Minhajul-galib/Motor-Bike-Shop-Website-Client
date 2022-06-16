import React from 'react';
import useReviews from '../../../hooks/useReviews';
import SingleReview from './SingleReview/SingleReview';
import './HomeReview.css'



const HomeReview = () => {
    
    const [reviews] = useReviews();

    const reviewsHome = reviews.slice(0, 3);
   console.log(reviews);
    return (
        <div>
        <h2 className="reviews-title">Client Reviews</h2>
        <div className="reviews">
            {
                reviewsHome.map(review => <SingleReview
                                                    key={review._id}
                                                    review={review}
                                                    ></SingleReview>)
            }
        </div>
        </div>
  );
};

export default HomeReview;