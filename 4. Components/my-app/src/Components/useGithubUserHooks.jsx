import { useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function useGithubUserInput() {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return { username, handleInputChange };
}

export function useGithubUserDetails(username) {
  const { data, loading, error, fetchUser } = useGithubUser();

  const handleFetchUser = async () => {
    try {
      const userData = await fetchUser(username);
      // userData ahora contiene la información del usuario actualizado
    } catch (error) {
      console.error(error);
    }
  };

  return { data, loading, error, handleFetchUser };
}
