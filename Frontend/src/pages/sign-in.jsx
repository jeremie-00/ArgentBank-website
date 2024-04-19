import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { checkAuthorization } from "../redux/actions/checkAutorization";
import { login } from "../redux/reducers/loginReducer";
import { setError, clearError } from "../redux/reducers/errorReducer";

export default function SignIn() {
    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(checkAuthorization({ email, password }))
            .then((response) => {
                const token = response.payload.body.token
                dispatch(login(token))
                dispatch(clearError())
                navigate("/user")
            })
            .catch((error) => {
                console.error("Erreur lors de l'autorisation :", error.message)
                dispatch(setError("Une erreur s'est produite"))
            })
    }
    const isError = useSelector((state) => state.error.isError)
    const messageError = useSelector((state) => state.error.message)

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
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                    {isError ? (<div className="error">{messageError}</div>) : (<></>)}
                </form>
            </section>
        </main>
    );
}
