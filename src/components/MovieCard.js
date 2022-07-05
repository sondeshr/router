import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <Link to={`/trailer/${movie.id}`} style={{textDecoration:"none" , color:"black"}}>
    <div> <Card style={{ width: "18rem", margin:"20px" , height:"600px"}}>
    <Card.Img variant="top" src={movie.posterurl} style={{minHeight:"220px",maxHeight:"220px"}} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
    </Card.Body>
  <ReactStars edit={false} value={movie.rating}
    count={5}
    size={24}
    activeColor="#ffd700"
  />
   </Card>
   </div>
 
   </Link>
 

  );
}

export default MovieCard;