import { useEffect, useState } from "react"
import "../Styles/GithubUser.scss"

export function GithubUser({username}) {
    const [data, setData] = useState(null)
    

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then (json => {
            console.log(json)

            setData(json)
        })
    }, [username])
  return (
    <div>
        <h1>GithubUser</h1>
        {data && <h2>Nombre: {data.name}</h2>}
        {data && <h2>Login: {data.login}</h2>}
        {data && <h2>Avatar: <img className="avatar" src={data.avatar_url} alt={`${data.login}'s avatar`} /></h2>}
        </div>
  )
}
