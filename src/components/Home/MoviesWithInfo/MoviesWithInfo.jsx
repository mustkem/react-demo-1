import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

import Pagination from "../../../Shared/Pagination";

function MoviesWithInfo(props) {
  const [descModal, setDescModal] = useState();
  const location = useLocation();

  useEffect(() => {
    props.getMovies(parse(location.search).page);
  }, []);

  function movieDetailsHandler(item) {
    props.getMovie(item.imdbID);
    setDescModal(true);
  }

  return (
    <div>
      <ul className="products">
        {props.movies &&
          props.movies.map((item) => {
            return (
              <Movie
                key={item.imdbID}
                item={item}
                movieDetailsHandler={movieDetailsHandler}
              />
            );
          })}
      </ul>
      {props.totalResults && (
        <Pagination
          getMovies={props.getMovies}
          totalResults={props.totalResults}
        />
      )}

      <Modal show={descModal} onHide={() => setDescModal(!descModal)}>
        <Modal.Header>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        {props.movie && (
          <Modal.Body>
            <span>{props.movie.Title}</span>
            <span>{props.movie.Year}</span>
            {props.movie.imdbRating && props.movie.imdbRating !== "N/A" && (
              <strong>
                boxoffice: {parseFloat(props.movie.imdbRating) > 7 && "hit"}
                {parseFloat(props.movie.imdbRating) <= 7 && "flop"}
              </strong>
            )}

            <p>{props.movie.Plot}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDescModal(!descModal)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MoviesWithInfo;
