import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import Header from "@layouts/header";
import Home from "@pages/home";
import SignIn from "@pages/sign-in";
import User from "@pages/user";

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootOutlet />,
            errorElement: <div>error</div>,
            children: [
                {
                    path: '/',
                    element: <><Header /><Home /></> ,
                },
                {
                    path: '/sign-in',
                    element:<><Header /><SignIn /></>,
                },
                {
                    path: '/user',
                    element: <><Header /><User /></> ,
                },
            ]
        }
    ])
    return router
}

