import {useForm} from "./useForm"

export function Form({ onLogin }) {
    const initialData = {
      username: "",
      password: "",
      remember: false,
    };
  
    const { data, handleInputChange, resetForm } = useForm(initialData);
  
    const handleLogin = (event) => {
      event.preventDefault();
      console.log("Username:", data.username);
      console.log("Password:", data.password);
      console.log("Remember:", data.remember);
      onLogin(data);
    };
  
    const isButtonDisabled = !data.username || !data.password;
  
    return (
      <form onSubmit={handleLogin}>
        <h1>Form Hook</h1>
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
              checked={data.remember}
              type="checkbox"
              onChange={handleInputChange}
            />
            Remember me
          </label>
        </div>
        <button type="submit" disabled={isButtonDisabled}>
          Login
        </button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    );
  }