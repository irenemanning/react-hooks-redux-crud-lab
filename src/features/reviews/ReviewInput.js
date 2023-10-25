import React, { useState } from "react";
// import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewSlice";

function ReviewInput({restaurant}) {
  const [reviewInput, setReviewInput] = useState("")
  const dispatch = useDispatch()

  function handleChange(e) {
    setReviewInput(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded({restaurantId: restaurant.id, comment: reviewInput}))
    setReviewInput("")
  }

  return (
    <div>Review Input
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" >Comment</label>
        <textarea type="text" name="comment" value={reviewInput} onChange={handleChange}/>
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}

export default ReviewInput;
