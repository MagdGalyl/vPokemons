const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return [...state, payload];

    case "RMV_FAV":
      return state.filter((st) => st.id !== payload);

    case "RMV_ALL_FAV":
      return [];

    case "TGL_FAV":
      return state.filter((st) => {
        return st.id === payload ? true : false;
      });

    default:
      return state;
  }
};
