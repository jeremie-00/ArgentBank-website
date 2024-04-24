import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { fetchLoginToken } from "../redux/actions/fetchAPI";
import Spinner from '@components/spinner';

export default function SignIn() {
    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoggedIn, isErrorAuth, messageErrorAuth, isLoadingAuth } = useSelector((state) => state.auth)

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchLoginToken({ email, password }))
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/user')
        }
    }, [isLoggedIn])

    const t = true

    return (

        <main className="main bg-dark">

            <section className="sign-in-content">

                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>



                <form onSubmit={handleSubmit}>
                    {isLoadingAuth ? (<Spinner sizeCategory="large" />) : (
                        <>
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
                        </>
                    )}
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                    {isErrorAuth ? (<div className="error">{messageErrorAuth}</div>) : (<></>)}
                </form>

            </section>

        </main>
    );
}
