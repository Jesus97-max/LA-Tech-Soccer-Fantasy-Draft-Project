import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={(e) => e.preventDefault()}>
        <h1 className="login-title">Fantasy Soccer</h1>

        <div className="row">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="yourname"
          />
        </div>

        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <Link to="/waiting" className="login-link">
          <button type="button" className="login-btn">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
