import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { AddUserMessage } from "./AddUserMessage";
import { ShowGithubUser } from "./ShowGithubUser";

export function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching GitHub users:", error));
  }, []);

  return (
    <div>
      
      <h2>Github User List</h2>
      <Routes>
        <Route index element={<AddUserMessage />} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
