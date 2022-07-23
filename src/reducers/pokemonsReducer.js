import { FETCH_POKEMONS } from "../actions/types";

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
