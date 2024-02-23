import React, { useState, useEffect } from "react";
import { useGithubUser } from "./useGithubUser";
import { useParams } from "react-router-dom";
import "../Styles/GithubUser.scss";

export function GithubUser() {
  const { username: routeUsername } = useParams();
  const [newUsername, setNewUsername] = useState(routeUsername);
  const [inputValue, setInputValue] = useState(routeUsername);
  const { data, loading, error, fetchUser } = useGithubUser(newUsername);

  useEffect(() => {
    // Actualiza el estado local cuando cambia el valor de `username` en la URL
    setNewUsername(routeUsername);
    setInputValue(routeUsername);
  }, [routeUsername]);

  const handleInputChange = (e) => {
    // Guarda el valor del input en una variable
    setInputValue(e.target.value);
  };

  const handleFetchUser = () => {
    // Llama a setNewUsername con el valor guardado en la variable
    setNewUsername(inputValue);
    // Llama a fetchUser con el nuevo nombre de usuario
    fetchUser(inputValue);
  };

  return (
    <div>
      <h1>GithubUser</h1>

      <input
        type="text"
        placeholder="Enter new username"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleFetchUser}>Fetch User</button>

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
