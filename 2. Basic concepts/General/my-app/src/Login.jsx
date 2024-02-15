import { useState } from "react";

export function Login({ onLogin }) {
  const initialData = {
    username: "",
    password: "",
    remember: false,
  }

  const [data, setData] = useState(initialData);

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Username:", data.username);
    console.log("Password:", data.password);
    console.log("Remember:", data.remember);
    onLogin(data);
  };

  const isButtonDisabled = !data.username || !data.password || !data.remember;

  const handleReset = () => {
    setData(initialData);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          name="username"
          value={data.username}
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          name="password"
          value={data.password}
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            name="remember"
            value={data.remember}
            type="checkbox"
            onChange={handleInputChange}
          />
          Remember me
        </label>
      </div>
      <button type="submit" disabled={isButtonDisabled}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
          Reset
        </button>
    </form>
  );
}
