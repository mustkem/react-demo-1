import httpInstance from "../../helpers/http-client";
import { actionTypes } from "../action-types/action-types";

export const onGetProducts = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload: data,
  };
};

/* action returns a promise: We can use .then callback while calling this action.*/

export const getProducts = (page) => (dispatch) => {
  return new Promise((res, rej) => {
    dispatch(onGetProducts({ loading: true }));
    httpInstance({
      method: "get",
      url: "/?s=x men&y=2000&apikey=f82e2f54",
    })
      .then(function (response) {
        dispatch(onGetProducts({ ...response.data, loading: false }));

        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej();
      });
  });
};

export const onGetProduct = (payload) => {
  return {
    type: actionTypes.GET_PRODUCT,
    payload,
  };
};

export const getProduct = (id) => (dispatch) => {
  return new Promise((res, rej) => {
    dispatch(onGetProduct({ loading: true }));
    httpInstance({
      method: "get",
      url: `/?i=${id}&plot=full&apikey=f82e2f54`,
    })
      .then(function (response) {
        dispatch(onGetProduct({ ...response.data, loading: false }));
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej();
      });
  });
};
