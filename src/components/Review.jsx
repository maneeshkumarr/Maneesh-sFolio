// ReviewCard.js

import React, { useState, useEffect } from 'react';
import './Review.css'; // Import CSS for styling

const Review = () => {
  const [displayCard, setDisplayCard] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to display the message card after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayCard(true);
    }, 1000); // 20 seconds delay
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle rating the website
  const rateWebsite = (stars) => {
    setRating(stars);
  };

  // Function to handle submitting the review
  const submitReview = () => {
    if (name && rating > 0) {
      // Save review data to localStorage
      const reviewData = { name, rating };
      localStorage.setItem('userReview', JSON.stringify(reviewData));
      setSubmitted(true);
    } else {
      alert('Please enter your name and rate the website before submitting.');
    }
  };

  if (!displayCard || submitted) {
    return null; // Don't render the card if displayCard is false or already submitted
  }

  return (
    <div className="message-card">
      <h2 className='rew'>Review My  PortFolio</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-name"
      />
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star rated' : 'star'}
            onClick={() => rateWebsite(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={submitReview}>Send</button>
    </div>
  );
};

export default Review;
