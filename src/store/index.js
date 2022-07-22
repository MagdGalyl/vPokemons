import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// eslint-disable-next-line no-unused-vars
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  reducers,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveToLocalStorage({
    // FIX
    // fav: store.getState().fav,
    favorites: store.getState().favorites,
  });
});

export default store;
