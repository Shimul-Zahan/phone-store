import { Root } from "postcss";
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import PhoneDetails from "../PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/phone/:id',
                element: <PhoneDetails />,
                loader: ()=> fetch('/phones.json')
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    }
])

export default router