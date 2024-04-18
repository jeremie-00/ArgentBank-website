import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkAuthorization } from "../redux/actions/checkAutorization";
import { setToken } from "../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(checkAuthorization({ email, password }))
      .then((response) => {
        dispatch(setToken( response.payload.body.token ))
        navigate("/user")
      })
      .catch((error) => {
        console.error("Erreur lors de l'autorisation :", error.message)
      })
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          
        </form>
      </section>
    </main>
  );
}
