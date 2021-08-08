import React from 'react'
import { useParams } from "react-router-dom";

function MovieShow({movies}) {

  // Here we add `match` to the arguments so we can access the path information
// in `routerProps` that is passed from MoviesPage.js
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /movies/:movieId path
  const params = useParams();
  console.log(params);
  return (
    <div>
       <h3>{movies[params.movieId].title}</h3>
    </div>
  )
}

export default MovieShow
