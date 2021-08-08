import React from "react";
import { Route,useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const {path,url} = useRouteMatch();
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
