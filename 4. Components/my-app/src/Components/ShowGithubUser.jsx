import React from "react";
import { GithubUser } from "./GithubUser";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const {username} = useParams()
  return (
    <div>
      <h1>ShowGithubUser</h1>
      <GithubUser username={username} />
    </div>
  );
}