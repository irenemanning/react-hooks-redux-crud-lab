import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch()
  function handleDelete() {
    dispatch(restaurantRemoved(restaurant.id))
  }
  return (
    <li>
      {restaurant.name}
      <button onClick={handleDelete} >Delete Restaurant</button>
      <ReviewsContainer restaurant={restaurant} />
    </li>
  );
}

export default Restaurant;
