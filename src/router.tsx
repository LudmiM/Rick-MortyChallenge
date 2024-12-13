import { createBrowserRouter } from "react-router"
import Home from "./view/Home"
import Layout from "./layouts/layout"

export const router = createBrowserRouter([ {
    path: '/', element: <Layout />, children: [
      { path: '/', index: true, element: <Home /> },
    ],
  },])