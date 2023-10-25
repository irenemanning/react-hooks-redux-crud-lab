import React, { useState } from "react";
import { restaurantAdded } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function RestaurantInput() {
  const [formInput, setFormInput] = useState("")
  const dispatch = useDispatch()

  function handleChange(e) {
    setFormInput(e.target.value);
    console.log("Input value:", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(restaurantAdded(formInput))
    setFormInput("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >Name</label>
        <input 
        type="text" 
        name="name"
        value={formInput}
        onChange={handleChange}/>
        <button type="submit" >Add Restaurant</button>
      </form>
    </div>
  )
}

export default RestaurantInput;
