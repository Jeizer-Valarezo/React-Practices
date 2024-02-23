import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    async (url) => {
      if (!username) {
        return null;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data for user ${username}, please enter a GithubUsername in the path`);
      }

      const json = await response.json();
      return json;
    }
  );

  const fetchUser = (newUsername) => {
    mutate(newUsername ? `https://api.github.com/users/${newUsername}` : null);
  };

  return {
    data,
    loading: !data && !error,
    error,
    fetchUser,
  };
}
