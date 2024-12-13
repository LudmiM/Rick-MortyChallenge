import { createBrowserRouter } from "react-router"
import Home from "./view/Home"

export const router = createBrowserRouter([{
    path: '/', children: [
        { path: '/', index: true, element: <Home /> },
    ]
}])