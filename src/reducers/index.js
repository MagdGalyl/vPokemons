import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  favorites: favoritesReducer,
});
