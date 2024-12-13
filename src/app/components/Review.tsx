'use client';
import React, { useState } from 'react';

const data = [
  {
    reviews: [
      {
        reviewer: 'John Doe',
        rating: 4,
        comment:
          'Milk Chhurpi is a fantastic snack! The chewy texture is satisfying, and the flavor is unique—a perfect balance of creamy and tangy.',
      },
      {
        reviewer: 'Sophia Carter',
        rating: 5,
        comment:
          'I absolutely loved Milk Chhurpi! It is such a great snack to munch on, and it’s guilt-free since it’s packed with natural goodness.',
      },
    ],
  },
];

const Review = () => {
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(data[0].reviews); 

  const handleAddReview = () => {
    if (newReview.trim() === '' || rating === 0) {
      alert('Please provide both a review and a rating.');
      return;
    }

    const review = {
      reviewer: 'Anonymous User', 
      rating,
      comment: newReview,
    };

    setReviews((prev) => [...prev, review]); 
    setNewReview(''); 
    setRating(0); 
  };

  const renderStars = (currentRating: number, interactive = false) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer ${
            index < currentRating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={interactive ? () => setRating(index + 1) : undefined}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="">
          <h3 className="text-xl font-medium  mb-2">Write a Review</h3>
        <div className="mt-4">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-lg">Rating:</p>
            <div className="flex">{renderStars(rating, true)}</div>
          </div>
          <textarea
            className="w-full border rounded-lg p-2 mb-4"
            rows={4}
            placeholder="Write your review here..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddReview}
          >
            Submit Review
          </button>
        </div>
      <div className="border rounded-lg p-4 shadow-md">     
        <h3 className="text-xl font-medium mt-4 mb-2">Customer Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div key={i} className="border-t pt-4">
              <div className="flex items-center">
                <p className="text-lg font-semibold">{review.reviewer}</p>
                <div className="ml-4 flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;