import { actionTypes } from "../action-types/action-types";

const initialState = {};

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MOVIES: {
      return {
        ...state,
        movies: {
          ...state.movies,
          ...action.payload,
        },
      };
    }

    case actionTypes.GET_MOVIE: {
      return {
        ...state,
        movie: {
          ...action.payload,
        },
      };
    }
    default:
      return { ...state };
  }
}
