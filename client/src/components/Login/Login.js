import "./Login.css";
import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { username, password, logged, login } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === username && pwd === password) {
      login(true);
      setUser("");
      setPwd("");
    } else {
      setErrMsg("Login Failed");
    }
  };

  return (
    <div className="login">
      {logged ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/add">Start adding movies!</a>
          </p>
          <button
            className="button"
            onClick={() => {
              login(false);
              window.location.reload();
            }}
          >
            Logout
          </button>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="button">Sign In</button>
          </form>
          <p>
            Need an Account?
            <span className="line">
              <a href="/register">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
}
