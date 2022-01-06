import React, { useContext } from "react";
import GithubFinderContext from "../ContextGithubFinder/ContextProvider";
import Spinner from "../layout/Spinner";

import UsersItems from "./UsersItems";

const UserResult = () => {
  const { users, loading } = useContext(GithubFinderContext);

  return (
    <div
      className="grid
      grid-cols-1
      gap-8
      xl:grid-cols-4
      lg:grid-cols-3
      md:grid-cols-3
      md:grid-cols-3"
    >
      {!loading ? (
        users.map((user) => <UsersItems user={user} key={user.id} />)
      ) : (
        <button class="btn btn-sm btn-outline btn-secondary loading">
          loading
        </button>
      )}
    </div>
  );
};

export default UserResult;
