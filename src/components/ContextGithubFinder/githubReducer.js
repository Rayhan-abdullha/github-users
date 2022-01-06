const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
