import httpInstance from "../../helpers/http-client";
import { actionTypes } from "../action-types/action-types";
import config from "../../config";

export const onGetMovies = (data) => {
  return {
    type: actionTypes.GET_MOVIES,
    payload: data,
  };
};

/* action returns a promise: We can use .then callback while calling this action.*/

export const getMovies = (page) => (dispatch) => {
  if (!page) page = 1;
  return new Promise((res, rej) => {
    dispatch(onGetMovies({ loading: true }));
    httpInstance({
      method: "get",
      url: `/?s=man&y=2000&apikey=${config.apikey}&page=${page}`,
    })
      .then(function (response) {
        dispatch(onGetMovies({ ...response.data, loading: false }));

        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej();
      });
  });
};

export const onGetMovie = (payload) => {
  return {
    type: actionTypes.GET_MOVIE,
    payload,
  };
};

export const getMovie = (id) => (dispatch) => {
  return new Promise((res, rej) => {
    dispatch(onGetMovie({ loading: true }));
    httpInstance({
      method: "get",
      url: `/?i=${id}&plot=full&apikey=f82e2f54`,
    })
      .then(function (response) {
        dispatch(onGetMovie({ ...response.data, loading: false }));
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej();
      });
  });
};
