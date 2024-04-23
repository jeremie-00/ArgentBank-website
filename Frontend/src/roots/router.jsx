import { createBrowserRouter } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import Home from "@pages/home";
import SignIn from "@pages/sign-in";
import User from "@pages/user";
import PageError from '../error';


export default function Router() {
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
                    element: <User />,
                },
            ]
        }
    ])
    return router
}

