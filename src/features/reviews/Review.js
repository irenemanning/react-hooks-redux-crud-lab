import React from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewSlice";
function Review({ review }) {
  const dispatch = useDispatch()
  function handleDelete() {
    dispatch(reviewRemoved(review.id))
  }
  return (
    <li>
      {review.comment}
      <button onClick={handleDelete}> Delete Review </button>
    </li>
  );
}

export default Review;
