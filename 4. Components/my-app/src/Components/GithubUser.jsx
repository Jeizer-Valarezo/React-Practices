import { useState } from "react";
import { useGithubUser } from "./useGithubUser";
import "../Styles/GithubUser.scss";
import { useParams } from "react-router-dom";

export function GithubUser() {
  const { username } = useParams()
  const { data, loading, error, fetchUser } = useGithubUser();

  const handleFetchUser = () => {
    if (username.trim() !== "") {
      fetchUser(username);
    }
  };

  return (
    <div>
      <h1>GithubUser</h1>
      
      <button onClick={handleFetchUser}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
          <h2>Nombre: {data.name}</h2>
          <h2>Login: {data.login}</h2>
          <h2>Avatar: <img className="avatar" src={data.avatar_url} alt={`${data.login}'s avatar`} /></h2>
        </>
      )}
    </div>
  );
}
