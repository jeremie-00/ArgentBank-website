import { createBrowserRouter } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
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

