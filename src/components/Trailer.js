import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from "react-router-dom";

function Trailer({ movies}) {
    const params=useParams();
    console.log(params)
    const movie=movies.filter((el) => el.id == params.id)[0];
  return (
    <div >
        <img src={movie.posterurl} />
        <h1>{movie.name}</h1>
        <h1>{movie.description}</h1>
        <ReactStars edit={false}
         value={movie.rating}
    count={5}
    size={24}
    activeColor="#ffd700"
  />
    </div>
);
  
}

export default Trailer;