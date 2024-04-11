import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";
import Home from "@pages/home"
import SignIn from "@pages/sign-in"

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootOutlet />,
            //affiche la page erreur si une erreur est capturée (url ou composent)
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
                    element: <div>users</div>,
                },
            ]
        }
    ])
    return router
}

