import pokemonsApi from "../apis/pokemonsApi";
import {
  FETCH_POKEMONS,
  ADD_FAVORITE,
  RMV_FAVORITE,
  RMV_ALL_FAVORITES,
} from "./types";

export const fetchPokemons = () => {
  return async (dispatch) => {
    const pokemonsList = await pokemonsApi.get();
    dispatch({
      type: FETCH_POKEMONS,
      payload: pokemonsList.data,
    });
  };
};

export const addFavorite = (poke2) => {
  return {
    type: ADD_FAVORITE,
    payload: poke2,
  };
};

export const rmvFavorite = (id) => {
  return {
    type: RMV_FAVORITE,
    payload: id,
  };
};

export const rmvAllFavorites = () => {
  return {
    type: RMV_ALL_FAVORITES,
  };
};

// export const tglFav = (id) => {
//   return {
//     type: TGL_FAV,
//     payload: id,
//   };
// };
