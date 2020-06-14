import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import Movie from "../MoviesWithInfo/Movie";
import Pagination from "../../../Shared/Pagination";

function MoviesWithPoster(props) {
  const location = useLocation();

  useEffect(() => {
    props.getMovies(parse(location.search).page);
  }, []);

  return (
    <div>
      <ul className="products">
        {props.movies &&
          props.movies.map((item) => {
            return (
              <Movie key={item.imdbID} item={item} isPosterVisible={true} />
            );
          })}
      </ul>
      {props.totalResults && (
        <Pagination
          getMovies={props.getMovies}
          totalResults={props.totalResults}
        />
      )}
    </div>
  );
}

export default MoviesWithPoster;
