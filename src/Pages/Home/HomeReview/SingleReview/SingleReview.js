import React from 'react';
import Rating from '@mui/material/Rating';

const SingleReview = (props) => {

    const { name, email, rate, profession, image, description } = props.review;

    return (
        <div className="review">
            <img src={image} alt="" />
            <h6>{name}</h6>
            <p>{email}</p>
            <Rating name="read-only" value={rate} readOnly />
            <p>{profession}</p>
            <p>{description}</p>

        </div>
    );
};

export default SingleReview;