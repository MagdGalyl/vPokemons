import _ from "lodash";
import {
  ADD_FAVORITE,
  RMV_FAVORITE,
  RMV_ALL_FAVORITES,
} from "../actions/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return { ...state, ...payload };

    case RMV_FAVORITE:
      return _.omit(state, payload);

    case RMV_ALL_FAVORITES:
      return {};

    // case "TGL_FAV":
    //   return state.filter((st) => {
    //     return st.id === payload ? true : false;
    //   });

    default:
      return state;
  }
};
