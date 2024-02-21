import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for user ${username}`);
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    fetchData();
  }, [username]);

  return data;
}
