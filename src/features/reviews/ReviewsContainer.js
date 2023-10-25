import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";

function ReviewsContainer({restaurant}) {
  const reviews = useSelector((state) => state.reviews.entities)
  return (
    <div>
      <ReviewInput restaurant={restaurant} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
