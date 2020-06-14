import React from "react";

function Movie({ item, movieDetailsHandler, isPosterVisible }) {
  return (
    <li>
      <div className="item-card">
        {isPosterVisible && <img alt={item.Title} src={item.Poster} />}
        <span>Title: {item.Title}</span>
        {!isPosterVisible && (
          <>
            <span>Type: {item.Type}</span>
            <button onClick={() => movieDetailsHandler(item)}>
              View Details
            </button>
          </>
        )}
        <span>Year: {item.Year}</span>
      </div>
    </li>
  );
}

export default Movie;
