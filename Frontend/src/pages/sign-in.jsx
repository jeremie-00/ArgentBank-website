import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { fetchLoginToken } from "../redux/actions/fetchAPI";

export default function SignIn() {
    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn, isError, messageError } = useSelector((state) => state.user)

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchLoginToken({ email, password }))
    }

    useEffect(() => {
        if (isLoggedIn) {
          navigate('/user')
        }
      }, [isLoggedIn])
    

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
