import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({restaurants}) {
  return (
    <div>
      <ul>Restaurants Component
      {restaurants.map((r) => (<Restaurant key={r.id} restaurant={r} />))}
    </ul>
    </div>
    
  )
}

export default Restaurants;
