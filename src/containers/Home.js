import { connect } from "react-redux";
import { path } from "ramda";

import Home from "../components/Home/Home";

import { getMovies, getMovie } from "../store/actions";

const mapStateToProps = (state) => {
  return {
    movies: path(["movies", "movies", "Search"], state),
    loading: path(["movies", "movies", "loading"], state),
    movie: path(["movies", "movie"], state),
    totalResults: path(["movies", "movies", "totalResults"], state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (page) => dispatch(getMovies(page)),
    getMovie: (id) => dispatch(getMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
