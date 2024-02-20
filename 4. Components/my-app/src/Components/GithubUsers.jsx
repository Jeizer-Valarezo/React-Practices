import { useState } from "react";
import { GithubUser } from "./GithubUser"; 


export function GithubUsers() {
  const [searchUsername, setSearchUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
    fetch(`https://api.github.com/users/${searchUsername}`)
      .then((response) => response.json())
      .then((userData) => {
        setSearchResults([userData]);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setSearchResults([]);
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <label>
          Enter Github Username:
          <input
            type="text"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((userData) => (
            <li key={userData.login}>
              <GithubUser username={userData.login} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
