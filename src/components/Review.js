import React, { useState } from "react";
function Review({ review }) {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    if (count + 1 < review.length) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }
  function handleDecrement() {
    if (count - 1 >= 0) {
      setCount(count - 1);
    } else {
      setCount(review.length - 1);
    }
  }
  function handleRandom() {
    let random = Math.floor(Math.random() * review.length);
    setCount(random);
  }
  return (
    <>
      <div className="review">
        <p className="author" author-id={`${review[count].id}`}>
          {review[count].name}
        </p>
        <p className="job">{review[count].job}</p>
        <p className="info">{review[count].text}</p>
        <img className="person-img" src={review[count].image} />
          <button className="prev-btn" onClick={handleDecrement}>
        previous
      </button>
      <button className="next-btn" onClick={handleIncrement}>
        next
      </button>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
      </div>
      
    </>
  );
}

export default Review;
