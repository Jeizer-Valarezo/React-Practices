import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch data for user ${username}, please enter a GithubUsername in the path`);
      }

      const json = await response.json();
      setData(json);
      setError(null);
    } catch (error) {
      console.error(error);
      setData(null);
      setError(error.message || "Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUser };
}
