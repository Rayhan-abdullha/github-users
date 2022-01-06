import React from "react";
import { createContext, useReducer } from "react/cjs/react.development";
import reducer from "./githubReducer";

const GithubFinderContext = createContext();
export const ContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Get single user
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const { items } = await response.json();
    dispatch({
      type: "GET_DATA",
      payload: items,
    });
  };
  // Clear search
  const clearSearch = () => dispatch({ type: "CLEAR_SEARCH" });
  // Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubFinderContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearSearch,
      }}
    >
      {children}
    </GithubFinderContext.Provider>
  );
};

export default GithubFinderContext;
