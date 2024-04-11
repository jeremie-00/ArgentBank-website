import { createBrowserRouter, defer } from 'react-router-dom';

import RootOutlet from "./rootOutlet";

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
                    element: <div>home</div>,
                },


            ]
        }
    ])
    return router
}

