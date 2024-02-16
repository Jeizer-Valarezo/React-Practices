export function UncontrolledLogin({ onLogin }) {
  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on" ? true : false;

    onLogin({ username, password, remember });
  };

  const handleReset = (event) => {
    event.preventDefault();

    event.target.reset();
  };

  return (
    <form onSubmit={handleLogin} onReset={handleReset}>
      <div>
        <input
          name="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <input
            name="remember"
            type="checkbox"
          />
          Remember me
        </label>
      </div>
      <div>
        <button type="submit">
          Login
        </button>
        <button type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}

