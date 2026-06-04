function Login() {
  return (
    <div className="container">
      <div className="login-card">
        <h1>Login</h1>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Type your username"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Type your password"
          />
        </div>

        <div className="forgot">
          <a href="#">Forgot password?</a>
        </div>

        <button className="login-btn">
          LOGIN
        </button>

        <p className="social-text">
          Or Sign Up Using
        </p>

        <div className="social-icons">
          <button>F</button>
          <button>T</button>
          <button>G</button>
        </div>

        <div className="signup-section">
          <p>Or Sign Up Using</p>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default Login;