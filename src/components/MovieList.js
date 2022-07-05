import React from "react";
import MovieAdd from "./MovieAdd";
import MovieCard from "./MovieCard";

function MovieList({ movies,setMovies, text ,rating}) {
  return (
    <div>
       <div 
       style={{ marginTop:"20px", display:"flex", justifyContent: "center"}}>
      <MovieAdd movies={movies} setMovies={setMovies}/>
      </div>
    <div className="container">
      {movies.filter((el)=>el.name.toUpperCase().startsWith(text.toUpperCase()) && el.rating>=rating).map((el) => <MovieCard movie={el} /> )
      }
    </div>
    </div>
  );
}

export default MovieList;