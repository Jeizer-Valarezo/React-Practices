import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
      <Outlet />
      <h2>Github User List</h2>
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
