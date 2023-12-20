import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/reviews`).then((data) => setReviews(data?.data));
    }, []);
  return (
    <>
    <div>
    <h1 className="title">Thousands of learners achieving their goals</h1>
    <p className="font-semibold text-center text-gray-600 py-3">77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.</p>
    </div>
    <div className="grid lg:grid-cols-3 lg:pb-20">
      {reviews?.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  </>
  )
}

export default Reviews