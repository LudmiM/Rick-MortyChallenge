import { createBrowserRouter } from "react-router"
import Home from "./view/Home"
import Header from "./layouts/header"

export const router = createBrowserRouter([{
    path: '/', element:<Header />, children: [
        { path: '/', index: true, element: <Home /> },
    ]
}])