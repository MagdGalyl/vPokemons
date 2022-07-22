import {
  FETCH_POKEMONS,
  // ADD_FAVORITE,
  // RMV_FAVORITE,
  // RMV_ALL_FAVORITES,
} from "../actions/types";
// import _ from "lodash";

const initialState = { pokemonsList: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMONS:
      return { ...state, pokemonsList: [...payload] };

    default:
      return state;
  }
};
