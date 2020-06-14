import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { parse, stringify } from "query-string";
import PropTypes from "prop-types";

function Pagination(props) {
  /* For proptypes please refer bottom of component*/
  const [activeIndex, setActiveIndex] = useState(1);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (parse(location.search).page) {
      setActiveIndex(parse(location.search).page);
    }
  }, []);

  function handleClick(page) {
    const query = parse(location.search);
    query.page = page;
    history.push(history.location.pathname + "?" + stringify(query));
    props.getMovies(page);
    window.scrollTo(0, 0);
    setActiveIndex(page);
  }

  let totalButtons;
  let buttonArray = [];

  const totalResults = parseInt(props.totalResults);
  if (totalResults % 10 === 0) {
    totalButtons = totalResults / 10;
  } else {
    totalButtons = totalResults / 10 + 1;
  }

  for (let i = 1; i <= totalButtons; i++) {
    buttonArray.push(i);
  }

  return (
    <ul className="pagination">
      {buttonArray.map((item) => {
        return (
          <li className={item === parseInt(activeIndex) ? "active" : ""}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;

Pagination.propTypes = {
  totalResults: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired,
};
