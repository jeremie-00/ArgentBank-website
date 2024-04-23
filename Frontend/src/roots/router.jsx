import { createBrowserRouter, Navigate } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import Home from "@pages/home";
import SignIn from "@pages/sign-in";
import User from "@pages/user";
import PageError from '../error';

import { useSelector } from 'react-redux';

export default function Router() { 

    const { isLoggedIn } = useSelector((state) => state.user)
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootOutlet />,
            errorElement: <PageError />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/sign-in',
                    element: <SignIn />,
                },
                {
                    path: '/user',
                    element: isLoggedIn ? <User /> : <Navigate to='/sign-in' />,
                },
            ]
        }
    ])
    return router
}

