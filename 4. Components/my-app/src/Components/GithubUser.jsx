import React, { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";
import "../Styles/GithubUser.scss";

export function GithubUser({ username }) {
  const { data, loading, error, fetchUser } = useGithubUser();

  useEffect(() => {
    if (username && username.trim() !== "") {
      fetchUser(username);
    }
  }, [username]);

  return (
    <div>
      <h1>GithubUser</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
          <h2>Nombre: {data.name}</h2>
          <h2>Login: {data.login}</h2>
          <h2>
            Avatar:{" "}
            <img
              className="avatar"
              src={data.avatar_url}
              alt={`${data.login}'s avatar`}
            />
          </h2>
        </>
      )}
    </div>
  );
}
