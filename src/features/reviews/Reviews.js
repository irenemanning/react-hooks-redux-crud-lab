import React from "react";
import Review from "./Review";

function Reviews({reviews}) {
  return (
    <div>
      <ul>
        {reviews.map((r) => (<Review key={r.id} review={r} />))}
      </ul>
    </div>
  )
}

export default Reviews;
