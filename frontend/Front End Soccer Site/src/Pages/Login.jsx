import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/waiting");
  };

  return (
    <div className="login-page">
      {/* right-side pale ellipse */}
      <div className="bg-ellipse" aria-hidden="true" />

      <form className="login-card" onSubmit={onSubmit}>
        <div className="brand-row">
          <div className="logo-circle">⚽</div>
          <h1 className="login-title">
            <span>Fantasy</span>
            <span>Soccer</span>
          </h1>
        </div>

        <div className="field">
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User"
            aria-label="Username"
            autoComplete="username"
            required
            autoFocus
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>

        <div className="field">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="Password"
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Log In</button>  
      </form>
    </div>
  );
}

export default Login;
